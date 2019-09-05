import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { styled, useTheme } from "@material-ui/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

const Marketing = styled(Paper)({
  margin: "20px",
  textAlign: "center"
});

const MarketingCard = ({
  title,
  description,
  displayButton,
  buttonLink,
  icon
}) => {
  const theme = useTheme();
  const CTAButton = styled(Button)({
    backgroundColor: theme.palette.lambdaRed.main,
    borderRadius: "0px",
    color: theme.palette.primary.main
  });
  const ButtonLink = styled(Link)({
    textDecoration: "none",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: theme.palette.lambdaRed.secondary
    }
  });
  const CTACardActions = styled(CardActions)({
    padding: "0px"
  });
  return (
    <Marketing square>
      <CardActionArea>
        <CardContent>
          <Grid container wrap="nowrap" alignItems="center" justify="center">
            <Grid item>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
            </Grid>
            <Grid item>{icon}</Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CTACardActions>
          <ButtonLink to={buttonLink}>
            <CTAButton size="small" color="textSecondary" fullWidth>
              {displayButton}
            </CTAButton>
          </ButtonLink>
        </CTACardActions>
      </CardActionArea>
    </Marketing>
  );
};

MarketingCard.defaultProps = {
  title: "Title",
  description: "Description",
  displayButton: "Button",
  buttonLink: "Link"
};

MarketingCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  displayButton: PropTypes.string,
  buttonLink: PropTypes.string
};

export default MarketingCard;
