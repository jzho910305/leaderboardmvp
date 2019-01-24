This solution was aimed to demonstrate my Javascript/ReactJS skills
using mobile first design principle.

## Limitations

Due to the time constraint, following assumptions are made:

### Security 

Application Vulnerabilities were not concerned much during the development.


### Scope

A fully-implemented solution should have a `leaderboard view`, `leaderboard details view`,
`contests view (completed and upcoming)`, `add leaderboard form`, `add contest form`,
`REST API`, `DB`, `authentication` and `authorisation`. However, only `leaderboard view`, 
`leaderboard details` and `authentication` were implemented here.

### Authentication

Authentication was built using Firebase with minimal security policies. However, 
a full SPA token auth solution was able to complete. Browser local storage was utilised
to support auto authentication (after first login) but not the refresh token.

### Backend & Data

Hardcoded mocking data is used. Objects are linked by IDs. And setTimeout() was used
in several componentDidMount() to simulate API calls.

### State Management

Redux and Redux-thunk were used for `cross-component state sharing` only (mainly for auth).


## App Setup in Local Environment

### Dependencies
* npm version 6.2.0 or higer

### Installing
* Clone repo to local file system:
```
git clone https://github.com/jzho910305/leaderboardmvp.git
```
* Navigate to /leaderboard-react-gui
```
cd $WHERE_YOU_CLONED_REPO/leaderboard-react-gui
```
* npm install app dependencies
```
npm install
```
* start hosting app locally
```
npm run start
```

### Deployment
* This GUI app has been depoyed to an AWS S3 bucket for demo purpose. 
URL: http://cloud.jing-sisucodingchallenge.s3-website-ap-southeast-2.amazonaws.com/myLeaderboards

### Built With
* React 16
* React Router DOM
* Redux 4 & React Redux 6
* Axios 0.18
* Redux Thunk 2

**Note: All UI components and styling are `hand-made` without the use 
of any component libraries for demo purpose.**

## Authors

* **Jing Zhou**
