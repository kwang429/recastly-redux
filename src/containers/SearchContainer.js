import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

let mapDispatchtoProps = (dispatch) => {
  return {
    // named it this bc the tests wanted us to
    handleSearchInputChange: (query) => {
      dispatch(handleSearchChange(query));
      // this invokes dispatch() on whatever
      // action object we get from handleSearchChange(query)
    }
  };
};

var SearchContainer = connect(
  null,
  mapDispatchtoProps
)(Search);

export default SearchContainer;
