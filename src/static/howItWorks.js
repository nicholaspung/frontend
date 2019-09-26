// searchicon
// subscriptionsicon
// howtoregicon
// doneallicon
import React from "react";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SearchIcon from "@material-ui/icons/Search";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const howItWorks = [
  {
    step: "Step 1",
    description: "Find a problem that you have.",
    icon: <SearchIcon fontSize="large" />,
    grey: true
  },
  {
    step: "Step 2",
    description:
      "Sign up to a problem, and when enough participants are registered, we'll turn the problem into a project.",
    icon: <SubscriptionsIcon fontSize="large" />
  },
  {
    step: "Step 3",
    description:
      "Lambda School students will reach out to ask for help. Afterwards, they will start building the project that solves your problem.",
    icon: <HowToRegIcon fontSize="large" />,
    grey: true
  },
  {
    step: "Step 4",
    description:
      "After 8 weeks, Lambda School students have finished Version 1.0 of the project! You'll be able to try out the project as soon as they are finished.",
    icon: <DoneAllIcon fontSize="large" />
  }
];

export default howItWorks;
