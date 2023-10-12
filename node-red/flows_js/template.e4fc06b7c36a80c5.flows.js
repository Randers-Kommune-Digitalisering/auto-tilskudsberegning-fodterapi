const Node = {
  "id": "e4fc06b7c36a80c5",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: newRunCard",
  "field": "payload.pageElements.newRunCard",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 860,
  "y": 3260,
  "wires": [
    [
      "4c886c495ce2fe9d"
    ]
  ],
  "_order": 274
}

Node.template = `
<div class="card {{payload.pageElements.newRunCardClasses}}">
    <div class="card-header">{{payload.pageElements.newRunCardHeader}}</div>
    <div class="card-body">
       {{{payload.pageElements.newRunCardBody}}}
    </div>
</div>
`

module.exports = Node;