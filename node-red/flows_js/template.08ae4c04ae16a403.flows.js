const Node = {
  "id": "08ae4c04ae16a403",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: grantList",
  "field": "payload.pageElements.grantList",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1090,
  "y": 640,
  "wires": [
    [
      "2cc90de707d18884"
    ]
  ],
  "_order": 200
}

Node.template = `
{{#global[storeInFile].grants.tilskudsperioder.satser}}
    <div class="row border-top pb-2 pt-2 ">


        <div class="col-2 d-flex flex-column justify-content-center">
            <span>{{titel}}</span>
        </div>

        <div class="form-floating col" id="inputContainer_{{id}}_procent">
            <input type="text" class="form-control" id="value_{{id}}_procent" placeholder="0" value="{{tilskud_procent}}">
            <label for="value_{{id}}_procent" style="padding-left: 27px">% af egenudgift</label>
        </div>


        <div class="form-floating col" id="inputContainer_{{id}}_maxdkk">
            <input type="text" class="form-control" id="value_{{id}}_maxdkk" placeholder="0" value="{{tilskud_maxdkk}}">
            <label for="value_{{id}}_maxdkk" style="padding-left: 27px">Dog maks kr.</label>
        </div>

    </div>
{{/global[storeInFile].grants.tilskudsperioder.satser}}
`

module.exports = Node;