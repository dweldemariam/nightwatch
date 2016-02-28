module.exports = {
  'Super QA Create New Account.' : function (browser) {
    browser
    .url("https://superqa.herokuapp.com/")
    .waitForElementVisible ('body', 1000)
    .pause (1000)
    .click('a[class="recruter login"]')
    .pause (1000)
    .setValue('input[name=email]','Dannytesfai@gmail.com')
    .setValue('input[name=password]','Password')
    .click("input[value=Login]")
    .pause (1000)
    .click('a[class="recruter accounts-tab"]')
    .pause (1000)
    .assert.urlEquals('https://superqa.herokuapp.com/accounts')
    .waitForElementVisible ('body', 1000)
    .click(".newAccountButton")
    .setValue('input[name=cohort]','Cohort 69')
    .setValue('input[name=startDate]','02/23/2016')
    .setValue('input[name=endDate]','4/13/2016')
    .setValue('input[name=amount]','7000')
    .click(".addAccount")
    .pause (1000)
    .verify.containsText(".mainLine", "Cohort 69 account is created")
    .verify.containsText(".rightSideBar", "Cohort 69")
    .jqueryClick (".cohortMenu li:contains('Cohort 69') .removeAccount")
    .pause(1000)
    .acceptAlert()
    .pause(1000)
    .click('a[class="recruter logout-tab"]')


   }
};
