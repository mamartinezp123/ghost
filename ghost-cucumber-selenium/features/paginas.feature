Feature: Paginas
  Funcionalidades crear, listar, modificar y eliminar del modulo paginas

  Scenario: Crear pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "Crear pagina" y "Esta es la prueba de crear una pagina en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    Then la pagina "Crear pagina" esta en la lista y tiene estado publicado

  Scenario: Eliminar pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "Eliminar pagina" y "Esta es la prueba de eliminar una pagina en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "Eliminar pagina"
    And hace click en ajustes
    And hace click en el boton eliminar
    And hace click en el boton eliminar del mensaje de confirmacion
    Then el elemento "Eliminar pagina" no esta en la lista

  Scenario: Modificar pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "Modificar pagina" y "Esta es la prueba de modificar una pagina en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "Modificar pagina"
    And diligencia con " actualizado" y "" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    Then la pagina "Modificar pagina actualizado" esta en la lista y tiene estado publicado

  Scenario: Modificar pagina con titulo de 285 caracteres
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "Modificar pagina" y "Esta es la prueba de modificar una pagina en Ghost" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "Modificar pagina"
    And diligencia con " modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pag" y "" y envia el formulario crear - modificar elemento
    Then se indica al usuario que el titulo es muy largo

  Scenario: Eliminar borrador pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "Eliminar borrador pagina" y "Esta es la prueba de eliminar el borrador de una pagina en Ghost" el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "Eliminar borrador pagina"
    And hace click en ajustes
    And hace click en el boton eliminar
    And hace click en el boton eliminar del mensaje de confirmacion
    Then el elemento "Eliminar borrador pagina" no esta en la lista