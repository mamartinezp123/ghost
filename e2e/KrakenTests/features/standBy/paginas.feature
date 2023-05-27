Feature: Escenarios paginas

  @user6 @web
  Scenario: Crear pagina
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link paginas
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Crear pagina" y "Esta es la prueba de crear una pagina en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de paginas
    And I wait for 3 seconds
    Then el elemento "Crear pagina" "2" "3" esta en la lista y tiene estado publicado

  @user7 @web
  Scenario: Eliminar pagina
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link paginas
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Eliminar pagina" y "Esta es la prueba de eliminar una pagina en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de paginas
    And I wait for 3 seconds
    And hace click en el elemento "Eliminar pagina" "2"
    And I wait for 3 seconds
    And hace click en ajustes
    And I wait for 3 seconds
    And hace click en el boton eliminar
    And I wait for 3 seconds
    And hace click en el boton eliminar del mensaje de confirmacion
    And I wait for 3 seconds
    Then el elemento "Eliminar pagina" "2" no esta en la lista

  @user8 @web
  Scenario: Modificar pagina
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link paginas
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Modificar pagina" y "Esta es la prueba de modificar una pagina en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de paginas
    And I wait for 3 seconds
    And hace click en el elemento "Modificar pagina" "2"
    And I wait for 3 seconds
    And diligencia con "Modificar pagina actualizado" y "" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de paginas
    And I wait for 3 seconds
    Then el elemento "Modificar pagina actualizado" "2" "3" esta en la lista y tiene estado publicado

  @user9 @web
  Scenario: Modificar pagina con titulo de 285 caracteres
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link paginas
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Modificar pagina titulo largo" y "Esta es la prueba de modificar una pagina en Ghost" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de paginas
    And I wait for 3 seconds
    And hace click en el elemento "Modificar pagina titulo largo" "2"
    And I wait for 3 seconds
    And diligencia con "Modificar pagina titulo largo modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pag" y "" y envia el formulario crear - modificar elemento
    And I wait for 3 seconds
    Then se indica al usuario que el titulo es muy largo

  @user10 @web
  Scenario: Eliminar borrador pagina
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link paginas
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Eliminar borrador pagina" y "Esta es la prueba de eliminar el borrador de una pagina en Ghost" el formulario crear - modificar elemento
    And I wait for 3 seconds
    And va a la pagina de paginas
    And I wait for 3 seconds
    And hace click en el elemento "Eliminar borrador pagina" "2"
    And I wait for 3 seconds
    And hace click en ajustes
    And I wait for 3 seconds
    And hace click en el boton eliminar
    And I wait for 3 seconds
    And hace click en el boton eliminar del mensaje de confirmacion
    And I wait for 3 seconds
    Then el elemento "Eliminar borrador pagina" "2" no esta en la lista