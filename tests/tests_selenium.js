const url = "https://kn1ms.z6.web.core.windows.net/";
const defaultTimeout = 3000;

module.exports = {
    "@disabled": false,
    "Test basic page": function (client) {
        client
            .url(url)
            .pause(defaultTimeout)
            .setAlertText('Kn1MS')
            .acceptAlert()
            .verify.title("Kn1MS Chat")
            .assert.visible("input[id=message-box]")
            .assert.visible("div[class=col-sm]")
            .pause(defaultTimeout)
            .end()
    },

    "Test message sending": function (client) {
        client
            .url(url)
            .setAlertText('Kn1MS')
            .acceptAlert()
            .pause(defaultTimeout)
            .waitForElementVisible("div[class=col-sm]", 12000)
            .assert.visible("input[id=message-box]")
            .setValue("input[id=message-box]", ['Some test message', client.Keys.ENTER])
            .pause(defaultTimeout)
            .assert.containsText("div:nth-child(3)", "Kn1MS")
            .assert.containsText("div:nth-child(3)", "Some test message")
            .pause(defaultTimeout)
            .end()
    },

    "Test dices": function (client) {
        client
            .url(url)
            .setAlertText('Kn1MS')
            .acceptAlert()
            .pause(defaultTimeout)
            .waitForElementVisible("div[class=col-sm]", 12000)
            .assert.visible("input[id=message-box]")
            .setValue("input[id=message-box]", ['1d10', client.Keys.ENTER])
            .pause(defaultTimeout)
            .assert.containsText("div:nth-child(3)", "SYSTEM")
            .assert.containsText("div:nth-child(3)", "Kn1MS threw some dices (1d10). Result: ")
            .pause(defaultTimeout)
            .end()
    },

    "Test strange dice": function (client) {
        client
            .url(url)
            .setAlertText('Kn1MS')
            .acceptAlert()
            .pause(defaultTimeout)
            .waitForElementVisible("div[class=col-sm]", 12000)
            .assert.visible("input[id=message-box]")
            .pause(defaultTimeout)
            .setValue("input[id=message-box]", ['1d99999', client.Keys.ENTER])
            .pause(defaultTimeout)
            .assert.containsText("div:nth-child(3)", "SYSTEM")
            .assert.containsText("div:nth-child(3)", "Kn1MS threw some dices (1d9999). Result: ")
            .end()
    },

    "Test nick changing": function (client) {
        client
            .url(url)
            .setAlertText('Kn1MS')
            .acceptAlert()
            .pause(defaultTimeout)
            .waitForElementVisible("div[class=col-sm]", 12000)
            .assert.visible("input[id=message-box]")
            .setValue("input[id=message-box]", ['/nick NewKn1MS', client.Keys.ENTER])
            .pause(defaultTimeout)
            .assert.containsText("div:nth-child(3)", "SYSTEM")
            .assert.containsText("div:nth-child(3)", "Kn1MS changed his nickname to NewKn1MS!")
            .pause(defaultTimeout)
            .setValue("input[id=message-box]", ['Some test message for new nick', client.Keys.ENTER])
            .pause(defaultTimeout)
            .assert.containsText("div:nth-child(3)", "NewKn1MS")
            .assert.containsText("div:nth-child(3)", "Some test message for new nick")
            .end()
    }
}