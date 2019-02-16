import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    highScore: 2,
    score: 0,
    newArr: []
  };

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };


  // handleClick = id => {
  //   let clickedArr = this.state.newArr

  //   if (clickedArr.length > 0) {
  //     if (clickedArr.includes(id)) {
  //       // alert("you lose")
  //       this.setState({
  //         newArr: [],
  //         score: 0,
  //       })
  //       // this.setState({ score: this.state.score });
  //     } else {
  //     clickedArr.push(id)
  //     this.setState({
  //       newArr: clickedArr,
  //       score: this.state.score += 1

  //     })
  //     }
  //   } else {
  //     clickedArr.push(id)
  //   }

  //   console.log(this.state)

  //   if (this.state.score < this.state.highScore) {
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState.friends = this.shuffleArray(this.state.friends);
  //   } else if (this.state.score >= this.state.highScore) {
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ highScore: this.state.highScore + 1 });
  //     this.setState.friends = this.shuffleArray(this.state.friends);
  //   }
  // };

  handleClick = id => {
    let character = this.state.newArr
    let newscore = this.state.score

    if (character.length > 0 && character.includes(id)) {
      this.setState({
        newArr: [],
        score: 0,
        friends: this.shuffleArray(this.state.friends)
      })
    } else {
      character.push(id)
      this.setState({
        score: newscore += 1,
        friends: this.shuffleArray(this.state.friends),
        newArr: character
      })
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        })
      }
    }
  }


  render() {
    return(
      <div>
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick.bind(this)}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </div>
    );
  }
}

export default App;