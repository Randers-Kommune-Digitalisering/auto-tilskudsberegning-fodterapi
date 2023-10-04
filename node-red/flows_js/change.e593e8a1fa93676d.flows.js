const Node = {
  "id": "e593e8a1fa93676d",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Metrics",
  "rules": [
    {
      "t": "set",
      "p": "webElements.metrics",
      "pt": "msg",
      "to": "[]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "webElements.metrics",
      "pt": "msg",
      "to": "$globalContext(\"metrics\") @ $metric . {\t    \"name\": $metric.displayname,\t    \"isAvailable\": $avail := ($metric.value = 1 ? true : false),\t    \"message\": $avail ? \"OK ✔️\" : \"Ingen forbindelse ⭕\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 1240,
  "wires": [
    [
      "11d389fe09aac0b0",
      "c51487801a7c8472"
    ]
  ],
  "_order": 356
}

module.exports = Node;