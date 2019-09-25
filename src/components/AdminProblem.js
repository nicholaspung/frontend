import React from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UsersModal from "./UsersModal";

import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import healthImage from "../static/images/cards/health.jpg";

const ImageSetter = require("../static/stylingComponents/ImageSetter");

const useStyles = makeStyles({
  card: {
    maxWidth: "30%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#778899",
    // opacity: 0.8,
    "&:hover": {
      backgroundColor: "#adc7e0"
    }
  },

  actionarea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  media: {
    height: 100,
    width: "20%"
  },
  // content: {
  //   maxWidth: "30%",
  //   display: "flex",
  //   flexDirection: "row"
  // },
  ratingStatus: {
    display: "flex",
    flexDirection: "column"
  },
  category: {
    textTransform: "capitalize"
  },
  mainTitle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    textTransform: "uppercase"
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  approveReject: {
    display: "flex",
    flexDirection: "row"
  },
  infoDiv: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    paddingLeft: 90
  }
});

const AdminProblem = props => {
  const classes = useStyles();
  const problem = props.problem;
  const user = props.user;

  if (problem) {
    return (
      <Card className={classes.card}>
        <Typography className={classes.mainTitle} variant="h6" component="h3">
          {problem.problem_title}
        </Typography>
        <CardActionArea className={classes.actionarea}>
          <CardMedia
            className={classes.media}
            image={healthImage}
            title="Contemplative Reptile"
          />
          {/* <CardContent className={classes.content}> */}

          <div className={classes.ratingStatus}>
            <Typography
              className={classes.category}
              variant="h6"
              component="h2"
            >
              {problem.problem_category}
            </Typography>
            <Typography variant="headline" component="h3">
              Upvotes: {problem.numOfRatings}
            </Typography>
            <Typography variant="headline" component="h3">
              {/* show if the problem is approved or not */}
              Status:
              {problem.isApproved ? (
                <span style={{ color: "green" }}> Approved</span>
              ) : (
                <span style={{ color: "#a60202" }}> Not Approved</span>
              )}
            </Typography>
          </div>
          {/* </CardContent> */}
        </CardActionArea>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            height: 40,
            textAlign: "center",
            width: "100%",
            paddingTop: 8
          }}
        >
          {problem.problem_description}
        </Typography>
        <CardActions className={classes.actionsContainer}>
          <div className={classes.approveReject}>
            <Button
              size="medium"
              color="green"
              onClick={e => props.updateProblem(e, problem)}
              // href="/problems"
            >
              <FontAwesomeIcon icon={faCheck} color="green" size="2x" />
            </Button>
            <Button
              size="medium"
              color="red"
              onClick={e => props.removeProblem(e, problem)}
              // href="/admin-problems"
            >
              <FontAwesomeIcon icon={faBan} color="#FF0000" size="2x" />
            </Button>
          </div>
          <div className={classes.infoDiv}>
            <Button
              size="small"
              color="primary"
              href={`/problem-details/${problem.id}`}
              style={{ width: 10, marginRight: 30 }}
            >
              Learn More
            </Button>

            {/* new stuff for users modal */}
            <Button
              size="small"
              color="primary"
              onClick={e => props.seeUsers(e)}
              style={{ width: 15 }}
              // href="/admin-problems"
            >
              See list of volunteers
            </Button>
          </div>
        </CardActions>
        {/* <UsersModal onClose={e => this.setState({ isOpenUsers: false })}>
        {user.full_name}
      </UsersModal> */}
      </Card>
    );
  } else {
    return <div></div>;
  }
};

export default AdminProblem;