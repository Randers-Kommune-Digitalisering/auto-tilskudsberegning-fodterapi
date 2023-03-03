# Deployment (*auto-tilskudsberegning-deploy*)
Her beskrives plan samt instruktioner for deployment af WorkLet automatiseringsværktøj hos Randers Kommune Borgerservice.

**GitHub repository**: [auto-tilskudsberegning-fodterapi](https://github.com/Randers-Kommune-Digitalisering/auto-tilskudsberegning-fodterapi)

## Formål
Formålet med dette dokument er at sikre en ensartet og korrekt installation og deployment af automatiseringsværktøjet samt dets dependencies. Deploymenten tager udgangspunkt i at værktøjet skal køre lokalt på én enkelt PC, med mulighed for at tilgå værktøjet fra flere brugere, hvor data for seneste kørsler vil blive delt imellem. 

## Deployment vejledning
1. Aktiver administrator tilstand.

2. Lokalisér *Delte filer* mappen ved at indtaste efter `%public%` i Windows søgefelt.

3. Opret 4 nye mapper, og døb dem hhv. `.node-red`, `.node-js`, `.npm`, og `.npm-cache`.

4. Installér Node.js 18.14.0 LTS fra [Node.js officielle website](https://nodejs.org/en/download) i  `.node-js` mappen.

5. Kontrollér installationen af Node.js i PowerShell.
	`node --version`

6. Skift npm installationssti i Powershell.
	```
	npm config set prefix $env:PUBLIC\.npm
	npm config set cache $env:PUBLIC\.npm-cache
	```

7. Tilgå *Rediger systemmiljøvariablerne* via Windows søgefelt.

8. Redigér i brugermiljøvariablen **Path** 
	Ændr `C:\Users\Brugernavn\AppData\Roaming\npm` til `%PUBLIC%\.npm`

	***OBS**: Miljøvariblen skal ændres for ALLE brugere som skal have adgang til Node-red på den aktuelle PC.*
	
9. Kontrollér installationen af npm i PowerShell.
	`npm --version`
	
10. Installér node-red i PowerShell.
	`npm install -g --unsafe-perm node-red`

11. Installer Puppeteer i PowerShell
	`npm install puppeteer`

14. Opdater `.npm\node_modules\node-red\settings.js` med følgende ændringer:
	 a. Under *functionGlobalContext* (linje ~463) indsættes:
	```
	puppeteer:  require('puppeteer'),
	path: require('path'),
	fs: require('fs')
	```
	b. Under *contextStorage* (linje ~310) indsættes
	```
	default: {
		module: "memory"
	},
	storeInFile: {
		module: "localfilesystem",
		config: {
			dir: "C:\Users\Public\.node-red"
		}
	}
	```
	c. Lige under *contextStorage* ændres *exportGlobalContextKeys* til *true*
	`exportGlobalContextKeys: true`

12. Start Node-red i .node-red mappen
	 `node-red -u $env:PUBLIC\.node-red`
	 
15. Klon Git repository til node-red projekt via SSH (opsætning af Git krævet).
	`git@github.com:Randers-Kommune-Digitalisering/auto-tilskudsberegning-fodterapi.git`
	

## Daglig drift vejledning
For at automatiseringsværktøjet kan køre, skal node-red først være startet op i en terminal, f.eks. [Windows Terminal](https://www.microsoft.com/store/productId/9N0DX20HK701) eller Windows PowerShell. 
1. Start node-red med specifik brugersti
	`node-red -u $env:PUBLIC\.node-red`
	
2. Åbn automatiseringsværktøjets webflade i din browser
	`http://localhost:1880/worklet` - [link](http://localhost:1880/worklet)

3. Benyt automatiseringsværktøjet efter instrukserne på webfladen.

4. Afslut terminalen som node-red er åbnet i, eller luk computeren som benyttes til formålet.
