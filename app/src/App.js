import './App.scss';
import './App.sass';
import minhaImagem from './images/foto.png'; // Substitua pelo caminho da sua imagem

import React, { useState, useEffect, useRef } from 'react';

import { Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NovaPagina from './pages/NewPages';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    "[user@localhost ~]$ python",
    "Python 3.8.5 (default, Jul 28 2020, 12:59:40)",
    "[GCC 10.2.0] on linux",
    "Type 'help', 'copyright', 'credits' or 'license' for more information."
  ]);
  const terminalRef = useRef(null); // Cria uma referência para o terminal

  useEffect(() => {
    // Sempre rola para o final após atualizações no terminalLogs
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]); // Dependência: terminalLogs

  useEffect(() => {
    fetch("/health")
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data)
        setLoading(false);
      });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const newLogs = [...terminalLogs, `>>> ${inputValue}`]; // Adiciona o comando ao terminal

      switch (inputValue) {
        case 'help':
          newLogs.push('Comandos disponíveis: help, copyright, credits, license');
          break;
        case 'copyright':
          newLogs.push('Copyright 2024. Todos os direitos reservados.');
          break;
        case 'credits':
          newLogs.push('Desenvolvido by Oner. Agradecimentos especiais à comunidade React e Python.');
          break;
        case 'license':
          newLogs.push('Licenciado sob a licença MIT.');
          break;
        default:
          newLogs.push(`'${inputValue}' não é reconhecido como um comando interno ou externo.`);
          break;
      }

      setTerminalLogs(newLogs);
      setInputValue('');
    }
  };
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Router>
        <div>
          <Navbar>
            <Navbar.Brand as={Link} to="/">PORTIFÓLIO</Navbar.Brand>
            <Nav>
              <Nav.Item as={Link} to="/">Principal</Nav.Item>
              <Nav.Item as={Link} to="/novidades">Novidades</Nav.Item>
              <Nav.Item as={Link} to="/projetos">Projetos</Nav.Item>
              <Nav.Menu title="Sobre">
                <Nav.Item as={Link} to="/sobre/mim">Mim</Nav.Item>
                <Nav.Menu title="Contatos">
                  <Nav.Item as={Link} to="/contatos/email">Via email</Nav.Item>
                  <Nav.Item as={Link} to="/contatos/telefone">Via telefone</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
            <Nav pullRight>
              <Nav.Item as={Link} to="/configuracoes" icon={<CogIcon />}>Configurações</Nav.Item>
            </Nav>
          </Navbar>

          <TransitionGroup>
            <CSSTransition timeout={1200} classNames="fade" key={window.location.key}>
              <Routes>
                <Route path="/" element={
                  <div className="page">
                    <div className="container-body">
                      <div className='sobre'>
                        <h1>Health Check</h1>
                        {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
                      </div>
                      <div className="terminal">
                        <div className="terminal-header">
                          <div className="terminal-button red"></div>
                          <div className="terminal-button yellow"></div>
                          <div className="terminal-button green"></div>
                        </div>
                        <div className="terminal-body" id="terminalBody" ref={terminalRef}>
                          {terminalLogs.map((log, index) => (
                            <p key={index}>{log}</p>
                          ))}
                          <p>>> <input type="text" value={inputValue} onChange={handleChange} onKeyPress={handleKeyPress} className="terminal-input" autoFocus /></p>
                        </div>
                      </div>
                    </div>
                    <main className="main page__main">
                      <div className="card main__card">
                        <div aria-hidden="true">
                          <span className="card__line card__line_left"></span>
                          <span className="card__line card__line_right"></span>
                          <span className="card__line card__line_top"></span>
                          <span className="card__line card__line_bottom"></span>
                        </div>
                      <div className="foto">
                        <img src={minhaImagem} alt="Foto do perfil" className="image-bottom-right" />
                      </div>
                      </div>
                    </main>
                  </div>
                } />
                <Route path="/novidades" element={<div><NovaPagina /></div>} />
                <Route path="/projetos" element={<div><NovaPagina /></div>} />
                <Route path="/sobre/mim" element={<div><NovaPagina /></div>} />
                <Route path="/contatos/email" element={<div><NovaPagina /></div>} />
                <Route path="/contatos/telefone" element={<div><NovaPagina /></div>} />
                {/* Adicione mais rotas conforme necessário */}
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Router>
    </div>
  );
}

export default App;
