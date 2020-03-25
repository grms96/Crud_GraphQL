# CRUD Application using graphQL, aws lambda, dynamodb, nodejs

## Installation and Setup

Clone the repo using 

```bash
git clone https://github.com/grms96/Crud_GraphQL
```

Install node modules
```bash
npm install
```
## Deployment

```bash
serverles deploy
```
copy the end point url of the output

we will make requests against the same url

## Query the API

For inserting the data into db

```bash
mutation {
      createMatch (data) {
        list of attributes 
      }
    }
```

For getting one match with id

```bash
query {
      getMatchByID (id:"id") {
       list of attributes
      }
    }
```

For getting all matches between date range

```bash
query {
      getMatchesByDateRange(args) {
        list of attributes
      }
    }
```

For updating series_name

```bash
mutation {
      updateMatchField (data){
          list of attributes
      }
    }
```


