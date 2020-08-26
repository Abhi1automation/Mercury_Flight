$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Abhi/workspace/CucumberSerenityFramework/resources/feature/login.feature");
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
  "line": 5,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SearchFlight"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cfrom_city\u003e\" from_city",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"\u003cto_city\u003e\" to_city",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the Search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User choose a flight",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003cname\u003e\",\"\u003caddress\u003e\",\"\u003ccity\u003e\",\"\u003cstate\u003e\",\"\u003czip\u003e\",\"\u003ccardnumber\u003e\" and \"\u003cholder_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Purchase Flight",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verifies the booking",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User captures the bookingId",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
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
        "holder_name"
      ],
      "line": 20,
      "id": "blaze-demo-book-flight;search-flight-scenario;;1"
    },
    {
      "cells": [
        "Mexico City",
        "London",
        "Passenger1",
        "Street 007",
        "Bangalore",
        "Karnataka",
        "555555",
        "12345",
        "James Bond"
      ],
      "line": 21,
      "id": "blaze-demo-book-flight;search-flight-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22794162800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@SearchFlight"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"Mexico City\" from_city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"London\" to_city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the Search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User choose a flight",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Passenger1\",\"Street 007\",\"Bangalore\",\"Karnataka\",\"555555\",\"12345\" and \"James Bond\"",
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
  "line": 13,
  "name": "User click on Purchase Flight",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verifies the booking",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User captures the bookingId",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 5863419500,
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
  "duration": 355283600,
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
  "duration": 109176700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search()"
});
formatter.result({
  "duration": 2332677800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.choose_flight()"
});
formatter.result({
  "duration": 959443100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Passenger1",
      "offset": 13
    },
    {
      "val": "Street 007",
      "offset": 26
    },
    {
      "val": "Bangalore",
      "offset": 39
    },
    {
      "val": "Karnataka",
      "offset": 51
    },
    {
      "val": "555555",
      "offset": 63
    },
    {
      "val": "12345",
      "offset": 72
    },
    {
      "val": "James Bond",
      "offset": 84
    }
  ],
  "location": "StepDefinitions.enter_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1622224600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.purchase_flight()"
});
formatter.result({
  "duration": 1327213800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verify_booking()"
});
formatter.result({
  "duration": 65261900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.capture_booking()"
});
formatter.result({
  "duration": 39512200,
  "status": "passed"
});
formatter.after({
  "duration": 2305757500,
  "status": "passed"
});
});