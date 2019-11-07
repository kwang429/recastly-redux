import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

let mapStatetoProps = (state) => {
  return {
    videos: state.videoList
    // we're calling videoList bc the tests got mad when we didn't
  };
};

let mapDispatchtoProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
});

var VideoListContainer = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(VideoList);

export default VideoListContainer;
