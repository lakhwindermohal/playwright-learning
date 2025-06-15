Feature: Text Box Form Submission

  Scenario: Submit TextBox form successfully
    Given I navigate to demoqa homepage
    When I click Elements
    And I click Text Box
    And I fill TextBox form
    Then I should see submitted output