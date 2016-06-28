casper.test.begin('localhost:3000 is running', 1, function(test) {
    casper.start('http://localhost:3000/users/new', function() {
        test.assertSelectorHasText("h1", "Please sign up");
    }).run(function() {
        test.done();
    });
});
