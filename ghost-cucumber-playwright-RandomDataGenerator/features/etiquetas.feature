Feature: Etiquetas
  Funcionalidades crear, listar, modificar y eliminar del modulo etiquetas

 Scenario: Crear etiqueta con nombre con 191 caracteres
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con titulo de 191 caracteres y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    Then la etiqueta esta en la lista

Scenario: Crear etiqueta con nombre con 190 caracteres
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con titulo de 190 caracteres y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    Then la etiqueta esta en la lista

  Scenario: Crear etiqueta con nombre con 192 caracteres
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con titulo de 192 caracteres y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And se indica al usuario que el nombre es muy largo

    Scenario: Intentar crear un tag con un titulo mayor a 191 caracteres, esperar a que salga dialogo de error. Borrar titulo e introducir titulo con menos de 191 caracteres. 
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con titulo de 200 caracteres y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And se indica al usuario que el nombre es muy largo
    And borro contenido del texto del nombre
    And diligencia con titulo de 100 caracteres y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    Then el boton save ya no existe