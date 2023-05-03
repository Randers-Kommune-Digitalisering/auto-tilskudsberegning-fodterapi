const Node = {
  "id": "6aea2a69085ab1fc",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New grants template",
  "rules": [
    {
      "t": "set",
      "p": "payload.grants",
      "pt": "msg",
      "to": "{\t      \"periode_fra\": \"2023-01-01\",\t      \"periode_til\": \"2023-12-31\",\t      \"satser\": [\t        {\t          \"tilskud_maxdkk\": 24,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Journaloptagelse\"\t        },\t        {\t          \"tilskud_maxdkk\": 24,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Kontrol og/eller eftersyn\"\t        },\t        {\t          \"tilskud_maxdkk\": 111,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Behandlingsydelse C\"\t        },\t        {\t          \"tilskud_maxdkk\": 81,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Første fodstatus (nyhenvist patient)\"\t        },\t        {\t          \"tilskud_maxdkk\": 66,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Fodstatus\"\t        },\t        {\t          \"tilskud_maxdkk\": 55,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Fodstatus ved samtidig anden behandling\"\t        },\t        {\t          \"tilskud_maxdkk\": 25,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Opdatering af fodstatus ved skift i risikogruppe\"\t        },\t        {\t          \"tilskud_maxdkk\": 66,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Behandlingsydelse A\"\t        },\t        {\t          \"tilskud_maxdkk\": 100,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Behandlingsydelse B\"\t        },\t        {\t          \"tilskud_maxdkk\": 200,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Indlæg - type 1, enkelt\"\t        },\t        {\t          \"tilskud_maxdkk\": 400,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Indlæg - type 1, par\"\t        },\t        {\t          \"tilskud_maxdkk\": 200,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Indlæg - type 2, enkelt\"\t        },\t        {\t          \"tilskud_maxdkk\": 400,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Indlæg - type 2, par\"\t        },\t        {\t          \"tilskud_maxdkk\": 200,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Indlæg - type 3, enkelt\"\t        },\t        {\t          \"tilskud_maxdkk\": 400,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Indlæg - type 3, par\"\t        },\t        {\t          \"tilskud_maxdkk\": 125,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Tilretning af indlæg\"\t        },\t        {\t          \"tilskud_maxdkk\": 24,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Behandling før påsætning af 1 ny bøjle\"\t        },\t        {\t          \"tilskud_maxdkk\": 72,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Fremstilling og påsætning af 1 ny bøjle\"\t        },\t        {\t          \"tilskud_maxdkk\": 48,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Fremstilling og påsætning af bøjler udover 1\"\t        },\t        {\t          \"tilskud_maxdkk\": 48,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Korrektion af 1 bøjle\"\t        },\t        {\t          \"tilskud_maxdkk\": 72,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Korrektion af 2 bøjle\"\t        },\t        {\t          \"tilskud_maxdkk\": 96,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Korrektion af op til 10 bøjler incl.\"\t        },\t        {\t          \"tilskud_maxdkk\": 48,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Ortheser\"\t        },\t        {\t          \"tilskud_maxdkk\": 48,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Ortheser fremstilet af sislicone\"\t        },\t        {\t          \"tilskud_maxdkk\": 55,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Sårbehandling\"\t        },\t        {\t          \"tilskud_maxdkk\": 44,\t          \"tilskud_procent\": 80,\t          \"titel\": \"Sårbehandling ved anden samtidig behandling\"\t        },\t        {\t          \"tilskud_maxdkk\": 100,\t          \"tilskud_procent\": 50,\t          \"titel\": \"Behandling uden tilskud\"\t        },\t        {\t          \"tilskud_maxdkk\": 0,\t          \"tilskud_procent\": 0,\t          \"titel\": \"Afstandstillæg uden tilskud\"\t        }\t      ]\t    }",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.grants",
      "pt": "msg",
      "to": "$.payload.grants ~> | $.satser |\t(\t{\t    \"wtitel\": titel ~> $replace(\" \", \"\")\t})|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.grants",
      "pt": "msg",
      "to": "{\t    \"max_hjemmebehandling\": 9999999999999999,\t    \"max_udekoersel\": 9999999999999999,\t    \"danmark_fratraek_procent\": 50,\t    \"danmark_fratraek_maxdkk\": 100,\t    \"tilskudsperioder\": payload.grants\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.grants.tilskudsperioder.satser",
      "pt": "msg",
      "to": "payload.grants.tilskudsperioder.satser @ $g #$index.\t{\t    \"id\": $index,\t    \"tilskud_maxdkk\": $g.tilskud_maxdkk,\t    \"tilskud_procent\": $g.tilskud_procent,\t    \"titel\": $g.titel,\t    \"wtitel\": $g.wtitel\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 660,
  "wires": [
    [
      "3f926de50bc6c69f"
    ]
  ],
  "_order": 200
}

module.exports = Node;