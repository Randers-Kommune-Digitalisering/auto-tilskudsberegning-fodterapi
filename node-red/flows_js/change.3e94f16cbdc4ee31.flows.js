const Node = {
  "id": "3e94f16cbdc4ee31",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Rens msg",
  "rules": [
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "workletPass",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "selectors",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "headers",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "redirectList",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "statusCode",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "responseUrl",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "retry",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "workletRetryCount",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1060,
  "y": 820,
  "wires": [
    [
      "c8abac1ce4458e1a"
    ]
  ],
  "info": "",
  "_order": 813
}

Node.info = `
## Set msg.receipts

This change node sets msg.receipts = payload.kvitteringer (which contains an array of receipts), and deletes the payload afterwards.
`

module.exports = Node;