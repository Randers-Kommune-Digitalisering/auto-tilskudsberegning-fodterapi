# :control_knobs: auto-tilskudsberegning-fodterapi


[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/apache/superset?sort=semver)](https://github.com/apache/superset/tree/latest)
[![Build Status](https://github.com/apache/superset/workflows/Python/badge.svg)](https://github.com/apache/superset/actions)
[![PyPI version](https://badge.fury.io/py/apache-superset.svg)](https://badge.fury.io/py/apache-superset)
[![Coverage Status](https://codecov.io/github/apache/superset/coverage.svg?branch=master)](https://codecov.io/github/apache/superset)
[![PyPI](https://img.shields.io/pypi/pyversions/apache-superset.svg?maxAge=2592000)](https://pypi.python.org/pypi/apache-superset)
[![Get on Slack](https://img.shields.io/badge/slack-join-orange.svg)](http://bit.ly/join-superset-slack)
[![Documentation](https://img.shields.io/badge/docs-apache.org-blue.svg)](https://superset.apache.org)

<img
  src="https://github.com/apache/superset/raw/master/superset-frontend/src/assets/branding/superset-logo-horiz-apache.png"
  alt="Superset"
  width="500"
/>

A modern, enterprise-ready business intelligence web application.

[**Afhængigheder**](#afhængigheder) |
[**Metoder**](#metoder) |


## Afhængigheder

- [Node.js 18 og NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Node-RED 3.0.2](https://nodered.org/docs/getting-started/windows)
- Puppeteer ^18.2.1
- Puppeteer Core ^18.2.1

<br> 

### :clipboard: Metoder

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


[automation-icon]: https://api.iconify.design/material-symbols/autopay.svg?height=48&color=orange
[clipboard-icon]: https://api.iconify.design/line-md/clipboard-list.svg?height=36
[flow-icon]: https://api.iconify.design/carbon/flow-data.svg?height=36
[link-icon]: https://api.iconify.design/carbon/copy-link.svg?height=36
