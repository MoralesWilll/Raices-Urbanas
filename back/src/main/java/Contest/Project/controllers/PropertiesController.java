package Contest.Project.controllers;

import Contest.Project.dtos.PropertyDTO;
import Contest.Project.dtos.PropertyFilterDTO;
import Contest.Project.dtos.PropertyResponseDTO;
import Contest.Project.entities.Property;
import Contest.Project.services.PropertiesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/RaicesUrbanas/properties")
public class PropertiesController {

    @Autowired
    private PropertiesService propertiesService;

    @Operation(summary = "Crear una nueva propiedad", description = "Este endpoint permite crear una nueva propiedad en la base de datos.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Propiedad creada exitosamente",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = PropertyDTO.class))),
            @ApiResponse(responseCode = "400", description = "Solicitud inválida, errores en los datos de entrada.")
    })
    @PostMapping("/create")
    public ResponseEntity<?> create(
            @Parameter(description = "Detalles de la propiedad a crear.", required = true)
            @Valid @RequestBody PropertyDTO requestDTO) {
        try {
            Property createdProperty = propertiesService.create(requestDTO);
            return new ResponseEntity<>(propertiesService.createResponse(createdProperty), HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Eliminar una propiedad", description = "Este endpoint permite eliminar una propiedad existente según su ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Propiedad eliminada exitosamente"),
            @ApiResponse(responseCode = "404", description = "Propiedad no encontrada")
    })
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(
            @Parameter(description = "ID de la propiedad a eliminar.", required = true)
            @PathVariable Integer id) {
        propertiesService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Obtener todas las propiedades", description = "Este endpoint devuelve una lista de todas las propiedades almacenadas.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista de propiedades devuelta exitosamente")
    })
    @GetMapping("/readAll")
    public ResponseEntity<List<PropertyDTO>> readAll() {
        List<PropertyDTO> propertyResponse = propertiesService.readAll();
        return ResponseEntity.ok(propertyResponse);
    }

    @Operation(summary = "Obtener propiedad por ID", description = "Este endpoint devuelve los detalles de una propiedad según su ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Propiedad devuelta exitosamente",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PropertyDTO.class))),
            @ApiResponse(responseCode = "404", description = "Propiedad no encontrada")
    })
    @GetMapping("/{id}")
    public ResponseEntity<PropertyDTO> readById(
            @Parameter(description = "ID de la propiedad a buscar.", required = true)
            @PathVariable Integer id) {
        PropertyDTO property = propertiesService.readById(id);
        return ResponseEntity.ok(property);
    }

    @Operation(summary = "Actualizar una propiedad", description = "Este endpoint permite actualizar los detalles de una propiedad existente.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Propiedad actualizada exitosamente",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PropertyDTO.class))),
            @ApiResponse(responseCode = "404", description = "Propiedad no encontrada")
    })
    @PutMapping("/update/{id}")
    public ResponseEntity<Property> update(
            @Parameter(description = "Detalles de la propiedad a actualizar.", required = true)
            @RequestBody PropertyDTO requestDTO,
            @Parameter(description = "ID de la propiedad a actualizar.", required = true)
            @PathVariable Integer id) {
        Property updatedProperty = propertiesService.update(requestDTO, id);
        return ResponseEntity.ok(updatedProperty);
    }

    @Operation(summary = "Filtrar propiedades", description = "Este endpoint permite filtrar propiedades según criterios específicos.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Propiedades filtradas devueltas exitosamente",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PropertyResponseDTO.class)))
    })
    @GetMapping("/filter")
    public ResponseEntity<List<PropertyResponseDTO>> filterProperties(
            @Parameter(description = "Filtros para aplicar en la búsqueda de propiedades.", required = false)
            PropertyFilterDTO filter) {
        List<PropertyResponseDTO> filteredProperties = propertiesService.filterProperties(filter);
        return ResponseEntity.ok(filteredProperties);
    }
}
