const Node = {
  "id": "f8430a3e08e0b395",
  "type": "change",
  "z": "e814d4e251f3dd46",
  "d": true,
  "name": "Returner matchende CPR fra tekst",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$match(payload.data, /[^0-9]((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]*\\d{4})[^0-9]/)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 1580,
  "wires": [
    [
      "7762889d5be5d890"
    ]
  ],
  "_order": 983
}

module.exports = Node;