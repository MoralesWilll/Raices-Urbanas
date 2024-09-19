package Contest.Project.controllers;

import Contest.Project.entities.Property;
import Contest.Project.entities.PropertyImages;
import Contest.Project.services.PropertyImagesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/RaicesUrbanas/pictures")
public class PropertyImagesController {

    @Autowired
    PropertyImagesService propertyImagesService;

    @Operation(summary = "Subir una imagen de propiedad", description = "Este endpoint permite subir una imagen asociada a una propiedad.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Imagen subida exitosamente",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PropertyImages.class))),
            @ApiResponse(responseCode = "500", description = "Error al procesar la solicitud")
    })
    @PostMapping("/upload")
    public ResponseEntity<?> SavePropertyImage(
            @Parameter(description = "Propiedad a la que se asocia la imagen.", required = true)
            @RequestBody Property property,
            @Parameter(description = "URL de la imagen.", required = true)
            @RequestBody String url) {
        try {
            PropertyImages newPropertyImages = propertyImagesService.save(url, property);
            return new ResponseEntity<>(newPropertyImages, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "Eliminar imagen de propiedad por ID", description = "Este endpoint permite eliminar una imagen de una propiedad mediante su ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Imagen eliminada exitosamente"),
            @ApiResponse(responseCode = "404", description = "Imagen no encontrada")
    })
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteById(
            @Parameter(description = "ID de la imagen a eliminar.", required = true)
            @PathVariable Integer id) {
        try {
            PropertyImages deletedImage = propertyImagesService.deleteById(id);
            return ResponseEntity.ok(deletedImage);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Imagen con ID " + id + " no existe.");
        }
    }
}