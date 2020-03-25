# CRUD Application using graphQL, aws lambda, dynamodb, nodejs

## Installation and Setup

Clone the repo using 

```bash
git clone 
```

Install node modules
```bash
npm install
```
# Deployment

```bash
serverles deploy
```
copy the end point url of the output

we will make requests against the same url

# Query the API

For inserting the data into db

mutation {
      createMatch (data) {
        list of attributes 
      }
    }


For getting one match with id

query {
      getMatchByID (id:"id") {
       list of attributes
      }
    }


For getting all matches between date range

query {
      getMatchesByDateRange(args) {
        list of attributes
      }
    }


For updating series_name

mutation {
      updateMatchField (data){
          list of attributes
      }
    }


