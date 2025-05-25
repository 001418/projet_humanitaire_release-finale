# 📘 README – Git : Résolution de l'erreur GitHub LFS (fichier trop volumineux)

---

## 🎯 Objectif

Ce guide récapitule les étapes à suivre pour pousser un projet vers GitHub, tout en résolvant l'erreur `GH001` liée aux fichiers trop volumineux (>100 Mo).

---

## ⚠️ Problème rencontré

> **Erreur :**
>
> ```
> remote: error: File public/Audio/Enregistrement-long-2.mp3 is 174.90 MB; this exceeds GitHub's file size limit of 100.00 MB
> error: GH001: Large files detected.
> ```

---

## 🔧 Solution étape par étape

### 1. Supprimer le fichier trop lourd du suivi Git

```bash
# (ne supprime pas le fichier localement, juste du suivi Git)
git rm --cached public/Audio/Enregistrement-long-2.mp3
```

### 2. Ajouter le fichier au `.gitignore`

Ajoutez cette ligne dans `.gitignore` :

```txt
/public/Audio/Enregistrement-long-2.mp3
```

### 3. Committer cette correction

```bash
git add .gitignore
git commit -m "Suppression fichier mp3 trop volumineux du suivi Git"
```

### 4. Nettoyer l'historique Git (pour supprimer les anciennes traces du fichier)

```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### 5. Forcer le push de la branche nettoyée

```bash
git push --set-upstream origin main --force
```

---

## 🧪 Vérification

```bash
git log --oneline --graph --all
```

Vérifiez que le fichier `Enregistrement-long-2.mp3` n'apparait plus dans l'historique.

---

## 🛠️ Script Bash automatique (Unix/Linux)

```bash
#!/bin/bash
FILE="public/Audio/Enregistrement-long-2.mp3"

# Suppression du suivi Git sans supprimer localement
git rm --cached "$FILE"

echo "$FILE" >> .gitignore

git add .gitignore

git commit -m "Suppression fichier $FILE trop volumineux du suivi Git"

git reflog expire --expire=now --all
git gc --prune=now --aggressive

git push --set-upstream origin main --force
```

---

## 🛠️ Script PowerShell (Windows)

```powershell
$File = "public/Audio/Enregistrement-long-2.mp3"

# Supprimer du suivi Git (sans supprimer le fichier localement)
git rm --cached $File

Add-Content .gitignore "`n$File"

git add .gitignore
git commit -m "Suppression fichier $File trop volumineux du suivi Git"

git reflog expire --expire=now --all
git gc --prune=now --aggressive

git push --set-upstream origin main --force
```

---

## ✅ Résultat attendu

* Aucun fichier >100 Mo dans l'historique Git.
* Push vers GitHub réussi sans erreur GH001.

---

## 📦 Alternative à long terme

Pour gérer les fichiers lourds :

🔗 Utilisez **Git LFS** : [https://git-lfs.github.com](https://git-lfs.github.com)

---

## Auteur

**001418 / Benoît Robart**
Date : 24 mai 2025

Projet : `projet_humanitaire_release-finale`
