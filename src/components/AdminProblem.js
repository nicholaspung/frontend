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
      flexDirection: "column"
      // justifyContent: "space-between"
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
        fontSize: "0.7rem"
      }
    },
    actionsContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        // width: "10%"
      }
    },
    buttonYo1: {
      backgroundColor: "#313635",
      color: black,
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem",
        width: "5%"
      }
    },

    buttonYo2: {
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem",
        paddingLeft: "1",
        width: "5%"
      }
    },
    buttonYo3: {
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    },
    buttonYo4: {
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    },
    buttonYo5: {
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
          {/* <CardContent className={classes.content}> */}

          <div className={classes.ratingStatus}>
            {/* <Typography
              className={classes.category}
              variant="h6"
              component="h2"
            >
              {problem.problem_category}
            </Typography> */}
            {/* <Typography variant="headline" component="h2">
              Upvotes: {problem.numOfRatings}
            </Typography> */}
            <Typography variant="headline" component="h2">
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
            // size="small"
            // color="green"
            onClick={e => props.updateProblem(e, problem)}
          >
            Approve
          </button>
          <button
            className={classes.buttonYo2}
            // size="small"
            // color="red"
            onClick={e => props.updateProblem(e, problem)}
            // onClick={e => props.removeProblem(e, problem)}
          >
            {/* <FontAwesomeIcon icon={faBan} color="#FF0000" size="2x" /> */}
            Reject
          </button>
          <button
            className={classes.buttonYo3}
            // size="small"
            onClick={deleteProblem}
          >
            Delete
          </button>

          <button
            className={classes.buttonYo4}
            // size="small"
            href={`/problem-details/${problem.id}`}
          >
            Details
          </button>

          <button
            className={classes.buttonYo5}
            // size="small"
            onClick={e => props.seeUsers(e, problem.id)}
          >
            Volunteers
          </button>
        </CardActions>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

export default AdminProblem;

// import React from "react";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Icon from "@material-ui/core/Icon";

// // import { Link as RouterLink } from "react-router-dom";
// // import Grid from "@material-ui/core/Grid";
// // import Button from "@material-ui/core/Button";

// import {
//   ProblemCards,
//   //   ProblemCardLink,
//   ProblemCardMedia,
//   CallToActionBtn2
// } from "../static/stylingComponents";

// const ImageSetter = require("../static/stylingComponents/ImageSetter");

// const AdminProblem = props => {
//   const problem = props.problem;

//   return (
//     <ProblemCards>
//       {/* <ProblemCardLink
//         component={RouterLink}
//         to={`/problem-details/${problem.id}`}
//       > */}
//       <ProblemCardMedia
//         component="img"
//         src={ImageSetter.staticImage(problem.problem_category)}
//         title={problem.problem_title}
//       />
//       <CardContent>
//         <Typography
//           gutterBottom
//           variant="headline"
//           color="textSecondary"
//           component="h3"
//         >
//           {problem.problem_title}
//         </Typography>
//         <Typography variant="body1" color="textSecondary" component="p">
//           <Icon>{ImageSetter.staticIcon(problem.problem_category)}</Icon>
//           {problem.problem_category}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="textSecondary"
//           component="p"
//           style={{ height: 40 }}
//         >
//           {problem.problem_description}
//         </Typography>

//         {/* added new category to problem card */}
//         <Typography variant="headline" color="textSecondary" component="h3">
//           Rating: {problem.rating}
//         </Typography>

//         <Typography variant="headline" color="textSecondary" component="h3">
//           {/* show if the problem is approved or not */}
//           Status: {problem.isApproved ? "Approved" : "Not Approved"}
//         </Typography>
//       </CardContent>
//       {/* </ProblemCardLink> */}

//       <CardActions>
//         <CallToActionBtn2
//           size="medium"
//           color="primary"
//           onClick={e => props.updateProblem(e, problem)}
//           // href="/problems"
//         >
//           Approve!
//         </CallToActionBtn2>
//         <CallToActionBtn2
//           size="medium"
//           color="primary"
//           onClick={e => props.removeProblem(e, problem)}
//           // href="/admin-problems"
//         >
//           Reject!
//         </CallToActionBtn2>
//         <CallToActionBtn2
//           size="medium"
//           color="primary"
//           href={`/problem-details/${problem.id}`}
//         >
//           Learn More
//         </CallToActionBtn2>

//         {/* new stuff for users modal */}
//         <CallToActionBtn2
//           size="medium"
//           color="primary"
//           onClick={e => props.seeUsers(e)}
//           // href="/admin-problems"
//         >
//           See list of volunteers
//         </CallToActionBtn2>
//       </CardActions>
//     </ProblemCards>
//   );
// };

// export default AdminProblem;
