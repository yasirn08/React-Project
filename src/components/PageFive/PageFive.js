import React, { Component } from "react";
import './PageFive.css';

class FifthPage extends Component {
  state = {};
  render() {
    return (
      <div class="fifthpage">
        <iframe
          scrolling="no"
          frameborder="0"
          id="player"
          src="https://player.vimeo.com/video/336001025?app_id=122963&amp;referrer=https%3A%2F%2Fwww.getaround.com%2F"
          allowfullscreen="true"
          width="%"
          height="1000"
        />
      </div>
    );
  }
}

export default FifthPage;
