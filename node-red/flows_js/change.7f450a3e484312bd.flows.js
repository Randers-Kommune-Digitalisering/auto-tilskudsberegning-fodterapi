const Node = {
  "id": "7f450a3e484312bd",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Find tillægsprocent gældende for hver faktura",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura |\t(\t\t    $id := id;\t    /*$borger := $$.payload[faktura.id = $id];*/\t    $borger := $$.payload[$id in faktura.id];\t    $dato := dato;\t\t{\t\t    \"_personligtillaegsprocent\": $borger.persondata.personligtillaegsprocent [\t        ($dato ~> $toMillis) > (dato_fra ~> $toMillis)\t    and\t        (dato_til ~> $boolean ? (($dato ~> $toMillis) < (dato_til ~> $toMillis)) : true)\t    ],\t\t    \"_helbredstillaegsprocent\": $borger.persondata.helbredstillaegsprocent [\t        ($dato ~> $toMillis) > (dato_fra ~> $toMillis)\t    and\t        (dato_til ~> $boolean ? (($dato ~> $toMillis) < (dato_til ~> $toMillis)) : true)\t    ]\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1230,
  "y": 1920,
  "wires": [
    [
      "6cfa59d7c02c8c82"
    ]
  ],
  "_order": 323
}

module.exports = Node;