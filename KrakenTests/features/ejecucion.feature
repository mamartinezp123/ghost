Feature: Escenarios paginas

  @user6 @web
<<<<<<< HEAD
  Scenario: Modificar etiqueta con titulo de 285 caracteres
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
=======
  Scenario: Modificar contraseña de usuario con contrasena insegura
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
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