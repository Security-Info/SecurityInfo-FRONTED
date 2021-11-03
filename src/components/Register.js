import React from 'react'
import '../styles/Register.css';
import securityInfo from '../Image/SecurityInfo.png'

/*
    - Boton de Register

*/
function Register() {
    const changePage = () =>{
        window.location = "/";

    } 

    return (
        <div>
            <div id="blockLogo0C">
                <img id="logo0C" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>
            <div id="blockLogin0C">
            <form action="/action_page.php">
                <div>
                    <div class="blockSub0C">
                        <label for="fname" class="subtitle0C">Nickname</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="text" class="inputs0C" id="userInput0C" name="fname" placeholder="" required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="lname" class="subtitle0C">Email</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="email" class="inputs0C" id="emailInput0C" name="femail" placeholder="" required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="fname" class="subtitle0C">Télefono</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="text" class="inputs0C" id="telInput0C" name="ftel" placeholder="" required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="lname" class="subtitle0C">Contraseña</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="password" class="inputs0C" id="passInput0C" name="fpass" placeholder="" required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="lname" class="subtitle0C">Repetir Contraseña</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="password" class="inputs0C" id="passInputRep0C" name="fpass" placeholder="" required/>
                    </div>
                </div>
                <div>
                    <div class="blockMainOpt0C">
                        <button type="button" class="optLogin0C login0C" onclick="changePage('home')">Registrar</button>
                    </div>
                </div>
            </form> 
        </div>
        <div id="blockCancel0C">
            <button type="button" class="optLogin0C cancel0C" onClick={changePage}>Cancelar</button>
        </div>
        <footer id="blockInfo0C">
            <a href="About" class="optFooter0C">Nosotros</a>
            <a href="Contact" class="optFooter0C">Contacto</a>
        </footer>
        </div>
    )
}

export default Register
