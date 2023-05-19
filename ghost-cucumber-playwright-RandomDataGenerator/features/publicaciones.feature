Feature: Publicaciones
    Funcionalidades crear, listar, modificar y eliminar del modulo publicaciones

  Scenario: Crear post con titulo mayor a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con titulo de "260" y cuerpo de "12" y envia el formulario crear - modificar elemento
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el elemento "Crear publicacion" esta en la lista y tiene estado publicado
