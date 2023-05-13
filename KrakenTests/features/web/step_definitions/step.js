const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

<<<<<<< HEAD
const identificacion = "ma.martinezp123@uniandes.edu.co";
const contrasena = "c-L56kBCAyPxU_u";
const version = "4.44.0";

Given(
    "un usuario autenticado",
    async function () {

        await this.paginaAutenticacion.autenticacionValida(identificacion, contrasena);
    }
);

When(
    "hace click en el link publicaciones",
    async function () {

        await this.paginaSitio.hacerClickEnOpcionPorNombre("Posts");
    }
);

When(
    "hace click en el boton nuevo",
    async function () {

        await this.paginaListarElementos.hacerClickEnNuevoElemento();
    }
);

When("confirmar publicacion del elemento",
    async function () {
        if (version == "4.44.0") {
            await this.paginaCrearModificarEliminarElemento.hacerClickEnConfirmarCrear();
        }
    });

When(
    "hace click en el boton nueva etiqueta",
    async function () {

        await this.paginaListarEtiquetas.hacerClickEnNuevaEtiqueta();
    }
);
=======
const millisecondsToWait = 1200;

const identificacion = "ce.ardilav1@uniandes.edu.co";
const contrasena = "**wWzf*zPLD8";
const baseUrl = "http://localhost:3002/";

Given("un usuario autenticado", async function () {
    await this.paginaAutenticacion.autenticacionValida(
        identificacion,
        contrasena
    );
});

When("hace click en el link publicaciones", async function () {
    await this.paginaSitio.listarPublicaciones();
});

When("hace click en el boton nuevo", async function () {
    await this.paginaListarElementos.hacerClickEnNuevoElemento();
});

When("hace click en el boton nueva etiqueta", async function () {
    await this.paginaListarEtiquetas.hacerClickEnNuevaEtiqueta();
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar elemento",
    async function (titulo, contenido) {
<<<<<<< HEAD

        await this.paginaCrearModificarEliminarElemento.crearOModificarElemento(titulo, contenido);
    }
);

When(
    "va a la pagina de publicaciones", async function () {

        await this.paginaCrearModificarEliminarElemento.listarElementos();
    }
);

Then(
    "el elemento {string} esta en la lista y tiene estado publicado",
    async function (titulo) {

        assert.equal("PUBLISHED", await this.paginaListarElementos.obtenerEstadoElementoPorTitulo(titulo));
=======
        await this.paginaCrearModificarEliminarElemento.crearOModificarElemento(
            titulo,
            contenido
        );
    }
);

When("va a la pagina de publicaciones", async function () {
    await this.paginaCrearModificarEliminarElemento.listarElementos();
});

Then(
    "el elemento {string} {string} {string} esta en la lista y tiene estado publicado",
    async function (titulo, columnaTitulo, columnaEstado) {
        assert.equal(
            "PUBLISHED",
            await this.paginaListarElementos.obtenerEstadoElementoPorTitulo(
                titulo,
                columnaTitulo,
                columnaEstado
            )
        );
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
    }
);

When(
<<<<<<< HEAD
    "hace click en el elemento {string}",
    async function (titulo) {

        await this.paginaListarElementos.hacerClickEnElementoPorTitulo(titulo);
    }
);

When(
    "hace click en ajustes",
    async function () {

        await this.paginaCrearModificarEliminarElemento.hacerClickEnAjustes();
    }
);

When(
    "hace click en el boton eliminar",
    async function () {

        await this.paginaCrearModificarEliminarElemento.hacerClickEnEliminar();
    }
);
=======
    "hace click en el elemento {string} {string}",
    async function (titulo, columnaTitulo) {
        await this.paginaListarElementos.hacerClickEnElementoPorTitulo(
            titulo,
            columnaTitulo
        );
    }
);

When("hace click en ajustes", async function () {
    await this.paginaCrearModificarEliminarElemento.hacerClickEnAjustes();
});

