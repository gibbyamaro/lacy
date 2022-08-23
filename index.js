
    const express = require( 'express' );
    const path = require( 'path' );
    const app = new express();
    
    app.use( express.static( 'public' ) );
    app.listen( 2100 , () => {
        console.log( 'App listening on port 2100' )
    } )

    
    app.get( '/' , ( req , res ) => {
        res.render( 'index' );
    } );
