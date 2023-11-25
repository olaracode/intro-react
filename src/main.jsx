// JS + XML EXTENSIVE MARKUP LANGUAGE
// Virtual DOM
// Iniciamos la aplicación
// ReactDOM.createRoot: Iniciar la aplicacion de react
// ReactDOM.createRoot(elementoDeHTML).render(Elemento a renderizar)
// ReactDOM se usa para crear el proyecto de React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Local
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
