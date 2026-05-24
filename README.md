<div align="center">

  # QuasarCord

  **Le client Discord custom ultime — optimisé, sécurisé, et bourré de fonctionnalités.**

  [![License](https://img.shields.io/github/license/7xAizuuu/quasarcord?color=a855f7)](./LICENSE)
  [![Platform](https://img.shields.io/badge/platform-Windows-3b82f6.svg?logo=windows&logoColor=white)](https://github.com/7xAizuuu/quasarcord)

  ---
</div>

QuasarCord est un fork hautement optimisé d'[Equicord](https://github.com/Equicord/Equicord), conçu pour offrir une expérience Discord ultra-fluide, sans obfuscation et sans bloat. Avec des utilitaires puissants, un style custom et des fonctionnalités exclusives, QuasarCord te donne la meilleure expérience Discord possible.

---

## Fonctionnalités

- **Performance ultime** — Démarrage rapide, moins de CPU/RAM grâce à la suppression du bloat et de l'obfuscation.
- **Mises à jour silencieuses** — Système de mise à jour en arrière-plan, sans interruption.
- **Moteur de plugins avancé** — Compatible avec des centaines de plugins communautaires installables via lien Git.
- **DSP vocal amélioré** — Modules audio optimisés matériellement pour un son plus fort et plus clair.
- **Esthétique premium** — Glassmorphism, icônes custom, hover states fluides.

---

## Installation rapide (Windows)

1. Télécharge [`quasarcord-install.bat`](./quasarcord-install.bat)
2. Fais **clic droit** → **Exécuter en tant qu'administrateur**
3. Suis les instructions à l'écran, redémarre Discord — c'est tout !

Voir le guide complet : [INSTALL_GUIDE.md](./INSTALL_GUIDE.md)

---

## Build depuis les sources

### Prérequis

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.dev)
- [pnpm](https://pnpm.io) : `npm install -g pnpm`

### Commandes

```bash
git clone https://github.com/7xAizuuu/quasarcord.git
cd quasarcord
pnpm install
pnpm build
pnpm inject
```

Pour retirer QuasarCord : `pnpm uninject`

---

## Crédits

Merci aux développeurs d'[Equicord](https://github.com/Equicord/Equicord) et [Vencord](https://github.com/Vendicated/Vencord) pour la base architecturale.

---

## Avertissement légal

*QuasarCord n'est pas affilié à, autorisé par, ou approuvé par Discord Inc.*
L'utilisation de clients tiers est techniquement contraire aux CGU de Discord. Tu l'utilises à tes propres risques.
