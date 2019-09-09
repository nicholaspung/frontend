import React from 'react';
import renderer from 'react-test-renderer';
import ProblemCard from './components/ProblemCard';

describe('ProblemCard', () => {
  it('ProblemCard Snapshot', () => {
    const problem = {
      id: 1, problem_category: 'technology', problem_title: 'title', problem_description: 'tech problem'
    };

    const component = renderer.create(<ProblemCard problems={problem} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
