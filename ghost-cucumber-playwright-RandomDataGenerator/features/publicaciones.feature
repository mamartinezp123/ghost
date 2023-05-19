Feature: Publicaciones
    Funcionalidades crear, listar, modificar y eliminar del modulo publicaciones

Scenario: Crear post con titulo mayor a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con titulo de "260" y cuerpo de "12" y envia el formulario crear - modificar elemento
    Then el boton de creacion no esta en la pagina


Scenario: Crear post con titulo menor a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Titulo con menos de 250 caracteres" y "Esta es la prueba de crear un post con titulo de menos de 255 caracteres" y envia el formulario crear - modificar elemento
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el elemento "Titulo con menos de 250 caracteres" esta en la lista y tiene estado publicado

Scenario: Crear post con titulo igual a 256 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con titulo de "256" y cuerpo de "12" y envia el formulario crear - modificar elemento
    Then el boton de creacion no esta en la pagina

Scenario: Crear post con titulo igual a 254 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con titulo de 254 y cuerpo de 12 y envia el formulario crear - modificar elemento
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el elemento con titulo de 254 caracteres esta en la lista y tiene estado publicado

Scenario: Crear post con titulo igual a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con titulo de 255 y cuerpo de 12 y envia el formulario crear - modificar elemento
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el elemento con titulo de 255 caracteres esta en la lista y tiene estado publicado

Scenario: Crear post con contenido de cero caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "Este Post tiene cero caracteres en el contenido" y "" y envia el formulario crear - modificar elemento
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el elemento "Este Post tiene cero caracteres en el contenido" esta en la lista y tiene estado publicado

Scenario: Crear post con title de cero caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And diligencia con "" y "Este es un post con un titulo de cero caracteres" y envia el formulario crear - modificar elemento
    And confirmar publicacion del elemento
    And va a la pagina de publicaciones
    Then el elemento "(Untitled)" esta en la lista y tiene estado publicado

Scenario: Crear un draft con un titulo menor a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And crea un draft con titulo "Este es solamente un draft de prueba" y contenido "Este es un fraft con un titulo de cero caracteres"
    Then el elemento "Este es solamente un draft de prueba" esta en la lista y tiene estado publicado

Scenario: Crear un draft con un titulo igual a 255 caracteres
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And crea un draft con titulo de "255" y contenido de "30"
    Then el draft de 255 caracteres esta en la lista y tiene estado publicado
