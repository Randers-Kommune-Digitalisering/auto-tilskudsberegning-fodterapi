const Node = {
  "id": "5d4af5efb61cc237",
  "type": "change",
  "z": "e814d4e251f3dd46",
  "d": true,
  "name": "Hele tekst med cpr retur",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[$contains(data, /[^0-9]((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]*\\d{4})[^0-9]/)]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1050,
  "y": 1540,
  "wires": [
    [
      "7762889d5be5d890"
    ]
  ],
  "_order": 978
}

module.exports = Node;