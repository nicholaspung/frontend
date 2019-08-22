import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const MarketingCard = ({ title, description, displayButton }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          {displayButton}
        </Button>
      </CardActions>
    </Card>
  );
};

MarketingCard.defaultProps = {
  title: 'Title',
  description: 'Description',
  displayButton: 'Button'
};

MarketingCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  displayButton: PropTypes.string
};

export default MarketingCard;
