Feature: Publicaciones
    Funcionalidades crear, listar, modificar y eliminar del modulo publicaciones




Scenario: Crear un draft con un titulo igual a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And crea un draft con titulo de "255" y contenido de "30"
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el draft de 255 caracteres esta en la lista y tiene estado publicado
