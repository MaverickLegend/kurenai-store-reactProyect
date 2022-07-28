import React from "react";

const Form = () => {
    return(
        <div class="contacto__container__formulario">
            <form id="formulario" class="contacto__formulario">
                <label for="nombre_apellido">Nombre</label>
                <div class="input-group mb-3">
                    <span id="error"></span>
                    <input class="form-control form-control-lg bg-dark" type="text" id="nombre" name="nombre_apellido"/>
                </div>
                <label for="numero_telefono">Teléfono</label>
                <div class="input-group mb-3">
                    <span class="bg-dark">+569</span>
                    <input class="form-control form-control-lg bg-dark" type="number" id="telefono" name="numero_telefono" minlength="8"
                        maxlength="8"/>
                </div>
                <label for="correo">Mail</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg bg-dark" placeholder="Mail " aria-label="Username" id="mail" name="mail_mail"/>
                    <span class="bg-dark">@</span>
                    <input type="text" class="form-control form-control-lg bg-dark" placeholder="Dominio" aria-label="Server" id="domain" name="mail_domain"/>
                </div>
                <div class="mb-3">
                    <button id="toast" value="enviar" class="boton--aceptar">Enviar</button>
                    <button id="btnReset" type="reset" class="boton--reiniciar">Reiniciar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
