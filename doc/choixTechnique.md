# choix technique

1. dans un fichier ./src/data/jardin.json
1. configuration de l'application
1. tous les textes de l'application en fr, es et en

## responsive

les tailles minimales pour les écrans sont :

1. mobile: "480px", téléphone mobile
1. tablet: "600px", tablette portrait
1. tableteLS: "768px", tablee paysage
1. laptop: "992px", laptop
1. screen: "1832x", desktop

## base de donnée mySQL

les données sont déja sur une base MySql: migrer sur firebase base noSql

[doc ici](https://dev.to/nasreenkhalid/simple-react-js-and-mysql-integration-crud-app-backend-5aom)

# utilisation de firebase pour le back-end

```json
collection generic-seed
[
    tomate-salade :{
        genre :
        espece :
        temp-germ-min :
        temp-germ-max :
        temp-culture-min:
        temp-culture-max:
        calorie:
        proteine:
        glucide ;
    },
tomate-grosse :{
        genre :
        espece :
        temp-germ-min :
        temp-germ-max :
        temp-culture-min:
        temp-culture-max:
        calorie:
        proteine:
        glucide ;
    },
tomate-cerise :{
        genre :
        espece :
        temp-germ-min :
        temp-germ-max :
        temp-culture-min:
        temp-culture-max:
        calorie:
        proteine:
        glucide ;
    }


]

```

```json

collection variety-seed[

tomate-marmande{
    generic : tomate-salade
    quantity : 100
}
tomate-Coeur-de-boeuf{
    generic : tomate-salade
    quantity : 50
}

]
```
