	OBS: Denne dokumentation er ikke opdateret til v.2.0.0

# Dokumentation (*auto-tilskudsberegning-docs*)
Automatiseringsværktøj til tilskudsberegning af WorkLet fodpleje-fakturaer samt bogføring i KP (Kommunernes Pensionssystem). OBS: Version 1 indeholder ikke bogføringsfunktionalitet, men er blot ment som beslutningsstøtte til sagsbehandleren.

## Metode
Automatiseringsværktøjet er bygget efter [ETL-dataintegrationsmodellen](https://en.wikipedia.org/wiki/Extract,_transform,_load), således at processen opdeles i specifikke faser der hver har et enkelt overordnet formål. Først sker dataudtræk (E) fra WorkLet webinterface samt Kommunens Pensionssystem, herefter sker datatransformation (T), og til sidst bogføring af transformeret data (L). 

Til værktøjet er der koblet en brugergrænseflade, som tillader systembrugeren at starte samt overvåge automatiseringsværktøjet under kørsel. 

## Teknologi
Værktøjet er bygget i [Node-red](https://nodered.org/), et flow-baseret programmeringsværktøj som bygger på [Node.js](https://nodejs.org/en/about/). 

Dataudtræk foretages med [Puppetteer](https://developer.chrome.com/docs/puppeteer/), et node-modul som tillader webautomatisering i Chromium. Hertil er bygget en lokal assistent, PupController, til at styre Puppeteer dynamisk gennem en liste af JSON-objekter, som specificerer individuelle handlinger der skal udføres. PupController oversætter handlingerne til Puppeteer JavaScript-kode. Disse moduler benyttes både ved udtræk af faktura fra WorkLet, samt til udtræk af persondata fra KP.

Webfladen bygger på Node-reds HTTP-endpoint. Webfladen er bygget modulært med fokus på genanvendelighed og benytter [Bootstrap](https://getbootstrap.com/) med et [Bootswatch](https://bootswatch.com/) template (Sandstone) til dette formål.

## Teknisk dokumentation
Projektet består af ét primært Node-red flow som følger ETL-processen, samt nogle sub-processer som enten aktiveres som del af en process (sub-flows) eller via brugeraktiverede HTTP-requests fra webfladen (HTTP Request In).

![Simplificeret flow-chart af det primære ETL-flow](https://i.imgur.com/2kmSSyf.png)

Det simplificerede flow-chart beskriver det primære ETL-flow som er bygget i "Main"-flowet i Node-red projektet. Flowet er opdelt i handlinger (kasser med runde hjørner) som beskriver det overordnede ansvar for de subprocesser (nodes) som de består af. Handlingerne er opdelt i farvede kasser med skarpe hjørner, som beskriver deres formål samt tilhørsforhold i ETL-processen.

I forlængelse af det primære ETL-flow, findes en række sub-processer som styres via HTTP-requests fra webfladen. 

### Process oversigt
Her findes en oversigt over de processer som systembrugeren (sagsbehandleren) manuelt kan starte fra webfladen via HTTP-requests. Hver process er beskrevet med forudsætninger herfor, og resultat heraf. Da alle processer kan startes via HTTP-requests kan disse findes i "Web Endpoint"-flowet i Node-red.
|Process|Forudsætning|Resultat|
|--|--|--|
|**AcceptPage > Login**: Lagring af WorkLet loginoplysninger|Systembruger indtaster WorkLet loginoplysninger|WorkLet loginoplysninger lagres i globalt objekt *webData.workLetCreds*|
|**AcceptPage > UpdateRules**: Opdatering af forretningsregler|Systembruger godkender forretningsregler|Ændringer i forretningsregler lagres i globalt objekt *rules*|
|**AcceptPage > UpdateGrants**: Opdatering af tilskudssatser|Systembruger godkender tilskudssatser|Ændringer i tilskudssatser lagres i globalt objekt *grants*|
|**AcceptPage**: Godkendelse af oplysning(er)|Systembruger godkender loginoplysninger, forretningsregler eller tilskudssatser|Den specifikke oplysning sættes som godkendt i globalt objekt *webSettings.acceptances*
|**StartRun**: Start af ETL-flow (påbegynder ny kørsel, eller genoptager tidligere igangværende kørsel)|Loginoplysninger, forretningsregler samt tilskudssatser er godkendt. Systembruger starter kørsel|Det primære ETL-flow startes. Opdateringer sendes løbende gennem websockets før endeligt resultat returneres fra HTTP-request|
|**Archive receipt**: Arkivering af faktura|ETL-flow har returneret én eller flere fakturaer. Systembruger trykker "Bekræft manuel behandling" på den pågældende faktura|Faktura sættes som arkiveret: *isArchived* sættes til *true* på fakturaens objekt i globalt objekt *webData.citizens-actions* eller *webdata.citizens-noactions*. Faktura ID tilføjes til den nuværende kørselshistorik-objekts *processedReceipts* liste i global liste *runHistory*|
|**Finalize run**: Færdiggørelse af kørsel|Alle faktura fra igangværende kørsel er arkiveret.|Kørslen markeres som færdiggjort: *isFinalized* sættes til *true* i det nuværende kørselshistorik-objekt i global liste *runHistory*|

Ud over de processer som startes direkte fra webfladen, findes nogle subprocesser som kører som del af ét eller flere flows i Node-red. Nogle sub-processer er eksterne moduler med GitHub-repositories, som er udviklet med henblik på genanvendelse.
 
|Process (sub-flow)|Formål / Resultat|Bemærkninger|
|--|--|--|
|**Get Settings / Rules / Grants**: Hent indstillinger, forretningsregler og tilskudssatser|Indstillinger, forretningsregler samt tilskudssatser hentes fra deres respektive globale objekter gemt i Node-reds *storeInFile* kontektst. Såfremt data ikke findes, oprettes ny data baseret på templates som findes som del af processen. Resultatet lagres i *msg*-objektet|Dette sub-flow køres i nogle sammenhænge med formål at benytte blot én af de tre data-sæt, men alle tre vil altid blive kopieret til *msg*-objektet
|**GetPageContent**: Hent webfladeindhold|Dette sub-flow kører hver gang indholdet på en af webfladernes sider skal vises til systembrugeren. Webfladeindholdet genereres dynamisk ved kørsel af sub-flowet, og sendes til webfladen som opdaterer indholdet fra HTTP-requesten via client-side JavaScript||
|**PupController**: Interface som styrer Puppeteer gennem JSON-objekter|PupController gør det muligt at styre Puppeteer gennem en liste af JSON-objekter som beskriver de handlinger som skal foretages på webfladen som automatiseres. Resultat af eventuel webscrapede elementer returneres ligeledes som JSON-objekt(er).|Inden PupController sub-flowet kaldes defineres en liste over de kommandoer som interfacet skal udføre. Dette gør det muligt at benytte JSONata til at definere disse kommandoer dynamisk og baseret på anden relevant data|

### Datastrukturer

Da store mængder data bearbejdes i det primære ETL-flow, er her en oversigt over de primære datastrukturer som benyttes heri. 
|Objekt|Subobjekter / Variabler|Lagring|Formål|
|--|--|--|--|
|runHistory|list<*obj*> **run**|Globalt "storeInFile"|Liste med Run-objekter som repræsenterer tidligere kørsler|
|run|var **startDate**, var **endDate**, var **timestamp**, list<*var*> **processedReceipts**, bool **allReceiptsProcessed**, bool **isFinalized**, obj **currentStep**, list<*obj*> **stepHistory**, var **userName**|**runHistory** liste|Beskriver én kørsel af systemet, samt de fakturaer som er behandlet under kørslen. Kørsel kan genoptages hvis **isFinalized** er *false*|
|citizen (superobjekt)|var **cpr**, obj **persondata**, list<*obj*> **faktura**|msg.payload|Samling af alle informationer relateret til hver borger som findes i faktura-listen, således transformation let kan foretages|
|webSettings|obj **settings**, obj **acceptances**, obj **state**, obj **currentSession**|Globalt "storeInFile"|Opbevaring af webfladens nuværende state|
|webData|obj **workLetCreds**, bool **startedRunThisInstance**, list<*obj*> **citizens-actions**, list<*obj*> **citizens-noactions**|Globalt|Opbevaring af data for nuværende kørsel herunder tilskudsberegninger eller relevant info om brud på forretningsregler. Data opbevares kun i hukommelse og skal generhverves ved systemnedbrud.|
|rules|list<*obj*> rule|Globalt "storeInFile"|Indeholder liste af regel-objekter som benyttes af regelmotoren.|
|grants|list<*obj*> grant|Globalt "storeInFile"|Indeholder liste af tilskudssatser fra Danmark som benyttes under tilskudsberegningen|


## Fejlfinding

1. Kontrollér adgang til de bagvedliggende systemer:
	**a** ) Gå til [WorkLet webinterface](https://workletnew.snapp.dk/) og log ind med korrekte WorkLet loginoplysninger. Kontrollér at login fungerer, og at der findes fakturaer i oversigten.
	**b** ) Gå til [Kommunens Pensionssystem](https://fagsystem.kommunernespensionssystem.dk/spk-fagsystem/), og kontrollér at login samt systemets søgefunktion fungerer, og at borgerdata kan indlæses som forventet.
	
2. Kontrollér at Node-red er startet korrekt.
	**a** ) Luk terminalen som Node-red er startet i (*Kommandoprompt*, *PowerShell* eller *Terminal*) 
	**b** ) Start en ny terminal (uden at benytte WorkLet genvejen)
	**c** ) Indtast `node-red` i terminalens vindue og tryk Enter
	**d** ) Afvent, og kontroller at Node-red starter som forventet, og at sidste linje i terminalen indeholder `[info] Started flows`

3. Kontrollér om localhost tilgås korrekt
	**a** ) I terminalen hvor Node-red kører, find linje med følgende information:
	`Server now running at http://127.0.0.1:1880/`
	**b** ) Kopier HTTP-adressen og tilgå den i en webbrowser.

4. Kontrollér om Node-red flow oplever fejl
	**a** ) Kontrollér om der er tydelige fejl i den terminal hvor Node-red kører.
	**b** ) Tilgå Node-red direkte på `http://localhost:1880/`
	**c** ) Tilgå debug-vinduet i den højre sidebar eller ved at trykke `CTRL + G` og derefter `D`
	**d** ) Kontrollér efter tydelige fejl blandt debug-beskederne (indeholder ofte *error* eller lign.).

I alle tilfælde af fejl som ikke let kan løses af systembrugeren skal en IT-supportsag oprettes. Hvis der på noget tidspunkt er tydelige fejlmeddelelser er det vigtigt, at disse gemmes som skærmbilleder eller rå tekst, således de underliggende problemer kan løses af en udvikler.
