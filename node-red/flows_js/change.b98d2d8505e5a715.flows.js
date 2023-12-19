const Node = {
  "id": "b98d2d8505e5a715",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "0644ae6c3d5c62e8",
  "name": "Beautify behandlingstitler",
  "rules": [
    {
      "t": "set",
      "p": "tilskudsInfo",
      "pt": "msg",
      "to": "grants",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura.behandlinger |\t( $t := titel;\t{\t    \"titel\": (titel = \"Behandlingpåklinik\") ? \"Behandling på klinik\"\t    :        (titel = \"Behandlingipatientsegethjem\") ? \"Behandling i patients eget hjem\"\t    :         $$.tilskudsInfo.tilskudsperioder.satser[wtitel = $t].titel\t})|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "$.errorList ~> | $.faktura.behandlinger |\t( $t := titel;\t{\t    \"titel\": (titel = \"Behandlingpåklinik\") ? \"Behandling på klinik\"\t    :        (titel = \"Behandlingipatientsegethjem\") ? \"Behandling i patients eget hjem\"\t    :         $$.tilskudsInfo.tilskudsperioder.satser[wtitel = $t].titel\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 3520,
  "wires": [
    [
      "160e4999a746b7df",
      "01fbd852a9e244c8"
    ]
  ]
}

module.exports = Node;