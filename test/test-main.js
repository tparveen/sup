var runServer = require('../index').runServer;
before(function(done) {
    console.log('Run server');
    runServer(function() {
        console.log('Server running');
        done()
    });
});

