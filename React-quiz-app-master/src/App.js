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
      user: isLoggedIn,      // 로그인 상태
      login: !isLoggedIn && savedPage === 'login',
      register: !isLoggedIn && savedPage === 'register',
      quizzes: [
        { date: '2025-10-16', name: '1', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeqBNO7RnbAoeguIG53SHg_5sJIX22rHuXXRWbkjbPU-SdB3w/viewform' },
        { date: '2025-10-20', name: '2', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScQm9d8Zx6Jh3Z1RqtvO-xyz123/viewform' },
        { date: '2025-10-23', name: '3', formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeJk3xyz456/viewform' }
      ],
      pageStack: [savedPage]
    };

    // 바인딩
    this.navabar = this.navabar.bind(this);
    this.registerPage = this.registerPage.bind(this);
    this.loginPage = this.loginPage.bind(this);
    this.dashboradPage = this.dashboradPage.bind(this);
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
  registerPage() {
    localStorage.setItem('currentPage', 'register');
    this.setState({ login: false, register: true, user: false, pageStack: ['register'] });
  }

  loginPage() {
    localStorage.setItem('currentPage', 'login');
    this.setState({ login: true, register: false, user: false, pageStack: ['login'] });
  }

  dashboradPage() {
    localStorage.setItem('currentPage', 'dashboard');
    this.setState({ login: false, register: false, user: true, pageStack: ['dashboard'] });
  }

  render() {
    const { user, login, register, quizzes } = this.state;

    return (
      <div className="App">
        <this.navabar />
        <br />

        {!user && login && <Login registerPage={this.registerPage} dashboardPage={this.dashboradPage} />}
        {!user && register && <Register loginPage={this.loginPage} />}
        {user && <Dashborad list={quizzes} />}
      </div>
    );
  }
}

export default App;


