
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomeScreen/HomeScreen'
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import ConfigTeamRoomScreen from '../pages/ConfigTeamsRoomScreen/ConfigTeamsRoomScreen'

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Rota para a tela inicial */}
        <Route path="/" element={<HomePage />} />

         {/* Rota para a tela de Login */}
        <Route path="/login" element={<LoginScreen />} />

        {/* Rota para a tela edit screen */}
        <Route path="/config-team-room" element={<ConfigTeamRoomScreen />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes