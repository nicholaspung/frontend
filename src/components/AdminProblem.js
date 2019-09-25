import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UsersModal from "./UsersModal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const AdminProblem = props => {
  const classes = useStyles();
  const problem = props.problem;
  const user = props.user;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../static/images/cards/finance.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {problem.problem_title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {problem.problem_category}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ height: 40 }}
          >
            {problem.problem_description}
          </Typography>
          <Typography variant="headline" color="textSecondary" component="h3">
            Rating: {problem.rating}
          </Typography>
          <Typography variant="headline" color="textSecondary" component="h3">
            {/* show if the problem is approved or not */}
            Status: {problem.isApproved ? "Approved" : "Not Approved"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={e => props.updateProblem(e, problem)}
          // href="/problems"
        >
          Approve
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={e => props.removeProblem(e, problem)}
          // href="/admin-problems"
        >
          Reject
        </Button>
        <Button
          size="small"
          color="primary"
          href={`/problem-details/${problem.id}`}
        >
          Learn More
        </Button>

        {/* new stuff for users modal */}
        <Button
          size="small"
          color="primary"
          onClick={e => props.seeUsers(e)}
          // href="/admin-problems"
        >
          See list of volunteers
        </Button>
      </CardActions>
      {/* <UsersModal onClose={e => this.setState({ isOpenUsers: false })}>
        {user.full_name}
      </UsersModal> */}
    </Card>
  );
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
