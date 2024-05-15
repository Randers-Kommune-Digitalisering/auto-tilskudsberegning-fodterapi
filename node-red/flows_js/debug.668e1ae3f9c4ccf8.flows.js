const Node = {
  "id": "668e1ae3f9c4ccf8",
  "type": "debug",
  "z": "41d1b8798efe7e15",
  "name": "All Commands Executed",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"successfulActionCount\": payload[succesful = true] ~> $count(),\t    \"failedActionCount\": payload[succesful = false] ~> $count(),\t    \"failedActions\": payload[succesful = false]\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1140,
  "y": 580,
  "wires": []
}

module.exports = Node;