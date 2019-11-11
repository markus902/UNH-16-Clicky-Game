import React, { Component } from "react";
import ImageCard from "../ImageCard";
import Nav from "../Nav";
import Message from "../Message";
import images from "./ImageList.json";
import "./Game.css";


class Game extends Component {
    state = {
        images,
        score: 0,
        topScore: 0,
        clicked: [],
        won: false,
        lost: false,
        wonText: "Success!",
        lostText: "You loose!!! Try again!!!",
        resetText: "Congrats! Your achieved the highest score!",
        wonStyle: "alert alert-success text-center",
        lostStyle: "alert alert-danger text-center",
        restStyle: "alert alert-info text-center"
    }

    handleClick = (event) => {
        let score = this.state.score;
        let topScore = this.state.topScore;
        let id = event.target.id;
        let clicked = this.state.clicked;

        // shuffle image array
        images.sort(function () { return .5 - Math.random(); });


        // check if 
        if (clicked.indexOf(id) === -1) {
            this.setState({ score: score++, won: true });
            if (this.state.score >= this.state.topScore) {
                this.setState({ topScore: topScore++ });
            }
            // push clicked image into array
            clicked.push(id);
        }
        else {
            score = 0;
            clicked = [];
            this.setState({
                score: score,
                clicked: [],
                lost: true
            });
        }

        // resetting the won and lost messages
        setTimeout(() => {
            this.setState({
                won: false,
                lost: false,
            });
        }, 1500);

        this.setState({
            clicked: clicked,
            score: score,
            topScore: topScore
        });
    };

    render() {
        return (
            <div>
                <Nav className="row test-center"
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <p className="text-center">Click on an image to earn points, but don't click on any more than once!</p>
                <div className="container">

                    {this.state.won ? <Message message={this.state.wonText} messageStyle={this.state.wonStyle} /> : null}
                    {this.state.lost ? <Message message={this.state.lostText} messageStyle={this.state.lostStyle} /> : null}
                    {this.state.topScore === 12 ? <Message message={this.state.resetText} messageStyle={this.state.restStyle} /> : null}

                    <div className="row justify-content-center" >
                        {
                            this.state.images.map(elem => (
                                < ImageCard
                                    image={elem.url}
                                    id={elem.id}
                                    key={elem.id}
                                    handleClick={this.state.won || this.state.lost ? null : this.handleClick}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="footerBar"></div>
            </div >
        )
    }
}
export default Game;