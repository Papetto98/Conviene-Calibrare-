/* LISTINI DEGLI ACQUIRENTI
   Per aggiungere un acquirente copia un blocco { ... } e cambia i dati.
   - nome: come appare nel menu
   - listini: uno per ogni periodo; il primo della lista è quello proposto di default
   - dal / al: date di validità (AAAA-MM-GG); scrivi quella che c'è sul listino, l'altra può restare ""
   - arrotondamento: "normale" (78,5 -> 79) oppure "difetto" (78,9 -> 78)
   - righe: [pezzi per kg da, prezzo €/kg]. Ogni riga vale fino alla riga successiva.
            L'ultima riga è il prezzo "oltre" (industria). Se il prezzo è "da determinare" scrivi null.
   - guasto: fasce di guasto interno, in ordine. Ogni fascia ha un limite e un effetto:
       limite:  fino: 5   (fino al 5% compreso)   oppure   sotto: 6   (sotto il 6%)   oppure niente (= oltre)
       effetto: "nessuno"       nessuna detrazione
                "peso"          dal peso si scala la percentuale di guasto
                "sconto"        si toglie un importo dal prezzo: aggiungi euro: 0.20
                "meta"          la partita è pagata a metà prezzo
                "industria"     la partita è pagata come industria
                "fasciaSotto"   si scende di una fascia
                "contoVendita"  merce presa in conto vendita (non calcolabile)
                "nonPrevisto"   il listino non dice cosa succede
   - nota: testo libero mostrato nel confronto */
window.LISTINI = [
  {
    nome: "Lunica del Mugello",
    prodotto: "Marroni",
    listini: [
      {
        dal: "2026-10-27", al: "",
        arrotondamento: "normale",
        guasto: [ { fino: 5, effetto: "nessuno" }, { fino: 8, effetto: "peso" }, { fino: 15, effetto: "meta" }, { effetto: "industria" } ],
        nota: "",
        righe: [
          [50, 5.00], [55, 4.60], [60, 4.40], [61, 4.35], [62, 4.30], [63, 4.25],
          [64, 4.20], [65, 4.15], [66, 4.10], [67, 4.05], [68, 4.00], [69, 3.95],
          [70, 3.90], [71, 3.80], [72, 3.70], [73, 3.60], [74, 3.50], [75, 3.40],
          [76, 3.30], [77, 3.20], [78, 3.10], [79, 3.00], [80, 2.85], [81, 2.80],
          [82, 2.75], [83, 2.70], [84, 2.65], [85, 2.60], [86, 2.55], [87, 2.50],
          [88, 2.45], [89, 2.40], [90, 2.35], [91, 2.20], [92, 2.15], [93, 2.10],
          [94, 2.05], [95, 2.00], [96, 1.95], [97, 1.80], [98, 1.75], [99, 1.70],
          [100, 1.65], [101, 1.60], [102, 1.55], [103, 1.50], [104, 1.45], [105, 1.40],
          [106, 1.35], [107, 1.30], [108, 1.25], [109, 1.20], [110, 1.15], [111, 0.80]
        ]
      },
      {
        dal: "2026-10-17", al: "",
        arrotondamento: "normale",
        guasto: [ { fino: 5, effetto: "nessuno" }, { effetto: "peso" } ],
        nota: "Regole sul guasto di questo listino ricavate dai DDT: oltre il 5% viene scalata dal peso tutta la percentuale.",
        righe: [
          [50, 5.00], [55, 4.60], [60, 4.40], [61, 4.35], [62, 4.30], [63, 4.25],
          [64, 4.20], [65, 4.15], [66, 4.10], [67, 4.05], [68, 4.00], [69, 3.95],
          [70, 3.90], [71, 3.80], [72, 3.70], [73, 3.60], [74, 3.50], [75, 3.40],
          [76, 3.30], [77, 3.20], [78, 3.10], [79, 3.00], [80, 2.85], [81, 2.80],
          [82, 2.75], [83, 2.70], [84, 2.65], [85, 2.60], [86, 2.55], [87, 2.50],
          [88, 2.45], [89, 2.40], [90, 2.35], [91, 2.30], [92, 2.25], [93, 2.20],
          [94, 2.15], [95, 2.10], [96, 2.05], [97, 2.00], [98, 1.95], [99, 1.90],
          [100, 1.85], [101, 1.80], [102, 1.75], [103, 1.70], [104, 1.65], [105, 1.60],
          [106, 1.50], [107, 1.45], [108, 1.40], [109, 1.35], [110, 1.30], [111, 0.80]
        ]
      }
    ]
  },
  {
    nome: "San Liborio",
    prodotto: "Marroni",
    listini: [
      {
        numero: "N°1/2026",
        dal: "", al: "2026-10-17",
        arrotondamento: "normale",
        guasto: [ { sotto: 6, effetto: "nessuno" }, { fino: 10, effetto: "sconto", euro: 0.20 }, { fino: 15, effetto: "sconto", euro: 0.40 }, { effetto: "nonPrevisto" } ],
        nota: "Oltre 110 pz/kg: prezzo da determinare.",
        righe: [
          [50, 5.00], [55, 4.60], [60, 4.40], [61, 4.35], [62, 4.30], [63, 4.25],
          [64, 4.20], [65, 4.15], [66, 4.10], [67, 4.05], [68, 4.00], [69, 3.95],
          [70, 3.90], [71, 3.80], [72, 3.70], [73, 3.60], [74, 3.50], [75, 3.40],
          [76, 3.30], [77, 3.20], [78, 3.10], [79, 3.00], [80, 2.85], [81, 2.80],
          [82, 2.75], [83, 2.70], [84, 2.65], [85, 2.60], [86, 2.55], [87, 2.50],
          [88, 2.45], [89, 2.40], [90, 2.35], [91, 2.30], [92, 2.25], [93, 2.20],
          [94, 2.15], [95, 2.10], [96, 2.05], [97, 2.00], [98, 1.95], [99, 1.90],
          [100, 1.85], [101, 1.80], [102, 1.75], [103, 1.70], [104, 1.65], [105, 1.60],
          [106, 1.50], [107, 1.45], [108, 1.40], [109, 1.35], [110, 1.30], [111, null]
        ]
      }
    ]
  },
  {
    nome: "Romeo",
    prodotto: "Marroni",
    listini: [
      {
        dal: "2026-10-17", al: "",
        arrotondamento: "normale",
        guasto: [ { fino: 5, effetto: "nessuno" }, { fino: 10, effetto: "fasciaSotto" }, { effetto: "contoVendita" } ],
        nota: "Prezzi a fasce di 5 pezzi. Fascia 96–100: sul listino 1,60/1,70 €, qui 1,60 €. Guasto esterno: tolleranza max 5%.",
        righe: [
          [50, 4.70], [56, 4.20], [61, 4.00], [66, 3.60], [71, 3.20],
          [76, 2.90], [81, 2.70], [86, 2.30], [91, 2.00], [96, 1.60],
          [101, 1.40], [106, 1.20], [121, 1.00]
        ]
      }
    ]
  }
];
