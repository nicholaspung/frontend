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

import healthImage from "../../static/images/cards/health.jpg";

const ImageSetter = require("../../static/stylingComponents/ImageSetter");

// #adc7e0

const useStyles = makeStyles(theme => {
  return {
    card: {
      maxWidth: "30%",
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "#778899",
      "&:hover": {
        backgroundColor: "#ccd6e0"
      }
    },

    actionarea: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",

      [theme.breakpoints.down("sm")]: {
        width: "80%",
        fontSize: ".5rem"
      }
    },

    media: {
      height: 100,
      width: "20%",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "10%",
        width: "60%",
        paddingRight: "5%",
        height: 60
      }
    },

    ratingStatus: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.4rem"
      }
    },
    category: {
      textTransform: "capitalize"
    },
    mainTitle: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      textTransform: "uppercase",
      paddingBottom: 5,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem"
      }
    },
    descriptionYo: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.5rem",
        marginBottom: "5%"
      }
    },
    actionsContainer: {
      display: "flex",
      justifyContent: "center",

      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        // width: "10%"
        flexWrap: "wrap",
        width: "100%"
      }
    },
    buttonYo1: {
      background: "none",
      textTransform: "uppercase",
      border: "none",
      font: "black",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    },

    buttonYo2: {
      background: "none",
      textTransform: "uppercase",
      border: "none",
      font: "black",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem",
        paddingLeft: "1"
      }
    },
    buttonYo3: {
      background: "none",
      textTransform: "uppercase",
      border: "none",
      font: "black",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    },
    buttonYo4: {
      background: "none",
      textTransform: "uppercase",
      border: "none",
      font: "black",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    },
    buttonYo5: {
      background: "none",
      textTransform: "uppercase",
      border: "none",
      font: "black",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    }
    // approveReject: {
    //   display: "flex",
    //   flexDirection: "row"
    // },
    // infoDiv: {
    //   display: "flex",
    //   flexDirection: "row",
    //   alignContent: "flex-end",
    //   paddingLeft: 30
    // }
  };
});

const AdminProblem = props => {
  const classes = useStyles();
  const problem = props.problem;
  const user = props.user;

  const deleteProblem = e => {
    props.deleteAdminProblem(problem.id);
  };

  console.log("ADMIN PROBLEM", props);
  if (problem) {
    return (
      <Card className={classes.card}>
        <Typography className={classes.mainTitle} variant="h6" component="h3">
          {problem.problem_title} || {problem.problem_category}
        </Typography>

        <CardActionArea className={classes.actionarea}>
          <CardMedia
            className={classes.media}
            component="img"
            src={ImageSetter.staticImage(problem.problem_category)}
            title={problem.problem_title}
          />

          <div className={classes.ratingStatus}>
            <Typography variant="headline" component="h2">
              Status:
              {problem.isApproved ? (
                <span style={{ color: "green" }}> Approved</span>
              ) : (
                <span style={{ color: "#a60202" }}> Not Approved</span>
              )}
            </Typography>
          </div>
        </CardActionArea>
        <Typography
          className={classes.descriptionYo}
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            height: 40,
            textAlign: "center",
            width: "100%",
            paddingTop: 8,
            marginBottom: 5
          }}
        >
          {problem.problem_description}
        </Typography>
        <CardActions className={classes.actionsContainer}>
          <button
            className={classes.buttonYo1}
            onClick={e => props.updateProblem(e, problem)}
          >
            Approve
          </button>
          <button
            className={classes.buttonYo2}
            onClick={e => props.updateProblem(e, problem)}
            // onClick={e => props.removeProblem(e, problem)}
          >
            {/* <FontAwesomeIcon icon={faBan} color="#FF0000" size="2x" /> */}
            Reject
          </button>
          <button className={classes.buttonYo3} onClick={deleteProblem}>
            Delete
          </button>

          <button
            className={classes.buttonYo4}
            href={`/problem-details/${problem.id}`}
          >
            Details
          </button>

          <button
            className={classes.buttonYo5}
            onClick={e => props.seeUsers(e, problem.id)}
          >
            Signees
          </button>
        </CardActions>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

export default AdminProblem;