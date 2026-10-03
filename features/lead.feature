Feature: lead functionality

@lead
Scenario: lead creation 
Given user should be on login page
When user enters the valid credential
When user enter the lastname as "<lastname>" and company as "<company>" and click on save button
| lastname | company | 
| Ratan    | Tata    |
| Satya    |Microsoft| 
| Sundar   | Google  |
