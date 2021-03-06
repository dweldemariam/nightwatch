module.exports = {
  'Super QA Add a student' : function (browser) {
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
    .setValue('input[name=cohort]','Cohort Dannytesfai')
    .setValue('input[name=startDate]','02/23/2016')
    .setValue('input[name=endDate]','4/13/2016')
    .setValue('input[name=amount]','9000')
    .click(".addAccount")
    .pause (1000)
    .jqueryClick (".cohortMenu li:contains('Cohort Dannytesfai') .link:nth-child(2)")
    .pause(1500)
    .click('a[class="toggle"]')
    .pause (1000)
    .setValue('input[name=firstName]','Danny')
    .setValue('input[name=lastName]','Tesfai')
    .setValue('input[name=phone]','1234567890')
    .setValue(".addStudent .email", "Dannytesfai@gmail.com")
    .setValue('input[name=street]','123 Street Dr')
    .setValue('input[name=city]','Oakland')
    .setValue('input[name=state]','CA')
    .setValue('input[name=zip]','94610')
    .click(".half.pass")
    .click(".addStudent .button")
    .pause(1000)
    .assert.containsText(".studentList", "Danny Tesfai")
    .jqueryClick(" .studentList tr:contains(\"Danny Tesfai\") td:last a:nth-child(3)")
    .pause(1000)
    .acceptAlert()
    .pause(1000)
    .assert.elementNotPresent(".studentList")
    .click('a[class="recruter accounts-tab"]')
    // .pause (1000)
    .waitForElementVisible ('body', 1000)
    .jqueryClick (".cohortMenu li:contains('Cohort Dannytesfai') .removeAccount")
    .pause(1000)
    .acceptAlert()
    .pause(1000)
    .click('a[class="recruter logout-tab"]')
    // .end()



   }
};
