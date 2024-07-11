// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Ingreso from './pages/Ingreso';
import Listado from './pages/ListadoAlumnos';
import DetalleAlumno from './pages/DetalleAlumno';
import RequireAuth from './components/RequireAuth';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/ingreso"
              element={
                <RequireAuth>
                  <Ingreso />
                </RequireAuth>
              }
            />
            <Route
              path="/listado"
              element={
                <RequireAuth>
                  <Listado />
                </RequireAuth>
              }
            />
            <Route
              path="/alumno/:id"
              element={
                <RequireAuth>
                  <DetalleAlumno />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Navigate to="/listado" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
