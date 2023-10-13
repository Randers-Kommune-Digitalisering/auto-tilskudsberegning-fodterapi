const Node = {
  "id": "8f514180ad24195a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "0644ae6c3d5c62e8",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "receipts",
      "pt": "global",
      "to": "{\t    \"actions\": payload,\t    \"noactions\": errorList\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 3560,
  "wires": [
    [
      "4620dd5bae9c2d9d",
      "356ac592fffaef56",
      "85554097fa34d1e5",
      "ba4adb64044a14b4"
    ]
  ],
  "_order": 933
}

module.exports = Node;