Feature: Usuarios
  Funcionalidades regenrar token, cambiar contrasena y cerrar sesion del modulo usuarios
  
  @user1 @web
  Scenario: Cerrar sesion de usuario
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion desconectar
    And I wait for 3 seconds
    Then el usuario ya no esta autenticado

  @user2 @web
  Scenario: Regenerar token de usuario
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion tu perfil
    And I wait for 3 seconds
    And hace click en el boton regenerar
    And I wait for 3 seconds
    And hace click en el boton regenerar tu token personal del mensaje de confirmacion
    And I wait for 3 seconds
    Then se genera un nuevo token

  @user3 @web
  Scenario: Modificar contraseña de usuario con contraseña vieja incorrecta
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion tu perfil
    And I wait for 3 seconds
    And diligencia con "error" "nueva" y "nueva" el formulario actualizar contrasena
    And I wait for 3 seconds
    Then se indica al usuario que la contraseña es incorrecta

  @user4 @web
  Scenario: Modificar contraseña de usuario con verificacion de contraseña incorrecta
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion tu perfil
    And I wait for 3 seconds
    And diligencia con "" "nueva" y "error" el formulario actualizar contrasena
    And I wait for 3 seconds
    Then se indica al usuario que la verificacion de la contraseña es incorrecta

  @user5 @web
  Scenario: Modificar contraseña de usuario con contrasena insegura
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    And un usuario autenticado
    And I wait for 3 seconds
    When hace click en el menu de usuario
    And I wait for 3 seconds
    And hace click en la opcion tu perfil
    And I wait for 3 seconds
    And diligencia con "" "1234567890" y "1234567890" el formulario actualizar contrasena
    And I wait for 3 seconds
    Then se indica al usuario que la contraseña es insegura

  @user6 @web
  Scenario: Modificar contraseña de usuario con contrasena vacia
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
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
