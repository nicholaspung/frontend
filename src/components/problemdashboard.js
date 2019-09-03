import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/styles';
import { getProblems } from '../actions';
import ProblemCard from './ProblemCard';

const MyGrid = styled(Grid)({
  padding:24
});

class ProblemDashboard extends React.Component {
  componentDidMount() {
    this.props.getProblems();
  }

  render() {
    const allProblems = this.props.problems;
    return (
      <div>
        <MyGrid container spacing={4}>
          {allProblems.map(problem => (
            <Grid item key={problem.id}>
              <ProblemCard problems={problem} />
            </Grid>
          ))}
        </MyGrid>
      </div>
    );
  }
}

const mapStateToProps = ({problems}) => ({problems});
export default connect(
  mapStateToProps,
  { getProblems }
)(ProblemDashboard);
