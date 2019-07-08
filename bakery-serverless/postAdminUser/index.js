'use strict';

var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient({'region': 'eu-west-1'}); 

exports.handler = function(event, context, callback) {

  if (event.body !== null && event.body !== undefined) {
    let body = JSON.parse(event.body)
    var params = {
      Item: {
        email: body.email,
        firstname: body.firstname,
        name: body.name,
        roles: body.roles,
        username: body.username
      },
      TableName: "bakery-users"
    };
  } else {
    const errResponse = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ Error: 400, detail : "Invalid parameter value in the request" })
      };
      callback(null, errResponse);
  }

  documentClient.put(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      const errResponse = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ Error: 500, device : "DynamoDB", detail : err })
      };
      callback(null, errResponse);
    } else {
      console.log("Success", params.Items);
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(params.Items)
      };
  	  callback(null, response);
    }
  });
  
};
