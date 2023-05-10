class PaginaSitio {

    driver;
    usuarioBy = "css=.gh-nav-bottom div div div";
    opcionesBy = "css=.gh-nav-manage li a";

    constructor(driver) {
        this.driver = driver;
    }

    async mostrarMenuUsuario() {
        let elements = await this.driver.$$(this.usuarioBy);
        await elements[0].click();
    }

    async hacerClickEnOpcionPorNombre(nombre) {
        let opciones = await this.driver.$$(this.opcionesBy);
        for (let posicion = 0; posicion < opciones.length; posicion++) {
            let nombreTmp = await opciones[posicion].textContent();
            if (nombreTmp.trim().includes(nombre)) {
                await opciones[posicion].click();
                break;
            }
        }
    }

}

module.exports = PaginaSitio;