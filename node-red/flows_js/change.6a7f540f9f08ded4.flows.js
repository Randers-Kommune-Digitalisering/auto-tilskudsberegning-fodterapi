const Node = {
  "id": "6a7f540f9f08ded4",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "Set pup commands",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[\t    {\t        \"action\": \"launch\",\t        \"parameters\":\t        {\t            \"headless\": true,\t            \"slowMo\": 50,\t            \"ignoreHTTPSErrors\": true,\t            \"defaultViewport\": null\t        }\t    },\t\t    {\t        \"action\": \"goto\",\t        \"url\": selectors.worklet.url\t    },\t\t    {\t        \"action\": \"wait\",\t        \"ms\": 10000\t    },\t    \t    {\t        \"action\": \"type\",\t        \"path\": selectors.worklet.loginUser,\t        \"input\": workletUser\t    },\t\t    {\t        \"action\": \"type\",\t        \"path\": selectors.worklet.loginPass,\t        \"input\": workletPass\t    },\t    \t    {\t        \"action\": \"click\",\t        \"path\": selectors.worklet.loginButton\t    },\t\t    {\t        \"action\": \"click\",\t        \"path\": selectors.worklet.datePickerFrom\t    },\t\t    {\t        \"action\": \"type\",\t        \"path\": selectors.worklet.datePickerActive,\t        \"input\": currentRun.startDate,\t        \"clear\": true\t    },\t\t    {\t        \"action\": \"click\",\t        \"path\": selectors.worklet.header\t    },\t\t    {\t        \"action\": \"click\",\t        \"path\": selectors.worklet.datePickerTo\t    },\t\t    {\t        \"action\": \"type\",\t        \"path\": selectors.worklet.datePickerActive,\t        \"input\": currentRun.endDate,\t        \"clear\": true\t    },\t\t    {\t        \"action\": \"click\",\t        \"path\": selectors.worklet.header\t    },\t\t    {\t        \"action\": \"click\",\t        \"isDownload\": true,\t        \"path\": selectors.worklet.downloadButton\t    },\t    {\t        \"action\": \"close\"\t    }\t    \t]",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "workletPass",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 950,
  "y": 580,
  "wires": [
    [
      "15a1703b4a5286c7"
    ]
  ],
  "info": "",
  "_order": 229
}

Node.info = `
## Set pup commands

This change node sets the automation flow JSON needed in PupController API. The flow is hard-coded with variable references to the CSS selectors defined in the preceeding node.
`

module.exports = Node;