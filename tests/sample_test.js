module.exports = {

"Super QA homepage" : function (browser) {
browser
 .url("https://superqa.herokuapp.com/")
 .waitForElementVisible ('div[class="menuContainer"]', 1000)
 .click('a[class="recruter login"]')
 .waitForElementVisible ('div[class="loginForm"]', 1000)
 .assert.elementPresent(".login-field")
 .assert.elementPresent(".button")
 .assert.containsText(".menuContainer", "Forget password")
 .setValue('input[name=email]','dannytesfai@gmail.com')
 .setValue('input[name=password]','itwontbethiseasy')
 .click(".button")

},

};
