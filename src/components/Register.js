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
            <div id="blockLogo">
                <img id="logo" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>

            <div id="blockLogin">
            <form action="/action_page.php">
                <div>
                    <div class="blockSub">
                        <label for="fname" class="subtitle">Nickname</label>
                    </div>
                    <div class="blockInput">
                        <input type="text" class="inputs" id="userInput" name="fname" placeholder="" required/>
                    </div>
                    <div class="blockSub">
                        <label for="lname" class="subtitle">Email</label>
                    </div>
                    <div class="blockInput">
                        <input type="email" class="inputs" id="emailInput" name="femail" placeholder="" required/>
                    </div>
                    <div class="blockSub">
                        <label for="fname" class="subtitle">Télefono</label>
                    </div>
                    <div class="blockInput">
                        <input type="text" class="inputs" id="telInput" name="ftel" placeholder="" required/>
                    </div>
                    <div class="blockSub">
                        <label for="lname" class="subtitle">Contraseña</label>
                    </div>
                    <div class="blockInput">
                        <input type="password" class="inputs" id="passInput" name="fpass" placeholder="" required/>
                    </div>
                    <div class="blockSub">
                        <label for="lname" class="subtitle">Repetir Contraseña</label>
                    </div>
                    <div class="blockInput">
                        <input type="password" class="inputs" id="passInputRep" name="fpass" placeholder="" required/>
                    </div>
                </div>
                <div>
                    <div class="blockMainOpt">
                        <button type="button" class="optLogin login" onclick="changePage('home')">Registrar</button>
                    </div>
                </div>
            </form> 
        </div>
        <div id="blockCancel">
            <button type="button" class="optLogin cancel" onClick={changePage}>Cancelar</button>
        </div>
        <footer id="blockInfo">
            <a href="About" class="optFooter">Nosotros</a>
            <a href="Contact" class="optFooter">Contacto</a>
        </footer>
            
        </div>
    )
}

export default Register
