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
  "y": 2040,
  "wires": [
    [
      "0fd5a87ac6a4d895"
    ]
  ],
  "_order": 409
}

Node.template = `
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
            
            <div id="myTabContent" class="tab-content bg-white p-3">
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
                            {{payload.receipt.assets}}
                        </div>

                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">DANMARK</div>
                            {{payload.receipt.denmark}}
                        </div>
                        
                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">TILLÆGSPROCENT</div>
                            {{payload.receipt.insurancePercentage}} %
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
                            {{#payload.tempData.persondata.sager}}
                            <tr>
                                <td>{{titel}}</td>
                                <th scope="row">{{type}}</th>
                                <td>{{fra}}</td>
                                <td>{{til}}</td>
                            </tr>
                            {{/payload.tempData.persondata.sager}}
                        </tbody>
                    </table>
                    
                </div>
                
            </div>

            <!-- /citizen-info -->
        </div>

        <div>
            {{{payload.tempData._faktura}}}
        </div>

        <!-- /receipt-inner -->
    </div>
    

    <div class="pagination-container mt-3">

        {{{webElements.receipt.pagination}}}

        {{{payload.tempData._archive}}}

        </div>

    <!-- /receiptContainer -->
</div>
`

module.exports = Node;