const Node = {
  "id": "b8b41ddd870dfd2c",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: ruleList",
  "field": "webElements.ruleList",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 700,
  "y": 1580,
  "wires": [
    [
      "4eac0b9c430a80ed"
    ]
  ],
  "_order": 380
}

Node.template = `
{{#global.rules}}
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
{{/global.rules}}
`

module.exports = Node;