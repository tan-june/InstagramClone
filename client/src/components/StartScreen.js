import React from 'react';
import logo from '../images/logo.png';
  
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
    if(statusCode === 1){
      const usernameoremail = document.getElementById('logina');
      const password = document.getElementById('loginb');
      if((usernameoremail.length > 5) && (password.length > 5)){
        //axios.query
        this.props.changeScreen('homePage');
      }
      else if (statusCode === 2){
        const name = document.getElementById('name');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password1 = document.getElementById('1pass');
        const password2 = document.getElementById('2pass');
        
        // if( (name.length !== 0) && (username.length !== 0) && (email.isEmail))
        //axios query
        this.props.changeScreen('homePage');
      }
    }
  }

  firstRender = () => {
    this.setState({
      content: (
        <div>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '100px', margin: '0 auto' }} />
            <h1 style={{ fontSize: '2 em', textAlign: 'center' }}>Instagram Clone</h1>
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
            <img src={logo} alt="Logo" style={{ width: '80px', margin: '0 auto' }} />
            <h1 style={{ fontSize: '2 em', textAlign: 'center' }}>Instagram Clone</h1>
            <h2 style={{ color: '#ec3f62', fontSize: '1.2em', textAlign: 'center' }}>Login</h2>

            <form action="" className="form">
              <input type="text" placeholder="Username/Email*" className="form__input" id="logina" required/>
              <input type="password" placeholder="Password*" className="form__input" id="loginb" required/>
            </form>
            <button className="button-62" onClick={this.firstRender}>
              Cancel
            </button>
            <button className="button-62" onClick={this.dataCheck(1)}>Login</button>
          </div>
        </div>
      ),
    });
  };

  signUpRender = () => {
    this.setState({
      content: (

        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '80px', margin: '0 auto' }} />
          <h1 style={{ fontSize: '2 em', textAlign: 'center' }}>Instagram Clone</h1>
          <h2 style={{ color: '#ec3f62', fontSize: '1.2em', textAlign: 'center' }}>Sign Up</h2>
          <form action="" className="form">
            <input type="text" placeholder="Name*" className="form__input" id="name" required/>
            <input type="text" placeholder="Username*" className="form__input" id="username" required/>
            <input type="email" placeholder="Email*" className="form__input" id="email" required/>
            <input type="password" placeholder="Password*" className="form__input" id="1pass" required/>
            <input type="password" placeholder="Confirm Password*" className="form__input" id="2pass" required/>
          </form>
          <br />
          <button className="button-62" onClick={this.firstRender}>
            Cancel
          </button>
          <button className="button-62">Sign Up</button>
        </div>
      ),
    });
  };

  render() {
    return (
      <div className="centered-container">
        <div className="content-container">
          {this.state.content}

        </div>
      </div>

    );
  }
}

export default StartScreen;
