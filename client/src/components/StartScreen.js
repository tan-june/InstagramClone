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

  firstRender = () => {
    this.setState({
      content: (
        <div>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '100px', margin: '0 auto' }} />
            <h1 style={{ fontSize: '2 em', textAlign: 'center' }}>Instagram</h1>
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
              <input type="text" placeholder="Username" className="form__input" id="username" />
              <input type="password" placeholder="Password" className="form__input" id="1pass" />
            </form>

            <button className="button-62" onClick={this.firstRender}>
              Cancel
            </button>
            <button className="button-62">Login</button>
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
          <h1 style={{ fontSize: '2 em', textAlign: 'center' }}>Instagram</h1>
          <h2 style={{ color: '#ec3f62', fontSize: '1.2em', textAlign: 'center' }}>Sign Up</h2>
          <form action="" className="form">
            <input type="text" placeholder="Name" className="form__input" id="name" />
            <input type="text" placeholder="Username" className="form__input" id="username" />
            <input type="email" placeholder="Email" className="form__input" id="email" />
            <input type="password" placeholder="Password" className="form__input" id="1pass" />
            <input type="password" placeholder="Confirm Password" className="form__input" id="2pass" />
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
