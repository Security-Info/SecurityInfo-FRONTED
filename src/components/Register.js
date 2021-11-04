import React, {useState} from 'react'
import '../styles/Register.css';
import securityInfo from '../Image/SecurityInfo.png'
import UserService from "../service/UserService";
import {Redirect} from "react-router-dom";

/*
    - Boton de Register

*/
function Register() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [clave2, setClave2] = useState('');
    const [telefono, setTelefono] = useState('');
    const [registro, setRegistro] = useState('');
    const [redirect,setRedirect] = useState(false);

    const addUsuario = async(event) => {
        event.preventDefault()
        const registros=
            {
                nombre,
                correo,
                clave,
                telefono,
            }
            setRegistro(registros);

            if(clave == clave2){
                alert("Registro completado")
                await UserService.addUser(registro)
                setRedirect(true)

            }
            else {alert("Contraseñas no coinciden")}
    }


    const changePage = () =>{
        window.location = "/";
    }

    if (redirect){
        return <Redirect to="/" />
    }

    return (
        <div>
            <div id="blockLogo0C">
                <img id="logo0C" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>
            <div id="blockLogin0C">
            <form action="/action_page.php" onSubmit={addUsuario}>
                <div>
                    <div class="blockSub0C">
                        <label for="fname" class="subtitle0C">Nickname</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="text" value={nombre} class="inputs0C" id="userInput0C" name="fname" placeholder="" onChange={({target}) => setNombre(target.value)} required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="lname" class="subtitle0C">Email</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="email" class="inputs0C" value={correo} id="emailInput0C" name="femail" placeholder="" onChange={({target}) => setCorreo(target.value)}  required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="fname" class="subtitle0C">Télefono</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="text" class="inputs0C" id="telInput0C" value={telefono} name="ftel" placeholder="" onChange={({target}) => setTelefono(target.value)} required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="lname" class="subtitle0C">Contraseña</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="password" value={clave} class="inputs0C" id="passInput0C" name="fpass" placeholder="" onChange={({target}) => setClave(target.value)} required/>
                    </div>
                    <div class="blockSub0C">
                        <label for="lname" class="subtitle0C">Repetir Contraseña</label>
                    </div>
                    <div class="blockInput0C">
                        <input type="password" value={clave2} class="inputs0C" id="passInputRep0C" name="fpass" placeholder="" onChange={({target}) => setClave2(target.value)} required/>
                    </div>
                </div>
                <div>
                    <div class="blockMainOpt0C">
                        <button type="submit" class="optLogin0C login0C">Registrar</button>
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
