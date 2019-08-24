import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProblems } from '../actions';

class DetailsPage extends Component {
  componentDidMount() {
    this.props.getProblems();
  }

  render() {
    const { id } = this.props.match.params;
    const { problems } = this.props;

    const problem = problems.find((item) => `${item.id}` === id);

    if (!problem) {
      return (
        <div>
          <h1>You must be lost </h1>
        </div>
      );
    }
    return (
      <Button>
        <Link to="/problems">Back To Problem Page</Link>
      </Button>
    );
  }
}

const mapStateToProps = (state) => ({
  problems: state.problems
});

DetailsPage.defaultProps = {
  problems: {},
  getProblems() {}
};

DetailsPage.propTypes = {
  problems: PropTypes.shape({
    find: PropTypes.func
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired,

  getProblems: PropTypes.func
};

export default connect(
  mapStateToProps,
  { getProblems }
)(DetailsPage);
