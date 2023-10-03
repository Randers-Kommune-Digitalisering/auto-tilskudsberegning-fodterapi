const Node = {
  "id": "c0f8a32bdf33b7ef",
  "type": "change",
  "z": "e814d4e251f3dd46",
  "name": "regular expression og test data sættes",
  "rules": [
    {
      "t": "set",
      "p": "regex",
      "pt": "msg",
      "to": "/[^0-9]?((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]*\\d{4})[^0-9]?/gm",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "0201609996 0201919990 0201919995 0201919996 0211223989 0212159995 0504909989 0504909995 0505059996 0505109990 0505159995 0505209996 0506889996 1007059995 1110109996 1310169995 1310169996 1502779995 1502799995 1502829995 1509819996 2103009996 2311143995 2509479989 2512489996 2911829996 3001749995 3103979995",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 730,
  "y": 1500,
  "wires": [
    [
      "5e80f27970210347",
      "5d4af5efb61cc237",
      "f8430a3e08e0b395"
    ]
  ],
  "_order": 964
}

module.exports = Node;