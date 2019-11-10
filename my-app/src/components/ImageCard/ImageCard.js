import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
    return (
        <div className="imageDiv" key={props.id}>
            <img className="imageDiv" src={props.image} alt="" key={props.id} onClick={props.handleClick}></img>
        </div>
    )
}
export default ImageCard;