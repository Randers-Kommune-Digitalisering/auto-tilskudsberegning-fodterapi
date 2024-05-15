const Node = {
  "id": "d6f85b9c47b51228",
  "type": "debug",
  "z": "41d1b8798efe7e15",
  "name": "Browserless started",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "error ~> $exists() ?\t{\t    \"pupController\": \"error connecting to browser\",\t    \"error\": error\t}\t:\t{\t    \"pupController\": \"connected to browser\",\t    \"browser\": pupController.browser,\t    \"page\": pupController.page\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 920,
  "y": 580,
  "wires": []
}

module.exports = Node;