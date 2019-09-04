import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const MarketingCard = ({
  title, description, displayButton, buttonLink
}) => {
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
          <Link to={buttonLink}>{displayButton}</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

MarketingCard.defaultProps = {
  title: 'Title',
  description: 'Description',
  displayButton: 'Button',
  buttonLink: 'Link'
};

MarketingCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  displayButton: PropTypes.string,
  buttonLink: PropTypes.string
};

export default MarketingCard;
