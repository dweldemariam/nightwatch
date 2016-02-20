module.exports = {

    "Super QA login Modal" : function (browser) {
  browser
    .url("https://superqa.herokuapp.com/")
    .waitForElementVisible ('body', 1000)
    .click('a[class="recruter login"]')
    .pause (1000)
    .waitForElementVisible ('div[class="loginForm"]', 500)
    .assert.elementPresent("form")
    .assert.elementPresent(".login-field")
    .assert.elementPresent('input[name=email]')
    .assert.elementPresent('input[name=password]')
    .assert.elementPresent(".button")
    .assert.containsText(".loginForm", "Forget password")
    .click('a[class="recruter login"]')
    .end();

  }

};
