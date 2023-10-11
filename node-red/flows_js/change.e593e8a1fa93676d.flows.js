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
      "to": "$globalContext(\"metrics\") @ $metric . {\t    \"name\": $metric.displayname,\t    \"isAvailable\": $avail := ($metric.value = 1 ? true : false),\t    \"message\": $avail ? \"OK ✔️\" : \"Ingen forbindelse ⭕\",\t    \"border\": $avail ? \"success\" : \"secondary\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.metricErrors",
      "pt": "msg",
      "to": "webElements.metrics[isAvailable = false] ~> $exists() ? webElements.metrics[isAvailable = false].name",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 1080,
  "wires": [
    [
      "87f88a6b75c29d1e"
    ]
  ],
  "_order": 352
}

module.exports = Node;