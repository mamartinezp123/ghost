Feature: Paginas
  Funcionalidades crear, listar, modificar y eliminar del modulo paginas

  Scenario Outline: Crear pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "<titulo>" y "<contenido>" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    Then el elemento "<titulo>" esta en la lista y tiene estado publicado
    Examples:
      | titulo       | contenido                                      |
      | Crear pagina | Esta es la prueba de crear una pagina en Ghost |


  Scenario Outline: Eliminar pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "<titulo>" y "<contenido>" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "<titulo>"
    And hace click en ajustes
    And hace click en el boton eliminar
    And hace click en el boton eliminar del mensaje de confirmacion
    Then el elemento "<titulo>" no esta en la lista
    Examples:
      | titulo          | contenido                                         |
      | Eliminar pagina | Esta es la prueba de eliminar una pagina en Ghost |

  Scenario Outline: Modificar pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "<titulo>" y "<contenido>" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "<titulo>"
    And diligencia con "<titulo_modificado>" y "<contenido>" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    Then el elemento "<titulo_modificado>" esta en la lista y tiene estado publicado
    Examples:
      | titulo           | contenido                                         | titulo_modificado            |
      | Modificar pagina | Esta es la prueba de eliminar una pagina en Ghost | Modificar pagina actualizado |

  Scenario Outline: Modificar pagina con titulo de 285 caracteres
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "<titulo>" y "<contenido>" y envia el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "<titulo>"
    And diligencia con "<titulo_largo>" y "<contenido>" y envia el formulario crear - modificar elemento
    Then se indica al usuario que el titulo es muy largo
    Examples:
      | titulo           | contenido                                         | titulo_largo                                                                                                                                                                                                                                                                                  |
      | Modificar pagina | Esta es la prueba de eliminar una pagina en Ghost | Modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pagina modificar pag |

  Scenario: Eliminar borrador pagina
    Given un usuario autenticado
    When hace click en el link paginas
    And hace click en el boton nuevo
    And diligencia con "Eliminar borrador pagina" y "Esta es la prueba de eliminar el borrador de una pagina en Ghost" el formulario crear - modificar elemento
    And va a la pagina de paginas
    And hace click en el elemento "Eliminar borrador pagina"
    And hace click en ajustes
    And hace click en el boton eliminar
    And hace click en el boton eliminar del mensaje de confirmacion
    Then el elemento "Eliminar borrador pagina" no esta en la lista