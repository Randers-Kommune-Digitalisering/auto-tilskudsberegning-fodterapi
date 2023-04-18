const Node = {
  "id": "f4ff9a7a66ddb884",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: login",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1330,
  "y": 480,
  "wires": [
    [
      "e36e40cecb56969d"
    ]
  ],
  "_order": 128
}

Node.template = `
<div class="card mb-2">
    <div class="card-header">WorkLet loginoplysninger</div>
    <div class="card-body">
        <p class="card-text">Før du kan søge efter fakturaer, skal du indtaste kommunens loginoplysninger til WorkLet.</p>
        
        <div class="form-group" id="form-group">
            <input type="hidden" id="requestType" value="acceptPage">
            <input type="hidden" id="pageToAccept" value="login">
            <input type="hidden" id="toAccept" value="{{payload.pageElements.loginToAccept}}">
            
            <div class="form-floating mb-3 was-validated">
            <input type="text" class="form-control" id="workletUser" placeholder="name@example.com" autocomplete="off">
            <label for="workletUser">Email addresse</label>
            </div>
            <div class="form-floating  was-validated">
            <input type="password" class="form-control" id="workletPass" placeholder="Password" style="font-family: 'password'">
            <label for="workletPass">Kodeord</label>
            </div>
        </div>

        {{{payload.pageElements.loginButtons}}}

    </div>
</div>


`

module.exports = Node;