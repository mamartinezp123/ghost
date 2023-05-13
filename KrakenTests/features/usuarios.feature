Feature: Usuarios
  Funcionalidades regenrar token, cambiar contrasena y cerrar sesion del modulo usuarios
  

  @user6 @web
  Scenario: Modificar contraseña de usuario con contrasena vacia
    Given I navigate to page "http://localhost:3003/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion tu perfil
    And I wait for 3 seconds
    And diligencia con "" "" y "" el formulario actualizar contrasena
    And I wait for 3 seconds
    Then se indica al usuario que la contraseña no puede estar vacia