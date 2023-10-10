const Node = {
  "id": "74cd38d81e06eb6b",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: runHistory",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 780,
  "y": 3220,
  "wires": [
    [
      "affc57c023ce09ab"
    ]
  ],
  "_order": 334
}

Node.template = `
<div class="card mb-2">
    <div class="card-header">Kørselshistorik</div>
    <div class="card-body">
        <p class="card-text">Her ses en oversigt over de seneste kørsler.</p>
        
        <table class="table fs-11" style="margin-left:-8px;margin-right:0px;">
            <thead class="border-none">
                <tr>
                <th scope="col"><span class="table-header">Dato (fra og med)</span></th>
                <th scope="col"><span class="table-header">Dato (til og med)</span></th>
                <th scope="col"><span class="table-header">Antal faktura behandlet</span></th>
                <th scope="col"><span class="table-header">Sagsbehandler</span></th>
                <th scope="col"><span class="table-header">Afsluttet?</span></th>
                </tr>
            </thead>
            <tbody>
                {{#runHistoryReverse}}
                <tr>
                    <td>{{startDate}}</td>
                    <td>{{endDate}}</td>
                    <th scope="row">{{processedReceipts.length}}</th>
                    <td>{{dqUser}}</td>
                    <td class="isFinalized">{{isFinalized}}</td>
                </tr>
                {{/runHistoryReverse}}
                {{^runHistoryReverse}}
                <tr>
                    <td colspan="5">Der er ingen kørsler at vise.</td>
                </tr>
                {{/runHistoryReverse}}
                
            </tbody>
        </table>

    </div>
</div>


`

module.exports = Node;