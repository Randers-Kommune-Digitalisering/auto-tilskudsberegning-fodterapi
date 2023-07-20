const Node = {
  "id": "146268535047f95d",
  "type": "template",
  "z": "e814d4e251f3dd46",
  "name": "Rule examples",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 300,
  "wires": [
    []
  ],
  "_order": 974
}

Node.template = `

    {
        "name": "Check integer",
        "description": "The integer should be set to 2, use this rule to check if this is true.",

        "operator": "==",
        "value": 2
    },

    {
        "name": "Check string",
        "description": "The string should contain the word 'world', use this rule to check if this is true.",

        "operator": "contains",
        "value": "world"
    },

    {
        "name": "Check boolean",
        "description": "The boolean should be set to true, use this rule to check if this is the case.",

        "operator": "==",
        "value": true
    },

    {
        "name": "Check empty string",
        "description": "Matches with any empty string (not null), use this rule to check if this is true.",

        "operator": "==",
        "value": ""
    },

    {
        "name": "Regex int",
        "description": "Regex test - matches with any integers",

        "operator": "regex",
        "value": "[0-9]"
    },

    {
       "name": "Capitalized text",
       "description": "Matches with any Capitalized words",

       "operator": "regex",
       "value": "([A-Z])\\\\w+"
    }
`

module.exports = Node;