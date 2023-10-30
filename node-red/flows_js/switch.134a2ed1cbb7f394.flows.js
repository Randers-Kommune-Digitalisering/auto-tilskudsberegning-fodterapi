const Node = {
  "id": "134a2ed1cbb7f394",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "name": "Findes global data?",
  "property": "$globalContext(tablename) ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 670,
  "y": 1900,
  "wires": [
    [],
    [
      "938db90da2b0ab5a"
    ]
  ],
  "_order": 706
}

module.exports = Node;