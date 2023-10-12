const Node = {
  "id": "465e473a523a8a1f",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "d36913bfb8e8092b",
  "name": "Find helbredstillægsprocent fra personlig tillægsprocent",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura |\t(\t\t    $id := id;\t    $borger := $$.payload[$id in faktura.id];\t    $dato := dato;\t\t{\t\t    \"_helbredstillaegsprocent\": _helbredstillaegsprocent ~> $exists() ? _helbredstillaegsprocent :\t                                _personligtillaegsprocent ~> $exists() ?\t                                {\t                                    \"dato_fra\": _personligtillaegsprocent.dato_fra,\t                                    \"dato_til\": _personligtillaegsprocent.dato_til,\t                                    \"tillaegsprocent\": (_personligtillaegsprocent.tillaegsprocent * 0.85) ~> $floor()\t                                }\t                                : { \"tillaegsprocent\": 0 }\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 2780,
  "wires": [
    [
      "f0ef5103ad6051d0"
    ]
  ],
  "_order": 873
}

module.exports = Node;