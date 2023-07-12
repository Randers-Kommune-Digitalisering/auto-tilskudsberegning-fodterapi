const Node = {
  "id": "89f051f162c9b4b6",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: finalized",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 980,
  "y": 880,
  "wires": [
    [
      "163120aa4a431574"
    ]
  ],
  "_order": 222
}

Node.template = `
<div class="card mb-2">
    <div class="card-header">Kørslen blev afsluttet</div>
    <div class="card-body">
        <p class="card-text">

            Kørslen blev afluttet med success.

            <div class="d-flex flex-wrap pb-4" style="gap: 8px">
                <div class="card border-success mt-1" style="max-width: 20rem;">
                    <div class="card-body text-center p-3">
                        <p class="card-text fs-lg">{{payload.pageElements.receiptCount}}</p>
                    </div>
                    <div class="card-header border-top no-border-bottom">Anbefalede handlinger</div>
                </div>

                <div class="card border-danger mt-1" style="max-width: 20rem;">
                    <div class="card-body text-center p-3">
                        <p class="card-text fs-lg">{{payload.pageElements.receiptNoActionCount}}</p>
                    </div>
                    <div class="card-header border-top no-border-bottom">Borgere uden bevilling</div>
                </div>
            </div>

            ... blev manuelt behandlet under dagens kørsel.

        </p>
    </div>
</div>
`

module.exports = Node;