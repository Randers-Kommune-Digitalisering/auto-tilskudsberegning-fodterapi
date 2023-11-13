# Hjælp
Her på siden finder du hjælp til at anvende WorkLet tilskudsberegneren.

## Kørsel
Begrebet kørsel dækker over en periode af fodplejefakturaer som af tilskudsberegneren behandles samtidig. 

En periode er indstillet til at vare 2 dage. Det betyder, at hver gang tilskudsberegneren køres, vil den beregne tilskud på alle fodplejeregninger som er modtaget inden for den bestemte periode. 

En periode vil altid starte dagen efter den senest afsluttede kørsels periode. Hvis den seneste periode f.eks. dækker d. 1.-2. i en måned, vil næste kørsel dække d. 3.-4.

## Hvordan køres tilskudsberegneren?

1. Gå til **Start**. Tryk på knappen **Fortsæt**.
2. Indtast og godkend loginoplysninger, først DQ-login og derefter WorkLet login.
3. Godkend forretningsregler. Sørg for at oplysningerne er korrekte!
4. Godkend tilskudssatser fra Danmark. Sørg for at oplysningerne er opdaterede og korrekte.
5. Start kørsel. og afvent at tilskudsberegneren arbejder. 

## *Anbefalede handlinger* og *manuel behandling*

Når tilskudsberegneren er færdig med at bearbejde alle faktura og personoplysninger, vil fakturaerne blive udstillet i to kategorier: **anbefalede handlinger** og **manuel behandling**.

**Anbefalede handlinger** dækker over fakturaer hvor tilskudsberegneren har vurderet at borgeren er tilskudsberettiget, og hvor tilskudsberegneren har været i stand til at beregne et tilskudsbeløb.

**Manuel behandling** dækker over fakturaer hvor tilskudsberegneren har vurderet at borgeren ikke er tilskudsberettiget, eller hvor tilskudsberegneren ikke har været i stand til at beregne et tilskud ud fra de oplyste faktura- og persondata.

Vær opmærksom på at de beregnede tilskud er ment som beslutningsstøtte, og derfor ikke automatisk bogføres i KP. Det er sagsbehandlerens opgave at bogføre ydelser som er korrekt beregnede. 

## Beslutningsstøtte

Alle fakturaer som behandles af tilskudsberegneren, præsenteres sammen med relaterede personoplysninger på fakturasiden. 

Herunder ses et eksempel:
![](https://github.com/Randers-Kommune-Digitalisering/auto-tilskudsberegning-fodterapi/blob/main/docs/worklet_receipt_overview.png?raw=true)

I venstre side af skærmen findes personoplysninger. I højre side findes faktura, samt beslutningsstøtte i form af handlinger.

1. **Personnummer**
Se KP for de sidste 4 tal.
2. **Bevilling**
Hvorvidt borgeren iflg. KP er bevilget tilskud til fodpleje. Vises over personoplysninger i KP.
3. **Sager**
Aktive sager som bevilger tilskud til type A behandlinger markeres med grøn kant (*udvidet helbredstillæg markeret med "fod" i titlen*).
Aktive sager som bevilger tilskud til type B behandlinger markeres med blå kant (*helbredstillægskort eller alm. helbredstillæg*).
Sager som er inaktive for fakturadatoen er markeret med rød kant. Alle sager kan ses under *Alle sager*.
4. **Formue / Danmark / Tillægsprocent**
Borgerens formue, medlemsgruppe af Sygesikring Danmark, samt helbredstillægsprocent. 
5. **Link til KP**
Tryk på link-ikonet for at gå direkte til borgerens oplysninger i KP.
6. **Behandler uden ydernummer**
Skiltet vises over fakturaer med behandlinger foretaget af en behandler som ikke har oplyst ydernummer i WorkLet.
7. **Link til faktura i WorkLet**
Tryk på link-ikonet for at gå til fakturaen i WorkLet.
8. **Behandlinger**
Behandlinger på den pågældende faktura som indtastet i WorkLet.
9. **Beslutningsstøtte**
Én eller flere handlinger som skal bogføres manuelt i KP. Hvis fakturaen er sat til manuel behandling, vil en årsag til dette vises i stedet.
10. **Fakturaoversigt**
Fakturaer i den nuværende kategori. Numre med en grøn baggrund er fakturaer som allerede er behandlet. Numre med lysegrå baggrunden afventer behandling. Nummeret med en mørk grå/grøn baggrund er den faktura som pt. vises på siden. 
11. **Bekræftelse af behandling**
Knap til at bekræfte at du som sagsbehandler har behandlet fakturaen manuelt. Tryk først når du har bogført de nødvendige handlinger i KP.

Efter at alle fakturaer er markeret som behandlet af sagsbehandleren, er det muligt afslutte den aktuelle kørsel på startsiden. Fakturaer og personoplysninger fra den aktuelle kørsel vil ikke være tilgængelige i tilskudsberegneren efter kørslen er afsluttet.

## Problemer?

Hvis der opstår problemer under kørslen som ikke automatisk genoprettes, skal der oprettes en supportsag vedr. problemet.
Opret en sag "Automatisk håndtering af tilskud til fodterapi" eller "Worklet" / "Worklet-robot", vælg kategorien Digitalisering og underkategorien Work-let. Sagen sendes derefter til Digitalisering (der går automatisk en mailnotifikation til Digitalisering@randers.dk).
