import React from 'react';
import PropTypes from 'prop-types';
import muxjs from 'mux.js';
const shaka = require('shaka-player/dist/shaka-player.ui.js');

class Player extends React.PureComponent {
  constructor(props) {
    super(props);

    this.video = React.createRef();
    this.videoContainer = React.createRef();
    window.muxjs = muxjs;
  }

  componentDidMount() {
    var manifestUri = this.props.manifestUrl;
    var licenseServer = this.props.licenseServer;

    let video = this.video.current;
    let videoContainer = this.videoContainer.current;

    var player = new shaka.Player(video);

    const ui = new shaka.ui.Overlay(player, videoContainer, video);
    const controls = ui.getControls();

    player.configure({
      preferredTextLanguage: 'en',
      streaming: {
        bufferingGoal: 120,
      },
    });

    const onError = (error) => {
      // Log the error.
      console.error('Error code', error.code, 'object', error);
    };

    player
      .load(manifestUri)
      .then(function () {
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
      })
      .catch(onError); // onError is executed if the asynchronous load fails.
  }

  play = () => {
    console.log('play clicked');
    this.video?.current?.play();
  };

  render() {
    return (
      <div
        className='shadow-lg mx-auto max-w-full'
        ref={this.videoContainer}
        style={{ width: '800px' }}>
        <video
          id='video'
          ref={this.video}
          className='w-full h-full'
          poster={this.props.posterUrl}></video>
      </div>
    );
  }
}

Player.propTypes = {
  licenseServer: PropTypes.string,
  manifestUrl: PropTypes.string,
  posterUrl: PropTypes.string,
};

export default Player;
