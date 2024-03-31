import React from "react";
import './DescriptionBox.css'

const DescriptionBox =() => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt reiciendis commodi aperiam natus doloremque suscipit. Commodi, dolorem. Nulla, fugiat ipsa eos placeat magnam consectetur obcaecati corporis tenetur similique nihil qui!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quo laboriosam nobis dolorem eos mollitia non voluptate delectus molestiae, tenetur, sint quibusdam et deleniti corrupti nam rem dicta! Iste, commodi.</p>
            </div>
        </div>
    )
}

export default DescriptionBox