Feature: Escenarios paginas

  @user6 @web
  Scenario: Modificar contraseña de usuario con contrasena insegura
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    When Guardo Pantallazo del paso con nombre de archivo "EscenariosPaginas\signin"
    And un usuario autenticado
    When Guardo Pantallazo del paso con nombre de archivo "EscenariosPaginas\usuarioAutenticado"
    And I wait for 3 seconds
    When hace click en el menu de usuario
    When Guardo Pantallazo del paso con nombre de archivo "EscenariosPaginas\menuUsuario"
    And I wait for 3 seconds
    And hace click en la opcion desconectar
    When Guardo Pantallazo del paso con nombre de archivo "EscenariosPaginas\LogOut"
    And I wait for 3 seconds
    Then el usuario ya no esta autenticado
    When Guardo Pantallazo del paso con nombre de archivo "EscenariosPaginas\UsuarioNoAutenticado"