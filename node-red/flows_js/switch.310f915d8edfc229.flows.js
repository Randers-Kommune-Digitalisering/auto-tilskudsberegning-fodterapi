const Node = {
  "id": "310f915d8edfc229",
  "type": "switch",
  "z": "78f25d49af5c6439",
  "name": "",
  "property": "config.currentRetryAttempt",
  "propertyType": "msg",
  "rules": [
    {
      "t": "else"
    },
    {
      "t": "lte",
      "v": "config.retryAttempts",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 630,
  "y": 100,
  "wires": [
    [],
    []
  ],
  "_order": 288
}

module.exports = Node;