/**
 * This file is part of the book package: "Redefining a test strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress."
 *
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Intended to test a FRONTOFFICE and BACKOFFICE made with WP
 *
 * @package Codeception WordPress Testing 
 * @subpackage BACKOFFICE
 * @since codeceptVersion: 2.3.6, nodeInfo: 12.8.0, WordPress: 5.2.3, npx: 6.13.1
 */
/*
NOTE: *** MAKE IT WORK ***
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

npx codeceptjs run --steps test_codeceptjs_9_a_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_9_a_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_9_a_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_9_a_test.js

 */ 

/* Config V1 */
// let globals = require('./_data/config/config_values_codecept.js');

/* Config V2 */
/* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
*/
const { globalData, uiElement } = inject();

/* REQUIREMENTS */
let assert = require('assert');

/* Features */

Feature('Backoffice :: Ensure the views for Journalists in Front, based on plugin post_type check codeception_journalist_extended_profile @advanced @plugin @journalist');
// Scenario('Check WP Backoffice Journalist profile creation', async (I) => {
Scenario('Check WP Backoffice Journalist profile creation', async (I) => {

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
    // I.fillField({css: '#user_pass'}, LOGIN_PASSWORD);
    I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
    I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);
    I.seeInCurrentUrl('/wp-admin/');
    I.see(globalData.DASHBOARD_H1, 'h1');




    I.say('\n--- ADD NEW JOURNALIST PROFILE');

        I.click('Journalists');
        // I.click('#menu-posts-journalists > a > div.wp-menu-name');
        // I.click('//*[@id="menu-posts-journalists"]/a/div[3]');
        I.seeInCurrentUrl('/wp-admin/edit.php?post_type=journalists');

        I.see('Journalists');
        I.click('Published', uiElement.css_plugin_journalist_published);
        I.seeInCurrentUrl('/wp-admin/edit.php?post_status=publish&post_type=journalists');


        I.see('Add New Journalist');
        // Add a new journalist
        I.click('Add New Journalist', uiElement.css_plugin_add_new_journalist);
        
        
        
    I.say('I am about to fill and publish a journalist profile.');

    // Add a title for journalist
    I.fillField('#title', ''+globalData.startDateString+' Test journalist profile title CodeceptJS '+globalData.RandomString+' '); 

    // Add a content for journalist
    I.fillField('#content', ''+globalData.startDateString+' Test journalist profile content CodeceptJS '+globalData.RandomString+'');


    // Add a excerpt for journalist
    I.fillField('#excerpt', ''+globalData.startDateString+' Test journalist profile excerpt CodeceptJS '+globalData.RandomString+'');
        
    /* Missing languages and expertises */

    // Publish
    I.click('#publish');
    // I.click(POST_VIEW_POST_LABEL);
    I.click('//*[@id="message"]/p/a');
    

    // Chck the journalist profile
    I.see('Test journalist profile title CodeceptJS');
    I.see('Test journalist profile content CodeceptJS');

    // Journalist
    I.say('\n--- JOURNALIST PROFILE The journaliste profile has been created.');


});


/* Features */
Feature('Frontoffice :: Testing the baseline @front @homepage');
Scenario('Check WP Backoffice Journalist profile creation', async (I) => {

        I.say("\n--- HP");
        // Frontoffice
        // Try to see "Just another WordPress site"
        I.say('Frontoffice :: checking website made with WordPress');
        I.amOnPage('/');
        I.say('Frontoffice :: want to see the WP default site description install');

        /* **  Check the site description anywhere in the homepage ** */

        //Successful
        I.see('Just another WordPress site');

        // Failed
        //I.see('Just a new WordPress site');
    


});

Scenario('Backoffice :: ensure I can debug some tricky part @debug', async (I, extraData) => {

    I.say("\n###\n");
    I.say('--- HARD DEBUG for extraData');
    I.say('extraData.firstName => '+extraData.firstName+'');
    I.say('extraData.lastName => '+extraData.lastName+'');
    I.say('--- HARD DEBUG for uiElement');
    I.say('uiElement.css_user_login => '+uiElement.css_user_login+'');
    I.say('uiElement.css_user_pass => '+uiElement.css_user_pass+'');
    I.say('--- HARD DEBUG for globalData');    
    I.say('globalData.LOGIN_USERNAME => '+globalData.LOGIN_USERNAME+'');
    I.say('globalData["LOGIN_USERNAME"] => '+ globalData["LOGIN_USERNAME"]+'');
    I.say(''+globalData.LOGIN_PASSWORD+'');
    I.say('# below it is all globalData object\'s properties');
    I.say(''+globalData.DASHBOARD_H1+'');
    I.say(''+globalData.GENERAL_SETTINGS_H1+'');
    I.say(''+globalData.GENERAL_BLOGNAME_VALUE+'');
    I.say(''+globalData.GENERAL_BLOGDESCRIPTION_VALUE+'');
    I.say(''+globalData.GENERAL_SITEURL_VALUE+'');
    I.say(''+globalData.GENERAL_HOME_VALUE+'');
    I.say(''+globalData.WRITING_SETTINGS_H1+'');
    I.say(''+globalData.READING_SETTINGS_H1+'');
    I.say(''+globalData.GENERAL_NEW_ADMIN_EMAIL_VALUE+'');
    I.say(''+globalData.POSTS_LINK_LABEL+'');
    I.say(''+globalData.POST_NEW_LABEL+'');
    I.say(''+globalData.POST_NEW_TITLE+'');
    I.say(''+globalData.POST_VIEW_POST_LABEL+'');
    I.say(''+globalData.RandomString+'');
    I.say(''+globalData.POST_CATEGORY_CHECKLIST+'');
    I.say(''+globalData.POST_TAGS_LIST+'');
    I.say("\n###\n");

}).injectDependencies({ extraData: require('./_data/extra/extra_data.js') });



