import React from 'react';
import upload from '../images/upload.png';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        };
    }

    handleFileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
        });
    };

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


    checkContent = () => {
        const captionElement = document.getElementById('caption');
        const captionLength = captionElement ? captionElement.value.length : 0;
    
        if (this.state.selectedFile && captionLength > 5) {
            window.alert("Good to go!");
        } else {
            if (captionLength < 5 && this.state.selectedFile === null) {
                window.alert("Please add an image and caption.");
            } else if (captionLength < 5) {
                window.alert("Caption needs to be longer than 5 characters!");
            } else {
                window.alert("Please upload an image.");
            }
        }
    };
    

    render() {
        return (
            <div className="homepage-centered-container1">
                <div className="homepage-content-container1">
                    {/* <img src={logo} alt="Logo" style={{ textAlign: 'center', width: '150px', margin: '0 auto' }} /> */}

 <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>

    <h1 style={{ color: '#3a60a1', marginLeft: '20px', marginTop: '25px', marginBottom: '0', textAlign: 'left' }}> | Create New Post </h1>

    {/* Add Cancel Button */}
    {/* <button className='button-62' onClick={() => window.alert("Post creation canceled")} style={{ backgroundColor: '#ccc', alignItems: 'right' }}>
        Cancel
    </button> */}

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
