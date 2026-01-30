# Configuration de la Météo 🌤️

## Fonctionnalités

✅ **Météo actuelle** en temps réel pour Clichy-la-Garenne
✅ **Prévisions sur 5 jours**
✅ **Animations modernes** selon les conditions météo
✅ **Design glassmorphism** avec effets de flou
✅ **Responsive** - s'adapte à tous les écrans

## Configuration de l'API (Optionnel)

Par défaut, le site utilise des **données de démonstration**. Pour afficher la vraie météo :

### 1. Obtenir une clé API gratuite

1. Créez un compte sur [OpenWeatherMap](https://openweathermap.org/api)
2. Souscrivez au plan gratuit (1000 appels/jour)
3. Copiez votre clé API

### 2. Configurer la clé

Créez un fichier `.env` à la racine du projet :

```bash
VITE_WEATHER_API_KEY=votre_cle_api_ici
```

### 3. Redémarrer le serveur

```bash
npm run dev
```

## Animations

Le composant météo inclut des animations différentes selon les conditions :

- ☀️ **Soleil** : Rotation et flottement
- ☁️ **Nuages** : Dérive horizontale
- 🌧️ **Pluie** : Tremblement
- ⛈️ **Orage** : Pulsation
- ❄️ **Neige** : Flottement doux

## Personnalisation

### Changer la ville

Modifiez les coordonnées dans `src/components/Weather/Weather.jsx` :

```javascript
const lat = 48.9042  // Latitude
const lon = 2.3094   // Longitude
```

### Modifier les couleurs

Le gradient de fond est dans `src/components/Weather/Weather.css` :

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
