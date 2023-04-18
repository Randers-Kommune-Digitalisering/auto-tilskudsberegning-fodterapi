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
      "to": "https://fagsystem.kommunernespensionssystem.dk/",
      "tot": "str"
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
      "to": "#person-pension-fakta div.sc-gPEVay.ceKhsN > div.sc-jlyJG.NUpYs > svg",
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
      "to": "svg.svg-inline--fa.fa-times.fa-w-11.fa-1x",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.kp.citizen.bevilling",
      "pt": "msg",
      "to": "#app div.tab-content div.tab-content > div > div > div:nth-child(1) > div",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 860,
  "wires": [
    [
      "c2df29c07624e5e0"
    ]
  ],
  "_order": 341
}

module.exports = Node;