When("hace click en el boton eliminar", async function () {
    await this.paginaCrearModificarEliminarElemento.hacerClickEnEliminar();
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

When(
    "hace click en el boton eliminar del mensaje de confirmacion",
    async function () {
<<<<<<< HEAD

=======
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
        await this.paginaCrearModificarEliminarElemento.hacerClickEnConfirmarEliminar();
    }
);

Then(
<<<<<<< HEAD
    "el elemento {string} no esta en la lista",
    async function (titulo) {

        assert.equal(false, await this.paginaListarElementos.estaElementoPorTitulo(titulo));
    }
);

Then(
    "se indica al usuario que el titulo es muy largo",
    async function () {

        assert.equal("Update failed: Title cannot be longer than 255 characters.", await this.paginaCrearModificarEliminarElemento.obtenerError());
    }
);
=======
    "el elemento {string} {string} no esta en la lista",
    async function (titulo, columnaTitulo) {
        assert.equal(
            false,
            await this.paginaListarElementos.estaElementoPorTitulo(
                titulo,
                columnaTitulo
            )
        );
    }
);

Then("se indica al usuario que el titulo es muy largo", async function () {
    assert.equal(
        "Update failed: Title cannot be longer than 255 characters.",
        await this.paginaCrearModificarEliminarElemento.obtenerError()
    );
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

When(
    "diligencia con {string} y {string} el formulario crear - modificar elemento",
    async function (titulo, contenido) {
<<<<<<< HEAD

        await this.paginaCrearModificarEliminarElemento.crearOModificarBorradorElemento(titulo, contenido);
    }
);

When(
    "hace click en el link paginas",
    async function () {

        await this.paginaSitio.hacerClickEnOpcionPorNombre("Pages");
    }
);

When(
    "va a la pagina de paginas",
    async function () {

        await this.paginaCrearModificarEliminarElemento.listarElementos();
    }
);

When(
    "hace click en el link etiquetas",
    async function () {

        await this.paginaSitio.hacerClickEnOpcionPorNombre("Tags");
    }
);
=======
        await this.paginaCrearModificarEliminarElemento.crearOModificarBorradorElemento(
            titulo,
            contenido
        );
    }
);

When("hace click en el link paginas", async function () {
    await this.paginaSitio.listarPaginas();
});

When("va a la pagina de paginas", async function () {
    await this.paginaCrearModificarEliminarElemento.listarElementos();
});

When("hace click en el link etiquetas", async function () {
    await this.paginaSitio.listarEtiquetas();
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

When(
    "diligencia con {string} y {string} y envia el formulario crear - modificar etiqueta",
    async function (nombre, descripcion) {
<<<<<<< HEAD

        await this.paginaCrearModificarEliminarEtiqueta.crearOModificarEtiqueta(nombre, descripcion);
    }
);

When(
    "va a la pagina de etiquetas",
    async function () {

        await this.paginaCrearModificarEliminarEtiqueta.listarEtiquetas();
    }
);

When(
    "hace click en la etiqueta {string}", async function (nombre) {

        await this.paginaListarEtiquetas.haceClickEnEtiquetaPorNombre(nombre);
    }
);

Then(
    "la etiqueta {string} esta en la lista",
    async function (nombre) {

        assert.equal(true, await this.paginaListarEtiquetas.estaEtiquetaPorNombre(nombre));
    }
);

When(
    "hace click en el boton eliminar etiqueta",
    async function () {

        await this.paginaCrearModificarEliminarEtiqueta.hacerClickEnEliminar();
    }
);
=======
        await this.paginaCrearModificarEliminarEtiqueta.crearOModificarEtiqueta(
            nombre,
            descripcion
        );
    }
);

When("va a la pagina de etiquetas", async function () {
    await this.paginaCrearModificarEliminarEtiqueta.listarEtiquetas();
});

When("hace click en la etiqueta {string}", async function (nombre) {
    await this.paginaListarEtiquetas.haceClickEnEtiquetaPorNombre(nombre);
});

Then("la etiqueta {string} esta en la lista", async function (nombre) {
    assert.equal(
        true,
        await this.paginaListarEtiquetas.estaEtiquetaPorNombre(nombre)
    );
});

When("hace click en el boton eliminar etiqueta", async function () {
    await this.paginaCrearModificarEliminarEtiqueta.hacerClickEnEliminar();
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

When(
    "hace click en el boton eliminar etiqueta del mensaje de confirmacion",
    async function () {
<<<<<<< HEAD

=======
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
        await this.paginaCrearModificarEliminarEtiqueta.hacerClickEnConfirmarEliminar();
    }
);

<<<<<<< HEAD
Then(
    "la etiqueta {string} no esta en la lista",
    async function (nombre) {

        assert.equal(false, await this.paginaListarEtiquetas.estaEtiquetaPorNombre(nombre));
    }
);

Then(
    "se indica al usuario que el nombre es muy largo",
    async function () {

        assert.equal("Tag names cannot be longer than 191 characters.", await this.paginaCrearModificarEliminarEtiqueta.obtenerError());
    }
);

When(
    "hace click en el menu de usuario",
    async function () {

        await this.paginaSitio.mostrarMenuUsuario();
    }
);

When(
    "hace click en la opcion tu perfil",
    async function () {

        await this.paginaUsuario.perfil();
    }
);

When(
    "hace click en el boton regenerar",
    async function () {

        await this.paginaUsuario.regenerar();
    }
);

When(
    "hace click en la opcion desconectar",
    async function () {

        await this.paginaUsuario.cerrarSesion();
    }
);

Then(
    "el usuario ya no esta autenticado",
    async function () {

        assert.equal("http://localhost:2368/ghost/#/signin", await this.driver.getUrl());
    }
);
=======
Then("la etiqueta {string} no esta en la lista", async function (nombre) {
    assert.equal(
        false,
        await this.paginaListarEtiquetas.estaEtiquetaPorNombre(nombre)
    );
});

Then("se indica al usuario que el nombre es muy largo", async function () {
    assert.equal(
        "Tag names cannot be longer than 191 characters.",
        await this.paginaCrearModificarEliminarEtiqueta.obtenerError()
    );
});

When("hace click en el menu de usuario", async function () {
    await this.paginaSitio.mostrarMenuUsuario();
});

When("hace click en la opcion tu perfil", async function () {
    await this.paginaUsuario.perfil();
});

When("hace click en el boton regenerar", async function () {
    await this.paginaUsuario.regenerar();
});

When("hace click en la opcion desconectar", async function () {
    await this.paginaUsuario.cerrarSesion();
});

Then("el usuario ya no esta autenticado", async function () {
    assert.equal(`${baseUrl}ghost/#/signin`, await this.driver.getUrl());
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

When(
    "hace click en el boton regenerar tu token personal del mensaje de confirmacion",
    async function () {
<<<<<<< HEAD

=======
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
        await this.paginaUsuario.confirmar();
    }
);

<<<<<<< HEAD
Then(
    "se genera un nuevo token",
    async function () {
        if (version == "3.41.1") {
            assert.equal("Personal Token was successfully regenerated", await this.paginaUsuario.obtenerMensaje());
        }
        if (version == "4.44.0") {
            assert.equal("Staff access token was successfully regenerated", await this.paginaUsuario.obtenerMensaje());
        }
    }
);

When(
    "diligencia con {string} {string} y {string} el formulario actualizar contrasena",
    async function (contrasenaAntigua, contrasenaNueva, contrasenaVerificacion) {

        await this.paginaUsuario.cambiarContrasena(contrasena, contrasenaAntigua, contrasenaNueva, contrasenaVerificacion);
    }
);

Then(
    "se indica al usuario que la contraseña es incorrecta",
    async function () {

        assert.equal("Your password is incorrect. Your password is incorrect.", await this.paginaUsuario.obtenerError());
    }
);
=======
Then("se genera un nuevo token", async function () {
    assert.equal(
        "Personal Token was successfully regenerated",
        await this.paginaUsuario.obtenerMensaje()
    );
});

When(
    "diligencia con {string} {string} y {string} el formulario actualizar contrasena",
    async function (
        contrasenaAntigua,
        contrasenaNueva,
        contrasenaVerificacion
    ) {
        await this.paginaUsuario.cambiarContrasena(
            contrasena,
            contrasenaAntigua,
            contrasenaNueva,
            contrasenaVerificacion
        );
    }
);

Then("se indica al usuario que la contraseña es incorrecta", async function () {
    assert.equal(
        "Your password is incorrect. Your password is incorrect.",
        await this.paginaUsuario.obtenerError()
    );
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

Then(
    "se indica al usuario que la verificacion de la contraseña es incorrecta",
    async function () {
<<<<<<< HEAD

        assert.equal("Your new passwords do not match", await this.paginaUsuario.obtenerErrorCampo(2));
=======
        assert.equal(
            "Your new passwords do not match",
            await this.paginaUsuario.obtenerErrorCampo(2)
        );
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
    }
);

Then("se indica al usuario que la contraseña es insegura", async function () {
<<<<<<< HEAD
    if (version == "4.44.0") {
        assert.equal("Sorry, you cannot use an insecure password.", await this.paginaUsuario.obtenerErrorCampo(1));
    }
    if (version == "3.41.1") {
        assert.equal("Sorry, you cannot use an insecure password", await this.paginaUsuario.obtenerErrorCampo(1));
    }
=======
    assert.equal(
        "Sorry, you cannot use an insecure password",
        await this.paginaUsuario.obtenerErrorCampo(1)
    );
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
});

Then(
    "se indica al usuario que la contraseña no puede estar vacia",
    async function () {
        assert.equal(
            "Sorry, passwords can't be blank",
            await this.paginaUsuario.obtenerErrorCampo(1)
        );
    }
);

When("refresca la pagina", async function () {
    await driver.navigate().refresh();
});

<<<<<<< HEAD
When(
    "refresca la pagina",
    async function () {

        await driver.navigate().refresh();
    }
);

When("hace click en el menu de usuario nuevamente",
    async function () {

        await this.paginaSitio.mostrarMenuUsuario();
    }
);

When(
    "el usuario se autentica con {string}",
    async function (contrasenaIn) {

        await driver.get("http://localhost:2368/ghost/#/signin");
        await driver.findElement(By.css("input[name='identification']")).sendKeys(usuario);
        await driver.findElement(By.css("input[name='password']")).sendKeys(contrasena + contrasenaIn);
        await driver.findElement(By.css("button[tabindex='3']")).click();
    }
);
=======
When("hace click en el menu de usuario nuevamente", async function () {
    await this.paginaSitio.mostrarMenuUsuario();
});

When("el usuario se autentica con {string}", async function (contrasenaIn) {
    await driver.get(`${baseUrl}ghost/#/signin`);
    await driver
        .findElement(By.css("input[name='identification']"))
        .sendKeys(usuario);
    await driver
        .findElement(By.css("input[name='password']"))
        .sendKeys(contrasena + contrasenaIn);
    await driver.findElement(By.css("button[tabindex='3']")).click();
});
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25

Then(
    "el usuario accede a la aplicacion luego de modificar contrasena",
    async function () {
<<<<<<< HEAD
        assert.equal("http://localhost:2368/ghost/#/site", this.driver.getUrl());
=======
        assert.equal(`${baseUrl}ghost/#/site`, this.driver.getUrl());
>>>>>>> e47b9dbe394c87c7e004cb0d0c8b72a346519b25
    }
);
