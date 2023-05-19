Feature: Validacion de campos de actulizacion de datos de usuario y contraseña de usuario

  Scenario Outline: Modificar contraseña de usuario con contraseña vieja incorrecta
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que la contraseña es incorrecta
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      | error123456       | nueva123456      | nueva123456             |
      | esta_no_es123     | prueba123456     | prueba123456            |

  Scenario Outline: Modificar contraseña de usuario con verificacion de contraseña incorrecta
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que la verificacion de la contraseña es incorrecta
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      |                   | nueva123456      | no_nueva123456          |
      |                   | prueba123456     | no_prueba123456         |

  Scenario Outline: Modificar contraseña de usuario con todos los campos vacios
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      | null              | null             | null                    |

  Scenario Outline: Modificar contraseña de usuario con todos los campos incorrectos
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que la verificacion de la contraseña es incorrecta
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      | error 1           | error 2          | error 3                 |
      | actual            | nueva            | verificacion            |

  Scenario Outline: Modificar usuario con nombre completo de 190 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name                                                                                                                                                                                      | slug   | email                           | location | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Xylophone Corporation of Transcendental Innovations and Quantum Ventures: Advancing Technological Breakthroughs for a Brighter FutureInnovatech Solutions: Empowering Businesses Through Cutti | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con nombre completo de 191 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name                                                                                                                                                                                       | slug   | email                           | location | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Xylophone Corporation of Transcendental Innovations and Quantum Ventures: Advancing Technological Breakthroughs for a Brighter FutureInnovatech Solutions: Empowering Businesses Through Cuttin | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con nombre completo de 192 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name                                                                                                                                                                                        | slug   | email                           | location | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Xylophone Corporation of Transcendental Innovations and Quantum Ventures: Advancing Technological Breakthroughs for a Brighter FutureInnovatech Solutions: Empowering Businesses Through Cutting | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con nombre completo vacio
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name | slug   | email                           | location | website                        | facebook_profile              | twitter_profile          | bio                        |
      |           | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con correo electronico invalido
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email                                   | location | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Junior Tester Saenz | author | esto no es un correo electronico valido | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |
      | Junior Tester Saenz | author | text@text                               | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con correo electronico vacio
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email | location | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Junior Tester Saenz | author |       | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario sin perfil de facebook
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile | twitter_profile          | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test |                  | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario sin perfil de twitter
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile              | twitter_profile | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test |                 | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con todos los campos vacios
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name | slug | email | location | website | facebook_profile | twitter_profile | bio |
      |           |      |       |          |         |                  |                 |     |

  Scenario Outline: Modificar usuario con lugar de 149 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location                                                                                                                                              | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Esplendoroso Refugio de la Serenidad y la Armonía en el Corazón de la Naturaleza, Donde los Sueños se Tejen en Telares de Magia y la Paz Perdura Buen | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con lugar de 150 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location                                                                                                                                               | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Esplendoroso Refugio de la Serenidad y la Armonía en el Corazón de la Naturaleza, Donde los Sueños se Tejen en Telares de Magia y la Paz Perdura Buena | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con lugar de 151 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location                                                                                                                                                | website                        | facebook_profile              | twitter_profile          | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Esplendoroso Refugio de la Serenidad y la Armonía en el Corazón de la Naturaleza, Donde los Sueños se Tejen en Telares de Magia y la Paz Perdura Buenas | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/test | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con perfil de facebook igual a una url que no es de facebook
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>"
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile                         | twitter_profile            | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.no-es-facebook.com/mi-perfil | https://twitter.com/perfil | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con perfil de twitter igual a una url que no es de twitter
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>"
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile                | twitter_profile                        | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/perfil | https://no-es-twitter.com/error-perfil | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con biografia de 199 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile              | twitter_profile            | bio                                                                                                                                                                                                     |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/perfil | Exploradora incansable, en busca de conocimientos y aventuras apasionada por descubrir el mundo y compartir historias inspiradoras creyente en el poder del aprendizaje constante la superación persona |

  Scenario Outline: Modificar usuario con biografia de 200 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile              | twitter_profile            | bio                                                                                                                                                                                                      |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/perfil | Exploradora incansable, en busca de conocimientos y aventuras apasionada por descubrir el mundo y compartir historias inspiradoras creyente en el poder del aprendizaje constante la superación personal |

  Scenario Outline: Modificar usuario con biografia de 201 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                        | facebook_profile              | twitter_profile            | bio                                                                                                                                                                                                       |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test | https://www.facebook.com/test | https://twitter.com/perfil | Exploradora incansable, en busca de conocimientos y aventuras apasionada por descubrir el mundo y compartir historias inspiradoras creyente en el poder del aprendizaje constante la superación personal. |

  Scenario Outline: Modificar usuario con sitio web de 1999 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | facebook_profile              | twitter_profile            | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789 | https://www.facebook.com/test | https://twitter.com/perfil | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con sitio web de 2000 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que no hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | facebook_profile              | twitter_profile            | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 | https://www.facebook.com/test | https://twitter.com/perfil | Esta es mi corta biografia |

  Scenario Outline: Modificar usuario con sitio web de 2001 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<full_name>" "<slug>" "<email>" "<location>" "<website>" "<facebook_profile>" "<twitter_profile>" y "<bio>" y hace click en el boton guardar
    Then se indica al usuario que hay errores en el formulario
    Examples:
      | full_name           | slug   | email                           | location | website                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | facebook_profile              | twitter_profile            | bio                        |
      | Junior Tester Saenz | author | ma.martinezp123@uniandes.edu.co | Colombia | https://www.mywebsite.com/test123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901 | https://www.facebook.com/test | https://twitter.com/perfil | Esta es mi corta biografia |

  Scenario: Modificar usuario con perfil de facebook invalido
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con usuario dinamico facebook
    Then se indica al usuario que hay errores en el formulario

  Scenario: Modificar usuario con perfil de twitter invalido
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con usuario dinamico twitter
    Then se indica al usuario que hay errores en el formulario

  Scenario: Modificar usuario con website invalido
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con usuario dinamico website
    Then se indica al usuario que hay errores en el formulario

  Scenario Outline: Modificar contraseña usuario con contraseña vieja vacia
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      | null              | nueva            | nueva                   |

  Scenario Outline: Modificar contraseña usuario con nueva contraseña vacia
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que no hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      |                   | null             | nueva                   |

  Scenario Outline: Modificar contraseña usuario con nueva contraseña numeros consecutivos
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      |                   | 1234567890       | 1234567890              |

  Scenario Outline: Modificar contraseña usuario con nueva contraseña letras consecutivas
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      |                   | abcdefghij       | abcdefghij              |

  Scenario Outline: Modificar contraseña usuario con nueva contraseña de 9 caracteres
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      |                   | Nueva1234        | Nueva1234               |

  Scenario Outline: Modificar contraseña usuario con verificación contraseña vacia
    Given un usuario autenticado
    When hace click en el menu de usuario
    And hace click en la opcion tu perfil
    And diligencia con "<contraseña_actual>" "<nueva_contraseña>" y "<verificación_contraseña>" y hace click en el boton cambiar contraseña
    Then se indica al usuario que hay errores en el formulario de actualizar la contraseña
    Examples:
      | contraseña_actual | nueva_contraseña | verificación_contraseña |
      |                   | Nueva12345       | null                    |

  Scenario: Recuperar contraseña con correo electronico inexistente
    Given un usuario con correo electronico aleatorio
    When hace click para recuperar contraseña
    Then se indica al usuario que hay errores en el formulario de autenticacion

  Scenario Outline: Autenticar usuario con contraseña vacia
    Given un usuario con "<correo_electronico>" y "<contraseña>"
    When hace click para autenticarse
    Then se indica al usuario que hay errores en el formulario de autenticacion
    Examples:
      | correo_electronico              | contraseña |
      | ma.martinezp123@uniandes.edu.co |            |

  Scenario: Autenticar usuario con todos los campos incorrectos
    Given un usuario con correo electronico aleatorio
    When hace click para autenticarse
    Then se indica al usuario que hay errores en el formulario de autenticacion

  Scenario Outline: Autenticar usuario con todos los campos vacios
    Given un usuario con "<correo_electronico>" y "<contraseña>"
    When hace click para autenticarse
    Then se indica al usuario que hay errores en el formulario de autenticacion
    Examples:
      | correo_electronico | contraseña |
      |                    |            |

  Scenario Outline: Autenticar usuario con datos validos
    Given un usuario con "<correo_electronico>" y "<contraseña>"
    When hace click para autenticarse
    Then el usuario ya esta autenticado
    Examples:
      | correo_electronico              | contraseña      |
      | ma.martinezp123@uniandes.edu.co | c-L56kBCAyPxU_u |

  Scenario: Recuperar contraseña con correo electronico invalido
    Given un usuario con correo electronico aleatorio invalido
    When hace click para recuperar contraseña
    Then se indica al usuario que hay errores en el formulario de autenticacion

  Scenario Outline: Cerrar sesión
    Given un usuario con "<correo_electronico>" y "<contraseña>"
    When hace click para autenticarse
    And hace click en el menu de usuario
    And hace click en la opcion desconectar
    Then el usuario ya no esta autenticado
    Examples:
      | correo_electronico              | contraseña      |
      | ma.martinezp123@uniandes.edu.co | c-L56kBCAyPxU_u |