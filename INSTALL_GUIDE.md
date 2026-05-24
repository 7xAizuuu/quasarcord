# QuasarCord — Guide d'installation complet

---

## Pour TOI (installation sur ton Discord)

### Méthode rapide (recommandée)

1. Ouvre le dossier `quasarcord-master`
2. Fais **clic droit** sur `quasarcord-install.bat`
3. Clique **"Exécuter en tant qu'administrateur"**
4. Le script télécharge tout automatiquement et ouvre une fenêtre graphique
5. Dans la fenêtre, sélectionne ton Discord (Discord Stable, PTB ou Canary)
6. Clique **Inject**
7. **Redémarre Discord** — QuasarCord est actif !

> Si Windows bloque le script (.ps1), tape dans PowerShell :
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass
> ```

### Désinstaller

Fais clic droit sur `quasarcord-uninstall.bat` → "Exécuter en tant qu'administrateur"

---

## Pour les AUTRES (comment ils installent QuasarCord)

### Option A — Partager le dossier

1. Compresse le dossier `quasarcord-master` en ZIP
2. Envoie le ZIP à tes amis
3. Ils extraient et double-cliquent `quasarcord-install.bat`

### Option B — Via GitHub (recommandé pour distribuer à beaucoup de monde)

1. Crée un repo GitHub nommé `quasarcord`
2. Upload tous les fichiers de ce dossier dedans
3. Dans `quasarcord-install.ps1`, la ligne `$QuasarCordRepo` pointe déjà vers `7xAizuuu/quasarcord`
4. Tes amis n'ont qu'à télécharger `quasarcord-install.ps1` depuis GitHub et l'exécuter

### Option C — Lien de téléchargement direct (le plus simple)

Une fois sur GitHub, génère un lien vers le raw du script :
```
https://raw.githubusercontent.com/7xAizuuu/quasarcord/main/quasarcord-install.ps1
```

Tes amis tapent dans PowerShell :
```powershell
irm "https://raw.githubusercontent.com/7xAizuuu/quasarcord/main/quasarcord-install.ps1" | iex
```

---

## Builder depuis les sources (développeurs)

### Prérequis

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.org)
- [pnpm](https://pnpm.io) : `npm install -g pnpm`

### Commandes

```bash
# Installer les dépendances
pnpm install

# Compiler
pnpm build

# Injecter dans Discord
pnpm inject

# Retirer l'injection
pnpm uninject
```
