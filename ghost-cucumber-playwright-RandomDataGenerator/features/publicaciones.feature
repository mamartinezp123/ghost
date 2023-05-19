Feature: Publicaciones
    Funcionalidades crear, listar, modificar y eliminar del modulo publicaciones


Scenario: Crear un draft
    Given un usuario autenticado
    When hace click en el link publicaciones
    And hace click en el boton nuevo
    And crea un draft con titulo "Este es solamente un draft de prueba" y contenido "Este es un fraft con un titulo de cero caracteres"
    Then el elemento "Este es solamente un draft de prueba" esta en la lista y tiene estado publicado