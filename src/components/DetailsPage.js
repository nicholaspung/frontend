import React from "react";
import PropTypes from "prop-types";

import { Link as RouterLink } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import {getProblems, getUsers} from '../actions'
import { styled } from '@material-ui/styles';

import Card from '@material-ui/core/Card';

import {
  DetailsCard,DetailsContainer,DetailsTitle,DetailsDescription,DetailsBackButton,DetailsBackLink,
  SigneeContainer,SigneeCount,
  ProgressContainer,ProgressTitle,ProgressBarContainer
} from "../static/stylingComponents";
import { connect } from 'react-redux';

const totalSignedNeeded = 10;


const ProgressBar = styled(Card)({
  fontWeight:'bold',
  backgroundColor:'#458B74',
  height:'35px'
})


class  DetailsPage extends React.Component {

  componentDidMount(){
    this.props.getProblems()
    this.props.getUsers()
  }

  getSignee = () =>{
    const signed = this.props.users.filter(signee => `${signee.problem_id}` === this.props.match.params.id);
    return signed.length
  }


  render(){
    const { id } = this.props.match.params;
    const problem = this.props.problems.find(prob => `${prob.id}` === id);
   
    //const signed = props.signees;

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
  
            <SigneeContainer>
            <SigneeCount variant="body2" color="textSecondary" component="p">
              {`${this.getSignee()} people signed up to help`}
            </SigneeCount>
          </SigneeContainer>
  
           <ProgressContainer>
            <ProgressTitle variant="body2" color="textSecondary" component="p">
                Progress Bar
            </ProgressTitle>
            <ProgressBarContainer>
              <ProgressBar style={{width: (this.getSignee() / totalSignedNeeded) * 1000 }}></ProgressBar>
            </ProgressBarContainer>
          </ProgressContainer>
          </DetailsContainer>
          <SignUpForm problem_idYo={id} />
        </div>
      );
    }

  
}


DetailsPage.defaultProps = {
  problems: {},
  getUsers() {},
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


const mapStateToProps = ({problems, users})=> ({problems, users});
export default connect(mapStateToProps, {getProblems, getUsers})(DetailsPage);
