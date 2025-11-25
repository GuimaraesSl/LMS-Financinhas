
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomeScreen/HomeScreen'
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import SelectTeamScreen from '../pages/SelectTeamScreen/SelectTeamScreen'

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Rota para a tela inicial */}
        <Route path="/" element={<HomePage />} />

         {/* Rota para a tela de Login */}
        <Route path="/login" element={<LoginScreen />} />

        {/* Rota para a tela de selecionar time */}
        <Route path="/select-team/:roomCode" element={<SelectTeamScreen />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes