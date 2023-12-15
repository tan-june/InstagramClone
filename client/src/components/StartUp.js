import React from 'react';

class Startup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      login: false,
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div
        style={{
          width: '30%',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 2000px rgba(192, 223, 217, 1)',
        }}
      >
        <center><img src="" alt="Logo" style={{ width: '80px', margin: '0 auto' }} /></center>
        <h1 style={{ fontSize: '1.5em', textAlign: 'center' }}>Instagram</h1>
      </div>
      </div>
    );
  }
}

export default Startup;