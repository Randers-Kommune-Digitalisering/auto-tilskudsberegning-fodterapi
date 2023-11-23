const Node = {
  "id": "a7c72faa4e0c15a1",
  "type": "change",
  "z": "29cd456b5e8fbe86",
  "g": "2da80c856a0c5131",
  "name": "Sæt pup commands",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[\t    {\t       \"action\": \"goto\",\t       \"url\": selectors.kp.url\t\t    },\t    {\t       \"action\": \"select\",\t       \"path\": selectors.kp.login.select,\t       \"input\": \"Randers Kommune\"\t    },\t    {\t       \"action\": \"jsclick\",\t       \"path\": selectors.kp.login.button\t    },\t    {\t        \"action\": \"type\",\t        \"path\": selectors.kp.login.dqUser,\t        \"input\": \"randers.dk\\\\\" & username\t    },\t    {\t        \"action\": \"type\",\t        \"path\": selectors.kp.login.dqPass,\t        \"input\": password\t    },\t    {\t        \"action\": \"jsclick\",\t        \"path\": selectors.kp.login.dqButton\t    },\t    {\t       \"action\": \"get\",\t       \"name\": \"navn\",\t       \"path\": selectors.kp.dqUsername\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$append(payload, citizens@$A.(\t    [\t        {\t           \"action\": \"jsclick\",\t           \"path\": selectors.kp.inputCPR\t\t        },\t        {\t           \"action\": \"type\",\t           \"input\": $A,\t           \"path\": selectors.kp.inputCPR\t\t        },\t        {\t           \"action\": \"jsclick\",\t           \"path\": selectors.kp.inputCPR_soegknap\t\t        },\t        {\t           \"action\": \"get\",\t           \"name\": \"pensionstype\",\t           \"path\": selectors.kp.citizen.pensionstype,\t           \"obj\": $A\t\t        },\t        {\t            \"action\": \"geturl\",\t            \"name\": \"kpurl\",\t            \"obj\": $A\t        },\t        {\t            \"action\": \"click\",\t            \"path\": selectors.kp.citizen.lukborger\t        }\t    ]\t))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 680,
  "y": 480,
  "wires": [
    [
      "81a0309ea8cd4659"
    ]
  ],
  "_order": 45
}

module.exports = Node;