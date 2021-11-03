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
            <div id="blockLogo0B">
                <img id="logo0B" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>
            <div id="blockSend0B">
				<form action="/action_page.php">
					<div>
						<div class="blockSub0B">
							<label for="lname" class="subtitle0B">Email</label>
						</div>
						<div class="blockInput0B">
							<input type="email" class="inputs0B" id="emailInput0B" name="femail" placeholder="" required/>
						</div>
					</div>
					<div>
						<div class="blockMainOpt0B">
							<button type="button" class="optLogin0B login0B" onclick="changePage('')">Enviar</button>
						</div>
					</div>
				</form> 
			</div>
            <div id="blockCancel0B">
                <button type="button" class="optLogin0B cancel0B" onClick={changePage}>Cancelar</button>
            </div>
            <footer id="blockInfo0B">
                <a href="About.html" class="optFooter0B">Nosotros</a>
                <a href="Contact.html" class="optFooter0B">Contacto</a>
            </footer>
        </div>
    )
}

export default ForgPassword
