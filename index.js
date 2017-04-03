const redis = require( 'redis' );
const client = redis.createClient();

client.on( 'error',  err => console.log( 'Error' + err ) );

client.set( 'string', 'string val', redis.print );
client.hset( 'hash key', 'hashtest 1', 'kazikai', redis.print );
client.hset( ['hash key', 'hasttest 2', 'kazikai2'], redis.print );

client.hkeys( 'hash key', ( err, replies ) => {
    console.log( replies.length + ' replies ' );
    replies.forEach( ( reply, i ) => {
        console.log( ' ' + i + ":" + reply );
    });
    client.quit();
});


