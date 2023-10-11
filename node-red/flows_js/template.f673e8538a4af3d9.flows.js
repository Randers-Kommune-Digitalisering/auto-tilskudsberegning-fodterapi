const Node = {
  "id": "f673e8538a4af3d9",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: login",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1090,
  "y": 2460,
  "wires": [
    [
      "e36e40cecb56969d"
    ]
  ],
  "_order": 262
}

Node.template = `
<form onsubmit="encryptedPostRequest('encryptedRequest', toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept'), document.getElementById('workletUser'), document.getElementById('workletPass'), document.getElementById('dqUser'), document.getElementById('dqPass')  ));return false">
<div class="card mb-2">
    <div class="card-header">DQ loginoplysninger</div>
    <div class="card-body">
        <p class="card-text">Før du kan søge efter fakturaer, skal du indtaste dine kommunale loginoplysninger.</p>
        
        <div class="form-group" id="form-group">
            <input type="hidden" id="requestType" value="acceptPage">
            <input type="hidden" id="pageToAccept" value="login">
            <input type="hidden" id="toAccept" value="{{payload.pageElements.loginToAccept}}">
            
            <div class="form-floating mb-3">
            <input type="text" class="form-control" id="dqUser" placeholder="DQ0000" autocomplete="off" required>
            <label for="dqUser">DQ-nr.</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="dqPass" placeholder="Password" style="font-family: 'password'" required>
            <label for="dqPass">Kodeord</label>
            </div>
        </div>

    </div>
</div>
<div class="card mb-2">
    <div class="card-header">WorkLet loginoplysninger</div>
    <div class="card-body">
        <p class="card-text">Her skal du indtaste kommunens loginoplysninger til WorkLet.</p>
        
        <div class="form-group" id="form-group">            
            <div class="form-floating mb-3">
            <input type="text" class="form-control" id="workletUser" placeholder="name@example.com" autocomplete="off" required>
            <label for="workletUser">Email addresse</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="workletPass" placeholder="Password" style="font-family: 'password'" required>
            <label for="workletPass">Kodeord</label>
            </div>
        </div>

        {{{payload.pageElements.loginButtons}}}

    </div>
</div>
</form>


`

module.exports = Node;