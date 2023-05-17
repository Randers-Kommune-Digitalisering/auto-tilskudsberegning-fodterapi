const Node = {
  "id": "bbd6119019e8240a",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "name": "",
  "property": "workletRetryCount",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lte",
      "v": "3",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 800,
  "wires": [
    [
      "d04faa115ea73982"
    ],
    [
      "2359edd9babea1ac"
    ]
  ],
  "_order": 401
}

module.exports = Node;