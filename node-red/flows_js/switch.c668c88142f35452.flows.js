const Node = {
  "id": "c668c88142f35452",
  "type": "switch",
  "z": "85ff29bdef7c1aea",
  "name": "",
  "property": "stepHistoryChange",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 590,
  "y": 80,
  "wires": [
    [
      "6cfb9bed6a24be31"
    ],
    []
  ],
  "_order": 248
}

module.exports = Node;