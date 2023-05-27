const {By} = require("selenium-webdriver");

class PaginaSitio {

    driver;
    usuarioBy = By.css(".gh-nav-bottom div div div");
    opcionesBy = By.css(".gh-nav-manage li a");

    constructor(driver) {
        this.driver = driver;
    }

    async mostrarMenuUsuario() {
        await this.driver.findElement(this.usuarioBy).click();
    }

    async hacerClickEnOpcionPorNombre(nombre) {
        let opciones = await this.driver.findElements(this.opcionesBy);
        for (let posicion = 0; posicion < opciones.length; posicion++) {
            if (await opciones[posicion].getText() == nombre) {
                await opciones[posicion].click();
                break;
            }
        }
    }

}

module.exports = PaginaSitio;