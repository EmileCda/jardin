# définiton de la collection seed

Contient les graines générique et les variétées

```js
export type sonSeed = [
  {
    id: "IDTOMATE",
    nom: "tomate",
    minGermTemp: "15",
    maxGermTemp: "30",
    minCultTemp: "15",
    maxCultTemp: "35",
    Seasonality: "early",
    variety: [
      {
        nom: "Marmande",
        minGermTemp: "14",
        maxGermTemp: "28",
        averageWeight: "80",
      },
      {
        nom: "Golden nugget",
        averageWeight: "10",
      },
      {
        nom: "Saint Pierre",
        averageWeight: "250",
        Seasonality: "late",
      },
      {
        nom: "Salade",
        averageWeight: "150",
        Seasonality: "mi-season",
      }
    ],
  },
  {
    id: "IDPIMENT",
    nom: "Piment",
    minGermTemp: "18",
    maxGermTemp: "32",
    minCultTemp: "15",
    maxCultTemp: "40",
    Seasonality: "early",
    variety: [
      {
        nom: "Thaï",
        minGermTemp: "14",
        maxGermTemp: "28",
        averageWeight: "80",
      },
      {
        nom: "Cayenne",
        averageWeight: "12",
        minCultTemp: "15",
        maxCultTemp: "25",
        Seasonality: "late",
      },
      {
        nom: "Corne de gazelle",
        averageWeight: "25",
      },
      {
        nom: "Antillais",
        averageWeight: "150",
        Seasonality: "mi-season",
      }
    ],
  }
];
```
