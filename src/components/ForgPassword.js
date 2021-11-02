import React from 'react'
import '../styles/ForgPassword.css';
import securityInfo from '../Image/SecurityInfo.png'

/*
    - Boton enviar
    
*/

function ForgPassword() {
    const changePage = () =>{
        window.location = "/";
    }

    return (
        <div>
            <div id="blockLogo">
                <img id="logo" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>
            <div id="blockSend">
				<form action="/action_page.php">
					<div>
						<div class="blockSub">
							<label for="lname" class="subtitle">Email</label>
						</div>
						<div class="blockInput">
							<input type="email" class="inputs" id="emailInput" name="femail" placeholder="" required/>
						</div>
					</div>
					<div>
						<div class="blockMainOpt">
							<button type="button" class="optLogin login" onclick="changePage('')">Enviar</button>
						</div>
					</div>
				</form> 
			</div>
            <div id="blockCancel">
                <button type="button" class="optLogin cancel" onClick={changePage}>Cancelar</button>
            </div>
            <footer id="blockInfo">
                <a href="About.html" class="optFooter">Nosotros</a>
                <a href="Contact.html" class="optFooter">Contacto</a>
            </footer>

            
        </div>
    )
}

export default ForgPassword
