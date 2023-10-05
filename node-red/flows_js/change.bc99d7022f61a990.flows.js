const Node = {
  "id": "bc99d7022f61a990",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "Set selectors",
  "rules": [
    {
      "t": "set",
      "p": "selectors.kp",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "selectors.kp.url",
      "pt": "msg",
      "to": "KP_URL",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "selectors.kp.login",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "selectors.kp.login.select",
      "pt": "msg",
      "to": "[id=\"SelectedAuthenticationUrl\"]",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.login.button",
      "pt": "msg",
      "to": ".button",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.inputCPR",
      "pt": "msg",
      "to": "#search_box input",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.inputCPR_soegknap",
      "pt": "msg",
      "to": "#search_box button",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.personligtillaegsprocent",
      "pt": "msg",
      "to": "#person-pension-fakta > tbody > tr:nth-child(5) > td:nth-child(2) > div",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.helbredstillaegsprocent_aabn",
      "pt": "msg",
      "to": "#person-pension-fakta > tbody > tr:nth-child(6) > td:nth-child(3) > div > div > span > span",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.helbredstillaegsprocent",
      "pt": "msg",
      "to": "#person-pension-fakta > tbody > tr:nth-child(6) > td:nth-child(2) > div",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.danmarkgruppe",
      "pt": "msg",
      "to": "#person-oplysninger > tbody > tr:nth-child(6) > td:nth-child(2) > div",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.personligtillaegsprocent_aabn",
      "pt": "msg",
      "to": "#person-pension-fakta > tbody > tr:nth-child(5) > td:nth-child(3) > div > div > span > span",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.tillaegsprocent",
      "pt": "msg",
      "to": "#history_table",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.tillaegsprocent_luk",
      "pt": "msg",
      "to": "svg[class=\"svg-inline--fa fa-xmark close-button\"]",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.formue",
      "pt": "msg",
      "to": "#person-pension-fakta > tbody > tr:nth-child(4) > td:nth-child(2) > div",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.sager",
      "pt": "msg",
      "to": "#person_overblik_sager_table",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.lukborger",
      "pt": "msg",
      "to": "svg.svg-inline--fa.fa-xmark.fa-1x",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "kp_lukborger",
      "pt": "flow",
      "to": "selectors.kp.citizen.lukborger",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.bevilling",
      "pt": "msg",
      "to": "#app div.tab-content div.tab-content > div > div > div:nth-child(1) > div",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.dqUsername",
      "pt": "msg",
      "to": "div[class=\\\"Layout__ContentContainer-cetblr-8 Layout__ContentContainerWithFlexRow-cetblr-10 knWRCb\\\"]",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.login.dqUser",
      "pt": "msg",
      "to": "#userNameInput",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.login.dqPass",
      "pt": "msg",
      "to": "#passwordInput",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.login.dqButton",
      "pt": "msg",
      "to": "#submitButton",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 1280,
  "wires": [
    [
      "53f1081bc1f81d90"
    ]
  ],
  "_order": 605
}

module.exports = Node;