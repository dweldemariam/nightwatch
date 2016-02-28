module.exports = {

    "Step one. About us" : function (browser) {
       browser
       .url("https://superqa.herokuapp.com/")
       .waitForElementVisible ('body', 1000)
       .click('a[class="recruter aboutus-tab"], About us')
       .pause (1000)
       .assert.urlEquals('https://superqa.herokuapp.com/aboutus')

     },

     "Step two. Courses" : function (browser) {
        browser
        .url("https://superqa.herokuapp.com/")
        .waitForElementVisible ('body', 1000)
        .click('a[class="recruter courses-tab"], About us')
        .pause (1000)
        .assert.urlEquals('https://superqa.herokuapp.com/courses')

      },

      "Step three. Staff" : function (browser) {
         browser
         .url("https://superqa.herokuapp.com/")
         .waitForElementVisible ('body', 1000)
         .click('a[class="recruter staff-tab"], About us')
         .pause (1000)
         .assert.urlEquals('https://superqa.herokuapp.com/staff')

       },

        "Step four. Login" : function (browser) {
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

        },

          'Step five. Register' : function (browser) {
           browser
           .url("https://superqa.herokuapp.com/")
           .waitForElementVisible ('body', 1000)
           .click('a[class="recruter register"]')
           .pause (1000)
           .waitForElementVisible ('div[class="registrationForm"]', 500)
           .assert.elementPresent("form")
           .click('a[class="recruter register"]')
           .end();
        }

};
