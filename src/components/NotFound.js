import React from 'react'
import '../styles/NotFound.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import notFound from '../Image/NotFound.png'

function NotFound() {
    const changePage = (event) => {
        
        if(event.target.name=="login" | event.target.name=="regresar"){
            window.location = "/";
          }
        
    }
    const handleBack = () => {
        window.location = "/";
    }
    return (
        <div>
            <div id="blockLogo">
                <button class="buttonImg appLogo" type="button" name="login" onClick={handleBack}>
                    <img id="logo" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
            </div>
            <div class="blockOption">
                <button type="button" class="optHome" name="regresar" onClick={changePage}>Regresar</button>
            </div>
            <div class="blockMain">
                <div class="blockNotLg">
                    <img id="notLogo" src={notFound} alt="Soldado con espada, securityInfo."/>
                    <h2 id="messg">Lo sentimos, está página no se ha encontrado.</h2>
                </div>
            </div>
            <footer id="blockInfo">
                <a href="About" class="optFooter">Nosotros</a>
                <a href="Contact" class="optFooter">Contacto</a>
            </footer>
            
        </div>
    )
}

export default NotFound
