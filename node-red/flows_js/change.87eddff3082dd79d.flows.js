const Node = {
  "id": "87eddff3082dd79d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel \\n variabler",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "receipts",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "dqUser",
      "pt": "msg",
      "to": "currentRun.dqUser",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "queryValues",
      "pt": "msg",
      "to": "( [] ~>$append ( receipts.actions ) ~>$append ( receipts.noactions ) ) ~> $map( function($value, $key)\t{\t    \"('\"\t    & $value.faktura.id\t    & \"', \"\t    & $flowContext(\"currentRun\").uid\t    & \", '\"\t    & $$.dqUser\t    & \"')\"\t})\t~> $join(\",\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 510,
  "y": 3940,
  "wires": [
    [
      "9ce20ec163b09587"
    ]
  ],
  "_order": 939
}

module.exports = Node;