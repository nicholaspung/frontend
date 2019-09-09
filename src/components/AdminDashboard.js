import React from "react";
import { connect } from "react-redux";
import { getAdminProblems } from "../actions";

import AdminProblem from "./AdminProblem";
// import ProblemCard from "./ProblemCard";

import { styled } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";

const MyGrid = styled(Grid)({
  padding: 24
});

const category = [
  "all",
  "health",
  "technology",
  "fitness",
  "personal",
  "science",
  "finance"
];

class AdminDashboard extends React.Component {
  state = {
    selectedCategory: "all",
    problemCount: false,
    isApproved: false
  };

  componentDidMount() {
    if (this.props.getAdminProblems()) {
      this.setState({ problemCount: true });
    }
    this.props.getAdminProblems();
  }

  categorySelected = e => {
    this.setState({
      selectedCategory: e.target.value
    });
  };

  sCategory = () => {
    const selected = this.state.selectedCategory.toLowerCase();
    const problems = this.props.problems.filter(
      prob => prob.problem_category.toLowerCase() === selected
    );
    if (selected === "all") {
      return this.props.problems;
    } else {
      return problems;
    }
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "600px" }}>
          <MyGrid>
            <FormControl spacing={2} style={{ minWidth: 120 }}>
              <InputLabel htmlFor="categories">Filter</InputLabel>
              <Select
                value={this.state.selectedCategory}
                onChange={this.categorySelected}
                inputprops={{
                  name: this.state.selectedCategory,
                  id: "categories"
                }}
              >
                {category.map((cat, index) => (
                  <MenuItem key={index} value={cat}>
                    {cat.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </MyGrid>
          {this.sCategory().length > 0 ? (
            <div>
              <MyGrid container spacing={4}>
                {this.sCategory().map(problem => (
                  <Grid item key={problem.id}>
                    <AdminProblem problems={problem} />
                  </Grid>
                ))}
              </MyGrid>
            </div>
          ) : (
            <MyGrid container>
              Sorry {this.state.selectedCategory.toUpperCase()} problems are not
              available{" "}
            </MyGrid>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ problems }) => ({ problems });
export default connect(
  mapStateToProps,
  { getAdminProblems }
)(AdminDashboard);
