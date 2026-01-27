# Site Web de Mariage - Julie & Louis

Site web élégant pour le mariage de Julie & Louis, créé avec React et Vite.

## Informations du mariage

- **Date** : 25 avril 2025 à 11h
- **Cérémonie** : Mairie de Clichy
- **Repas** : Splash Port Van Gogh (à partir de 12h)
- **Activités** : Après-midi avec choix de préférence

## Fonctionnalités

- ✅ Compte à rebours dynamique jusqu'au jour du mariage
- ✅ Programme détaillé de la journée
- ✅ Intégration Google Form pour RSVP (participation, allergies, halal, conditions alimentaires, préférences d'activités)
- ✅ Cartes Google Maps pour les deux lieux
- ✅ Affichage de la météo à Clichy
- ✅ Design responsive et moderne
- ✅ Animations subtiles

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build pour production

```bash
npm run build
```

## Configuration Google Form

**Important** : Vous devez configurer l'URL de votre Google Form dans les fichiers suivants :

1. `src/components/RSVPSection.jsx` - Remplacez `YOUR_FORM_ID` par l'ID de votre formulaire Google
2. `src/components/Activities.jsx` - Même chose si vous utilisez un formulaire séparé (actuellement configuré pour utiliser le même)

Pour obtenir l'URL d'intégration de votre Google Form :
1. Ouvrez votre formulaire Google
2. Cliquez sur "Envoyer" (en haut à droite)
3. Cliquez sur l'icône `</>` (Intégrer)
4. Copiez l'URL dans l'attribut `src` de l'iframe

## Configuration Météo

Le composant météo affiche les conditions météorologiques à Clichy. Par défaut, il utilise des données de démonstration. Pour utiliser des données réelles :

1. Créez un compte gratuit sur [OpenWeatherMap](https://openweathermap.org/api)
2. Obtenez votre clé API
3. Créez un fichier `.env` à la racine du projet
4. Ajoutez : `VITE_WEATHER_API_KEY=votre_cle_api`

## Personnalisation

Les couleurs et styles peuvent être modifiés dans `src/styles/App.css` via les variables CSS dans `:root`.

## Technologies utilisées

- React 18
- Vite
- CSS moderne (Flexbox, Grid)
- Google Maps (embed)
- Google Forms (embed)
