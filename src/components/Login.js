import React, {useState,useEffect} from 'react'
import securityInfo from '../Image/SecurityInfo.png'
import '../styles/Login.css';
import Axios from 'axios';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);


    const BASE_URL = "http://localhost:8080/securityInfo/auth/user"

    const login = async credentials=> {
        const { data } = await Axios.post(BASE_URL,credentials);
        return data
    }

    const handlelogin = async (event) => {
        event.preventDefault()
        try {
            const user = await login({
                    username,
                    password
                }
            )
            console.log(user)
            setUser(user)
            setUsername('')
            setPassword('')
        }catch (e){
        }

    }

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
            <form action="/action_page.php" onSubmit={handlelogin}>
                <div>
                    <div class="blockSub0A">
                        <label for="fname" class="subtitle0A">Email</label>
                    </div>
                    <div class="blockInput0A">
                        <input type="email"  value={username} class="inputs0A" id="userInput0A" name="usuario" placeholder="" onChange={({target}) => setUsername(target.value)} required/>
                    </div>
                    <div class="blockSub0A">
                        <label for="lname" class="subtitle0A">Contraseña</label>
                    </div>
                    <div class="blockInput0A">
                        <input type="password" value={password} class="inputs0A" id="passInput0A" name="password" placeholder="" onChange={({target}) => setPassword(target.value)} required/>
                    </div>
                </div>
                <div>
                    <div class="blockMainOpt0A">
                        <button type="submit" class="optLogin0A login0A" name="home"  >Ingresar</button>
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
