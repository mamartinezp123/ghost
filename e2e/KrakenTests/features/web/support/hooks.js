const { After, Before } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const { PaginaAutenticacion } = require("../objects/pagina-autenticacion");
const PaginaSitio = require("../objects/pagina-sitio");
const PaginaListarElementos = require("../objects/pagina-listar-elementos");
const PaginaCrearModificarEliminarElemento = require("../objects/pagina-crear-modificar-eliminar-elemento");
const PaginaListarEtiquetas = require("../objects/pagina-listar-etiquetas");
const PaginaCrearModificarEliminarEtiqueta = require("../objects/pagina-crear-modificar-eliminar-etiqueta");
const PaginaUsuario = require("../objects/pagina-usuario");

Before(async function () {
    this.deviceClient = new WebClient("chrome", {}, this.userId);
    this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
    this.paginaAutenticacion = new PaginaAutenticacion(this.driver);
    this.paginaSitio = new PaginaSitio(this.driver);
    this.paginaListarElementos = new PaginaListarElementos(this.driver);
    this.paginaCrearModificarEliminarElemento =
        new PaginaCrearModificarEliminarElemento(this.driver);
    this.paginaListarEtiquetas = new PaginaListarEtiquetas(this.driver);
    this.paginaCrearModificarEliminarEtiqueta =
        new PaginaCrearModificarEliminarEtiqueta(this.driver);
    this.paginaUsuario = new PaginaUsuario(this.driver);
});

After(async function () {
    await this.deviceClient.stopKrakenForUserId(this.userId);
});
