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
  "x": 930,
  "y": 1260,
  "wires": [
    [
      "a85afd0009f88a48"
    ]
  ],
  "_order": 358
}

Node.template = `
<div class="card-container mb-3">

    <!-- metrics -->
    {{#webElements.metrics}}
    <div class="card border-{{border}}">
        <div class="card-header border-none">
            <div class="float-right">{{message}}</div>
            {{name}}
        </div>
    </div>
    {{/webElements.metrics}}
    <!-- /metrics -->

</div>
<div class="card-container mb-3">

  <!-- run status card -->
  {{#webElements.currentRun}}
  <div class="card border-light mb-3">
    <div class="card-header">{{title}}</div>
    <div class="card-body">

      <!-- Klar til kørsel -->
      {{#allowRun}}
      <div class="float-right">
        <a class="btn btn-primary fs-13 p-3" href="/run" role="button">
          Fortsæt
        </a>
      </div>
      {{/allowRun}}

      <h4 class="card-title">{{statustext}}</h4>
      
      <!-- Igangværende kørsel status -->
      {{#status}}
        <div class="pl-2 float-left">{{text}}</div>
        <div class="pr-2 float-right fw-500">{{percentage}}%</div>
        <br/>

        <div class="progress mb-1" style="height:40px">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div>
      {{/status}}
      
      <!-- Subtekst: Klar til kørsel / Afventer forbindelse -->
      {{^status}}
      <p class="card-text">
        {{subtext}}
      </p>
      {{/status}}

      <!-- Fakturavisning efter kørsel -->
      {{#receipts}}
        <div class="d-flex" style="gap: 10px">
          {{#actions}}
          <div class="card border-success mb-3" style="max-width: 50%;">
            <div class="card-header">Anbefalede handlinger</div>
            <div class="card-body">
              <h5 class="card-title pl-1">{{count}} fakturaer afventer</h5>
              <button class="btn btn-lg btn-light border-light" type="button" onclick="loadPage('receipts-action')" style="width:100%">Se fakturaer</button>
            </div>
          </div>
          {{/actions}}
          {{#noactions}}
          <div class="card border-warning mb-3" style="max-width: 50%;">
            <div class="card-header">Manuel behandling</div>
            <div class="card-body">
              <h5 class="card-title pl-1">{{count}} fakturaer afventer</h5>
              <button class="btn btn-lg btn-light border-light" type="button" onclick="loadPage('receipts-noaction')" style="width:100%">Se fakturaer</button>
            </div>
          </div>
          {{/noactions}}
        </div>
      {{/receipts}}

    </div>
  </div>
  {{/webElements.currentRun}}
  <!-- /run status -->

  <!-- run history -->
  {{#webElements.runHistory}}
  <div class="card border-light mb-3" style="max-width: 20vw">
    <div class="card-header">{{title}}</div>
    <div class="card-body">

      <p class="card-text">
        Der blev ikke fundet nogen kørselshistorik.
      </p>
      
    </div>
  </div>
  {{/webElements.runHistory}}
    <!-- /run history -->

</div>
`

module.exports = Node;