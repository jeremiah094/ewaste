'use strict';

const e = React.createElement; //create an element

class LikeButton extends React.Component { //class LikeButton extends class React.Component
  constructor(props) {  //constructor
    super(props);   //the class LikeButton uses props from superclass
    this.state = { liked: false };  //initial state is not liked
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.'; //when state turns like it returns the string You liked this
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },  //the state changes when clicked
      'Like'
    );
  }
}

const domContainer = document.querySelector('#likeButton');  //gets element from html
ReactDOM.render(e(LikeButton), domContainer);
