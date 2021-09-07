import React from 'react';
import "./Write.css"

const Write = () => {
    return (
        <div className="write">
            <img 
                className="writeImg"
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="img"
                />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}  />
                    
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText">

                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
};

export default Write;