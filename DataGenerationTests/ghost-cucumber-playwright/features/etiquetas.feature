Feature: Etiquetas
  Funcionalidades crear, listar, modificar y eliminar del modulo etiquetas

  Scenario: Crear etiqueta con nombre con 191 caracteres
    Given un usuario autenticado
    When hace click en el link etiquetas
    And hace click en el boton nueva etiqueta
    And diligencia con titulo de 191 caracteres y "Esta es la prueba de crear una etiqueta en Ghost" y envia el formulario crear - modificar etiqueta
    And va a la pagina de etiquetas
    Then la etiqueta esta en la lista

  
