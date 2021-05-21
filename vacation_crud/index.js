const express = require("express");
const appServer = express();

const { databaseToImport } = require("./services/db");

const PORT = 3000;

appServer.use(express.json());

//make sure appServer is listening
appServer.listen(PORT, () => {
  //output to us to let team know where we are
  console.log("We in this bitch");
});

const currentDir = "/Users/jeradal/Desktop/vacation_crud/";

//get response from server
appServer.get("/", (requestFromUser, responseFromServer) => {
  //this works to send
  responseFromServer.send("<p>We in this Bitch Works</p>");

  //sendfile test from current local directory this will be different for everyone
  // responseFromServer.sendFile(__dirname + '/index.html');

  //this is the same as line 22ish depending on if we add code above
  // responseFromServer.sendFile(currentDir + 'index.html');
});

//get response from server
appServer.get("/database", (requestFromUser, responseFromServer) => {
  //this works to send
  responseFromServer.send(databaseToImport);

  console.log("Jerad's Test");

  //sendfile test from current local directory this will be different for everyone
  // responseFromServer.sendFile(__dirname + '/index.html');

  //this is the same as line 22ish depending on if we add code above
  // responseFromServer.sendFile(currentDir + 'index.html');
});

appServer.post("/createEntry", (requestFromUser, responseFromServer) => {
  //Pulling the key/value pairs from body object in Postman and assigning them to variables
  const { uid, name, location, description, photo } = requestFromUser.body;

  console.log(requestFromUser.body);

  if (!name || !location) {
    responseFromServer.status(400).send({ error: "post error" });
  }

  databaseToImport.push({
    uid,
    name,
    location,
    description,
    photo,
  });

  responseFromServer.send(requestFromUser.body);
});
