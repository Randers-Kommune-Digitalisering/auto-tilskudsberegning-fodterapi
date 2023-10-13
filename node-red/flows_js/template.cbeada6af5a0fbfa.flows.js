const Node = {
  "id": "cbeada6af5a0fbfa",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: loginButtons",
  "field": "webElements.loginButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 720,
  "y": 1240,
  "wires": [
    [
      "aec14ec8ad564e45"
    ]
  ],
  "_order": 228
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-primary" id="button_acceptPage" type="submit" onclick="" onsubmit="lockButton(this.id)">
        Godkend loginoplysninger
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="loadPage('rules');lockButton(this.id)">
        Gå til forretningsregler
    </button>
</div>

`

module.exports = Node;