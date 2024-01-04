import React from 'react';
import upload from '../images/upload.png';
import axios from 'axios';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  
  handleRemoveImage = () => {
    this.setState({
      selectedFile: null,
    });
  };

  handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      this.setState({
        selectedFile: droppedFile,
      });
    }
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({
      selectedFile: file,
    });
  };

  checkContent = async () => {
    try {
      const captionElement = document.getElementById('caption');
      const captionLength = captionElement ? captionElement.value.length : 0;
      if (this.state.selectedFile && captionLength > 5) {
        // window.alert('Good to go!');
        const formData = new FormData();
        formData.append('image', this.state.selectedFile);
        formData.append('caption', captionElement.value);
        try {
          const response  = await axios.post('http://localhost:8000/NewPost', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        } catch (error) {
          console.error('Error uploading image and caption:', error);
        }
      } else {
        if (captionLength < 5 && this.state.selectedFile === null) {
          window.alert('Please add an image and caption.');
        } else if (captionLength < 5) {
          window.alert('Caption needs to be longer than 5 characters!');
        } else {
          window.alert('Please upload an image.');
        }
      }
    } catch (error) {
      console.error('Error in checkContent:', error);
    }
  };

  render() {
    return (
      <div className="homepage-centered-container1">
        <div className="homepage-content-container1">


                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h1 style={{ color: '#3a60a1', marginLeft: '20px', marginTop: '25px', marginBottom: '0', textAlign: 'left' }}> | Create New Post </h1>

  <button
    className='button-62'
    onClick={() => this.props.changeScreen('Standard')}
    style={{ backgroundColor: 'red', color: 'white', marginRight: '20px', alignSelf: 'center' }}
  >
    Cancel
  </button>
</div>




<div style={{ marginTop: '5px', textAlign: 'center' }}>

                    {this.state.selectedFile && (
    <div style={{ margin: '20px auto', textAlign: 'center' }}>
        <img
            src={URL.createObjectURL(this.state.selectedFile)}
            alt="Uploaded"
            style={{ width: '60%', height: '30%', marginBottom: '20px' }}
        />
        <button
            className='button-62'
            style={{ textAlign: 'center', display: 'block', margin: '0 auto', marginBottom: '10px' }}
            onClick={this.handleRemoveImage}
        >
            Remove Image
        </button>
    </div>
)}


{!this.state.selectedFile && (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
            id="drop_zone"
            onDrop={this.handleDrop}
            onDragOver={this.handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
            className='uploadButton'
        >
            <img src={upload} width='80px' alt="Upload here." />
            <p>Drag your image to this <i>drop zone</i> or click to <i>upload</i>.</p>
        </div>
        
        <input
  id="fileInput"
  type="file"
  accept="image/*"
  onChange={this.handleFileChange}
  style={{ display: 'none' }}
/>
    </div>
)}
                   
 <input maxLength="75" className='inputText' type="text" id="caption" style={{ width: '85%', display: 'block', margin: '0 auto', marginBottom: '10px' }} placeholder="Caption" />
    <input className='button-62' onClick={this.checkContent} style={{ display: 'block', margin: '0 auto', marginTop:'30px', marginBottom: '20px' }} type="submit" />
</div>

                </div>
            </div>
        );
    }
}

export default NewPost;
