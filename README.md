# Lambda School NeXt

You can find the deployed project at [https://www.lambdaschoolnext.com/](https://www.lambdaschoolnext.com/).

## Contributors

|                                                [Henry Leverette](https://github.com/trucane)                                                |                                               [Nicholas Pung](https://github.com/nicholaspung)                                                |                                                      [Student 3](https://github.com/)                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/) |
|                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/trucane)                             |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/nicholaspung)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)                           |
|      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/henry-leverette/)       |         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nicholas-pung)         |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                |

<br>
<br>

🚫 4️⃣ Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🚫 more info on using badges [here](https://github.com/badges/shields)

## Project Overview

[Trello Board](https://trello.com/b/sdINEbm3)

[Product Canvas](https://www.notion.so/Labs-neXt-Problem-Validation-Sourcing-cc4614726ee54fd3a11292907282264a)

[UX Design files](https://whimsical.com/Dt7eJMeLhuWtdDUngNQA6J)

Lambda NeXt is Lambda School's flagship program to help their students build a fully functional project to showcase their skills. The goal of Lambda NeXt is to build projects that solve a real world problem. 

This website was created to help alleviate the pain in choosing which problem to solve by helping source volunteers and research the problem before committing teams to creating a working prototype.

### Key Features

- View list of problems approved by Admins
- Vote on a problem you want featured
- Sign up to help with research for a problem
- Add a problem for Admins to approve

## Tech Stack

### Front end built using:

#### _React.js + Redux.js_

Why did we choose React.js + Redux.js?

- React scales nicely for complex projects
- Redux is a great global state management tool
- Easiest to get started with, and familiarity with framework

Libraries
- FontAwesome
- MaterialUI
- Axios
- PropTypes
- React Router
- React Router Hash Link
- Redux Thunk

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/labs15-lambda-next/backend) built using:

#### Node.js + Express.js + PostgreSQL

Why did we choose Node.js + Express.js + PostgreSQL?

- Based off experience alone and also fits perfectly for the project.
- Easy Scalability
- Express makes it easier by having to write less code vs using only node.
- Clear documentation

Libraries
- SendGrid Email
- JsonWebToken
- Passport
- Helmet
- Cors

# APIs

### SendGrid Email

- Used to send transactional email

#### _Future work can connect a Lambda School DS project where it automatically generates Problems for administrators to approve._

# Environment Variables

No Environment Variables were used.

# 5️⃣ Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

For testing, we mainly used PropType validation, and began testing with Jest.

- PropTypes
    - Used to make sure props were passed down correctly.
- Jest
    - Used to check a few actions.
    - Future work:
        - Currently not all tests are passing
        - Figure out how to mock test reducers
        - Needs more test coverage.

# Installation Instructions

To get client running locally:
- Clone this repo
- npm install to install all required dependencies
- Delete 'package-lock.json' after dependencies are installed
- yarn start to start the local server
- yarn test to start using testing environment

## Other Scripts

No other scripts were made.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs15-lambda-next/backend/blob/master/README.md) for details on the backend of our project.
