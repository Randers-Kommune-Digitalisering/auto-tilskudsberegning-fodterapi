const Node = {
  "id": "8f1889ef41f2b0f2",
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
  "y": 540,
  "wires": [
    [
      "26a5a4e0e501d7e9"
    ]
  ],
  "_order": 167
}

Node.template = `
{{#global[storeInFile].rules}}
    <div class="row border-top pb-2 pt-2 ">


        <div class="col-2 d-flex flex-column justify-content-center">
            <span>{{name}}</span>
        </div>

        <div class="form-floating col">
            <select class="form-select" id="operator_{{uid}}" onchange="setInputBox('{{uid}}');">
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

        <div class="form-floating col" id="inputContainer_{{uid}}">
            <input type="text" class="form-control" id="value_{{uid}}" placeholder="0" value="{{value}}">
            <label for="value_{{uid}}" style="padding-left: 27px">Værdi</label>
        </div>


    </div>
{{/global[storeInFile].rules}}
`

module.exports = Node;