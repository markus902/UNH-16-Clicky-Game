import React, { Component } from "react";
import ImageCard from "../ImageCard";
import Nav from "../Nav";
import images from "./ImageList.json";



class Game extends Component {
    state = {
        images,
        score: 0,
        topScore: 0,
    }

    handleClick = () => {

        let currentScore = this.state.score;

        currentScore++;
        // increment Score
        this.setState({ score: currentScore });
        console.log(currentScore);



    };

    render() {
        return (
            <div className="container">
                <Nav className="row test-center" />
                <div className="row justify-content-center" >
                    {
                        this.state.images.map(elem => (
                            < ImageCard
                                image={elem.url}
                                id={elem.id}
                                key={elem.id}
                                handleClick={this.handleClick}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Game;