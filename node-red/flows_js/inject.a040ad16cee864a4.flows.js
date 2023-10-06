const Node = {
  "id": "a040ad16cee864a4",
  "type": "inject",
  "z": "f99fd88fa65c74b9",
  "name": "TEST DATA",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "[{\"cpr\":\"250947-9989\",\"persondata\":{\"personligtillaegsprocent\":{\"dato_fra\":\"2015-01-01\",\"tillaegsprocent\":100},\"helbredstillaegsprocent\":[{\"dato_fra\":\"2023-01-01\",\"dato_til\":\"2023-12-31\",\"tillaegsprocent\":85},{\"dato_fra\":\"2008-12-01\",\"dato_til\":\"2022-12-31\",\"tillaegsprocent\":85},{\"dato_fra\":\"2004-01-01\",\"dato_til\":\"2008-11-30\",\"tillaegsprocent\":0}],\"bevilling\":true,\"sager\":[{\"titel\":\"Helbredstillægskort (01-01-2023)\",\"type\":\"Helbredstillægskort\",\"fra\":\"2023-01-01\",\"til\":\"2023-12-31\",\"aktiv\":true,\"bevilling\":true},{\"titel\":\"Folkepension (24-12-2021)\",\"type\":\"Folkepension\",\"fra\":\"2021-12-24\",\"aktiv\":true,\"bevilling\":true},{\"titel\":\"Fodbehandling\",\"type\":\"Udvidet helbredstillæg\",\"fra\":\"2022-04-04\",\"aktiv\":true,\"bevilling\":true}],\"danmarkgruppe\":\"Nej\",\"formue\":78133},\"faktura\":{\"id\":\"1b2c3d4e-5f6a-7890-4321-f6e5d4c3b2a1\",\"fakturaNummer\":\"3088\",\"klinikNavn\":\"Test Klinikken\",\"klinikCVR\":\"12345678\",\"behandlerNavn\":\"Test Behandler\",\"behandlerType\":1,\"ydernummer\":\"313017\",\"patientCPR\":\"250947-9989\",\"patientTelefon\":null,\"behandlinger\":{\"uid\":\"4321-f6e5d4c3b2a1-0000-1\",\"fid\":\"1b2c3d4e-5f6a-7890-4321-f6e5d4c3b2a1\",\"titel\":\"Behandlingpåklinik\",\"ydelsesnummer\":\"0000\",\"behandlingsKategory\":\"Alm.behandlinger56\",\"pris\":400,\"kørteKilometer\":0,\"patientAndel\":400,\"sygesikringsAndel\":0,\"type\":\"A\",\"bevilget\":true,\"sag\":{\"titel\":\"Fodbehandling\",\"type\":\"Udvidet helbredstillæg\",\"fra\":\"2022-04-04\",\"aktiv\":true,\"bevilling\":true}},\"dato\":\"2023-07-07\",\"total\":400,\"patientAndelTotal\":400,\"sygesikringsAndelTotal\":0,\"_personligtillaegsprocent\":{\"dato_fra\":\"2015-01-01\",\"tillaegsprocent\":100},\"_helbredstillaegsprocent\":{\"dato_fra\":\"2023-01-01\",\"dato_til\":\"2023-12-31\",\"tillaegsprocent\":85}}},{\"cpr\":\"231114-3995\",\"persondata\":{\"personligtillaegsprocent\":{\"dato_fra\":\"2015-01-01\",\"tillaegsprocent\":100},\"helbredstillaegsprocent\":[{\"dato_fra\":\"2023-01-01\",\"dato_til\":\"2023-12-31\",\"tillaegsprocent\":85},{\"dato_fra\":\"2020-07-20\",\"dato_til\":\"2022-12-31\",\"tillaegsprocent\":85}],\"bevilling\":true,\"sager\":[{\"titel\":\"Helbredstillæg medlem af Danmark\",\"type\":\"Helbredstillægskort\",\"fra\":\"2023-01-01\",\"til\":\"2023-12-31\",\"aktiv\":true,\"bevilling\":true},{\"titel\":\"Fodpleje\",\"type\":\"Udvidet helbredstillæg\",\"fra\":\"2022-08-01\",\"til\":\"2023-08-31\",\"aktiv\":true,\"bevilling\":true},{\"titel\":\"Folkepension (25-12-2021)\",\"type\":\"Folkepension\",\"fra\":\"2021-12-25\",\"aktiv\":true,\"bevilling\":true}],\"danmarkgruppe\":\"Ja - Gruppe 1\",\"formue\":35231},\"faktura\":{\"id\":\"9f8e7d6c-5b4a-3210-9876-c4d3e2f1a0b9\",\"fakturaNummer\":\"504436\",\"klinikNavn\":\"Test Klinikken\",\"klinikCVR\":\"12345678\",\"behandlerNavn\":\"Test Behandler\",\"behandlerType\":1,\"ydernummer\":\"ydernummermangler\",\"patientCPR\":\"231114-3995\",\"patientTelefon\":null,\"behandlinger\":{\"uid\":\"9876-c4d3e2f1a0b9-0001-1\",\"fid\":\"9f8e7d6c-5b4a-3210-9876-c4d3e2f1a0b9\",\"titel\":\"Behandlingipatientsegethjem\",\"ydelsesnummer\":\"0001\",\"behandlingsKategory\":\"Alm.behandlinger56\",\"pris\":430,\"kørteKilometer\":0,\"patientAndel\":430,\"sygesikringsAndel\":0,\"type\":\"A\",\"bevilget\":true,\"sag\":{\"titel\":\"Fodpleje\",\"type\":\"Udvidet helbredstillæg\",\"fra\":\"2022-08-01\",\"til\":\"2023-08-31\",\"aktiv\":true,\"bevilling\":true}},\"dato\":\"2023-07-07\",\"total\":430,\"patientAndelTotal\":430,\"sygesikringsAndelTotal\":0,\"_personligtillaegsprocent\":{\"dato_fra\":\"2015-01-01\",\"tillaegsprocent\":100},\"_helbredstillaegsprocent\":{\"dato_fra\":\"2023-01-01\",\"dato_til\":\"2023-12-31\",\"tillaegsprocent\":85}}},{\"cpr\":\"300174-9995\",\"persondata\":{\"personligtillaegsprocent\":[{\"dato_fra\":\"2019-01-01\",\"tillaegsprocent\":100},{\"dato_fra\":\"2018-07-26\",\"dato_til\":\"2018-12-31\",\"tillaegsprocent\":84},{\"dato_fra\":\"2017-01-01\",\"dato_til\":\"2018-07-25\",\"tillaegsprocent\":64},{\"dato_fra\":\"2016-01-01\",\"dato_til\":\"2016-12-31\",\"tillaegsprocent\":63},{\"dato_fra\":\"2015-12-01\",\"dato_til\":\"2015-12-31\",\"tillaegsprocent\":64}],\"helbredstillaegsprocent\":[{\"dato_fra\":\"2023-01-01\",\"dato_til\":\"2023-12-31\",\"tillaegsprocent\":85},{\"dato_fra\":\"2019-01-01\",\"dato_til\":\"2022-12-31\",\"tillaegsprocent\":85},{\"dato_fra\":\"2018-07-26\",\"dato_til\":\"2018-12-31\",\"tillaegsprocent\":71},{\"dato_fra\":\"2017-01-13\",\"dato_til\":\"2018-07-25\",\"tillaegsprocent\":54},{\"dato_fra\":\"2017-01-01\",\"dato_til\":\"2017-01-12\",\"tillaegsprocent\":0},{\"dato_fra\":\"2016-02-09\",\"dato_til\":\"2016-12-31\",\"tillaegsprocent\":54},{\"dato_fra\":\"2004-01-01\",\"dato_til\":\"2016-02-08\",\"tillaegsprocent\":0}],\"bevilling\":true,\"sager\":[{\"titel\":\"Helbredstillæg medlem af Danmark\",\"type\":\"Helbredstillægskort\",\"fra\":\"2023-01-01\",\"til\":\"2023-12-31\",\"aktiv\":true,\"bevilling\":true},{\"titel\":\"Folkepension (19-01-2022)\",\"type\":\"Folkepension\",\"fra\":\"2022-01-19\",\"aktiv\":true,\"bevilling\":true}],\"danmarkgruppe\":\"Ja - Gruppe 5\",\"formue\":7321},\"faktura\":{\"OBS\":\"Dette er manuelt genereret test-data med CPR-numbre fra 'Nationale test-CPR-numre' (kilde: medcom.dk)\",\"id\":\"0a1b2c3d-4e5f-6789-0123-d4e5f6a7b8c9\",\"fakturaNummer\":\"884112\",\"klinikNavn\":\"Test Klinikken\",\"klinikCVR\":\"39911272\",\"behandlerNavn\":null,\"behandlerType\":1,\"ydernummer\":\"ydernummermangler\",\"patientCPR\":\"300174-9995\",\"patientTelefon\":null,\"behandlinger\":[{\"uid\":\"0123-d4e5f6a7b8c9-0000-1\",\"fid\":\"0a1b2c3d-4e5f-6789-0123-d4e5f6a7b8c9\",\"titel\":\"Behandlingpåklinik\",\"ydelsesnummer\":\"0000\",\"behandlingsKategory\":\"Alm.behandlinger56\",\"pris\":360,\"kørteKilometer\":0,\"patientAndel\":360,\"sygesikringsAndel\":0,\"type\":\"A\",\"bevilget\":true},{\"uid\":\"0123-d4e5f612b23c-3132-4\",\"fid\":\"0a1b2c3d-4e5f-6789-0123-d4e5fsa7b8c9\",\"titel\":\"Behandlingpåklinik\",\"ydelsesnummer\":\"0000\",\"behandlingsKategory\":\"Alm.behandlinger56\",\"pris\":360,\"kørteKilometer\":0,\"patientAndel\":360,\"sygesikringsAndel\":0,\"type\":\"A\",\"bevilget\":true}],\"dato\":\"2023-04-03\",\"total\":360,\"patientAndelTotal\":360,\"sygesikringsAndelTotal\":0,\"_personligtillaegsprocent\":{\"dato_fra\":\"2019-01-01\",\"tillaegsprocent\":100},\"_helbredstillaegsprocent\":{\"dato_fra\":\"2023-01-01\",\"dato_til\":\"2023-12-31\",\"tillaegsprocent\":85}}}]",
  "payloadType": "json",
  "x": 110,
  "y": 2940,
  "wires": [
    [
      "a3b3a2d94e283241"
    ]
  ],
  "_order": 979
}

module.exports = Node;