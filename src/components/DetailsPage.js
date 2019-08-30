import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { getProblems } from "../actions";

// import { styled } from '@material-ui/styles';
// import Card from '@material-ui/core/Card';
import SignUpForm from "./SignUpForm";

import {
  DetailsCard,
  DetailsContainer,
  DetailsTitle,
  DetailsDescription,
  DetailsBackButton,
  DetailsBackLink
} from "../static/stylingComponents";

// const signee = [
//   {name:"Henry", email:"something@gmail.com"},
//   {name:"Alan", email:"something@gmail.com"},
//   {name:"Nicholas", email:"something@gmail.com"},
//   {name:"Tina", email:"something@gmail.com"},
//   {name:"Raydon", email:"something@gmail.com"},
// ];

// const totalSignedNeeded = 10;

//const progress = (signee.length / totalSignedNeeded) * 100;

// const ProgressBar = styled(Card)({
//   fontWeight:'bold',
//   width:`${progress.toString()}%`,
//   backgroundColor:'#458B74',
//   height:'35px'
// })

class DetailsPage extends Component {
  componentDidMount() {
    this.props.getProblems();
  }

  render() {
    const { id } = this.props.match.params;
    const { problems } = this.props;

    const problem = problems.find(item => `${item.id}` === id);

    if (!problem) {
      return (
        <div>
          <h1>You must be lost </h1>
        </div>
      );
    }
    return (
      <div>
        <DetailsContainer>
          <DetailsBackButton>
            <DetailsBackLink component={RouterLink} to="/problems">
              Back To Problem Page
            </DetailsBackLink>
          </DetailsBackButton>
          <DetailsCard>
            <DetailsTitle variant="body2" color="textSecondary" component="p">
              {problem.problem_title}
            </DetailsTitle>
            <DetailsDescription
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {problem.problem_description}
            </DetailsDescription>
          </DetailsCard>

          {/* <SigneeContainer>
          <SigneeCount variant="body2" color="textSecondary" component="p">
            {`${signee.length} people signed up to help`}
          </SigneeCount>
        </SigneeContainer> */}

          {/* <ProgressContainer>
          <ProgressTitle variant="body2" color="textSecondary" component="p">
              Progress Bar
          </ProgressTitle>
          <ProgressBarContainer>
            <ProgressBar></ProgressBar>
          </ProgressBarContainer>
        </ProgressContainer> */}
        </DetailsContainer>
        <SignUpForm problem_idYo={id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
