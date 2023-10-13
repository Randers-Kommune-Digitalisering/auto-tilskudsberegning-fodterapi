const Node = {
  "id": "04dafd05828f33bf",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: grantList",
  "field": "payload.pageElements.grantList",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 850,
  "y": 2700,
  "wires": [
    [
      "955c894fc9dffd45",
      "6e08782524148718"
    ]
  ],
  "_order": 302
}

Node.template = `
{{#global[storeInFile].grants.tilskudsperioder.satser}}
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
{{/global[storeInFile].grants.tilskudsperioder.satser}}
`

module.exports = Node;