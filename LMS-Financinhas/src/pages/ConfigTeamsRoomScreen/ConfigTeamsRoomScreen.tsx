import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Mais from '../../assets/icon+.svg'
import './ConfigTeamRoomScreen.style.css'
import '../ProfileSelect/ProfileSelectScreen.styles.css'
import QuizCard from './components/QuizCard'
import Header from '../../components/Header/Header'
import type { Quiz } from '../../models/Quiz'

const ConfigTeamRoomScreen: React.FC = () => {
  const navigate = useNavigate()
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [loading, setLoading] = useState(false)
  const [profileName, setProfileName] = useState<string | null>('Professor')
  const [showCreateQuizForm, setShowCreateQuizForm] = useState(false)
  const [newQuiz, setNewQuiz] = useState<Quiz>({ id: '', titulo: '', descricao: '', perguntas: [] })

  const handleLogout = (): void => {
    navigate('/')
    alert('Usuário Desconectado')
  }

  const handleDeleteQuiz = (quizId: string): void => {
    console.log('HANDLE DELETE', quizId)
    setQuizzes(quizzes.filter((quiz) => quiz.id !== quizId))
    alert('Quiz removido com sucesso!')
  }

  const handleCreateQuizSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    if (!newQuiz.titulo || !newQuiz.descricao) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    const createdQuiz: Quiz = {
      ...newQuiz,
      id: Date.now().toString() // ID temporário
    }

    setQuizzes([...quizzes, createdQuiz])
    setShowCreateQuizForm(false)
    navigate(`/teacher-question/${createdQuiz.id}`)
  }

  return (
    <div className="containerConfigTeamRoomScreen">
      <Header profileName={profileName || 'Usuário'} onExit={handleLogout} />
      <main className="mainConfigTeamRoomScreen">
        <div className="registeredConfigTeamRooms">
          <div className="sectionHeaderConfigTeamRoomScreen">
            <h2 className="titleRegisteredTeamRoom">SEUS JOGOS CADASTRADOS</h2>
            <button className="buttonAddTeamRoom" onClick={() => setShowCreateQuizForm(true)}>
              <img src={Mais} alt="Adicionar Jogo" />
              ADICIONAR JOGO
            </button>
          </div>

          {showCreateQuizForm && (
            <div className="modal">
              <div className="modalContent">
                <h2>Criar Novo Jogo</h2>
                <form onSubmit={handleCreateQuizSubmit} className="createQuizForm">
                  <div>
                    <label htmlFor="titulo">Título do Jogo</label>
                    <input
                      type="text"
                      id="titulo"
                      value={newQuiz.titulo}
                      onChange={(e) => setNewQuiz({ ...newQuiz, titulo: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="descricao">Descrição do Jogo</label>
                    <input
                      type="text"
                      id="descricao"
                      value={newQuiz.descricao}
                      onChange={(e) => setNewQuiz({ ...newQuiz, descricao: e.target.value })}
                      required
                    />
                  </div>
                  <div className="buttonGroup">
                    <button type="submit">Criar Jogo</button>
                    <button type="button" onClick={() => setShowCreateQuizForm(false)}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quizzes={{
                id: quiz.id || '',
                quizzes: quiz.titulo,
                answer: quiz.descricao
              }}
              onDelete={() => handleDeleteQuiz(quiz.id)}
            />
          ))}
        </div>
      </main>
      <footer className="footerConfigTeamRoomScreen" />
    </div>
  )
}

export default ConfigTeamRoomScreen