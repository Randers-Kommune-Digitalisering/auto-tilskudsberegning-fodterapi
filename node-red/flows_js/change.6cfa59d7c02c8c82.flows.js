const Node = {
  "id": "6cfa59d7c02c8c82",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Find helbredstillægsprocent fra personlig tillægsprocent",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura |\t(\t\t    $id := id;\t    /*$borger := $$.payload[faktura.id = $id];*/\t    $borger := $$.payload[$id in faktura.id];\t    $dato := dato;\t\t{\t\t    \"_helbredstillaegsprocent\": _helbredstillaegsprocent ~> $exists() ? _helbredstillaegsprocent :\t                                _personligtillaegsprocent ~> $exists() ?\t                                {\t                                    \"dato_fra\": _personligtillaegsprocent.dato_fra,\t                                    \"dato_til\": _personligtillaegsprocent.dato_til,\t                                    \"tillaegsprocent\": (_personligtillaegsprocent.tillaegsprocent * 0.85) ~> $floor()\t                                }\t                                : { \"tillaegsprocent\": 0 }\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1395,
  "y": 1920,
  "wires": [
    [
      "05096968ae22cc6f"
    ]
  ],
  "l": false,
  "_order": 453
}

module.exports = Node;