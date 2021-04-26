const express = require( "express" );
const logger = require( "morgan" );

const app = express();

app.use( logger( "dev" ) );
app.use( express.json() );
app.use( express.urlencoded() );

app.get( "*", ( request, response ) => {
    response.status( 200 ).send( { test: "Test" } );
} );

module.exports = app;
