exports.handler = async (event) => {
   const r = {
    userPoolId: "eu-west-1_jukjYIvfv",
    clientId: "5mf7jeeba331jv41cpgqujdei3",
    identityPoolId: "eu-west-1:a933e7a0-bed7-44b2-bc6b-5de9da042424",
    region: "eu-west-1",
    idpUri: "cognito-idp.eu-west-1.amazonaws.com/eu-west-1_jukjYIvfv"
  };
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(r),
  };
  return response;
};
