Feature: Etiquetas
  Funcionalidades crear, listar, modificar y eliminar del modulo etiquetas

  Scenario: Crear etiqueta
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con "Crear etiqueta" y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    Then la etiqueta "Crear etiqueta" esta en la lista

  Scenario: Eliminar etiqueta
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con "Eliminar etiqueta" y "Esta es la prueba de eliminar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    And hace click en la etiqueta "Eliminar etiqueta"
    And hace click en el boton eliminar etiqueta
    And hace click en el boton eliminar etiqueta del mensaje de confirmacion
    Then la etiqueta "Eliminar publicacion" no esta en la lista

  Scenario: Modificar etiqueta
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con "Modificar etiqueta" y "Esta es la prueba de Modificar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    And hace click en la etiqueta "Modificar etiqueta"
    And diligencia con "Modificar etiqueta actualizada" y "Esta es la prueba de Modificar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    Then la etiqueta "Modificar etiqueta actualizada" esta en la lista

  Scenario: Modificar etiqueta con titulo de 285 caracteres
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nuevo
    And diligencia con "Modificar etiqueta" y "Esta es la prueba de Modificar una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    And hace click en la etiqueta "Modificar etiqueta"
    And diligencia con "Modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta modificar etiqueta" y "" y envia el formulario crear - modificar etiqueta
    Then se indica al usuario que el nombre es muy largo