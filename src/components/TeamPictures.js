import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const TeamPictures = ({ name, description, github, linkedin }) => {
  return (
    <Grid item lg={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <Grid container justify="space-between">
          <Grid item lg={3}>
            <CardActions>
              <Button>
                <a href={github}>GitHub</a>
              </Button>
            </CardActions>
          </Grid>
          <Grid item lg={3}>
            <CardActions>
              <Button>
                <a href={linkedin}>LinkedIn</a>
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TeamPictures;
