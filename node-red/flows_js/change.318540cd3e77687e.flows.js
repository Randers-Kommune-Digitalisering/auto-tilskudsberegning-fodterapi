const Node = {
  "id": "318540cd3e77687e",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dd8bf1dc973547ed",
  "name": "Sæt pup commands",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[\t    {\t       \"action\": \"goto\",\t       \"url\": selectors.kp.url\t\t    },\t    \t    {\t        \"action\": \"wait\",\t        \"ms\": 5000\t    },\t\t    {\t       \"action\": \"select\",\t       \"path\": selectors.kp.login.select,\t       \"input\": \"Randers Kommune\"\t    },\t        \t    {\t        \"action\": \"wait\",\t        \"ms\": 500\t    },\t\t    {\t       \"action\": \"click\",\t       \"path\": selectors.kp.login.button\t    },\t\t    {\t        \"action\": \"wait\",\t        \"ms\": 5000\t    },\t\t    {\t        \"action\": \"type\",\t        \"path\": selectors.kp.login.dqUser,\t        \"input\": \"randers.dk\\\\\" & dqUser\t    },\t    {\t        \"action\": \"type\",\t        \"path\": selectors.kp.login.dqPass,\t        \"input\": dqPass\t    },\t    {\t        \"action\": \"click\",\t        \"path\": selectors.kp.login.dqButton\t    },\t\t    {\t        \"action\": \"wait\",\t        \"ms\": 5000\t    },\t\t    {\t       \"action\": \"get\",\t       \"name\": \"navn\",\t       \"path\": selectors.kp.dqUsername\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$append(payload, citizens@$A.(\t    [\t        {\t           \"action\": \"type\",\t           \"input\": $A.cpr,\t           \"path\": selectors.kp.inputCPR\t\t        },\t        {\t           \"action\": \"click\",\t           \"path\": selectors.kp.inputCPR_soegknap\t\t        },\t        {\t            \"action\": \"geturl\",\t            \"name\": \"kpurl\",\t            \"obj\": $A.cpr\t        },\t        {\t            \"action\": \"clickifexists\",\t            \"path\": 'div[class=\"sc-jKVCRD CUfQJ\"]'\t        },\t        {\t           \"action\": \"click\",\t           \"path\": selectors.kp.citizen.personligtillaegsprocent_aabn\t\t        },\t        {\t           \"action\": \"get\",\t           \"name\": \"personligtillaegsprocent\",\t           \"path\": selectors.kp.citizen.tillaegsprocent,\t           \"obj\": $A.cpr\t\t        },\t        {\t           \"action\": \"click\",\t           \"path\": selectors.kp.citizen.tillaegsprocent_luk\t\t        },\t        {\t            \"action\": \"click\",\t            \"path\": selectors.kp.citizen.helbredstillaegsprocent_aabn\t\t        },\t        {\t            \"action\": \"get\",\t            \"name\": \"helbredstillaegsprocent\",\t            \"path\": selectors.kp.citizen.tillaegsprocent,\t            \"obj\": $A.cpr\t\t        },\t        {\t            \"action\": \"click\",\t            \"path\": selectors.kp.citizen.tillaegsprocent_luk\t\t        },\t        {\t            \"action\": \"get\",\t            \"name\": \"bevilling\",\t            \"path\": selectors.kp.citizen.bevilling,\t            \"obj\": $A.cpr\t\t        },\t        {\t           \"action\": \"get\",\t           \"name\": \"sager\",\t           \"path\": selectors.kp.citizen.sager,\t           \"obj\": $A.cpr\t\t        },\t        {\t           \"action\": \"get\",\t           \"name\": \"danmarkgruppe\",\t           \"path\": selectors.kp.citizen.danmarkgruppe,\t           \"obj\": $A.cpr\t\t        },\t        {\t           \"action\": \"get\",\t           \"name\": \"formue\",\t           \"path\": selectors.kp.citizen.formue,\t           \"obj\": $A.cpr\t\t        },\t        {\t            \"action\": \"click\",\t            \"path\": selectors.kp.citizen.lukborger\t        }\t    ]\t))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 1360,
  "wires": [
    [
      "a92cee9aae85d513"
    ]
  ],
  "_order": 844
}

module.exports = Node;