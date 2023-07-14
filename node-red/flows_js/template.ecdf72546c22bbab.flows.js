const Node = {
  "id": "ecdf72546c22bbab",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: ruleList",
  "field": "payload.pageElements.ruleList",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1080,
  "y": 580,
  "wires": [
    [
      "4d85f3207c9d8fa1",
      "88fb35ef462682b4"
    ]
  ],
  "_order": 263
}

Node.template = `
{{#global[storeInFile].rules}}
    <div class="row border-top pb-2 pt-2 ">


        <div class="col-2 d-flex flex-column justify-content-center">
            <span>{{name}}</span>
        </div>

        <div class="form-floating col was-validated">
            <select class="form-select" id="operator_{{uid}}" onchange="setInputBox('{{uid}}')" disabled>
                <option value="==">= Skal være lig med</option>
                <option value="!=">≠ Må ikke være lig med</option>
                <option value="<">< Skal være mindre end</option>
                <option value=">">> Skal være større end</option>
                <option value="contains">{?} Indeholder</option>
                <option value="!contains">{!} Indeholder ikke</option>
                <option value="!null">[o] Skal være oplyst</option>
            </select>
            <label for="operator_{{uid}}" style="padding-left: 27px">Logisk beregningsmetode</label>
        </div>

        <div class="form-floating col was-validated" id="inputContainer_{{uid}}">
            <input type="text" class="form-control" id="value_{{uid}}" placeholder="0" value="{{value}}" disabled>
            <label for="value_{{uid}}" style="padding-left: 27px">Værdi</label>
        </div>


    </div>
{{/global[storeInFile].rules}}
`

module.exports = Node;