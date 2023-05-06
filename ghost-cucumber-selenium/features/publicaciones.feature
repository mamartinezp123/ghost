Feature: Publicaciones
    Funcionalidades crear, listar, modificar y eliminar del modulo publicaciones

  Scenario: Crear publicacion
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Crear publicacion" y "Esta es la prueba de crear un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de publicaciones
    Then el elemento "Crear publicacion" "2" "5" esta en la lista y tiene estado publicado

  Scenario: Eliminar publicacion
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Eliminar publicacion" y "Esta es la prueba de eliminar un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de publicaciones
    And hace click en el elemento "Eliminar publicacion" "2"
    And hace click en ajustes
    And hace click en el boton eliminar
    And hace click en el boton eliminar del mensaje de confirmacion
    Then el elemento "Eliminar publicacion" "2" no esta en la lista

  Scenario: Modificar publicacion
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Modificar publicacion" y "Esta es la prueba de modificar un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de publicaciones
    And hace click en el elemento "Modificar publicacion" "2"
    And diligencia con " actualizada" y "" y envia el formulario crear - modificar elemento
    And va a la pagina de publicaciones
    Then el elemento "Modificar publicacion actualizada" "2" "5" esta en la lista y tiene estado publicado

  Scenario: Modificar publicacion con titulo de 285 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Modificar publicacion" y "Esta es la prueba de modificar un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de publicaciones
    And hace click en el elemento "Modificar publicacion" "2"
    And diligencia con "  modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion" y "" y envia el formulario crear - modificar elemento
    Then se indica al usuario que el titulo es muy largo

  Scenario: Eliminar borrador publicacion
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Eliminar borrador publicacion" y "Esta es la prueba de eliminar el borrador de un publicacion en Ghost" el formulario crear - modificar elemento
    And va a la pagina de publicaciones
    And hace click en el elemento "Eliminar borrador publicacion" "2"
    And hace click en ajustes
    And hace click en el boton eliminar
    And hace click en el boton eliminar del mensaje de confirmacion
    Then el elemento "Eliminar borrador publicacion" "2" no esta en la lista