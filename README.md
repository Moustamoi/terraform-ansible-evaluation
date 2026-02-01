# TP Évaluation — CI/CD + Docker + IaC (Terraform) + Automatisation (Ansible)

## Objectif
Industrialiser le déploiement d’une application web **locale** :
1) Conteneuriser l’app (Dockerfile)
2) Provisionner l’infra locale avec Terraform (provider Docker)
3) Automatiser le déploiement/config avec Ansible
4) Proposer une chaîne CI/CD (GitHub Actions ou simulation locale)

> ⚠️ Ce dépôt est un **starter**. Certaines parties sont volontairement incomplètes.

## Ce qui est fourni
- Une application Flask minimale dans `app/` (**sans Dockerfile**).
- Une structure d’infrastructure : `infra/terraform/`, `infra/ansible/`.
- Un squelette de workflow GitHub Actions (CI) qui doit devenir fonctionnel.

## Pré-requis
- Docker Desktop / Docker Engine
- Terraform >= 1.5
- Ansible >= 2.15 (Windows : WSL2 recommandé)
- Git

## Consignes de rendu
- Tout doit être versionné (commits réguliers).
- Aucune étape manuelle après lancement du déploiement automatisé.
- Fournir un README final expliquant :
  - build de l’image
  - déploiement Terraform
  - configuration/déploiement Ansible
  - vérification (healthcheck)
  - limites + améliorations


## Démarrage (app en local, sans Docker)
```bash
cd app
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
# puis: curl http://localhost:5000/health
```

## À faire (checklist)
### 1) Docker
- [ ] Créer `app/Dockerfile`
- [ ] Ajouter un `.dockerignore`
- [ ] Build + run :
  - `docker build -t tp-app:latest app/`
  - `docker run -p 8080:5000 tp-app:latest`
- [ ] Vérifier : `curl http://localhost:8080/health`

### 2) Terraform (local / Docker provider)
- [ ] Définir un réseau Docker
- [ ] Déployer un reverse proxy (Nginx) exposé sur `localhost:8080`
- [ ] Déployer le conteneur app sur le même réseau
- [ ] Outputs : url, noms de conteneurs, etc.

### 3) Ansible
- [ ] Automatiser le déploiement (idempotent)
- [ ] Variables d’environnement (APP_ENV, PORT)
- [ ] Vérification post-déploiement (commande ou task)

### 4) CI/CD (au choix)
- [ ] GitHub Actions : build image + vérif + (optionnel) déploiement
  ou
- [ ] Simulation locale documentée (script + README)

## Structure
```text
app/
infra/
  terraform/
  ansible/
.github/workflows/
docs/
```
