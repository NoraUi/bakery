'use strict';

var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient({'region': 'eu-west-1'}); 

exports.handler = function(event, context, callback) {
  console.log("id: ", event.pathParameters.id);
  var params = {
    TableName : "bakery-bakeries",
    Key: {
      id: event.pathParameters.id
    }
  };
  
  documentClient.get(params, function(err, data) {
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
      console.log("Success", data.Item);
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data.Item)
      };
  	  callback(null, response);
    }
  });
  
};
