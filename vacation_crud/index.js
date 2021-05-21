const express = require('express');
const appServer = express();

const {databaseToImport} = require('./services/db');

const PORT = 3000;

//make sure appServer is listening
appServer.listen(PORT,() =>{
    //output to us to let team know where we are
console.log("We in this bitch");
});

const currentDir = '/Users/jeradal/Desktop/vacation_crud/';


//get response from server 
appServer.get('/', (requestFromUser,responseFromServer) => {

    //this works to send
    responseFromServer.send('<p>We in this Bitch Works</p>');

    
    //sendfile test from current local directory this will be different for everyone
   // responseFromServer.sendFile(__dirname + '/index.html');

    //this is the same as line 22ish depending on if we add code above
    // responseFromServer.sendFile(currentDir + 'index.html');

});


//get response from server 
appServer.get('/testifcanbeanything', (requestFromUser,responseFromServer) => {

    //this works to send
    responseFromServer.send(databaseToImport);

    
    //sendfile test from current local directory this will be different for everyone
   // responseFromServer.sendFile(__dirname + '/index.html');

    //this is the same as line 22ish depending on if we add code above
    // responseFromServer.sendFile(currentDir + 'index.html');

});

