import React from 'react';
import './SinglePost.css';

const SInglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                 src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" 
                 alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Safak</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis ut minus, fugit quos nesciunt soluta ipsum quod in quasi repudiandae hic doloribus at illo! Veritatis laboriosam voluptatibus vero placeat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis ut minus, fugit quos nesciunt soluta ipsum quod in quasi repudiandae hic doloribus at illo! Veritatis laboriosam voluptatibus vero placeat!</p>
            </div>
        </div>
    );
};

export default SInglePost;