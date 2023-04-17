const Node = {
  "id": "66afcd1514727417",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: view-receipts",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1450,
  "y": 320,
  "wires": [
    [
      "ae78e3fc89996dac"
    ]
  ],
  "_order": 103
}

Node.template = `
<div class="receipt-container">
    <!-- receipt-container -->

    <div class="receipt-inner">
        <!-- receipt-inner -->

        <div class="citizen-info">
            <!-- citizen-info -->

            <ul class="nav nav-tabs" role="tablist" style="padding-bottom: 1.2px;margin-right: 5px;border-bottom:0px">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-bs-toggle="tab" href="#overblik" aria-selected="true" role="tab">Overblik</a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#sager" aria-selected="false" tabindex="-1" role="tab">Alle sager</a>
                </li>
            </ul>
            
            <div id="myTabContent" class="tab-content bg-white p-3">
                <div class="tab-pane show active" id="overblik" role="tabpanel">

                    <!-- -->
                    <h4 class="card-title mb-4">
                        {{payload.tempData.cpr}}<small class="text-secondary"> - XXXX</small>
                        <a href="https://fagsystem.kommunernespensionssystem.dk/spk-fagsystem/person/{{payload.tempData.persondata.kpurl}}/overblik" target="_blank">
                            <span class="float-right text-muted"><i class="fas fa-2xs fa-link"></i></span>
                        </a>
                    </h4>
                    <!-- p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p -->
                    
                    {{{payload.tempData._bevilling}}}

                    <div class="d-flex flex-wrap" style="gap: 3px">
                        {{{payload.tempData.persondata._sager}}}
                    </div>


                    <div class="d-flex justify-stretch mt-4" style="gap: 3px">

                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">FORMUE</div>
                            {{payload.tempData.persondata._formue}}
                        </div>

                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">DANMARK</div>
                            {{payload.tempData.persondata._danmark}}
                        </div>
                        
                        <div class="card border-light bg-light mb-2 text-center p-1">
                            <div class="text-secondary fs-10">TILLÆGSPROCENT</div>
                            {{payload.tempData.persondata._htillaegsprocent}} %
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

        
        <ul class="pagination">
            {{{payload.tempData._pagination}}}
        </ul>

        {{{payload.tempData._archive}}}

        </div>

    <!-- /receiptContainer -->
</div>
`

module.exports = Node;