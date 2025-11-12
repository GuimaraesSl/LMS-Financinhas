import { useState, type FC } from "react"
import { useNavigate } from "react-router-dom"

import './LoginScreen.style.css'
import { MdArrowBack } from 'react-icons/md'
import InputField from "../../components/InputField/InputField"
import logo from '../../assets/Logo-Subtitle.svg'

export const LoginScreen: FC = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (): Promise<void> => {
    try {
      navigate('/config-team-room')
    } catch (error) {
      alert('Erro ao fazer login, tente novamente')
      console.error('Error during sign in:', error)
    }
  }


  return (
    <div className="containerLoginScreen">
      <header className="headerLoginScreen">
        <MdArrowBack
          onClick={() => navigate('/profile-select')}
          size={45}
          color="#000"
          className="arrowIcon"
        />
        <img src={logo} className="logoLoginScreen" alt="logo" />
      </header>
      <main className="mainLoginScreen">
        <form className="formLoginScreen">
          <h2>LOGIN</h2>
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="senha"
            name="senha"
            label="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin()
            }}
            className="buttonLoginScreen"
          >
            ENTRAR
          </button>
          <p onClick={() => navigate('/register')} className="registerLinkLoginScreen">
            Ainda não tenho uma conta
          </p>
        </form>
      </main>
    </div>
  )
}

export default LoginScreen
