import React from 'react';
import logo from '../images/logofront.png';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    this.firstRender();
  }

  dataCheck = (statusCode) => {
    if (statusCode === 1) {
      const usernameoremail = document.getElementById('logina').value;
      const password = document.getElementById('loginb').value;
      if (usernameoremail.length > 5 && password.length > 5) {
        //axios.query
        this.props.changeScreen('homePage');
      }
    } else if (statusCode === 2) {
      const name = document.getElementById('name').value;
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password1 = document.getElementById('1pass').value;
      const password2 = document.getElementById('2pass').value;

      if (name.length !== 0 && username.length !== 0 && email.includes('@') && password1 === password2) {
        //axios query
        this.props.changeScreen('homePage');
      }
    }
  };

  firstRender = () => {
    this.setState({
      content: (
        <div>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '300px', margin: '0 auto' }} />
            <h1 style={{ margin: '0', fontSize: '1em', textAlign: 'center' }}>Clone</h1>
            <br />
            <button className="button-62" onClick={this.loginRender}>
              Login
            </button>
            <button className="button-62" onClick={this.signUpRender}>
              Sign Up
            </button>
            <button className="button-62" onClick={() => this.props.changeScreen('homePage')}>
              Guest
            </button>
          </div>
        </div>
      ),
    });
  };

  loginRender = () => {
    this.setState({
      content: (
        <div>
          <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '300px', margin: '0 auto' }} />
            <h1 style={{ margin: '0', fontSize: '1em', textAlign: 'center' }}>Clone</h1>
            <h2 style={{ color: '#ec3f62', fontSize: '1.2em', textAlign: 'center' }}>Login</h2>

            <form action="" className="form">
              <input type="text" placeholder="Username/Email*" className="inputText" id="logina" required />
              <input type="password" placeholder="Password*" className="inputText" id="loginb" required />
            </form>
            <button className="button-62" onClick={this.firstRender}>
              Cancel
            </button>
            <button className="button-62" onClick={() => this.dataCheck(1)}>
              Login
            </button>
          </div>
        </div>
      ),
    });
  };

  signUpRender = () => {
    this.setState({
      content: (
        <div style={{ textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '300px', margin: '0 auto' }} />
            <h1 style={{ margin: '0', fontSize: '1em', textAlign: 'center' }}>Clone</h1>
          <h2 style={{ color: '#ec3f62', fontSize: '1.2em', textAlign: 'center' }}>Sign Up</h2>
          <form action="" className="form">
            <input type="text" placeholder="Name*" className="inputText" id="name" required />
            <input type="text" placeholder="Username*" className="inputText" id="username" required />
            <input type="email" placeholder="Email*" className="inputText" id="email" required />
            <input type="password" placeholder="Password*" className="inputText" id="1pass" required />
            <input type="password" placeholder="Confirm Password*" className="inputText" id="2pass" required />
          </form>
          <br />
          <button className="button-62" onClick={this.firstRender}>
            Cancel
          </button>
          <button className="button-62" onClick={() => this.dataCheck(2)}>
            Sign Up
          </button>
        </div>
      ),
    });
  };

  render() {
    return (
      <div className="centered-container">
        <div className="content-container">{this.state.content}</div>
      </div>
    );
  }
}

export default StartScreen;