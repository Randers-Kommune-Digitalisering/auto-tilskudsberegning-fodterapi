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
  "x": 630,
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
    <div class="card border-{{border}}">
        <div class="card-header border-none">
            <div class="float-right">{{message}}</div>
            {{name}}
        </div>
    </div>
    {{/webElements.metrics}}

    <!-- /card-container -->
</div>

<div class="card-container mb-3">
    <!-- card-container -->

  {{#webElements.currentRun}}
  <div class="card border-light mb-3">
    <div class="card-header">{{title}}</div>
    <div class="card-body">

      <h4 class="card-title">{{statustext}}</h4>
      
      {{#status}}
        <div class="pl-2 float-left">{{text}}</div>
        <div class="float-right fw-500">{{percentage}}%</div>
        <br/>

        <div class="progress mb-1" style="height:40px">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div>
      {{/status}}

      <!--div class="float-right">
        <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          Start kørsel
        </a>
      </div>
      <p class="card-text">Tryk på knappen for at starte en ny kørsel</p-->


    </div>
  </div>
  {{/webElements.currentRun}}
  {{#webElements.runHistory}}
  <div class="card border-light mb-3" style="max-width: 20vw">
    <div class="card-header">{{title}}</div>
    <div class="card-body">

      Der blev ikke fundet nogen kørselshistorik.


    </div>
  </div>
  {{/webElements.runHistory}}

    <!-- /card-container -->
</div>
`

module.exports = Node;