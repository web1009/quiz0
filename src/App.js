import React, { Component } from 'react';
import './App.css';
import Login from './screens/login/login';
import Register from './screens/register/register';
import Dashborad from './screens/dashborad/dashboard';
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    // 로컬스토리지에서 로그인 상태와 현재 페이지 가져오기
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedPage = localStorage.getItem('currentPage') || 'login';

    this.state = {
      quizzes: [
        { date: '2025-10-16', name: '1', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeqBNO7RnbAoeguIG53SHg_5sJIX22rHuXXRWbkjbPU-SdB3w/viewform',
          answer: `
📘 Tema: El reino de Dios y el reino del mundo

1. ¿Qué diferencia hay entre los dos reinos?
2. ¿Cómo llega el reino de Dios?
3. ¿Qué señales lo acompañan?

✅ Respuesta sugerida:
1. El reino de Dios está guiado por la palabra y justicia; el mundo por deseos humanos.
2. Llega cuando se cumple la profecía (Dn 2:44).
3. Hay cumplimiento, entendimiento de la palabra, y frutos espirituales.
          `
         },
        { date: '2025-10-20', name: '2', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScQm9d8Zx6Jh3Z1RqtvO-xyz123/viewform' },
        { date: '2025-10-23', name: '3', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeJk3xyz456/viewform' }
      ],
      pageStack: [savedPage]
    };
  }

  // Navbar
  navabar() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Quiz App
        </a>
      </nav>
    );
  }

  // 페이지 전환 함수
 render() {
    const { quizzes } = this.state;

    return (
      <div className="App">
        {this.navabar()}
        <br />
        <Dashborad list={quizzes} />
      </div>
    );
  }
}

export default App;


