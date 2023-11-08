const Node = {
  "id": "40d793f24bd697d9",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1210,
  "y": 1860,
  "wires": [
    [
      "0fd5a87ac6a4d895"
    ]
  ],
  "_order": 271
}

Node.template = `
<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/start">Start</a></li>
    <li class="breadcrumb-item active">{{webElements.receipt.title}}</li>
</ol>

<div class="receipt-container">
    <!-- receipt-container -->

    <div class="receipt-inner">
        <!-- receipt-inner -->

        <div class="citizen-info">
            <!-- citizen-info -->

            <ul class="nav nav-tabs" role="tablist" style="padding-bottom: 1.2px;margin-right: 5px;border-bottom:0px;gap:0px">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active mr-0" data-bs-toggle="tab" href="#overblik" aria-selected="true" role="tab">Overblik</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#sager" aria-selected="false" tabindex="-1" role="tab">Alle sager</a>
                </li>
            </ul>
            
            <div id="myTabContent" class="tab-content bg-white p-3" style="min-width: 350px">
                <div class="tab-pane show active" id="overblik" role="tabpanel">

                    <!-- -->
                    <h4 class="card-title mb-4">
                        {{payload.cpr}}<small class="text-secondary"> - XXXX</small>
                        <a href="https://fagsystem.kommunernespensionssystem.dk/spk-fagsystem/person/{{payload.persondata.kpurl}}/overblik" target="_blank">
                            <span class="float-right text-muted"><i class="fas fa-2xs fa-link"></i></span>
                        </a>
                    </h4>
                    
                    {{#webElements.receipt.grant}}
                    <div class="mb-3 text-success"><i class="fas fa-check"></i> Bevilget tilskud til fodpleje</div>
                    {{/webElements.receipt.grant}}

                    <div class="d-flex flex-wrap" style="gap: 3px">
                        
                        {{#webElements.receipt.cases}}
                        <div class="card border-{{border}}">
                            <div class="card-header fs-10 pt-1 text-muted text-center" style="height: 22px;text-transform:uppercase">{{type}}</div>
                            <div class="card-body p-1 text-center">
                                <p class="card-text fs-13 m-1">{{title}}</p>
                            </div>
                        </div>
                        {{/webElements.receipt.cases}}

                    </div>


                    <div class="d-flex justify-stretch mt-4" style="gap: 3px">

                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">FORMUE</div>
                            {{webElements.receipt.assets}}
                        </div>

                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">DANMARK</div>
                            {{webElements.receipt.denmark}}
                        </div>
                        
                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">TILLÆGSPROCENT</div>
                            {{webElements.receipt.insurancePercentage}} %
                        </div>

                    </div>
                
                    <!-- -->
                    
                </div>

                <div class="tab-pane" id="sager" role="tabpanel">

                    <table class="table fs-11" style="margin-left:-8px;margin-right:0px;">
                        <thead class="border-none">
                            <tr>
                            <th scope="col"><span class="table-header">Titel</span></th>
                            <th scope="col"><span class="table-header">Sagstype</span></th>
                            <th scope="col"><span class="table-header">Start</span></th>
                            <th scope="col"><span class="table-header">Slut</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {{#webElements.receipt.cases}}
                            <tr>
                                <td>{{title}}</td>
                                <th scope="row">{{type}}</th>
                                <td>{{fra}}</td>
                                <td>{{til}}</td>
                            </tr>
                            {{/webElements.receipt.cases}}
                        </tbody>
                    </table>
                    
                </div>
                
            </div>

            <!-- /citizen-info -->
        </div>

        
        <div>
            {{#webElements.receipt.receipts}}
            {{^ydernummer}}
            <div class="card border-info mb-2 p-1">
                <span class="pl-2 fs-13"><b>OBS</b>: Behandler har IKKE oplyst ydernummer</span>
            </div>
            {{/ydernummer}}

            <div class="card border-light mb-2"><!-- Faktura  -->

                <div class="card-header text-muted fs-10" style="height: 38px">FAKTURA #{{nr}}
                    <span class="float-center">
                    </span>
                    <span class="float-right">
                        {{dato}}
                        <a href="http://workletnew.snapp.dk/auth/sign-in/{{id}}" target="_blank" style="padding-left: 10px">
                            <span class="float-right text-muted" style="margin-top:-1px"><i class="fas fa-sm fa-link"></i></span>
                        </a>
                    </span>
                </div>
                <div class="card-body p-3" style="padding-top: 0px!important;padding-bottom: 0px!important">

                    <table class="table">
                        <thead class="border-none">
                            <tr>
                                <th scope="col"><span class="table-header">Ydelsesnr.</span></th>
                                <th scope="col"><span class="table-header">Ydelse</span></th>
                                <th scope="col"><span class="table-header">Egenbetaling</span></th>
                                <th scope="col"><span class="table-header">Sygesikring</span></th>
                                <th scope="col"><span class="table-header">Total</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {{#behandlinger}}
                            <tr>
                                <td>{{ydelsesnummer}}</td>
                                <th scope="row">{{titel}} (type {{type}})</th>
                                <td>{{patientAndel}}</td>
                                <td>{{sygesikringsAndel}}</td>
                                <th  scope="row">{{total}}</th>
                            </tr>
                            {{/behandlinger}}
                            <tr class="no-border-bottom">
                                <td></td>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <th scope="row">{{total}}</th>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div><!-- /Faktura -->

            {{#handlinger}}
            <div class="card mb-2 border-light header-left" style="">
                <div class="card-header header-left text-muted fs-10" style="width:20%;border-right: 1px solid rgba(0,0,0,0.125)">HANDLING #{{nr}}</div>
                <div style="align-self: center;padding-left:10px">{{handling}}</div>
            </div>
            {{/handlinger}}

            {{/webElements.receipt.receipts}}
            
            {{#webElements.receipt.regelbrud}}
            <div class="card mb-2 border-warning header-left" style="">
                <div class="card-header header-left text-muted fs-10" style="width:20%;border-right: 1px solid rgba(0,0,0,0.125)">REGELBRUD</div>
                <div style="align-self: center;padding-left:10px">{{text}}</div>
            </div>
            {{/webElements.receipt.regelbrud}}
        </div>

        <!-- /receipt-inner -->
    </div>
    

    <div class="pagination-container mt-3">

        {{{webElements.receipt.pagination}}}

        {{#webElements.receipt.archiveButton}}
            <button id="buttonArchiveReceipt" class="btn btn-lg btn-light border-light {{disabled}}" type="button" onclick="postRequestAsync('archive', {'id': '{{id}}'}, true);lockButton(this.id)">{{text}}</button>
        {{/webElements.receipt.archiveButton}}

    </div>

    <!-- /receiptContainer -->
</div>
`

module.exports = Node;