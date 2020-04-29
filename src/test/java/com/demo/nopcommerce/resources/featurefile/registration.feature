@Register
Feature: Register functionality
    As a user I want to register on nop commerce


#    Scenario: User should navigate to registration page successfully
#        Given I am on home page
#        When  I click on register link
#        Then I should navigate to register page successfully
#
#    Scenario Outline: User should register successfully with valid credentials
#        Given I am on home page
#        When I click on register link
#        And I select gender
#        And I enter first name "<firstName>"
#        And I enter last name "<lastName>"
#        And I enter date of birth "<date>"
#        And I enter month of birth "<month>"
#        And I enter year of birth "<year>"
#        And I enter email id into email field
#        And I enter company name "<companyName>"
#        And I enter password into password field
#        And I enter confirm password into confirm password field
#        And I click on register button
#        Then I should register successfully
#        Examples:
#
#            | firstName | lastName | date | month | year | companyName          |
#            | Bhavesh   | Patel    | 4    | April | 1986 | Best in Testing Ltd. |
#            | Kalpesh   | patel    | 3    | March | 1976 | Best in Testing Ltd. |

#    Scenario Outline: User should not register with invalid credentials
#
#        Given I am on home page
#        When I click on register link
#        And I select gender
#        And I enter first name "<firstName>"
#        And I enter last name "<lastName>"
#        And I enter date of birth "<date>"
#        And I enter month of birth "<month>"
#        And I enter year of birth "<year>"
#        And I enter email id into email field
#        And I enter company name "<companyName>"
#        And I enter password into password field
#        And I enter different password into confirm password field
#        And I click on register button
#        Then I should see the error message on the screen "<errorMessage>"
#
#        Examples:
#            | firstName | lastName | date | month   | year | companyName          | errorMessage                                         |
#            | Bhavesh   | Patel    | 4    | April   | 1986 | Best in Testing Ltd. | The password and confirmation password do not match. |
#            | Kalpesh   | patel    | 3    | March   | 1976 | Best in Testing Ltd. | The password and confirmation password do not match. |
#            | Jignesh   | Patel    | 14   | August  | 1988 | Best in Testing Ltd. | The password and confirmation password do not match. |
#            | Haresh    | patel    | 23   | May     | 1999 | Best in Testing Ltd. | The password and confirmation password do not match. |
#            | Alpesh    | patel    | 17   | October | 1996 | Best in Testing Ltd. | The password and confirmation password do not match. |
