casper.test.begin('Sign Up page', 1, function(test) {
    casper.start('http://localhost:3000/users/new', function() {
        test.assertSelectorHasText("h1", "Please sign up");

        this.fill('form[action="/users"]', {
          email: "test@test.com",
          name: "Marco",
          password: "secret"
        });
    }).run(function() {
        test.done();
    });
});
