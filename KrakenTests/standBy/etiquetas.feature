Feature: Etiquetas
  Funcionalidades crear, listar, modificar y eliminar del modulo etiquetas

  Scenario: Crear etiqueta
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link etiquetas
    And I wait for 3 seconds
    And hace click en el boton nueva etiqueta
    And I wait for 3 seconds
    And diligencia con "Crear etiqueta" y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And I wait for 3 seconds
    And va a la pagina de etiquetas
    And I wait for 3 seconds
    Then la etiqueta "Crear etiqueta" esta en la lista

  Scenario: Eliminar etiqueta
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link etiquetas
    And I wait for 3 seconds
    And hace click en el boton nueva etiqueta
    And I wait for 3 seconds
    And diligencia con "Eliminar etiqueta" y "Esta es la prueba de eliminar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And I wait for 3 seconds
    And va a la pagina de etiquetas
    And I wait for 3 seconds
    And hace click en la etiqueta "Eliminar etiqueta"
    And I wait for 3 seconds
    And hace click en el boton eliminar etiqueta
    And I wait for 3 seconds
    And hace click en el boton eliminar etiqueta del mensaje de confirmacion
    And I wait for 3 seconds
    Then la etiqueta "Eliminar publicacion" no esta en la lista

  Scenario: Modificar etiqueta
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link etiquetas
    And I wait for 3 seconds
    And hace click en el boton nueva etiqueta
    And I wait for 3 seconds
    And diligencia con "Modificar etiqueta" y "Esta es la prueba de Modificar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And I wait for 3 seconds
    And va a la pagina de etiquetas
    And I wait for 3 seconds
    And hace click en la etiqueta "Modificar etiqueta"
    And I wait for 3 seconds
    And diligencia con "Modificar etiqueta actualizada" y "" y envia el formulario crear - modificar etiqueta
    And I wait for 3 seconds
    And va a la pagina de etiquetas
    And I wait for 3 seconds
    Then la etiqueta "Modificar etiqueta actualizada" esta en la lista

  Scenario: Modificar etiqueta con titulo de 285 caracteres
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el link etiquetas
    And I wait for 3 seconds
    And hace click en el boton nuevo
    And I wait for 3 seconds
    And diligencia con "Modificar etiqueta" y "Esta es la prueba de Modificar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And I wait for 3 seconds
    And va a la pagina de etiquetas
    And I wait for 3 seconds
    And hace click en la etiqueta "Modificar etiqueta"
    And I wait for 3 seconds
    And diligencia con "  modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta" y "" y envia el formulario crear - modificar etiqueta
    And I wait for 3 seconds
    Then se indica al usuario que el nombre es muy largo