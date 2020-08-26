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
  "name": "User choose the \"\u003cflight_name\u003e\"",
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
        "holder_name",
        "flight_name"
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
        "James Bond",
        "Lufthansa"
      ],
      "line": 21,
      "id": "blaze-demo-book-flight;search-flight-scenario;;2"
    },
    {
      "cells": [
        "Paris",
        "Rome",
        "Passenger1",
        "Street 007",
        "Bangalore",
        "Karnataka",
        "555555",
        "12345",
        "James Bond",
        "Virgin America"
      ],
      "line": 22,
      "id": "blaze-demo-book-flight;search-flight-scenario;;3"
    },
    {
      "cells": [
        "Boston",
        "Berlin",
        "Passenger1",
        "Street 007",
        "Bangalore",
        "Karnataka",
        "555555",
        "12345",
        "James Bond",
        "United Airlines"
      ],
      "line": 23,
      "id": "blaze-demo-book-flight;search-flight-scenario;;4"
    },
    {
      "cells": [
        "Portland",
        "Dublin",
        "Passenger1",
        "Street 007",
        "Bangalore",
        "Karnataka",
        "555555",
        "12345",
        "James Bond",
        "Aer Lingus"
      ],
      "line": 24,
      "id": "blaze-demo-book-flight;search-flight-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32547495500,
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
  "name": "User choose the \"Lufthansa\"",
  "matchedColumns": [
    9
  ],
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
  "duration": 2365057400,
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
  "duration": 244842800,
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
  "duration": 116629300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search()"
});
formatter.result({
  "duration": 1512271900,
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
  "duration": 1148473800,
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
  "duration": 1892012700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.purchase_flight()"
});
formatter.result({
  "duration": 877157800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verify_booking()"
});
formatter.result({
  "duration": 73595900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.capture_booking()"
});
formatter.result({
  "duration": 59219300,
  "status": "passed"
});
formatter.after({
  "duration": 3577159000,
  "status": "passed"
});
formatter.before({
  "duration": 17674474400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario;;3",
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
  "name": "User enters the \"Paris\" from_city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"Rome\" to_city",
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
  "name": "User choose the \"Virgin America\"",
  "matchedColumns": [
    9
  ],
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
  "duration": 7569200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.from_city(String)"
});
formatter.result({
  "duration": 225509800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rome",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.to_city(String)"
});
formatter.result({
  "duration": 119031400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search()"
});
formatter.result({
  "duration": 1298628100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virgin America",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.choose_flight(String)"
});
formatter.result({
  "duration": 821125900,
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
  "duration": 1209918700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.purchase_flight()"
});
formatter.result({
  "duration": 1060956700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verify_booking()"
});
formatter.result({
  "duration": 135754300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.capture_booking()"
});
formatter.result({
  "duration": 45710100,
  "status": "passed"
});
formatter.after({
  "duration": 3947369400,
  "status": "passed"
});
formatter.before({
  "duration": 13476112600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario;;4",
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
  "name": "User enters the \"Boston\" from_city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"Berlin\" to_city",
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
  "name": "User choose the \"United Airlines\"",
  "matchedColumns": [
    9
  ],
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
  "duration": 16028400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.from_city(String)"
});
formatter.result({
  "duration": 114173200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Berlin",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.to_city(String)"
});
formatter.result({
  "duration": 93050300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search()"
});
formatter.result({
  "duration": 636764200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Airlines",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.choose_flight(String)"
});
formatter.result({
  "duration": 661203500,
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
  "duration": 882654300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.purchase_flight()"
});
formatter.result({
  "duration": 554945500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verify_booking()"
});
formatter.result({
  "duration": 80220500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.capture_booking()"
});
formatter.result({
  "duration": 40271800,
  "status": "passed"
});
formatter.after({
  "duration": 979066300,
  "status": "passed"
});
formatter.before({
  "duration": 10985022100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search Flight Scenario",
  "description": "",
  "id": "blaze-demo-book-flight;search-flight-scenario;;5",
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
  "name": "User enters the \"Portland\" from_city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"Dublin\" to_city",
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
  "name": "User choose the \"Aer Lingus\"",
  "matchedColumns": [
    9
  ],
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
  "duration": 12804000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.from_city(String)"
});
formatter.result({
  "duration": 86643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.to_city(String)"
});
formatter.result({
  "duration": 106251100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search()"
});
formatter.result({
  "duration": 536979100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aer Lingus",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.choose_flight(String)"
});
formatter.result({
  "duration": 846224700,
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
  "duration": 949059100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.purchase_flight()"
});
formatter.result({
  "duration": 630329000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verify_booking()"
});
formatter.result({
  "duration": 76704100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.capture_booking()"
});
formatter.result({
  "duration": 39280900,
  "status": "passed"
});
formatter.after({
  "duration": 939070100,
  "status": "passed"
});
});