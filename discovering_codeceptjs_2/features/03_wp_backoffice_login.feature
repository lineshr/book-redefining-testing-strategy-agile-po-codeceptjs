# 03_wp_backoffice_login.feature
Feature: Login
In order to login into my WP website
As an user
I need to know my credentials

  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email        | role          | 
      | admin      | admin     | bflaven@gmail.com | administrator | 
  
  Scenario: A valid user access to the platform
     When I am on "/wp-login.php"
      Then I fill in "#user_login" with "admin"
      Then I fill in "#user_pass" with "admin"
      Then I press "#wp-submit"
      #And I press "Log In"
      Then I should be on "/wp-admin/"
      Then I should see "Howdy, admin"
  
  Scenario: An existing user tries to login with a wrong password
      When I am on "/wp-login.php"
      And I fill in "#user_login" with "admin"
      And I fill in "#user_pass" with "1234"
      And I press "#wp-submit"
      #And I press "Log In"
      Then I should be on "/wp-login.php"
      And I should see "Username or Email Address"
      And I should see "Password"
      And I should see "Lost your password?"  
  
  Scenario: A nonexistent user tries to login
      When I am on "/wp-login.php"
      And I fill in "#user_login" with "prisca"
      And I fill in "#user_pass" with "admin"
      And I press "#wp-submit"
      Then I should be on "/wp-login.php"
      And I should see "Username or Email Address"
      And I should see "Password"
      And I should see "Lost your password?"  
  
  

