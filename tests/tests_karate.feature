Feature: Chat tests

Background:
    * url 'https://kn1ms-chat.azurewebsites.net/api'

Scenario: CreateMessage
    Given path '/messages'
    And request { sender: 'John Doe', text: 'Hello! This is API testing message!' }
    When method post
    Then status 200

Scenario: GetSignalRInfo
    Given path '/SignalRInfo'
    When method get
    Then status 200
    And match response == { url: '#string', accessToken: '#string'}