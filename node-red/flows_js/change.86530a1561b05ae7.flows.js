const Node = {
  "id": "86530a1561b05ae7",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Sæt selectors",
  "rules": [
    {
      "t": "set",
      "p": "selectors",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "selectors.worklet",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "selectors.worklet.url",
      "pt": "msg",
      "to": "https://workletnew.snapp.dk/auth/sign-in",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.loginUser",
      "pt": "msg",
      "to": "input[name='username']",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.loginPass",
      "pt": "msg",
      "to": "input[name='password']",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.loginButton",
      "pt": "msg",
      "to": "button",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.datePickerFrom",
      "pt": "msg",
      "to": "[class='react-datepicker__input-container'] > input",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.datePickerActive",
      "pt": "msg",
      "to": "[class='react-datepicker-ignore-onclickoutside']",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.datePickerTo",
      "pt": "msg",
      "to": "div:last-child > [class='react-datepicker__input-container'] > input",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.downloadButton",
      "pt": "msg",
      "to": "button[class='btn btn-primary btn-block primary-color']",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "selectors.worklet.header",
      "pt": "msg",
      "to": "h1",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 900,
  "wires": [
    [
      "5509a842e605e90e"
    ]
  ],
  "info": "",
  "_order": 441
}

Node.info = `
## Sæt referencer

In this change node, CSS selectors for Worklet web interface (https://workletnew.snapp.dk/) are set for use in the PupController JSON file.
`

module.exports = Node;