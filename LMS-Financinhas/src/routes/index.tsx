
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomeScreen/HomeScreen'
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import EnterRoomScreen from '../pages/EnterRoomScreen/EnterRoomScreen'
import ProfileSelectScreen from '../pages/ProfileSelectScreen/ProfileSelectSreen'
import SelectTeamScreen from '../pages/SelectTeamScreen/SelectTeamScreen'
import EditQuestionScreen from '../pages/EditQuestionScreen/EditQuestionScreen'
import ConfigTeam from '../pages/ConfigTeams/ConfigTeams'
import MatchScreenWrapper from '../pages/MatchScreen/MatchScreenWrapper'

const AppRoutes: React.FC = () => {
  return (
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

        {/*Rota para tela de configuração do quiz*/}
        <Route path="/config/:quizId" element={<ConfigTeam />} />

        {/* Rota para tela do jogo */}
        <Route path="/match-screen/:roomCode/:teamName" element={<MatchScreenWrapper />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes