import './LoginPage.css'

const LoginPage: React.FC = () =>{
    return(
        <div className="ContainerLogin">
            <div className='alignLogo'>
                <img src="../../public/logo.svg" alt="" />
                <p>Acesso remoto de roteadores</p>
            </div>
            <div className='alignForm'>
                <div>
                    <h2>Login</h2>
                </div>
                <div>
                    <form action="" className='formLogin'>
                        <label htmlFor="">Email</label>
                        <input type="email" name="Email" id="" />
                        <label htmlFor="">Password</label>
                        <input type="password" name="Password" id="" />
                        <div>
                            <input type="button" value="Entrar" className='loginButton' />
                        </div>
                    </form>
                    <div>
                        <button className='PasswordRecovery'>Esqueceu a senha?</button>
                    </div>
                </div>
            </div>
            <div className='LoginFooter'>
                <p>FetchACS © 2024</p>
            </div>
        </div>
    )
}

export default LoginPage;