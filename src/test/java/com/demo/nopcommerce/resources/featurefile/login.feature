@Login
Feature: Login feature
  As a user I want to login into nope commerce website


#  Scenario: User should navigate to login page successfully
#    Given I am on home page
#    When I click on login link
#    Then I should navigate to page successfully
#
#  Scenario Outline: User should login successfully with valid credentials
#    Given  I am on home page
#    When I click on login link
#    And I enter email "<username>"
#    And I enter password "<password>"
#    And I click on login button
#    Then I should login successfully
#    Examples:
#      | username           | password  |
#      | alpha12@gmail.com  | Tiger123  |
#      | tiger456@gmail.com | Tiger0604 |
#
#
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on home page
    When I click on login link
    And I enter email "<username>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | username           | password | errorMessage                                                                              |
      | romeo789@yahoo.com | alpha456 | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | romeo456@gmail.com | alpha123 | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | romeo123@yahoo.com | alpha789 | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | romeo479@gmail.com | alpha568 | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | romeo4860@gmail.com | alpha487 | Login was unsuccessful. Please correct the errors and try again.No customer account found |


