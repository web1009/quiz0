import React, { Component } from 'react';
import './App.css';
import Dashborad from './screens/dashborad/dashboard';
import logo from './logo.png';
import backImage from './back.jpg';


class App extends Component {
  constructor(props) {
    super(props);

    // 로컬스토리지에서 로그인 상태와 현재 페이지 가져오기
    const savedPage = localStorage.getItem('currentPage') || 'login';

    this.state = {
      quizzes: [
        {
          date: '2025-10-16', name: '1', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfWfVNwuB_nnrdzB9NKp5mTFFuL_1Yoon-N-4r4o_nD3fUG1w/viewform',
          answer: `Página en preparación`
          // `⭐️ 10/16 Tema de la lección y pregunta de reflexión

          // 📘 Tema de la lección: Un Corazón Puro 
          // 📜 Versículos de referencia: Sal86:11

          // ✏️ Pregunta para reflexionar : 
          // 1. ¿Como puedo tener un corazón puro?

          // 2. ¿Por qué es importante delante de Dios tener un corazón puro?

          // 3. ¿Como puedo llegar al cielo, según la clase vista?

          // 4. ¿Como un creyente puede ver a Dios?

          // ✅ Respuesta sugerida :
          // 1. Al guardar la palabra de Dios 

          // 2. Para poder hacer la voluntad de Dios.

          // 3. Corazón puro --> voluntad de Dios --> reino de los cielos 

          // 4. Mt5:8 Corazón limpió al guardar la palabra.`
        },
        {
          date: '2025-10-20', name: '2', formUrl: ' ',
          answer: `Página en preparación`
        }

      ],
      pageStack: [savedPage]
    };
  }

  // Navbar
  navabar() {
    return (
      <nav className="navbar navbar-light bg-light">
        {/* <a className="navbar-brand" href="#"> */}
        <button className="navbar-brand" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' /* 여기에 추가 스타일 */ }}>
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Quizzes
        </button>
      </nav>
    );
  }

  // 페이지 전환 함수
  render() {
    const { quizzes } = this.state;

    return (
      <div>
        {/* 배경 div */}
        <div
          className="background"
          style={{ backgroundImage: `url(${backImage})` }}
        ></div>

        <div className="App">
          {this.navabar()}
          <br />
          <Dashborad list={quizzes} />
        </div>
      </div>
    );
  }
}

export default App;


