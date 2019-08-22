import React from 'react';
// import axios from 'axios';


const categories = [
  'science', 'finance', 'engineering', 'health', 'transportation', 'agriculture'
];

const myproblems = [
  { problem_title: 'my title', problem_category: 'science' },
  { problem_title: 'your title', problem_category: 'science' },
  { problem_title: 'her title', problem_category: 'engineering' },
  { problem_title: 'his title', problem_category: 'health' }
];


class ProblemDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      // noResults: false,
      problems: [],
      //   devURL: 'http://localhost:5000',
      // prodURL: 'https://my-json-server.typicode.com/ryanboris/json/results'
    };
  }

  async componentDidMount() {
    // const { devURL, prodURL } = this.state;
    try {
      // const { data } = await axios.get(`${prodURL}`);
    //   this.setState({ problems: data.data.problems });
      this.setState({ problems: myproblems });
    } catch (err) {
      console.error({ message: err.message });
    }
  }


  changeSelected = (e) => {
    this.setState({ selected: e.target.value });
  }


  myFiltered = () => {
    const { selected } = this.state;
    const filt = this.state.problems.filter((problems) => problems.problem_category === this.state.selected);
    if (filt.length === 0 || selected === 'All') {
      return this.state.problems;
    }
    return filt;
  }


  render() {
    return (

      <div>
        <h1>Testing Frontend/Server/Database connection...</h1>
        <div>
          <select onChange={this.changeSelected}>
            <option value="All">Category</option>
            {categories.map((cat) => <option value={cat}>{cat}</option>)}
          </select>
        </div>
        {this.myFiltered().map((problem) => (
          <div key={problem.problem_title}>
            <p>{problem.problem_title}</p>
            <p>{problem.problem_category}</p>
          </div>
        ))}
      </div>

    );
  }
}


export default ProblemDashboard;
