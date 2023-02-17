# Deployment (*auto-tilskudsberegning-deploy*)
Her beskrives plan samt instruktioner for deployment af WorkLet automatiseringsværktøj hos Randers Kommune Borgerservice.

**GitHub repository**: [auto-tilskudsberegning-fodterapi](https://github.com/Randers-Kommune-Digitalisering/auto-tilskudsberegning-fodterapi)

## Formål
Formålet med dette dokument er at sikre en ensartet og korrekt installation og deployment af automatiseringsværktøjet samt dets dependencies. Deploymenten tager udgangspunkt i at værktøjet skal køre lokalt på én enkelt PC, med mulighed for at tilgå værktøjet fra flere brugere, hvor data for seneste kørsler vil blive delt imellem. 

## Deployment vejledning
1. Installér Node.js 18.14.0 LTS fra [Node.js officielle website](https://nodejs.org/en/).

2. Kontrollér installationen af Node.js og NPM i PowerShell.
	`node --version; npm --version`
	
3. Installér node-red i PowerShell.
	`npm install -g --unsafe-perm node-red`

4. Klon Git repository til node-red projekt via SSH (opsætning af Git krævet).
	`git@github.com:Randers-Kommune-Digitalisering/auto-tilskudsberegning-fodterapi.git`

5. Installer Puppeteer i PowerShell
	`npm install puppeteer`

6. Opret mappe på fællesdrev F:\WorkLet\node-red-data\. 

7. Kopier **settings.js** fra *.node-red* mappen i Windows' *%homepath%* / %userprofile%* mappe. Indsæt den kopierede fil i den nye mappe på fællesdrev.

8. Opdater **settings.js** med følgende ændringer:
	 a. Under *functionGlobalContext* (linje ~463) indsættes:
	`puppeteer:  require('puppeteer'), path: require('path'), fs: require('fs')`
	b. Under *contextStorage* (linje ~310) indsættes
	`storeInFile: { module: "localfilesystem", config: { dir:	"F:\WorkLet\node-red-data\" } }`

*OBS*:  ContextStorage ændringer er **ikke** testet. Dir ændres med henblik på at give adgang fra flere brugere.

## Daglig drift vejledning
For at automatiseringsværktøjet kan køre, skal node-red først være startet op i en terminal, f.eks. [Windows Terminal](https://www.microsoft.com/store/productId/9N0DX20HK701) eller Windows PowerShell. 
1. Start node-red med specifik settings.js definition
	`node-red --settings F:\WorkLet\node-red-data\settings.js`
	
2. Åbn automatiseringsværktøjets webflade i din browser
	`http://localhost:1880/worklet` - [link](http://localhost:1880/worklet)

3. Benyt automatiseringsværktøjet efter instrukserne på webfladen.

4. Afslut terminalen som node-red er åbnet i, eller luk computeren som benyttes til formålet.
