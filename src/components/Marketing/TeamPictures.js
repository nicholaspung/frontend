import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = {
  noBorderRadius: { borderRadius: "0px" }
};

const TeamPictures = ({
  name,
  github,
  position,
  classes
}) => {
  return (
    <Grid item xs={10} sm={6} md={4}>
      <Card className={classes.noBorderRadius}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="caption" component="p">
            {position}
          </Typography>
          <Grid container justify="space-between">
            <Grid item lg={3}>
              <CardActions>
                <Button>
                  <a href={github}>GitHub</a>
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(TeamPictures);
