const Node = {
  "id": "c1fb83dfac2a03ae",
  "type": "change",
  "z": "a1b347492c77827f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://workletnew.snapp.dk/api/municipalities/8a711eac-4ef4-4ec9-9186-ef5787566b57/receipts/export/2023-05-04T09:04:29.000Z/2023-05-04T09:04:29.464Z",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "auth",
      "pt": "msg",
      "to": "WORKLET_AUTH",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t   \"accept\":\"application/json, text/plain, */*\",\t   \"authorization\": auth\t}",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "auth",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 500,
  "wires": [
    [
      "0b7ebe745eae91a6"
    ]
  ],
  "_order": 472
}

module.exports = Node;