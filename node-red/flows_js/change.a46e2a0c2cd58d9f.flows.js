const Node = {
  "id": "a46e2a0c2cd58d9f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "380e5c7e0ea3778b",
  "name": "Beautify behandlingstitler",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura.behandlinger |\t( $t := titel;\t{\t    \"titel\": (titel = \"Behandlingpåklinik\") ? \"Behandling på klinik\"\t    :        (titel = \"Behandlingipatientsegethjem\") ? \"Behandling i patients eget hjem\"\t    :         $$.tilskudsInfo.tilskudsperioder.satser[wtitel = $t].titel\t})|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$.errors ~> | $.faktura.behandlinger |\t( $t := titel;\t{\t    \"titel\": (titel = \"Behandlingpåklinik\") ? \"Behandling på klinik\"\t    :        (titel = \"Behandlingipatientsegethjem\") ? \"Behandling i patients eget hjem\"\t    :         $$.tilskudsInfo.tilskudsperioder.satser[wtitel = $t].titel\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 2660,
  "wires": [
    [
      "4fa04433812ed133",
      "8a3db972f8fb7806"
    ]
  ],
  "_order": 288
}

module.exports = Node;