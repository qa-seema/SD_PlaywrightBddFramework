
Feature: Login functionality

Background: 
Given user should be on login page 
@smoke
Scenario: Valid login
When user enters the valid credential 
Then user should be navigated to the home page
And user can see the logout link



@smoke
Scenario: Invalid login
When user enters the invalid credential
Then user should be navigated to the login page
And user can see the error message


@smoke
Scenario Outline: Invalid login with different set of data
When user enters the user id as "<userid>" and password as "<password>" invalid credential
Then user should be navigated to the login page
And user can see the error message
Examples:
| userid | password |
| admin1 | pwd1     |
| admin2 | pwd2     |
| admin3 | pwd3     |


