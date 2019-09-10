import React from "react";
import { connect } from "react-redux";
import { styled } from "@material-ui/styles";
import { getProblems } from "../actions";
import ProblemCard from "./ProblemCard";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
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

class ProblemDashboard extends React.Component {
  state = {
    selectedCategory: "all",
    selectByName: "",
    selectedStatus: "start",
    numOfProblems: 0
  };

  componentDidMount() {
    this.props.getProblems();
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      selectedStatus: "name",
      selectByName: e.target.value
    });
  };

  categorySelected = e => {
    this.setState({
      selectedStatus: "category",
      selectedCategory: e.target.value
    });
  };

  findByCategory = () => {
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

  findByName = () => {
    const userInput = this.state.selectByName.trim();
    const problems = this.props.problems.filter(prob =>
      prob.problem_title.toLowerCase().includes(userInput.toLowerCase())
    );
    return problems;
  };

  allProblems = () => {
    if (this.state.selectedStatus === "start") {
      return this.props.problems;
    }

    if (this.state.selectedStatus === "category") {
      return this.findByCategory();
    }
    if (this.state.selectedStatus === "name") {
      return this.findByName();
    }
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "600px" }}>
          <MyGrid>
            <form>
              <FormControl spacing={12} style={{ minWidth: 120 }}>
                <TextField
                  id="select-name"
                  label="filter by name"
                  value={this.state.selectByName}
                  onChange={this.handleChange}
                  margin="normal"
                />

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
            </form>
          </MyGrid>
          {this.props.problems.length > 0 ? (
            <div>
              <MyGrid container spacing={4}>
                {this.allProblems().map(problem => (
                  <Grid item key={problem.id}>
                    <ProblemCard problems={problem} />
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

const mapStateToProps = ({ problems }) => ({ problems: problems.problems });
export default connect(
  mapStateToProps,
  { getProblems }
)(ProblemDashboard);
