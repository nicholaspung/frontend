import { styled } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export const DetailsCard = styled(Card)({
  border: "none",
  boxShadow: "none",
  marginBottom: "20px"
});

export const DetailsContainer = styled(Card)({});

export const DetailsTitle = styled(Typography)({
  fontWeight: "bold",
  margin: 0,
  color: "rgb(187, 19, 51)"
});

export const SigneeContainer = styled(Card)({});

export const SigneeCount = styled(Typography)({});

export const DetailsBackButton = styled(Button)({
  background: "#3f51b5"
});

export const DetailsBackLink = styled(Link)({
    textDecoration:'none',
    color:"#fff"
})


export const ProblemCardLink = styled(Link)({
    textDecoration:'none',
    color:'black'
})

export const DetailsDescription = styled(Typography)({
  margin: 0
});

export const ProgressContainer = styled(Card)({
  border: "none",
  boxShadow: "none"
});

export const CardTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "20px",
  margin: 0,
  marginBottom: "15px",
  color: "rgb(187, 19, 51);"
});

export const ProgressBarContainer = styled(Card)({
  border: "2px solid silver"
});

export const CallToActionBtn1 = styled(Button)({
  background: "#6495ED",
  color: "white"
});

export const CallToActionBtn2 = styled(Button)({
  background: "#87CEFA",
  color: "white"
});

export const ProblemCards = styled(Card)({
  boxShadow: "2px 4px silver",
  maxWidth: 260
});

})


export const CallToActionBtn1 = styled(Button)({
  background:'#6495ED',
  color:'white'
})

export const CallToActionBtn2 = styled(Button)({
  background:'#87CEFA',
  color:'white'
})
