const Node = {
  "id": "74cd38d81e06eb6b",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: runHistory",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 740,
  "y": 1020,
  "wires": [
    [
      "ff453a59f2b2253f"
    ]
  ],
  "_order": 228
}

Node.template = `
<div class="card mb-2">
    <div class="card-header">Kørselshistorik</div>
    <div class="card-body">
        <p class="card-text">Her ses en oversigt over de seneste kørsler.</p>
        
        

    </div>
</div>


`

module.exports = Node;