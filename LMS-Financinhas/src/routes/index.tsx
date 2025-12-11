import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/authContext'
import HomePage from '../pages/HomeScreen/HomeScreen'
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import ConfigTeamRoomScreen from '../pages/ConfigTeamsRoomScreen/ConfigTeamsRoomScreen'
import EnterRoomScreen from '../pages/EnterRoomScreen/EnterRoomScreen'
import ProfileSelectScreen from '../pages/ProfileSelectScreen/ProfileSelectSreen'
import SelectTeamScreen from '../pages/SelectTeamScreen/SelectTeamScreen'
import EditQuestionScreen from '../pages/EditQuestionScreen/EditQuestionScreen'
import RegisterScreen from '../pages/RegisterScreen/RegisterScreen'
import ConfigTeam from '../pages/ConfigTeams/ConfigTeams'
import TeacherViewRanking from '../pages/TeacherViewRanking/TeacherViewRanking'

const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Rota para a tela inicial */}
          <Route path="/" element={<HomePage />} />

          {/* Rota para a tela de Login */}
          <Route path="/login" element={<LoginScreen />} />

          {/* Rota para a tela de Perfil */}
          <Route path="/profile-select" element={<ProfileSelectScreen />} />

          {/* Rota para a tela de entrar na sala */}
          <Route path="/enter" element={<EnterRoomScreen />} />

          {/* Rota para a tela de selecionar time */}
          <Route path="/select-team/:roomCode" element={<SelectTeamScreen />} />

          {/* Rota para a tela editar pergunta */}
          <Route path="/edit-question/:questionId" element={<EditQuestionScreen />} />

          {/* Rota para a tela de visualização do ranking pelo professor */}
          <Route path="/teacher-view-ranking/:quizId" element={<TeacherViewRanking />} />

          {/*Rota para tela de configuração do quiz*/}
          <Route path="/config/:quizId" element={<ConfigTeam />} />

          {/* Rota para a tela de Registro */}
          <Route path="/register" element={<RegisterScreen />} />

          {/* Rota para a tela config team room */}
          <Route path="/config-team-room" element={<ConfigTeamRoomScreen />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}

export default AppRoutes