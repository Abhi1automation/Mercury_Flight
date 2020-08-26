$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Abhi/workspace/CucumberSerenityFramework/resources/feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon Login Feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 25554511800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on the Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters the username and password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10
    },
    {
      "cells": [
        "abc",
        "abc@123"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the loginbutton",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_Signin_page()"
});
formatter.result({
  "duration": 7776354900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 11085711500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"ap_password\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Abhijit\u0027, ip: \u0027192.168.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Abhi\\AppData\\Local\\Temp\\scoped_dir18832_5682}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d84.0.4147.135, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d452f4288e1ab42e25ae361950158abe\n*** Element info: {Using\u003did, value\u003dap_password}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.Login(LoginPage.java:36)\r\n\tat stepDefinitions.StepDefinitions.user_enters_the_username_and_password(StepDefinitions.java:43)\r\n\tat ✽.When User enters the username and password(C:/Users/Abhi/workspace/CucumberSerenityFramework/resources/feature/login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_the_loginbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3399666500,
  "status": "passed"
});
formatter.before({
  "duration": 14845303100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Amazon Login Test Scenario1",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_lands_on_the_HomePage()"
});
formatter.result({
  "duration": 315335700,
  "status": "passed"
});
formatter.after({
  "duration": 1406890100,
  "status": "passed"
});
});