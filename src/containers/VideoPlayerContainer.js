import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

let mapStateToProps = (state) => {
  return {video: state.video};
};

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default VideoPlayerContainer;
