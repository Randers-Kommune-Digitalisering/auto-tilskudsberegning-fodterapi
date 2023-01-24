# 👣 Automatisk håndtering af tilskud til fodterapi

| [**Afhængigheder**](#afhængigheder) | [**Metoder**](#metoder) | [**Dataflow**](#dataflow) | [**Ressourcer**](#ressourcer) |
<br>
## Afhængigheder

> **Note**
> 
> Forudsætninger for afvikling -->
> 
> | [Node.js 18](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  |  [Node-RED 3.0.2](https://nodered.org/docs/getting-started/windows)  |   [Puppeteer 18.2.1](https://www.npmjs.com/package/puppeteer/v/18.2.1)
> 
> Nødvendige netværksadgange under afvikling -->
>  
> | https://cdn.jsdelivr.net/npm  |  https://jsbin-user-assets.s3.amazonaws.com/rafaelcastrocouto/  | https://cdnjs.cloudflare.com/ajax  |
> 
> | https://workletnew.snapp.dk/  | https://fagsystem.kommunernespensionssystem.dk/spk-fagsystem/ |
<br>

## Metoder

- (**E**xtract) - Data trækkes fra KP WEB(link??) med[Node-Red](https://nodered.org) og[Pupeteer](https://pptr.dev/)
- (**T**ransform) - Data vaskes og filteres med et sæt JSONata transformationer i[Node-Red](https://nodered.org)
- (**L**oad) - Data indsættes i KP WEB(Link) med[Node-Red](https://nodered.org) og[Pupeteer](https://pptr.dev/)

<br>

## Dataflow

```mermaid

graph RL
    KPDB[(Data)] --- KPWEB[KP WebFlade] --> 
  
    |TXT|E[scrape data] -->
    |JSON|T{transform data}-->
    |JSON|L[load data] --> KPWEB

    WLDB[(Data)] --- WLWEB[Worklet Webflade] -->|TXT| E

    subgraph Laptop
    E & T & L
    end

    subgraph link til Worklet????
    WLDB & WLWEB
    end
  
    subgraph link til KP???
    KPDB & KPWEB
    end
  

```

### Ressourcer

🔗 Projekt: https://github.com/orgs/Randers-Kommune-Digitalisering/projects/1
