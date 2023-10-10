const Node = {
  "id": "ab18ac7e86e6954a",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "elements",
  "rules": [
    {
      "t": "set",
      "p": "webElements.receipt.grant",
      "pt": "msg",
      "to": "payload.persondata.bevilling ?\t'<div class=\"mb-3 text-success\"><i class=\"fas fa-check\"></i> Bevilget tilskud til fodpleje</div>'\t:\t''",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 900,
  "y": 2040,
  "wires": [
    [
      "40d793f24bd697d9"
    ]
  ],
  "_order": 413
}

module.exports = Node;