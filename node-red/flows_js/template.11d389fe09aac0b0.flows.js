const Node = {
  "id": "11d389fe09aac0b0",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 770,
  "y": 1240,
  "wires": [
    [
      "a85afd0009f88a48"
    ]
  ],
  "_order": 355
}

Node.template = `
<div class="card-container mb-3">
    <!-- card-container -->

    {{#webElements.metrics}}
    <div class="card border-light">
        <div class="card-header">
            <div class="float-right">{{message}}</div>
            {{name}}
        </div>
        <!--div class="card-body">
            <h4 class="card-title">{{message}}</h4>
        </div-->
    </div>
    {{/webElements.metrics}}

    <!-- /card-container -->
</div>
`

module.exports = Node;