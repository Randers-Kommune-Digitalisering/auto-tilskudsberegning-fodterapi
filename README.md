# ![automation-icon] auto-tilskudsberegning-fodterapi

* Beskrivelse??

<br> 

### ![clipboard-icon] Metoder

- Fase 1. (**E**xtract) - Data trækkes fra KP WEB(link??) med [Node-Red](https://nodered.org) og [Pupeteer](https://pptr.dev/)
    
- Fase 2. (**T**ransform) - Data vaskes og filteres med et sæt JSONata transformationer i [Node-Red](https://nodered.org)

- Fase 3. (**L**oad) - Data indsættes i KP WEB(Link) med  [Node-Red](https://nodered.org) og [Pupeteer](https://pptr.dev/)

<br> 

### ![flow-icon] Dataflow

```mermaid

graph RL
    KPDB[(Data)] --- KPWEB[KP WebFlade] --> 
    
    |TXT|E[extract data] -->
    |JSON|T{transform data}-->
    |JSON|L[load data] --> KPWEB

    WLDB[(Data)] --- WLWEB[Worklet Webflade] -->|TXT| E

    subgraph link til Worklet????
    WLDB & WLWEB
    end
  
    subgraph link til KP???
    KPDB & KPWEB
    end
  
    subgraph digitalisering.randers.dk/TBA
    E & T & L
    end
```

<br> 

### ![link-icon] Ressourcer
- Projekt: ???


[automation-icon]: https://api.iconify.design/material-symbols/autopay.svg?height=48
[clipboard-icon]: https://api.iconify.design/line-md/clipboard-list.svg?height=36
[flow-icon]: https://api.iconify.design/carbon/flow-data.svg?height=36
[link-icon]: https://api.iconify.design/carbon/copy-link.svg?height=36
