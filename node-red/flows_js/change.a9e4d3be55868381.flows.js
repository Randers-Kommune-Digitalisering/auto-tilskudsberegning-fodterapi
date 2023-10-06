const Node = {
  "id": "a9e4d3be55868381",
  "type": "change",
  "z": "55e8960ea895cf83",
  "g": "30db9c49e9f6227d",
  "name": "RULE TEMPLATE",
  "rules": [
    {
      "t": "set",
      "p": "regexValues.sql_injection",
      "pt": "msg",
      "to": "(\\s*([\\0\\b\\'\\\"\\n\\r\\t\\%\\_\\\\]*\\s*(((select\\s*.+\\s*from\\s*.+)|(insert\\s*.+\\s*into\\s*.+)|(update\\s*.+\\s*set\\s*.+)|(delete\\s*.+\\s*from\\s*.+)|(drop\\s*.+)|(truncate\\s*.+)|(alter\\s*.+)|(exec\\s*.+)|(\\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\\s*.+[\\=\\>\\<=\\!\\~]+.+)|(let\\s+.+[\\=]\\s*.*)|(begin\\s*.*\\s*end)|(\\s*[\\/\\*]+\\s*.*\\s*[\\*\\/]+)|(\\s*(\\-\\-)\\s*.*\\s+)|(\\s*(contains|containsall|containskey)\\s+.*)))(\\s*[\\;]\\s*)*)+)",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "rules",
      "pt": "msg",
      "to": "[\t    {\t        \"name\": \"Check integer\",\t        \"operator\": \"==\",\t        \"value\": 2,\t        \"type\": \"number\",\t        \"description\": \"The integer should be set to 2, use this rule to check if this is true.\",\t        \"error\": \"The variable 'integer' does not follow the set rule\"\t    },\t    {\t        \"name\": \"Check string\",\t        \"operator\": \"contains\",\t        \"value\": \"world\",\t        \"description\": \"The string should contain the word 'world', use this rule to check if this is true.\"\t    },\t    {\t        \"name\": \"Check boolean\",\t        \"operator\": \"==\",\t        \"value\": true,\t        \"type\": \"bool\",\t        \"description\": \"The boolean should be set to true, use this rule to check if this is the case.\"\t    },\t    {\t        \"name\": \"Check empty string\",\t        \"operator\": \"==\",\t        \"value\": \"\",\t        \"description\": \"This string should be empty (but not null), use this rule to check if this is true.\"\t    },\t    {\t        \"name\": \"Regex1\",\t        \"operator\": \"regexmatch\",\t        \"value\": \"[0-9]\",\t        \"description\": \"Regex test - matches with any integers\"\t    },\t    {\t        \"name\": \"Regex2\",\t        \"operator\": \"regexcontains\",\t        \"value\": regexValues.sql_injection,\t        \"description\": \"Regex test - matches with any integers\"\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 180,
  "wires": [
    [
      "2be72271d7bdeecd"
    ]
  ],
  "_order": 484
}

module.exports = Node;