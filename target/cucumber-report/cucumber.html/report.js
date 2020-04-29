$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/books.feature");
formatter.feature({
  "line": 3,
  "name": "Books page feature",
  "description": "As a user I want to check functionality of computer page into nopcommerce website",
  "id": "books-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Books"
    }
  ]
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/computer.feature");
formatter.feature({
  "line": 3,
  "name": "Computer page feature",
  "description": "As a user I want to check functionality of computer page into nopcommerce website",
  "id": "computer-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Computer"
    }
  ]
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "As a user I want to login into nope commerce website",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#  Scenario: User should navigate to login page successfully"
    },
    {
      "line": 7,
      "value": "#    Given I am on home page"
    },
    {
      "line": 8,
      "value": "#    When I click on login link"
    },
    {
      "line": 9,
      "value": "#    Then I should navigate to page successfully"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#  Scenario Outline: User should login successfully with valid credentials"
    },
    {
      "line": 12,
      "value": "#    Given  I am on home page"
    },
    {
      "line": 13,
      "value": "#    When I click on login link"
    },
    {
      "line": 14,
      "value": "#    And I enter email \"\u003cusername\u003e\""
    },
    {
      "line": 15,
      "value": "#    And I enter password \"\u003cpassword\u003e\""
    },
    {
      "line": 16,
      "value": "#    And I click on login button"
    },
    {
      "line": 17,
      "value": "#    Then I should login successfully"
    },
    {
      "line": 18,
      "value": "#    Examples:"
    },
    {
      "line": 19,
      "value": "#      | username           | password  |"
    },
    {
      "line": 20,
      "value": "#      | alpha12@gmail.com  | Tiger123  |"
    },
    {
      "line": 21,
      "value": "#      | tiger456@gmail.com | Tiger0604 |"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#"
    }
  ],
  "line": 24,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 32,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "romeo789@yahoo.com",
        "alpha456",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 33,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "romeo456@gmail.com",
        "alpha123",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 34,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "romeo123@yahoo.com",
        "alpha789",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 35,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "romeo479@gmail.com",
        "alpha568",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 36,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "romeo4860@gmail.com",
        "alpha487",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 37,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16993486300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"romeo789@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"alpha456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 281978000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1831689600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romeo789@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 662206400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpha456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 308479100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1506214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 133849300,
  "status": "passed"
});
formatter.after({
  "duration": 1370031100,
  "status": "passed"
});
formatter.before({
  "duration": 12925826700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"romeo456@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"alpha123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 62600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1829095600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romeo456@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 509202500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpha123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 260051300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1333045800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 133480900,
  "status": "passed"
});
formatter.after({
  "duration": 994797800,
  "status": "passed"
});
formatter.before({
  "duration": 13085873300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"romeo123@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"alpha789\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2065538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romeo123@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 475200300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpha789",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 267212500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 736424600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 137768000,
  "status": "passed"
});
formatter.after({
  "duration": 1519262800,
  "status": "passed"
});
formatter.before({
  "duration": 13488323300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"romeo479@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"alpha568\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 54900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1756366200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romeo479@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 446005800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpha568",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 264861800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1327698900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 142476400,
  "status": "passed"
});
formatter.after({
  "duration": 982931000,
  "status": "passed"
});
formatter.before({
  "duration": 11777942500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"romeo4860@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"alpha487\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 58200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1640702500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romeo4860@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 439825700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alpha487",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 313786200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 841212800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 133743800,
  "status": "passed"
});
formatter.after({
  "duration": 1180301900,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/registration.feature");
formatter.feature({
  "line": 2,
  "name": "Register functionality",
  "description": "  As a user I want to register on nop commerce",
  "id": "register-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
});