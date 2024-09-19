package Contest.Project.controllers;

import Contest.Project.dtos.UserDTO;
import Contest.Project.entities.User;
import Contest.Project.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;

@RestController
@RequestMapping("/RaicesUrbanas")
public class UserController {

    @Autowired
    private UserService userService;

    @Operation(summary = "Registrar un nuevo usuario", description = "Este endpoint permite registrar un nuevo usuario en la plataforma.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Usuario registrado exitosamente",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = User.class))),
            @ApiResponse(responseCode = "400", description = "Error en los datos proporcionados")
    })
    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Parameter(description = "Detalles del usuario a registrar.", required = true)
            @RequestBody UserDTO userDTO) {
        try {
            User newUser = userService.register(userDTO);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Autenticar usuario", description = "Este endpoint permite a un usuario iniciar sesión proporcionando su correo electrónico y contraseña.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Inicio de sesión exitoso",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = User.class))),
            @ApiResponse(responseCode = "401", description = "Credenciales inválidas")
    })
    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Parameter(description = "Correo electrónico del usuario.", required = true)
            @RequestParam String email,
            @Parameter(description = "Contraseña del usuario.", required = true)
            @RequestParam String password) {
        User user = userService.authenticate(email, password);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Correo electrónico o contraseña inválidos", HttpStatus.UNAUTHORIZED);
        }
    }

}