@Example
Feature: Example feature file

  Scenario: Check the site loads
    Given I navigate to the "/" page
    Then the browser title should be "Demo"
    And there is an h2 element that contains the text "Learn more"
