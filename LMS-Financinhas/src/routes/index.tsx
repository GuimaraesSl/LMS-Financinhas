
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomeScreen/HomeScreen'
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import ConfigTeam from '../pages/ConfigTeams/ConfigTeams'

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Rota para a tela inicial */}
        <Route path="/" element={<HomePage />} />

         {/* Rota para a tela de Login */}
        <Route path="/login" element={<LoginScreen />} />

        {/*Rota para tela de configuração do quiz*/}
        <Route path="/config/:quizId" element={<ConfigTeam />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes