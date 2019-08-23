import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Header from './Header';

class DetailsPage extends Component {
  render() {
    return (
      <div>
        <Button>
          <Link to="/problems">Back To Problem Page</Link>
        </Button>
      </div>
    );
  }
}

export default DetailsPage;
