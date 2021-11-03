import React from 'react'
import securityInfo from '../Image/SecurityInfo.png'
import '../styles/Login.css';

function Login() {
    const changePage = (event) => {
        if(event.target.name==="home"){
            window.location = "/Home";
          }
        else {
            window.location = "/Register";
        }

    }
    return (
        <div>
            <div id="blockLogo0A">
                <img id="logo0A" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>
            <div id="blockLogin0A">
            <form action="/action_page.php">
                <div>
                    <div class="blockSub0A">
                        <label for="fname" class="subtitle0A">Email</label>
                    </div>
                    <div class="blockInput0A">
                        <input type="email" class="inputs0A" id="userInput0A" name="fname" placeholder="" required/>
                    </div>
                    <div class="blockSub0A">
                        <label for="lname" class="subtitle0A">Contraseña</label>
                    </div>
                    <div class="blockInput0A">
                        <input type="password" class="inputs0A" id="passInput0A" name="pass" placeholder="" required/>
                    </div>
                </div>
                <div>
                    <div class="blockMainOpt0A">
                        <button type="button" class="optLogin0A login0A" name="home" onClick={changePage}>Ingresar</button>
                    </div>
                    <div class="blockSecOpt0A">
                        <a href="ForwardPassword" class="optLogin0A forget0A">Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </form> 
        </div>
        <div id="blockRegis0A">
            <button type="button" class="optLogin0A register0A" onClick={changePage}>Registrar</button>
        </div>
        <footer id="blockInfo0A">
            <a href="About" class="optFooter0A">Nosotros</a>
            <a href="Contact" class="optFooter0A">Contacto</a>
        </footer>
        </div>
    )
}

export default Login
