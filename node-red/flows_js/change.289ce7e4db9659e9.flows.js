const Node = {
  "id": "289ce7e4db9659e9",
  "type": "change",
  "z": "29cd456b5e8fbe86",
  "g": "2da80c856a0c5131",
  "name": "Sæt selectors",
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
      "to": "kpurl",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "selectors.kp.login.select",
      "pt": "msg",
      "to": "#SelectedAuthenticationUrl",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.login.button",
      "pt": "msg",
      "to": "input.button",
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
      "p": "selectors.kp.citizen.pensionstype",
      "pt": "msg",
      "to": "#person-pension-fakta > tbody > tr:nth-child(1) > td:nth-child(2) > div",
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
      "to": "#person-pension-fakta > tbody div > div.HistoryPane__StyledOverlayForHistoryPane-sc-1mpl43b-0.ceTRRO > div > button",
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
      "to": "div[class=\"Layout__ContentContainer-cetblr-8 Layout__ContentContainerWithFlexRow-cetblr-10 knWRCb\"]",
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
  "x": 660,
  "y": 440,
  "wires": [
    [
      "a7c72faa4e0c15a1"
    ]
  ],
  "_order": 45
}

module.exports = Node;