[< précédent](../README.md)

# Ancien structure de table

# Sommaire

# besoin

```sql

CREATE TABLE `besoin` (
  `id` int NOT NULL,
  `id_variete` int NOT NULL,
  `pourcentage` int NOT NULL DEFAULT '0',
  `actif` int NOT NULL DEFAULT '0',
  `mise_a_jour` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# categorie

```sql

CREATE TABLE `categorie` (
  `id` int NOT NULL,
  `code` int NOT NULL,
  `label` varchar(256) COLLATE utf8mb3_unicode_ci NOT NULL,
  `modif` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `crea_date` timestamp NOT NULL,
  `valide` int NOT NULL DEFAULT '1',
  `ordre` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
```

# charge

```sql

CREATE TABLE `charge` (
  `id` int NOT NULL,
  `action_id` int NOT NULL,
  `cout_fixe` int NOT NULL,
  `cout_variable` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# Cluster_planche

```sql

CREATE TABLE `Cluster_planche` (
  `ID` int NOT NULL,
  `Nom` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `Localisation` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `Remarque` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# Densite

```sql

CREATE TABLE `Densite` (
  `id` int NOT NULL,
  `ItkId` int NOT NULL,
  `plancheId` int NOT NULL,
  `varieteId` int NOT NULL,
  `nbLigneAuto` int NOT NULL,
  `nbLigneManu` int NOT NULL,
  `modification` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# entete

```sql

```

# famille

```sql

```

# itk_action

```sql

```

# ITK_ID

```sql

CREATE TABLE `ITK_ID` (
  `ID` int NOT NULL,
  `label` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `commentaire` varchar(4096) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `actif` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# m_itk

```sql
CREATE TABLE `m_itk` (
  `ID` int NOT NULL,
  `actif` int NOT NULL DEFAULT '1',
  `id_itk` int DEFAULT NULL,
  `ITK` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_variete` int NOT NULL,
  `Variete` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S1` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S2` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S3` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S4` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S5` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S6` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S7` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S8` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S9` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S10` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S11` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S12` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S13` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S14` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S15` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S16` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S17` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S18` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S19` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S20` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S21` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S22` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S23` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S24` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S25` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S26` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S27` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S28` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S29` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S30` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S31` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S32` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S33` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S34` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S35` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S36` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S37` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S38` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S39` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S40` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S41` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S42` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S43` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S44` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S45` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S46` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S47` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S48` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S49` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S50` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S51` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S52` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S53` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# note

```sql

CREATE TABLE `note` (
  `id` int NOT NULL,
  `action_id` int NOT NULL,
  `espece_id` int NOT NULL COMMENT 'espece générique',
  `texte` varchar(4096) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `mise_a_jour` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# ods_graine_master

```sql

CREATE TABLE `ods_graine_master` (
  `A` int DEFAULT NULL,
  `ID` varchar(4) DEFAULT NULL,
  `Appellation` varchar(33) DEFAULT NULL,
  `code 2020` varchar(5) DEFAULT NULL,
  `remarque` varchar(62) DEFAULT NULL,
  `Variete` varchar(44) DEFAULT NULL,
  `Genre` varchar(12) DEFAULT NULL,
  `espèce` varchar(13) DEFAULT NULL,
  `famille` varchar(15) DEFAULT NULL,
  `code_compact` int DEFAULT NULL,
  `code_famille` int DEFAULT NULL,
  `Code genre` int DEFAULT NULL,
  `code espece` int DEFAULT NULL,
  `code_cultivar` int DEFAULT NULL,
  `code` int DEFAULT NULL,
  `nom_commun` varchar(10) DEFAULT NULL,
  `origine` varchar(32) DEFAULT NULL,
  `2019` varchar(1) DEFAULT NULL,
  `Besoin` varchar(60) DEFAULT NULL,
  `fin_min` int DEFAULT NULL,
  `fin_max` int DEFAULT NULL,
  `duree_recolte` int DEFAULT NULL,
  `duree_plantation` int DEFAULT NULL,
  `duree_repiquage` int DEFAULT NULL,
  `duree_semis` int DEFAULT NULL,
  `semis` varchar(23) DEFAULT NULL,
  `récolte` varchar(23) DEFAULT NULL,
  `récolte après semis` varchar(13) DEFAULT NULL,
  `AC` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

```

# Planche

```sql

CREATE TABLE `Planche` (
  `ID` int NOT NULL,
  `id_cluster` int NOT NULL,
  `Nom` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `longueur` float DEFAULT '0',
  `largeur` float DEFAULT '0',
  `Commentaire` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# plancheITK

```sql

CREATE TABLE `plancheITK` (
  `id` int NOT NULL,
  `id_planche` int NOT NULL,
  `id_itk` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# semis_event

```sql

CREATE TABLE `plancheITK` (
  `id` int NOT NULL,
  `id_planche` int NOT NULL,
  `id_itk` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# semis_id

```sql

CREATE TABLE `semis_id` (
  `id` int NOT NULL,
  `annee` int NOT NULL DEFAULT '1900',
  `nb_semis` int NOT NULL,
  `id_variete` int NOT NULL,
  `label` varchar(1024) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'Variété ?',
  `quantite` int NOT NULL DEFAULT '0',
  `cluster_id` int DEFAULT NULL,
  `planche_id` int DEFAULT NULL,
  `remarques` varchar(4096) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `modif` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```

# tab_action

```sql



```

# temperature_sol

```sql

CREATE TABLE `temperature_sol` (
  `la_date` varchar(10) DEFAULT NULL,
  `mois` int NOT NULL,
  `semaine` int NOT NULL,
  `code_insee_departement` int DEFAULT NULL,
  `Département` varchar(14) DEFAULT NULL,
  `tmin` decimal(3,1) DEFAULT NULL,
  `tmax` decimal(3,1) DEFAULT NULL,
  `tmoy` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

```

# unuse_ITK_list

```sql

```

# variete

```sql

CREATE TABLE `variete` (
  `id` int NOT NULL,
  `nom_commun` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `categorie` int NOT NULL,
  `rusticite` decimal(10,2) DEFAULT NULL,
  `Temp_Germ_min` int DEFAULT NULL,
  `Temp_Germ_max` int DEFAULT NULL,
  `Duree_Germ_min` int DEFAULT NULL,
  `Duree_Germ_max` int DEFAULT NULL,
  `Zero_veg` decimal(10,2) DEFAULT NULL,
  `Temp_cult_min` decimal(10,2) DEFAULT NULL,
  `Temp_cult_max` decimal(10,2) DEFAULT NULL,
  `duree_cult_min` decimal(10,2) DEFAULT NULL,
  `duree_cult_max` decimal(10,2) DEFAULT NULL,
  `Rendement_min` decimal(10,2) DEFAULT NULL,
  `Rendement_max` decimal(10,2) DEFAULT NULL,
  `calorie` decimal(10,2) NOT NULL DEFAULT '0.00',
  `poids_mille_graine` decimal(10,2) DEFAULT NULL,
  `profondeur_semis` int DEFAULT NULL,
  `distance_entre_graine` int DEFAULT NULL,
  `distance_entre_rang` int DEFAULT NULL,
  `occupation_hauteur` int DEFAULT NULL,
  `occupation_sol` int DEFAULT NULL,
  `Stock` int DEFAULT '0',
  `id_famille` int NOT NULL DEFAULT '0',
  `Espece` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `variete` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cultivar` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `remarques` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nom_latin` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ID_genre_espece` int DEFAULT NULL,
  `modification` timestamp NULL DEFAULT NULL,
  `crea_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `valide` int NOT NULL DEFAULT '1',
  `ordre` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


```

# variete_action

```sql

CREATE TABLE `variete_action` (
  `id` int NOT NULL,
  `S1` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S2` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S3` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S4` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S5` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S6` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S7` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S8` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S9` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S10` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S11` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S12` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S13` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S14` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S15` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S16` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S17` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S18` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S19` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S20` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S21` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S22` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S23` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S24` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S25` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S26` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S27` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S28` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S29` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S30` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S31` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S32` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S33` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S34` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S35` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S36` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S37` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S38` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S39` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S40` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S41` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S42` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S43` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S44` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S45` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S46` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S47` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S48` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S49` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S50` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S51` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S52` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `S53` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

```
