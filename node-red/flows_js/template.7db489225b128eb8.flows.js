const Node = {
  "id": "7db489225b128eb8",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: grantList",
  "field": "webElements.grantList",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 1600,
  "wires": [
    [
      "f24c82f300553f8d",
      "a77fe45d3d6a78f4"
    ]
  ],
  "_order": 380
}

Node.template = `
{{#global.grants.tilskudsperioder.satser}}
    <div class="row border-top pb-2 pt-2 ">


        <div class="col-2 d-flex flex-column justify-content-center">
            <span>{{titel}}</span>
        </div>

        <div class="form-floating col was-validated" id="inputContainer_{{id}}_procent">
            <input type="text" class="form-control" id="value_{{id}}_procent" placeholder="0" value="{{{tilskud_procent}}}" disabled>
            <label for="value_{{id}}_procent" style="padding-left: 27px">% af egenbetaling</label>
        </div>

        <div class="form-floating col was-validated" id="inputContainer_{{id}}_maxdkk">
            <input type="text" class="form-control" id="value_{{id}}_maxdkk" placeholder="0" value="{{{tilskud_maxdkk}}}" disabled>
            <label for="value_{{id}}_maxdkk" style="padding-left: 27px">Dog maks kr.</label>
        </div>


    </div>
{{/global.grants.tilskudsperioder.satser}}
`

module.exports = Node;