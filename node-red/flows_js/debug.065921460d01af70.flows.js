const Node = {
  "id": "065921460d01af70",
  "type": "debug",
  "z": "f99fd88fa65c74b9",
  "g": "62e182e14c1bade4",
  "name": "Settings initialized",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"phase\": \"initialization\",\t    \"action\": \"initialize settings\",\t    \"success\": $globalContext(\"rules\") ~> $exists()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 840,
  "y": 140,
  "wires": []
}

module.exports = Node;