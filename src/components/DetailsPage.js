import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { Link as RouterLink } from "react-router-dom";
import {getProblems, getUsers} from '../actions'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SignUpForm from "./SignUpForm";
import {
  DetailsCard,DetailsContainer,DetailsTitle,DetailsDescription,DetailsBackButton,DetailsBackLink,
  SigneeContainer,
  ProgressContainer,ProgressTitle,ProgressBarContainer
} from "../static/stylingComponents";



import Icon from '@material-ui/core/Icon';
const ImageSetter = require('../static/stylingComponents/ImageSetter')



const theme = createMuiTheme();
theme.typography.p = {
  color:'green'
}




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
  
  
  getProgress = () => {
    const totalSignedNeeded = 10;
    const val = this.getSignee() / totalSignedNeeded * 100;
    return `${val}%`
  }

  getSignee = () =>{
    const signed = this.props.users.filter(signee => `${signee.problem_id}` === this.props.match.params.id);
    return signed.length
  }


  render(){
    const { id } = this.props.match.params;
    const problem = this.props.problems.find(prob => `${prob.id}` === id);

      if (!problem) {
        return (
          <MuiThemeProvider theme={theme}>
      {/* <Button>font-size: 1rem</Button> */}
          <div>
            <h1>You must be lost </h1>
          </div>
    </MuiThemeProvider>
        );
      }
      return (
        <MuiThemeProvider theme={theme}>
      {/* <Button>font-size: 1rem</Button> */}
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
            <Typography variant="body2" color="textSecondary" component="p">
              {`${this.getSignee()} people signed up to help`}
            </Typography>
          </SigneeContainer>
  
           <ProgressContainer>
            <ProgressTitle variant="body2" color="textSecondary" component="h2">
                Progress Bar
            </ProgressTitle>
            <ProgressBarContainer>
              <ProgressBar style={{width:this.getProgress()}}></ProgressBar>
            </ProgressBarContainer>
          </ProgressContainer>
          </DetailsContainer>
          <SignUpForm problem_idYo={id} />
        </div>
    </MuiThemeProvider>
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
