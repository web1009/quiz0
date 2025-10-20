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
          answer: 
          // `Página en preparación`
          `⭐️ 10/16 Tema de la lección y pregunta de reflexión

          📘 Tema de la lección: Un Corazón Puro 
          📜 Versículos de referencia: Sal86:11

          ✏️ Pregunta para reflexionar : 
          1. ¿Como puedo tener un corazón puro?

          2. ¿Por qué es importante delante de Dios tener un corazón puro?

          3. ¿Como puedo llegar al cielo, según la clase vista?

          4. ¿Como un creyente puede ver a Dios?

          ✅ Respuesta sugerida :
          1. Al guardar la palabra de Dios 

          2. Para poder hacer la voluntad de Dios.

          3. Corazón puro --> voluntad de Dios --> reino de los cielos 

          4. Mt5:8 Corazón limpió al guardar la palabra.`
        },
        {
          date: '2025-10-20', name: '2', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfbT7ybZrBCn77W1pQGNHiJqXYFVm50ioBVDdXZHcNxG8tuGw/viewform',
          answer: `Página en preparación`
// `⭐️ Tema de la lección y pregunta de reflexión

// 📆 Fecha : 25.10.20
// 📘 Tema de la lección: Una Mente Puesta en las Cosas de Arriba 
// 📜 Versículos de referencia: Col3:2

// ✏️ Pregunta para reflexionar : 
// 1. ¿Qué es lo que Dios desea que elijamos?

// 2. ¿Qué son las cosas de Arriba y las cosas de abajo?

// 3. ¿Que es una mente pecaminosa y una mente del espíritu?

// 4. ¿Como puedo recibir vida?

// ✅ Respuesta sugerida :
// 1. Dt30:19-20 la vida y la bendición 

// 2. • Arriba: Cielo --> Dios 
// • Abajo: Tierra --> muerte

// 3. • Mente pecaminosa: dedicada solo a las cosas de la carne.
// • Mente en el espíritu: puesta en las cosas de Dios y el cielo.

// 4. Jn6:63 por medio de la palabra.`
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
      <div className="App">
        {this.navabar()}
        <br />
        <div className="table-container">
          <div className="top-banner" />
          <Dashborad list={quizzes} />
        </div>
      </div>
    );
  }
}

export default App;


