$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Abhi/workspace/CucumberSerenityFramework/resources/feature/bookFlight.feature");
formatter.feature({
  "line": 2,
  "name": "Blaze Demo Book Flight",
  "description": "",
  "id": "blaze-demo-book-flight",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@SearchFlight1"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enters the \"\u003cfrom_city\u003e\" from_city",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters the \"\u003cto_city\u003e\" to_city",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User clicks the Search button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User choose the \"\u003cflight_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters \"\u003cname\u003e\",\"\u003caddress\u003e\",\"\u003ccity\u003e\",\"\u003cstate\u003e\",\"\u003czip\u003e\",\"\u003ccardnumber\u003e\" and \"\u003cholder_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Purchase Flight",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User verifies the message to fill details",
  "keyword": "And "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario;",
  "rows": [
    {
      "cells": [
        "from_city",
        "to_city",
        "name",
        "address",
        "city",
        "state",
        "zip",
        "cardnumber",
        "holder_name",
        "flight_name"
      ],
      "line": 43,
      "id": "blaze-demo-book-flight;search-flight-scenario;;1"
    },
    {
      "cells": [
        "Mexico City",
        "London",
        "",
        "",
        "",
        "",
        "555555",
        "12345",
        "James Bond",
        "Lufthansa"
      ],
      "line": 44,
      "id": "blaze-demo-book-flight;search-flight-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11657773800,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@SearchFlight1"
    },
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enters the \"Mexico City\" from_city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters the \"London\" to_city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User clicks the Search button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User choose the \"Lufthansa\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters \"\",\"\",\"\",\"\",\"555555\",\"12345\" and \"James Bond\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Purchase Flight",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User verifies the message to fill details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 295402300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mexico City",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.from_city(String)"
});
formatter.result({
  "duration": 122062400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.to_city(String)"
});
formatter.result({
  "duration": 120991500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search()"
});
formatter.result({
  "duration": 544595700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lufthansa",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.choose_flight(String)"
});
formatter.result({
  "duration": 883661200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "555555",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    },
    {
      "val": "James Bond",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.enter_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1145024100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.purchase_flight()"
});
formatter.result({
  "duration": 900360800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verify_message()"
});
formatter.result({
  "duration": 66652300,
  "error_message": "java.lang.AssertionError\r\n\tat pages.VerifyPurcahsePage.verify_message(VerifyPurcahsePage.java:41)\r\n\tat stepDefinitions.StepDefinitions.verify_message(StepDefinitions.java:110)\r\n\tat ✽.And User verifies the message to fill details(C:/Users/Abhi/workspace/CucumberSerenityFramework/resources/feature/bookFlight.feature:38)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2361757600,
  "status": "passed"
});
});