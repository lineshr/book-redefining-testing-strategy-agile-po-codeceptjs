const { I, globalData, uiElement, pluginJournalist } = inject();
// Add in your custom step files

/* #00_basic.feature */

/*
Background: 
    Given I have install CPJS

  Scenario: Say hello
     When I launch the feature
     Then I should see "Hello CPJS Gherkin"
      And I should see "Ready to go for E2E"

 */



Given('I have a defined step', (string) => {
  I.say("\n--- just for the basic.feature generated by CPJS");
});


Given('I have install {string}', (string) => {
  I.say("\n--- MSG :: "+string+" ");
});

When('I launch the feature {string}', (string) => {
  I.say("\n--- MSG :: "+string+" ");
});

Then('I must see {string}', (string) => {
  I.say("\n--- MSG :: "+string+" ");
});

Then('I must see {string}', (string) => {
  I.say("\n--- MSG :: "+string+" ");
});

/* 
	* the
	* for wp_check_frontend_default_installation_site_description_1.feature 
*/
Given('I have a WordPress installation', () => {
		
		I.say("\n--- LOGIN :: Lucky you good boy, you have WP installed and I test it!");
		I.amOnPage('wp-login.php');
		I.say('Backoffice :: enter username and password for WP');		
		I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
		I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
		I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);
		I.seeInCurrentUrl('/wp-admin/');
		I.see(globalData.DASHBOARD_H1, 'h1');
});

Then('I should be on the homepage', () => {
			I.say("\n--- HOMEPAGE :: Yep you are on the HP");
			I.say("\n--- Checking source code. See plugin codeceptjs_check_homepage");


			// Checks that the current page contains the given string in its raw source code.
			// Thanks to my plugin codecept_check_homepage, if I am on the homepage, the source code show the value below.
			I.seeInSource('<!-- '+globalData.PLUGIN_CHECK_HOMEPAGE_SEEINSOURCE.trim()+' -->');

			// Checks that the current page does not contains the given string in its raw source code.
			// Thanks to my plugin codecept_check_homepage, if I am on the homepage, the source code show the value below.
			I.dontSeeInSource('<!-- '+globalData.PLUGIN_CHECK_HOMEPAGE_DONTSEEINSOURCE.trim()+' -->');


			
			// Checks that title contains text.
			I.seeInTitle(globalData.PLUGIN_CHECK_HOMEPAGE_SEEINTITLE.trim());
			
			
});

When('I go to {string}', (url) => {
  I.amOnPage(url);
});



Then('I should see {string}', (string) => {
  I.see(string);
});

/* 
	* the
	* for wp_check_frontend_default_installation_site_description_2.feature 
*/
/* When I am on "/wp-login.php"
      Then I fill in "#user_login" with "admin"
      Then I fill in "#user_pass" with "admin"
      Then I press "#wp-submit"
      #And I press "Log In"
      Then I should be on "/wp-admin/"
      Then I should see "Dashboard"
*/

When('I am on {string}', (url) => {
  I.amOnPage(url);
});

Then('I fill in {string} with {string}', (locator, value) => {
  I.fillField({css: ''+locator+''}, ''+value+'');
});

Then('I press {string}', (locator) => {
  I.click(''+locator+'');
});

Then('I should be on {string}', (url) => {
  I.seeInCurrentUrl(url);
});

Then('I should see {string}', (string) => {
  I.see(string);
});

/* all the features */

Given('I have a vanilla wordpress installation', () => {
  I.say("Lucky you good boy");
});

Then('I should be on {string}', (url) => {
  I.seeInCurrentUrl(url);
});

Then('There are existing users', () => {
  I.say("At least the user admin exist and WP is up");
});

/*
Then('The admin menu should appear as', () => {
  I.say("Admin menu is OK");
});
*/

Given('The admin menu should appear as', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }

    // go by row cells
    const cells = table.rows[id].cells;

    // take values
    const name = cells[0].value;
    // const category = cells[1].value;
    // const price = cells[1].value;
    // ...
    // I.say(name);
    I.see(name);
  }
});

Given('The admin menu should appear as follow and be clickable', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }

    // go by row cells
    const cells = table.rows[id].cells;

    // take values
    const name = cells[0].value;
    const url = cells[1].value;
    // const price = cells[1].value;
    // ...
    // I.say(name);
    I.see(name);
    I.click(name);
    I.seeInCurrentUrl(url);
  }
});

Given('The admin menu should appear as follow, be clickable and check the title', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }

    // go by row cells
    const cells = table.rows[id].cells;

    // take values
    const name = cells[0].value;
    const url = cells[1].value;
    const title = cells[2].value;
    
    // I.say('name => '+name);
    // I.say('title => '+title);
    I.see(name);
    I.click(name);
    I.seeInCurrentUrl(url);
    I.seeInTitle(title);

  }
});





