Feature: Escenarios paginas

  @user6 @web
  Scenario: Modificar contraseña de usuario con contrasena insegura
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion desconectar
    And I wait for 3 seconds
    Then el usuario ya no esta autenticado