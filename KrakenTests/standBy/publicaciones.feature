Feature: Escenarios publicacion

  @user1 @web
  Scenario: Crear publicacion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link publicaciones
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Crear publicacion" y "Esta es la prueba de crear un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de publicaciones
    And I wait for 3 seconds
    Then el elemento "Crear publicacion" "2" "5" esta en la lista y tiene estado publicado

  @user2 @web
  Scenario: Eliminar publicacion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link publicaciones
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Eliminar publicacion" y "Esta es la prueba de eliminar un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de publicaciones
    And I wait for 3 seconds
    And hace click en el elemento "Eliminar publicacion" "2"
    And I wait for 3 seconds
    And hace click en ajustes
    And I wait for 3 seconds
    And hace click en el boton eliminar
    And I wait for 3 seconds
    And hace click en el boton eliminar del mensaje de confirmacion
    And I wait for 3 seconds
    Then el elemento "Eliminar publicacion" "2" no esta en la lista

  @user3 @web
  Scenario: Modificar publicacion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link publicaciones
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Modificar publicacion" y "Esta es la prueba de modificar un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de publicaciones
    And I wait for 3 seconds
    And hace click en el elemento "Modificar publicacion" "2"
    And I wait for 3 seconds
    And diligencia con "Modificar publicacion actualizada" y "" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de publicaciones
    And I wait for 3 seconds
    Then el elemento "Modificar publicacion actualizada" "2" "5" esta en la lista y tiene estado publicado

  @user4 @web
  Scenario: Modificar publicacion con titulo de 285 caracteres
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link publicaciones
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Modificar publicacion titulo largo" y "Esta es la prueba de modificar un publicacion en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de publicaciones
    And I wait for 3 seconds
    And hace click en el elemento "Modificar publicacion titulo largo" "2"
    And I wait for 3 seconds
    And diligencia con "Modificar publicacion titulo largo modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion modificar publicacion" y "" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    Then se indica al usuario que el titulo es muy largo

  @user5 @web
  Scenario: Eliminar borrador publicacion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link publicaciones
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Eliminar borrador publicacion" y "Esta es la prueba de eliminar el borrador de un publicacion en Ghost" el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de publicaciones
    And I wait for 3 seconds
    And hace click en el elemento "Eliminar borrador publicacion" "2"
    And I wait for 3 seconds
    And hace click en ajustes
    And I wait for 3 seconds
    And hace click en el boton eliminar
    And I wait for 3 seconds
    And hace click en el boton eliminar del mensaje de confirmacion
    And I wait for 3 seconds
    Then el elemento "Eliminar borrador publicacion" "2" no esta en la lista