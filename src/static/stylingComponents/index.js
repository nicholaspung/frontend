import { styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


export const DetailsCard = styled(Card)({
    marginTop:'20px',
    border:'3px solid gray',
    padding:'20px',
    marginBottom:'20px'
  })

export const DetailsContainer = styled(Card)({
    marginTop:'20px',
    boxShadow:'0px 0px 0px 0px'
})

export const DetailsTitle = styled(Typography)({
    fontWeight:'bold'
  })

export const SigneeContainer = styled(Card)({
    marginTop:'20px',
    boxShadow:'0px 0px 0px 0px'
  })

export const SigneeCount = styled(Typography)({
    
  })

export const DetailsBackButton = styled(Button)({
    background:'#3f51b5',
  })

export const DetailsBackLink = styled(Link)({
    textDecoration:'none',
    color:"#fff"
})


export const ProblemCardLink = styled(Link)({
    textDecoration:'none',
    color:'black'
})

export const DetailsDescription = styled(Typography)({
   
  })

export const ProgressContainer = styled(Card)({
    marginBottom:'20px',
    border:'2px solid silver',
    background:'#66CDAA',
  })

export const ProgressTitle = styled(Typography)({
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'20px',
    color:'white'
  })

export const ProgressBarContainer = styled(Card)({
    width:'60%',
    margin:'0 auto',
    border:'2px solid silver',
    marginBottom:'20px'

})


export const CallToActionBtn1 = styled(Button)({
  background:'#6495ED',
  color:'white'
})

export const CallToActionBtn2 = styled(Button)({
  background:'#87CEFA',
  color:'white'
})