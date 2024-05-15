const Node = {
  "id": "6e9a141119f3d379",
  "type": "debug",
  "z": "41d1b8798efe7e15",
  "name": "New PupController Request",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"pupController\": \"new request\",\t    \"actionCount\": payload ~> $count()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 410,
  "y": 400,
  "wires": []
}

module.exports = Node;