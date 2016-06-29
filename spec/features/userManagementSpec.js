casper.test.begin('Sign Up page', 2, function(test) {
    casper.start('http://localhost:3000/users/new', function() {
        test.assertSelectorExists("h1", "Please sign up");

        this.fill('form[action="/users"]', {
          email: "test@test.com",
          name: "Marco",
          password: "secret"
        });
        this.click("[name='signup']");

        test.assertExists("h1", "Hello World!");
    }).run(function() {
        test.done();
    });
});
