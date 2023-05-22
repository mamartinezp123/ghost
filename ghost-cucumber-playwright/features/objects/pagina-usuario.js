class PaginaUsuario {

    driver;
    cerrarSesionBy = "css=.dropdown-menu li:nth-child(9) a";
    perfilBy = "css=.dropdown-menu li:nth-child(4) a";
    regenerarBy = "css=form:nth-child(3) button";
    confirmarBy = "css=.modal-footer .gh-btn-red";
    mensajeBy = "css=.green";
    contrasenaAntiguaBy = "css=input[id=user-password-old]";
    contrasenaNuevaBy = "css=input[id=user-password-new]";
    contrasenaVerificacionBy = "css=input[id=user-new-password-verification]";
    cambiarContrasenaBy = "css=form:nth-child(2) button";
    errorBy = "css=.gh-alert-red div";
    fullNameBy = "css=input[id=user-name]";
    slugBy = "css=input[id=user-slug]";
    emailBy = "css=input[id=user-email]";
    locationBy = "css=input[id=user-location]";
    websiteBy = "css=input[id=user-website]";
    facebookProfileBy = "css=input[id=user-facebook]";
    twitterProfileBy = "css=input[id=user-twitter]";
    bioBy = "css=textarea[id=user-bio]";
    cambiarDatosBy = "css=.gh-btn-blue";
    errorCampoFormulario1By = "css=form:nth-child(1) p.response";
    errorCampoFormulario2By = "css=form:nth-child(2) p";
    errorCampoFormulario3By = "css=form:nth-child(2) p.response";

    constructor(driver) {
        this.driver = driver;
    }

    async cerrarSesion() {
        await this.driver.locator(this.cerrarSesionBy).click();
    }

    async perfil() {
        await this.driver.locator(this.perfilBy).click()
    }

    async regenerar() {
        let botones = await this.driver.$$(this.regenerarBy);
        await botones[0].click();
    }

    async confirmar() {
        await this.driver.locator(this.confirmarBy).click()
    }

    async obtenerMensaje() {
        let mensaje = await this.driver.locator(this.mensajeBy);
        return await mensaje.textContent().valueOf();
    }

    async cambiarContrasena(contrasena, contrasenaAntigua, contrasenaNueva, contrasenaVerificacion) {
        if (contrasenaAntigua != "null") {
            await this.driver.locator(this.contrasenaAntiguaBy).fill(contrasena + contrasenaAntigua);
        }
        if (contrasenaNueva != "null") {
            await this.driver.locator(this.contrasenaNuevaBy).fill(contrasenaNueva == "1234567890" || contrasenaNueva == "abcdefghij" || contrasenaNueva.length < 10 ? contrasenaNueva : (contrasenaNueva == "" ? contrasenaNueva : contrasena + contrasenaNueva));
        }
        if (contrasenaVerificacion != "null") {
            await this.driver.locator(this.contrasenaVerificacionBy).fill(contrasenaVerificacion == "1234567890" || contrasenaNueva == "abcdefghij" || contrasenaNueva.length < 10 ? contrasenaVerificacion : (contrasenaNueva == "" ? contrasenaNueva : contrasena + contrasenaVerificacion));
        }
        await this.driver.locator(this.cambiarContrasenaBy).click();
    }

    async cambiarDatos(fullName, slug, email, location, website, facebookProfile, twitterProfile, bio) {
        await this.driver.locator(this.fullNameBy).fill(fullName);
        await this.driver.locator(this.slugBy).fill(slug);
        await this.driver.locator(this.emailBy).fill(email);
        await this.driver.locator(this.locationBy).fill(location);
        await this.driver.locator(this.websiteBy).fill(website);
        await this.driver.locator(this.facebookProfileBy).fill(facebookProfile);
        await this.driver.locator(this.twitterProfileBy).fill(twitterProfile);
        await this.driver.locator(this.bioBy).fill(bio);

    }

    async cambiarDatos(fullName, slug, email, location, website, facebookProfile, twitterProfile, bio) {
        await this.driver.locator(this.fullNameBy).fill(fullName);
        await this.driver.locator(this.slugBy).fill(slug);
        await this.driver.locator(this.emailBy).fill(email);
        await this.driver.locator(this.locationBy).fill(location);
        await this.driver.locator(this.websiteBy).fill(website);
        await this.driver.locator(this.facebookProfileBy).fill(facebookProfile);
        await this.driver.locator(this.twitterProfileBy).fill(twitterProfile);
        await this.driver.locator(this.bioBy).fill(bio);

    }

    async hacerClickEnGuardar() {
        await this.driver.locator(this.cambiarDatosBy).click();
    }

    async obtenerError() {
        return await this.driver.locator(this.errorBy).textContent();
    }

    async obtenerErrorCampo(campo) {
        let errores = await this.driver.$$(this.errorCampoFormulario2By);
        return await errores[campo].textContent();
    }

    async esError() {
        let errores = await this.driver.$$(this.errorCampoFormulario1By);
        for (let posicion = 0; posicion < errores.length; posicion++) {
            let error = await errores[posicion].textContent();
            if (error.trim() != "") {
                return true;
            }
        }
        return false;
    }

    async esErrorCambioContraseña() {
        let errores = await this.driver.$$(this.errorCampoFormulario3By);
        for (let posicion = 0; posicion < errores.length; posicion++) {
            let error = await errores[posicion].textContent();
            if (error.trim() != "") {
                return true;
            }
        }
        return false;
    }


}

module.exports = PaginaUsuario;