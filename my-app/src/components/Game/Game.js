import React, { Component } from "react";
import ImageCard from "../ImageCard";
import Nav from "../Nav";
import images from "./ImageList.json";


class Game extends Component {
    state = {
        images,
        score: 0,
        topScore: 0,
        clicked: []
    }

    handleClick = (event) => {
        let score = this.state.score;
        let topScore = this.state.topScore;
        let id = event.target.id;
        let clicked = this.state.clicked;

        console.log(score, topScore);

        // shuffle image array
        images.sort(function () { return .5 - Math.random(); });

        if (clicked.indexOf(id)) {
            clicked.push(id);
            score++;
            if (this.state.score >= this.state.topScore)
                topScore++;

        }
        else {
            score = 0;
            clicked = [];
            this.setState({
                score: 0,
                clicked: []
            })
        }
        this.setState({
            clicked: clicked,
            score: score,
            topScore: topScore
        });
        if (this.state.topScore == 12) {
            this.setState({ topScore: 0, score: 0, clicked: [] });
            alert("Congrats! Your achieved the highest score!");
        }
    };

    render() {
        return (
            <div className="container">
                <div>
                    <Nav className="row test-center"
                        score={this.state.score}
                        topScore={this.state.topScore}
                    />
                </div>
                <div className="row justify-content-center" >
                    {
                        this.state.images.map(elem => (
                            < ImageCard
                                image={elem.url}
                                id={elem.id}
                                key={elem.id}
                                handleClick={this.handleClick}
                                id={elem.id}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Game;