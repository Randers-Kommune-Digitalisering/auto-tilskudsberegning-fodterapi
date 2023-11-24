const Node = {
  "id": "eca45063e536b8f0",
  "type": "template",
  "z": "43652557380ac3f3",
  "d": true,
  "name": "element: loginButtons",
  "field": "payload.pageElements.loginButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 720,
  "y": 1280,
  "wires": [
    [
      "ec8b26f3c6be1b33"
    ]
  ],
  "_order": 237
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept') ))">
        Loginoplysninger godkendt
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('rules')">
        Gå til forretningsregler
    </button>
</div>

`

module.exports = Node;