import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className="post">
            <img className="postImg"
            src="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus exercitationem autem ut ipsum? Voluptatem ut corporis iusto, architecto, voluptatum nemo atque officiis laboriosam explicabo placeat ea nulla soluta natus!</p>
        </div>
    );
};

export default Post;