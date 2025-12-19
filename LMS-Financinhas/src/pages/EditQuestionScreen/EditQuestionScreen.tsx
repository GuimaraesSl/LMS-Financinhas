import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import './EditQuestionScreen.style.css'
import InputField from '../../components/InputField/InputField'
import logo from '../../assets/Logo-Subtitle.svg'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { MdClose } from 'react-icons/md'
import { getQuestionFromQuiz, editQuestionInQuiz } from '../../firebase/quiz/quiz'
import { useAuth } from '../../contexts/authContext'
import { Pergunta } from '../../models/Pergunta'

const EditQuestionScreen: React.FC = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const { questionId, quizId } = useParams();

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [wrongAnswer1, setWrongAnswer1] = useState('')
  const [wrongAnswer2, setWrongAnswer2] = useState('')
  const [wrongAnswer3, setWrongAnswer3] = useState('')
  const [justification, setJustification] = useState('')
  const [notification, setNotification] = useState<{ type: string; message: string } | null>(null)

  useEffect(() => {
    const fetchQuestion = async (): Promise<void> => {
      if (currentUser && quizId && questionId) {
        try {
          const pergunta = await getQuestionFromQuiz(
            currentUser.uid,
            quizId,
            decodeURIComponent(questionId)
          )

          if (pergunta) {
            const correctIndex = pergunta.alternativas.findIndex((alt) => alt === pergunta.correta)
            if (correctIndex !== -1) {
              setQuestion(pergunta.enunciado)
              setAnswer(pergunta.correta)

              const wrongAlternatives = pergunta.alternativas.filter(
                (_, index) => index !== correctIndex
              )
              setWrongAnswer1(wrongAlternatives[0] || '')
              setWrongAnswer2(wrongAlternatives[1] || '')
              setWrongAnswer3(wrongAlternatives[2] || '')

              setJustification(pergunta.justificativa)
            }
          }
        } catch (error) {
          console.error('Erro ao buscar a pergunta:', error)
        }
      }
    }

    fetchQuestion()
  }, [currentUser, quizId, questionId])

  const handleBack = (): void => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="custom-ui">
          <button className="closeButton" onClick={onClose}>
            <MdClose size={32} />
          </button>
          <h1>Cancelar e voltar</h1>
          <p>
            Tem certeza?
            <br />
            As edições feitas não serão salvas.
          </p>
          <div className="buttonGroup">
            <button
              onClick={() => {
                navigate(-1)
                onClose()
              }}
            >
              CANCELAR E VOLTAR
            </button>
          </div>
        </div>
      )
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!question || !answer || !wrongAnswer1 || !wrongAnswer2 || !wrongAnswer3 || !justification) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    const perguntaAtualizada: Pergunta = {
      enunciado: question,
      correta: answer,
      alternativas: [wrongAnswer1, wrongAnswer2, wrongAnswer3, answer],
      justificativa: justification
    }

    try {
      if (currentUser && quizId && questionId) {
        await editQuestionInQuiz(currentUser.uid, quizId, questionId, perguntaAtualizada)
        setNotification({ type: 'success', message: 'Pergunta editada com sucesso!' })

        setTimeout(() => setNotification(null), 2000)

        setTimeout(() => navigate(`/teacher-question/${quizId}`), 1500)
      }
    } catch (error) {
      console.error('Erro ao editar a pergunta:', error)
      setNotification({ type: 'error', message: 'Ocorreu um erro ao editar a pergunta.' })

      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <div className="containerEditQuestionScreen">

      {notification && (
        <div className={`notification ${notification.type}`}>{notification.message}</div>
      )}

      <header className="headerEditQuestionScreen">
        <img src={logo} className="logoEditQuestionScreen" alt="Logo Financinhas" />
      </header>
      <main className="mainEditQuestionScreen">
        <h1 className="titleEditQuestionScreen">EDITAR PERGUNTA</h1>
        <form className="formEditQuestionScreen" onSubmit={handleSubmit}>
          <div className="inputField">
            <InputField
              id="question"
              name="question"
              label="Pergunta"
              type="text"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value)
              }
              }
            />
          </div>
          <div className="inputFieldsContainer">
            <InputField
              id="answer"
              name="answer"
              label="Resposta Correta"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <InputField
              id="wrongAnswer1"
              name="wrongAnswer1"
              label="Alternativa Errada 1"
              type="text"
              value={wrongAnswer1}
              onChange={(e) => setWrongAnswer1(e.target.value)}
            />
          </div>
          <div className="inputFieldsContainer">
            <InputField
              id="wrongAnswer2"
              name="wrongAnswer2"
              label="Alternativa Errada 2"
              type="text"
              value={wrongAnswer2}
              onChange={(e) => setWrongAnswer2(e.target.value)}
            />
            <InputField
              id="wrongAnswer3"
              name="wrongAnswer3"
              label="Alternativa Errada 3"
              type="text"
              value={wrongAnswer3}
              onChange={(e) => setWrongAnswer3(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label htmlFor="justification">Justificativa</label>
            <textarea
              id="justification"
              name="justification"
              className="textareaJustification"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
          </div>
          <div className="buttonContainer">
            <button className="buttonCancel" type="button" onClick={handleBack}>
              CANCELAR E VOLTAR
            </button>
            <button className="buttonSave" type="submit">
              SALVAR EDIÇÃO
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default EditQuestionScreen