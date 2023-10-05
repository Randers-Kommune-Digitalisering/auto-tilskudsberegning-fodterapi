const Node = {
  "id": "869abce3d0a8e069",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "d36913bfb8e8092b",
  "name": "Find tillægsprocent gældende for hver faktura",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura |\t(\t\t    $id := id;\t    $borger := $$.payload[$id in faktura.id];\t    $dato := dato;\t\t{\t\t    \"_personligtillaegsprocent\": $borger.persondata.personligtillaegsprocent [\t        ($dato ~> $toMillis) > (dato_fra ~> $toMillis)\t    and\t        (dato_til ~> $boolean ? (($dato ~> $toMillis) < (dato_til ~> $toMillis)) : true)\t    ],\t\t    \"_helbredstillaegsprocent\": $borger.persondata.helbredstillaegsprocent [\t        ($dato ~> $toMillis) > (dato_fra ~> $toMillis)\t    and\t        (dato_til ~> $boolean ? (($dato ~> $toMillis) < (dato_til ~> $toMillis)) : true)\t    ]\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 310,
  "y": 2740,
  "wires": [
    [
      "465e473a523a8a1f"
    ]
  ],
  "_order": 949
}

module.exports = Node;