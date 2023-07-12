const Node = {
  "id": "4c886c495ce2fe9d",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: start",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1350,
  "y": 1240,
  "wires": [
    [
      "1c7f385619f6a12d"
    ]
  ],
  "_order": 174
}

Node.template = `
<div class="card-container mb-3">
    <!-- card-container -->

    {{{payload.pageElements.lastRunCard}}}
    
    {{{payload.pageElements.actionsCard}}}
    
    {{{payload.pageElements.newRunCard}}}

    <!-- /card-container -->
</div>
`

module.exports = Node;