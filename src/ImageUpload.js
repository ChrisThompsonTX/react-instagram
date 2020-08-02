import React, { useState } from 'react'
import { Button } from '@material-ui/core'

function ImageUpload() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState('');

    return (
        <div>
            <h3>sup</h3>
            {/* post form */}
            {/* caption input */}
            {/* file input */}
            {/* post button */}
            <input 
                type="text" 
                placeholder="Enter a caption..." 
                onChange={event => setCaption(event.target.value)}value={} 
            />
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
