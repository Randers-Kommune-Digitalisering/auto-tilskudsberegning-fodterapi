const Node = {
  "id": "ec8b26f3c6be1b33",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 930,
  "y": 1280,
  "wires": [
    [
      "13e93da4ab3e4890"
    ]
  ],
  "_order": 233
}

Node.template = `
<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/start">Start</a></li>
    <li class="breadcrumb-item active">Loginoplysninger</li>
</ol>
<div class="card mb-2">
    <div class="card-header">DQ loginoplysninger</div>
    <div class="card-body">
        <p class="card-text">Før du kan søge efter fakturaer, skal du indtaste dine kommunale loginoplysninger.</p>
        
        <div class="form-group" id="form-group">
            <input type="hidden" id="requestType" value="acceptPage">
            <input type="hidden" id="pageToAccept" value="login">
            <input type="hidden" id="toAccept" value="{{webElements.loginToAccept}}">
            
            <div class="form-floating mb-3 was-validated">
            <input type="text" class="form-control" id="dqUser" placeholder="{{global.webData.dqCreds.dqUser}}" autocomplete="off" disabled>
            <label for="dqUser">{{global.webData.dqCreds.dqUser}}</label>
            </div>
            <div class="form-floating  was-validated">
            <input type="password" class="form-control" id="dqPass" placeholder="Password" style="font-family: 'password'" disabled>
            <label for="dqPass" style="font-family: 'password'">Kodeord</label>
            </div>
        </div>

    </div>
</div>
<div class="card mb-2">
    <div class="card-header">WorkLet loginoplysninger</div>
    <div class="card-body">
        <p class="card-text">Her skal du indtaste kommunens loginoplysninger til WorkLet.</p>
        
        <div class="form-group" id="form-group">
            <input type="hidden" id="requestType" value="acceptPage">
            <input type="hidden" id="pageToAccept" value="login">
            <input type="hidden" id="toAccept" value="{{payload.pageElements.loginToAccept}}">
            
            <div class="form-floating mb-3 was-validated">
            <input type="text" class="form-control" id="workletUser" placeholder="{{global.webData.workletCreds.workletUser}}" autocomplete="off" disabled>
            <label for="workletUser">{{global.webData.workletCreds.workletUser}}</label>
            </div>
            <div class="form-floating  was-validated">
            <input type="password" class="form-control" id="workletPass" placeholder="Password" style="font-family: 'password'" disabled>
            <label for="workletPass" style="font-family: 'password'">Kodeord</label>
            </div>
        </div>

        {{{webElements.loginButtons}}}

    </div>
</div>



`

module.exports = Node;