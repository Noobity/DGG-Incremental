# DGG Clicker

Incremental clicker game for Destiny and dgg

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js

Dgg Oauth app: https://www.destiny.gg/profile/developer

Postgres

### Installing

Install Server modules

```
cd server/
npm install
```

Install UI Modules
```
cd ui/
npm install
```

### Setup environment

Add a `.env` file to server
```
touch server/.env
```

Add the following:
```
# Required for auth
DGG_OATH_ID=
DGG_OATH_SECRET=
REDIRECT_URI=

# Optional based on your postgres setup
DATABASE_URL=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
```

### Start development processes
```
cd server/
node index.js
```

```
cd ui/
npm start
```

### Open App
Navigate in browser to http://localhost:3000 or w/e port your UI started with
