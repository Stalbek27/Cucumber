Feature: Data Tables

  Scenario Outline: Check element on data tables

    Given I opened the data tables page
    When I click on element DUE
    Then I should see text check

      