@FunctionalTest
Feature: Blaze Demo Book Flight

@SearchFlight
Scenario Outline: Search Flight Scenario

Given User is on the Home Page
When User enters the "<from_city>" from_city
Then User enters the "<to_city>" to_city
And User clicks the Search button
And User choose the "<flight_name>"
And User enters "<name>","<address>","<city>","<state>","<zip>","<cardnumber>" and "<holder_name>"
And User click on Purchase Flight
And User verifies the booking
And User captures the bookingId



Examples:
|from_city| to_city|    name  |  address  |   city  |   state   |   zip|cardnumber| holder_name |    flight_name|
|Mexico City|London|Passenger1| Street 007|Bangalore| Karnataka |555555|  12345   | James Bond  |     Lufthansa |
|Paris      | Rome |Passenger1| Street 007|Bangalore| Karnataka |555555|  12345   | James Bond  |Virgin America |
|Boston     |Berlin|Passenger1| Street 007|Bangalore| Karnataka |555555|  12345   | James Bond  |United Airlines|
|Portland   |Dublin|Passenger1| Street 007|Bangalore| Karnataka |555555|  12345   | James Bond  |Aer Lingus     |



@SearchFlight1
Scenario Outline: Search Flight Scenario

Given User is on the Home Page
When User enters the "<from_city>" from_city
Then User enters the "<to_city>" to_city
And User clicks the Search button
And User choose the "<flight_name>"
And User enters "<name>","<address>","<city>","<state>","<zip>","<cardnumber>" and "<holder_name>"
And User click on Purchase Flight
And User verifies the message to fill details



Examples:
|from_city| to_city|    name  |  address  |   city  |   state   |   zip|cardnumber| holder_name |    flight_name|
|Mexico City|London|          |           |         |           |555555|  12345   | James Bond  |     Lufthansa |
