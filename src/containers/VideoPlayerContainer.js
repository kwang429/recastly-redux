import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

let mapStateToProps = (state) => {
  return {video: state.currentVideo}; // The tests want us to name it currentVideo
};

var VideoPlayerContainer = connect(
  mapStateToProps,
  null
)(VideoPlayer);

export default VideoPlayerContainer;
