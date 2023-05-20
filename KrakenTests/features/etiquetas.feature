Feature: Etiquetas
  Funcionalidades crear, listar, modificar y eliminar del modulo etiquetas

  @user1 @web
  Scenario: Crear etiqueta
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    When Guardo Pantallazo del paso con nombre de archivo "etiquetasFeatures\crearEtiqueta1"
    And I wait for 3 seconds
    When hace click en el link etiquetas
    When Guardo Pantallazo del paso con nombre de archivo "etiquetasFeatures\crearEtiqueta2"
    And I wait for 3 seconds
    And hace click en el boton nueva etiqueta
    When Guardo Pantallazo del paso con nombre de archivo "etiquetasFeatures\crearEtiqueta3"
    And I wait for 3 seconds
    And diligencia con "Crear etiqueta" y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    When Guardo Pantallazo del paso con nombre de archivo "etiquetasFeatures\crearEtiqueta4"
    And I wait for 3 seconds
    And va a la pagina de etiquetas
    When Guardo Pantallazo del paso con nombre de archivo "etiquetasFeatures\crearEtiqueta5"
    And I wait for 3 seconds
    Then la etiqueta "Crear etiqueta" esta en la lista
    When Guardo Pantallazo del paso con nombre de archivo "etiquetasFeatures\crearEtiqueta6"

  @user2 @web
  Scenario: Eliminar etiqueta
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
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

  @user3 @web
  Scenario: Modificar etiqueta
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
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

  @user4 @web
  Scenario: Modificar etiqueta con titulo de 285 caracteres
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
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