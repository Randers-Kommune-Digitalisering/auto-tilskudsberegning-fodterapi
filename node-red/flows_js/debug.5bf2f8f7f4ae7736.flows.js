const Node = {
  "id": "5bf2f8f7f4ae7736",
  "type": "debug",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"worklet\": statusCode = 200 ? \"receipt download success\" : \"receipt download error\",\t    \"statusCode\": statusCode,\t    \"payload\": payload ~> | $ | {},[receipts] |,\t    \"error\": error.message\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 460,
  "y": 1000,
  "wires": []
}

module.exports = Node;