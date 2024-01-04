import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="homepage-centered-container1">
                <div className="homepage-content-container1">
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>

<h1 style={{ color: '#3a60a1', marginLeft: '20px', marginTop: '25px', marginBottom: '0', textAlign: 'left' }}> | Profile </h1>


</div>

<div style={{ marginTop: '5px', marginLeft: '20px', alignItems:'left', textAlign: 'left' }}>

<h2><i>this.userData.username</i></h2>

<button className='button-62' onClick={this.checkContent} style={{ display: 'block', alignItems:'left', background: 'red', margin: '0 auto', marginTop:'30px', marginBottom: '20px' }} type="button">Edit Profile</button>
Posts:

</div>

<br /></div>
</div>

        );
    }


}

export default Profile;