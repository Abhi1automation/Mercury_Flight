@FunctionalTest
Feature: Amazon Login Feature


@Login
Scenario: Amazon Login Test Scenario

Given User is on the Signin page
When User enters the username and password
|Username|Password|
|abc|abc@123|
Then User clicks on the loginbutton


@Login1
Scenario: Amazon Login Test Scenario1
Given User is on the HomePage