const Node = {
  "id": "81f4d21ab95b843c",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "payload.data.pageToAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.toAccept",
      "pt": "msg",
      "to": "payload.data.toAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload.data",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "payload.redirect",
      "pt": "msg",
      "to": "(\t    $pageOrder := [\t    \"login\",\t    \"rules\",\t    \"grants\",\t    \"run\"\t    ];\t\t    $$.payload.toAccept ?\t    \t        $pageOrder ~> $map( function($value, $key)\t        {\t            $value = $$.payload.page ?\t                $pageOrder[$key+1]\t        }\t        )\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1450,
  "y": 940,
  "wires": [
    [
      "e5908679bccd13f4",
      "ebd7644b09ce9624"
    ]
  ],
  "_order": 1016
}

module.exports = Node;