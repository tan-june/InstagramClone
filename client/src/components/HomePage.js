import React from 'react';
import logo from '../images/logo.png';
import NewPost from './NewPost';
import create from '../images/create.png';
import profile from '../images/profile.png';
import home from '../images/home.png';
import refresh from '../images/refresh.png';
import logout from '../images/logout.png';

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Standard', 
    };
  }

  changeScreen = (val) => {
    this.setState({currentPage: val});
  }

  renderContent() {
    switch (this.state.currentPage) {
      
      case 'newPost':
      return <NewPost changeScreen={this.changeScreen} />;

      case 'Standard':
      default:
        return (<h1>Standard.</h1>);
    }
  }

  render() {
    return (
      <div className="homepage-centered-container">
       
        <div className="homepage-content-container">

          <div style={{ display: 'flex'}}>

            <div style={{ display: 'flex', width: '50%', padding: '20px', alignItems: 'center', boxSizing: 'border-box', marginLeft: '30px', justifyContent: 'flex', textAlign: 'left' }}>
              <img src={logo} alt="Logo" style={{ width: '270px' }} />
            </div>

            <div style={{ display: 'flex', width: '50%', padding: '60px', alignItems: 'center', boxSizing: 'border-box', marginLeft: '30px', justifyContent: 'flex-end' }}>
              <a href="#refresh" onClick={() => this.changeScreen('refresh')} title="Refresh">
                <img src={refresh} alt="refresh" style={{ width: '45px', height: '45px', marginLeft: '20px' }} />
              </a>
              <a href="#create" onClick={() => this.changeScreen('newPost')} title="New Post">
                <img src={create} alt="Create" style={{ width: '45px', height: '45px', marginLeft: '22px' }} />
              </a>
              <a href="#home" onClick={() => this.changeScreen('Home')} title="Go to Home">
                <img src={home} alt="Home" style={{ width: '45px', height: '45px', marginLeft: '20px' }} />
              </a>
              <a href="#profile" onClick={() => this.changeScreen('profile')} title="Profile">
                <img src={profile} alt="Profile" style={{ width: '45px', height: '45px', marginLeft: '20px' }} />
              </a>
              <a href="#logout" onClick={() => this.changeScreen('logout')} title="Logout">
                <img src={logout} alt="Logout" style={{ width: '45px', height: '45px', marginLeft: '20px' }} />
              </a>
            </div>
          
          </div>

          {this.renderContent()}

        </div>


      </div>
    );
  }
}

export default HomePage;
