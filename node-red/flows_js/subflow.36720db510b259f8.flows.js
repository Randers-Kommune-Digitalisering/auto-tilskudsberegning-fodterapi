const Node = {
  "id": "36720db510b259f8",
  "type": "subflow",
  "name": "RuleEngine",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 60,
      "y": 100,
      "wires": [
        {
          "id": "20ba645fa1ab9abc"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 740,
      "y": 220,
      "wires": [
        {
          "id": "ed56ae0c8e6569eb",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {
    "type": "RuleEngine",
    "version": "0.1.1",
    "author": "Søren Thomassen <soren.langbo.sloto.thomassen@randers.dk>",
    "desc": "Generic node for checking validity of JSON data using custom logical rules.",
    "keywords": "node-red, rule checker, rule engine, rule respect, arbitrary data, data validation"
  },
  "color": "#DDAA99",
  "_order": 16
}

Node.info = `
### Payload struktur
Generisk struktur for input objekt:
\`\`\`
{
	"rules": [],
	"data": []
}
\`\`\`
**rules** populeres med en regel (objekt), eller en liste af regler.

**data** populeres med en værdi, eller en liste af værdier, som du vil kontrollere op mod de regler som sættes i **rules**. 
Værdien kan være af enhver type men bør være kompatibel med reglens operator.

### Regel struktur
Et regel objekt skal som minimum indeholde **operator** samt **value** såfremt den valgte operator kræver en værdi.  Operator skal være en reference til en af de operatorer som er indbygget i regelmotoren. Andre variabler som f.eks. **name** og **description** har ikke betydning for regelmotorens funktionalitet.
\`\`\`
{
        "name": "",
        "description": "",

        "operator": "",
        "value": []
 }
\`\`\`

### Operatorer
Her findes en liste over de operatorer som er indbygget i regelmotoren. Når der henvises til en operator i et regelobjekt, skal **operator** sættes til operatorens kode-reference (findes i kodeboksene under operatorenes titel)

 \`==\` **Lig med / equal to**
Returner **true** hvis dataværdien er identisk med regelobjektets **value** (case sensistive).
	
 \`!=\` **Ikke lig med / not equal to**
Returner **true** hvis dataværdien ikke er identisk med regelobjektets **value** (case sensistive).
	
 \`>\` **Mere end / greater than**
Returner **true** hvis dataværdien er større end regelobjektets **value** (kræver numeriske værdier).

 \`<\` **Mindre end / less than**
Returner **true** hvis dataværdien er mindre end regelobjektets **value** (kræver numeriske værdier).

 \`contains\` **Indeholder / contains**
Returner **true** hvis dataværdien indeholder regelobjektets **value**.

 \`!contains\` **Indeholder ikke / does not contain**
Returner **true** hvis dataværdien ikke indeholder regelobjektets **value**.

 \`regex\` **Regulært udtryk / regular expression**
Returner **true** hvis dataværdien indeholder data som beskrives af regelobjektets **value** (et regulært udtryk).

 \`!regex\` **Ikke regulært udtryk / not regular expression**
Returner **true** hvis dataværdien indeholder data som beskrives af regelobjektets **value** (et regulært udtryk).

 \`regexmatch\` **Regulært udtryk match / regular expression match**
Returner **true** hvis hele dataværdien præcist beskrives af regelobjektets **value** (et regulært udtryk).

 \`!regexmatch\` **Ikke regulært udtryk match / not regular expression match**
Returner **true** hvis hele dataværdien ikke præcist beskrives af regelobjektets **value** (et regulært udtryk).

\`containsCPR\` **Indeholder CPR / contains CPR**
Returner **true** hvis dataværdien indeholder ét eller flere CPR numre.

\`!containsCPR\` **Indeholder ikke CPR / does not contain CPR**
Returner **true** hvis dataværdien ikke indeholder CPR numre.

### Output objekt
Regelmotoren returnerer et opdateret \`msg.payload\` objekt, som indeholder det oprindelige dataobjekt samt et nyt objekt som indeholder en detaljeret datavalidering.
\`\`\`
{
        "inputObject": {},
        "dataValidation": {
	        "dataIndex": 0,
	        "dataValue": "",
	        "rulesChecked": [],
	        "rulesBroken": [],
	        "allRulesRespected": true
        }
 }
\`\`\`
Inputobjektet samt datavalideringen returneres som lister hvis flere dataværdier er blevet kontrolleret samtidig, men \`msg.payload\` vil altid returneres som et enkelt objekt med den ovenstående struktur.
`

module.exports = Node;