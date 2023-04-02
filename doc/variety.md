[< précédent](../README.md)

# Variete

# catégorie

| nom        | id  |
| ---------- | --- |
| Potagère   | 1   |
| Fleur      | 2   |
| Médicinale | 4   |
| Aromatique | 8   |
| Vivace     | 16  |
| Générique  | 32  |

en cas de plusieur catégorie; additionner les id

# définition espece

| nom                   | type    | definition         |
| --------------------- | ------- | ------------------ |
| nom_commun            | string  | nom usuel          |
| categorie             | int     | voir categorie     |
| rusticite             | float   | temps en °c        |
| Temp_Germ_min         | float , | temps en °c        |
| Temp_Germ_max         | float , | temps en °c        |
| Duree_Germ_min        | float , | nb jour            |
| Duree_Germ_max        | float , | nb jour            |
| Zero_veg              | float   | temps en °c        |
| Temp_cult_min         | float   | temps en °c        |
| Temp_cult_max         | float   | temps en °c        |
| duree_cult_min        | float   | nb jour            |
| duree_cult_max        | float   | nb jour            |
| Rendement_min         | float   | kg/plante          |
| Rendement_max         | float   | kg/plante          |
| calorie               | float   | nb calorie/ gramme |
| proteide              | float   | en pourcentage     |
| lipide                | float   | en pourcentage     |
| glucide               | float   | en pourcentage     |
| poids_mille_graine    | float   | en gramme          |
| profondeur_semis      | float   | en mm              |
| distance_entre_graine | float   | en mm              |
| distance_entre_rang   | float   | en mm              |
| occupation_hauteur    | float   | en mm              |
| occupation_sol        | float   | en m2              |
| Espece                | string  | nom latin          |
| variete               | string  | nom latin          |
| cultivar              | string  | nom commun         |
| remarques             | string  |                    |

# définition variete :

hérite de espece ; le champ est créer en base que s'il est différent de l'espèce.

| nom                   | type    | definition         |
| --------------------- | ------- | ------------------ |
| id espece             | string  | clée dasn la base  |
| categorie             | int     | voir categorie     |
| rusticite             | float   | temps en °c        |
| Zero_veg              | float   | temps en °c        |
| Temp_Germ_min         | float , | temps en °c        |
| Temp_Germ_max         | float , | temps en °c        |
| Duree_Germ_min        | float , | nb jour            |
| Duree_Germ_max        | float , | nb jour            |
| Temp_cult_min         | float   | temps en °c        |
| Temp_cult_max         | float   | temps en °c        |
| duree_cult_min        | float   | nb jour            |
| duree_cult_max        | float   | nb jour            |
| Rendement_min         | float   | kg/plante          |
| Rendement_max         | float   | kg/plante          |
| calorie               | float   | nb calorie/ gramme |
| proteide              | float   | en pourcentage     |
| lipide                | float   | en pourcentage     |
| glucide               | float   | en pourcentage     |
| poids_mille_graine    | float   | en gramme          |
| profondeur_semis      | float   | en mm              |
| distance_entre_graine | float   | en mm              |
| distance_entre_rang   | float   | en mm              |
| occupation_hauteur    | float   | en mm              |
| occupation_sol        | float   | en m2              |
| cultivar              | string  | nom commun         |
| remarques             | string  |                    |

# ajouter une nouvelle variété

## cas d'une nouvelle graine

la variété générique est ajouté par défaut.
l'id est 0
ce sera la variété de base dupliqué aux autres

## cas d'une graine existant

`newVariety()` dans varietyStore

1. dupliquer les informations de la variété générique
1. modifier les informations avec le composant newVariety (la donnée modifié est dans currentVariety)

## sauvegarde

`saveVariety()` dans varietyStore

1. Mettre à jour varietyList avec currentVariety
1. Appeler ZsaveSeed(varietyList) seedStore.
1. appel de ` saveSeed(newVarietyList)` de SeedStore

1. Mise à jour de currentSeed avec varietyList
1. update CurrentSeed dans la base firebase
1. mise à jour de seedList avec currentSeed
