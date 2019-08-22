import React, { Component } from 'react';
import PorblemCard from './components/ProblemCard';

export class App extends Component {
  render() {
    return (
      <div>
        <PorblemCard />
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import PorblemCard from "./components/ProblemCard";

// export default class App extends Component {
//   render() {
//     const { users } = this.state;
//     return (
//       <div>
//         <PorblemCard />
//       </div>
//     );
//   }
// }
