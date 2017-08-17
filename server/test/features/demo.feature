@Demo
Feature: Example feature file

  Scenario: Check that a response comes from the API
    Given I make a GET request to the API endpoint "/api/v1/ping" as "ping"
    Then The response from the "ping" request equals "OK"

  Scenario: Check the version number
    Given I make a GET request to the API endpoint "/api/v1/version" as "version"
    Then The response from the "version" request contains:
      | version |
      | v1.0.0  |

  Scenario: Check the version number
    Given I make a GET request to the API endpoint "/api/v1/angular" as "angular"
    Then The response path "links" from the "angular" request contains:
      | link                                        | name              |
      | https://angular.io/tutorial                 | Tutorial          |
      | https://github.com/angular/angular-cli/wiki | CLI Documentation |
      | https://blog.angular.io                     | Angular Blog      |

  Scenario: Check the version number
    Given I make a GET request to the API endpoint "/api/v1/material" as "material"
    Then The response path "links" from the "material" request contains:
      | link                                            | name        |
      | https://tburleson-layouts-demos.firebaseapp.com | Flex Layout |
