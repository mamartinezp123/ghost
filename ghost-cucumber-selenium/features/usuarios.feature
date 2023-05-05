Feature: Usuarios
  Funcionalidades regenrar token, cambiar contrasena y cerrar sesion del modulo usuarios

  Scenario: Cerrar sesion de usuario
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion desconectar
    And va a la pagina de publicaciones
    Then el usuario ya no esta autenticado

  Scenario: Regenerar token de usuario
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And hace click en el boton regenerar
    And hace click en el boton regenerar tu token personal del mensaje de confirmacion
    Then se genera un nuevo token

  Scenario: Modificar contraseña de usuario con contraseña vieja incorrecta
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "error" "nueva" y "nueva" el formulario actualizar contrasena
    And hace click en el boton cambiar contrasena
    Then se indica al usuario que la contraseña es incorrecta

  Scenario: Modificar contraseña de usuario con verificacion de contraseña incorrecta
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "" "nueva" y "error" el formulario actualizar contrasena
    And hace click en el boton cambiar contrasena
    Then se indica al usuario que la verificacion de la contraseña es incorrecta

  Scenario: Modificar contraseña de usuario con contrasena insegura
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "" "1234567890" y "1234567890" el formulario actualizar contrasena
    And hace click en el boton cambiar contrasena
    Then se indica al usuario que la contraseña es insegura

  Scenario: Modificar contrasena de usuario
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "" "nueva" y "nueva" el formulario actualizar contrasena
    And hace click en el boton cambiar contrasena
    And refresca la pagina
    And hace click en el menu de usuario nuevamente
    And hace click en la opcion desconectar
    And el usuario se autentica con "nueva"
    And hace click en el menu de usuario nuevamente
    And hace click en la opcion tu perfil
    And diligencia con "nueva" "" y "" el formulario actualizar contrasena
    And hace click en el boton cambiar contrasena
    And refresca la pagina
    And hace click en el menu de usuario nuevamente
    And hace click en la opcion desconectar
    And el usuario se autentica con ""
    Then el usuario accede a la aplicacion luego de modificar contrasena
