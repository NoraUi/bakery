'use strict';

var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient({'region': 'eu-west-1'}); 

exports.handler = async (event, context, callback) => {

  const claims = event.requestContext.authorizer.claims;
  const username = claims['cognito:username'];
  const email = claims.email;
  
  const r = {
    username: username,
    email: email,
    firstname: "Foo",
    name: "BAR",
    roles: ["ADMIN"]
  };
  
  var params = {
		Item : r,
		TableName : "bakery-users"
	};
  
	documentClient.put(params, function(err, data){
		const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(r)
    };
		callback(null, err);
	}); 
  
};
