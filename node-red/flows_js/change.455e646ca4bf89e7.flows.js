const Node = {
  "id": "455e646ca4bf89e7",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Rens msg",
  "rules": [
    {
      "t": "delete",
      "p": "presetStartDate",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "presetEndDate",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "maxDaysPerRun",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "order",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "orderby",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1140,
  "y": 1860,
  "wires": [
    []
  ],
  "_order": 461
}

module.exports = Node;