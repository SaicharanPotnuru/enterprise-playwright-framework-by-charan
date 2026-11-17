Feature: SauceDemo Authentication

  Scenario: Successful login with standard user credentials
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory dashboard

  Scenario: Failed login with locked out user credentials
    Given I am on the SauceDemo login page
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see an error message containing "Sorry, this user has been locked out"