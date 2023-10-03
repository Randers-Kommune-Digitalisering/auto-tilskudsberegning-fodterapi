const Node = {
  "id": "f1b774e14fa10452",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: loginButtons",
  "field": "payload.pageElements.loginButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1100,
  "y": 440,
  "wires": [
    [
      "f673e8538a4af3d9"
    ]
  ],
  "_order": 278
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-primary" id="button_acceptPage" type="submit" onclick="" onsubmit="lockButton(this.id)">
        Godkend loginoplysninger
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="goToPage('rules');lockButton(this.id)">
        Gå til forretningsregler
    </button>
</div>

`

module.exports = Node;