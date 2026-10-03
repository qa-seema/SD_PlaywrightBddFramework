
Feature: Login functionality

Background: 
Given user should be on login page 
@abc
Scenario: Valid login
When user enters the valid credential 
Then user should be navigated to the home page
And user can see the logout link



@abc
Scenario: Invalid login
When user enters the invalid credential
Then user should be navigated to the login page
And user can see the error message


@abc
Scenario Outline: Invalid login with different set of data
When user enters the user id as "<userid>" and password as "<password>" invalid credential
Then user should be navigated to the login page
And user can see the error message
Examples:
| userid | password |
| admin1 | pwd1     |
| admin2 | pwd2     |
| admin3 | pwd3     |


