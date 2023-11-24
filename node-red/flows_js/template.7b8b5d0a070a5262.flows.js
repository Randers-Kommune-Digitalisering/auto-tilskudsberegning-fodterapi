const Node = {
  "id": "7b8b5d0a070a5262",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 2020,
  "wires": [
    [
      "e883fa0c0e255f63"
    ]
  ],
  "_order": 286
}

Node.template = `
<div class="card-container mb-3">

    <!-- metrics -->
    {{#webElements.metrics}}
    <div class="card border-{{border}}">
        <div class="card-header border-none">
            <div class="float-right">{{message}}</div>
            {{name}}
        </div>
    </div>
    {{/webElements.metrics}}
    <!-- /metrics -->

</div>
<div class="card-container mb-3 align-items-start">

  <!-- help card -->
  <div class="card border-light mb-3">
    <div class="card-header">Hjælp</div>
    <div class="card-body">

    <p>Her på siden finder du hjælp til at anvende WorkLet tilskudsberegneren.</p>

    <h4 class="card-title fw-500 pt-3">Kørsel</h4>

    <p>Begrebet kørsel dækker over en periode af fodplejefakturaer som af tilskudsberegneren behandles samtidig.</p>

    <p>En periode er indstillet til at vare 2 dage. Det betyder, at hver gang tilskudsberegneren køres, vil den beregne tilskud på alle fodplejeregninger som er modtaget inden for den bestemte periode.</p>

    <p>En periode vil altid starte dagen efter den senest afsluttede kørsels periode. Hvis den seneste periode f.eks. dækker d. 1.-2. i en måned, vil næste kørsel dække d. 3.-4.</p>

    <h4 class="card-title fw-500 pt-3">Hvordan køres tilskudsberegneren?</h4>

    <ol>
      <li>Gå til <b>Start</b>. Tryk på knappen <b>Fortsæt</b>.</li>
      <li>Indtast og godkend loginoplysninger, først DQ-login og derefter WorkLet login.</li>
      <li>Godkend forretningsregler. Sørg for at oplysningerne er korrekte!</li>
      <li>Godkend tilskudssatser fra Danmark. Sørg for at oplysningerne er opdaterede og korrekte.</li>
      <li>Start kørsel. og afvent at tilskudsberegneren arbejder.</li>
    </ol>

    <h4 class="card-title fw-500 pt-3">Anbefalede handlinger og manuel behandling</h4>

    <p>Når tilskudsberegneren er færdig med at bearbejde alle faktura og personoplysninger, vil fakturaerne blive udstillet i to kategorier: <b>anbefalede handlinger</b> og <b>manuel behandling</b>.</p>

    <p><b>Anbefalede handlinger</b> dækker over fakturaer hvor tilskudsberegneren har vurderet at borgeren er tilskudsberettiget, og hvor tilskudsberegneren har været i stand til at beregne et tilskudsbeløb.</p>

    <p><b>Manuel behandling</b> dækker over fakturaer hvor tilskudsberegneren har vurderet at borgeren ikke er tilskudsberettiget, eller hvor tilskudsberegneren ikke har været i stand til at beregne et tilskud ud fra de oplyste faktura- og persondata.</p>

    <p>Vær opmærksom på at de beregnede tilskud er ment som beslutningsstøtte, og derfor ikke automatisk bogføres i KP. Det er sagsbehandlerens opgave at bogføre ydelser som er korrekt beregnede.</p>

    <h4 class="card-title fw-500 pt-3">Beslutningsstøtte</h4>

    <p>Alle fakturaer som behandles af tilskudsberegneren, præsenteres sammen med relaterede personoplysninger på fakturasiden.</p>

    <p>Herunder ses et eksempel:</p>
    
    <img class="border-secondary pb-2" src="https://github.com/Randers-Kommune-Digitalisering/auto-tilskudsberegning-fodterapi/blob/main/docs/worklet_receipt_overview.png?raw=true" style="width:100%;height:auto" />

    <p>I venstre side af skærmen findes personoplysninger. I højre side findes faktura, samt beslutningsstøtte i form af handlinger.</p>

    <ol>
      <li><b>Personnummer</b>
        <br />Se KP for de sidste 4 tal.
      </li>
      <li><b>Bevilling</b>
        <br />Hvorvidt borgeren iflg. KP er bevilget tilskud til fodpleje. Vises over personoplysninger i KP.
      </li>
      <li><b>Sager</b>
        <br />Aktive sager som bevilger tilskud til type A behandlinger markeres med grøn kant (*udvidet helbredstillæg markeret med "fod" i titlen*).
        <br />Aktive sager som bevilger tilskud til type B behandlinger markeres med blå kant (*helbredstillægskort eller alm. helbredstillæg*).
        <br />Sager som er inaktive for fakturadatoen er markeret med rød kant. Alle sager kan ses under *Alle sager*.
      </li>
      <li><b>Formue / Danmark / Tillægsprocent</b>
        <br />Borgerens formue, medlemsgruppe af Sygesikring Danmark, samt helbredstillægsprocent. 
      </li>
      <li><b>Link til KP</b>
        <br />Tryk på link-ikonet for at gå direkte til borgerens oplysninger i KP.
      </li>
      <li><b>Behandler uden ydernummer</b>
        <br />Skiltet vises over fakturaer med behandlinger foretaget af en behandler som ikke har oplyst ydernummer i WorkLet.
      </li> 
      <li><b>Link til faktura i WorkLet</b>
        <br />Tryk på link-ikonet for at gå til fakturaen i WorkLet.
      </li> 
      <li><b>Behandlinger</b>
        <br />Behandlinger på den pågældende faktura som indtastet i WorkLet.
      </li> 
      <li><b>Beslutningsstøtte</b>
        <br />Én eller flere handlinger som skal bogføres manuelt i KP. Hvis fakturaen er sat til manuel behandling, vil en årsag til dette vises i stedet.
      </li> 
      <li><b>Fakturaoversigt</b>
        <br />Fakturaer i den nuværende kategori. Numre med en grøn baggrund er fakturaer som allerede er behandlet. Numre med lysegrå baggrunden afventer behandling. Nummeret med en mørk grå/grøn baggrund er den faktura som pt. vises på siden.
      </li>  
      <li><b>Bekræftelse af behandling</b>
        <br />Knap til at bekræfte at du som sagsbehandler har behandlet fakturaen manuelt. Tryk først når du har bogført de nødvendige handlinger i KP.
      </li> 
    </ol>
    
    <p>Efter at alle fakturaer er markeret som behandlet af sagsbehandleren, er det muligt afslutte den aktuelle kørsel på startsiden. Fakturaer og personoplysninger fra den aktuelle kørsel vil ikke være tilgængelige i tilskudsberegneren efter kørslen er afsluttet.</p>

    <h4 class="card-title fw-500 pt-3">Problemer?</h4>

    <p>Hvis der opstår problemer under kørslen som ikke automatisk genoprettes, skal der oprettes en supportsag vedr. problemet.
    Opret en sag "Automatisk håndtering af tilskud til fodterapi" eller "Worklet" / "Worklet-robot", vælg kategorien Digitalisering og underkategorien Work-let. Sagen sendes derefter til Digitalisering (der går automatisk en mailnotifikation til Digitalisering@randers.dk).</p>

    </div>
  </div>
  <!-- /help card -->

</div>
`

module.exports = Node;