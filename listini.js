/* LISTINI DEGLI ACQUIRENTI
   Per aggiungere un acquirente copia un blocco { ... } e cambia i dati.
   - nome: come appare nel menu
   - listini: uno per ogni periodo; il primo della lista è quello proposto di default
   - dal / al: date di validità (AAAA-MM-GG); scrivi quella che c'è sul listino, l'altra può restare ""
   - arrotondamento: "normale" (78,5 -> 79) oppure "difetto" (78,9 -> 78)
   - righe: [pezzi per kg da, prezzo €/kg]. Ogni riga vale fino alla riga successiva.
            L'ultima riga è il prezzo "oltre" (industria). Se il prezzo è "da determinare" scrivi null.
   - guasto: come viene trattato il guasto interno
       { tipo: "peso", tolleranza: 5 }  -> oltre il 5% viene scalata dal peso la percentuale di guasto
       { tipo: "prezzo", sotto: 6, fasce: [[10, 0.20], [15, 0.40]] }
                                        -> sotto il 6% niente; fino al 10% -0,20 €/kg; fino al 15% -0,40 €/kg
   - nota: testo libero mostrato nel confronto */
window.LISTINI = [
  {
    nome: "Lunica del Mugello",
    prodotto: "Marroni",
    listini: [
      {
        dal: "2026-10-27", al: "",
        arrotondamento: "normale",
        guasto: { tipo: "peso", tolleranza: 5 },
        nota: "Guasto: tolleranza max 5% interno.",
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
        guasto: { tipo: "peso", tolleranza: 5 },
        nota: "Guasto: tolleranza max 5% interno.",
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
        guasto: { tipo: "prezzo", sotto: 6, fasce: [[10, 0.20], [15, 0.40]] },
        nota: "Oltre 110 pz/kg: prezzo da determinare. Listino valido per guasto interno inferiore al 6%.",
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
  }
];
