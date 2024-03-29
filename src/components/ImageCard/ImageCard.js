import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
    return (
        <div className="imageDiv" key={props.id}>
            <img className={props.wobble} src={props.image} alt="" key={props.id} onClick={props.handleClick} id={props.id}></img>
        </div>
    )
}
export default ImageCard;