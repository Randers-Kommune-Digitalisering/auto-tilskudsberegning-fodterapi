# 👣 Automatisk håndtering af tilskud til fodterapi

| [**Beskrivelse**](#beskrivelse) | [**Afhængigheder**](#afh%C3%A6ngigheder) | [**Ressourcer**](#Ressourcer)

```mermaid
flowchart LR

KPDB[(Data)] --- KPWEB>Webflade] -->|Rå borgerdata TXT| E1(Lokal digital<br>assistent) -->|JSON| F
WLDB[(Data)] --- WLWEB>Webflade] -->|Rå fakturadata TXT| E2(Lokal digital<br>assistent) -->|JSON| F
F[\Datafilter/]-->T{regelmotor} -->|JSON| UI>Webflade]-->|JSON|T

subgraph Lokal Windows Maskine
E1 & E2 & T & F & UI
end

subgraph Borgerservice Workletsystem
WLDB & WLWEB
end

subgraph Kommunernes Pensionssystem
KPDB & KPWEB
end
```
### Beskrivelse

Automatiseringsløsningen er opbygget som løst koblet arkitektur hvor data styres igennem en række komponenter der er simple at vedligeholde og udskifte. 

- Først tilgår to digitale assistenter Borgerservice systemet *Worklet* og *Kommunernes Pensionssystem* og forsøger at lave en rå kopi af tekst-elementer i brugerfladen. 
- Derefter sendes rå tekstdata sendes igennem et datafilter, der forsøger at normalisere og vaske de rå data. 
- Kommer data brugbart ud af filteret, bliver det sendt til en regelmotor konfigureret med forretningsregler besluttet af forvaltningen. 
-Til sidst bliver der beregnet et tilskudsbeløb baseret på . Forslagene udstilles som beslutnings støtte til en sagsbehandler på en webflade.

### Afhængigheder
Løsningen er afhængig af en række software komponenter og en række netværksadgange til eksterne ressourcer for at fungere.

Krav til installerede software pakker 

:gear: | [Node.js 18](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  |  [Node-RED 3.0.2](https://nodered.org/docs/getting-started/windows)  |   [Puppeteer 18.2.1](https://www.npmjs.com/package/puppeteer/v/18.2.1)

Krav til netværksadgange til eksterne UI komponenter 

:cloud: | https://cdn.jsdelivr.net/npm  |  https://jsbin-user-assets.s3.amazonaws.com/rafaelcastrocouto/  | https://cdnjs.cloudflare.com/ajax  |

Krav til netværksadgange til Fagsystemer

:cloud: | https://workletnew.snapp.dk/  | https://fagsystem.kommunernespensionssystem.dk/spk-fagsystem/ |
