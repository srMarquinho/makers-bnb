casper.test.begin('localhost:3000 is running', 1, function(test) {
    casper.start('http://localhost:3000', function() {
        test.assertSelectorHasText("h1", "Hello World!");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('localhost:3000 is running', 1, function(test) {
casper.start('http://localhost:3000/index', function() {
    test.assertSelectorHasText("h1", "Batman");
}).run(function() {
    test.done();
});
});
