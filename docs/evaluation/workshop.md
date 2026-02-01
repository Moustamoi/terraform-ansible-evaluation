---
published: true
type: workshop
title: Évaluation Finale – CI/CD & DevOps
short_title: Evaluation Day
description: Épreuve pratique – Industrialisation CI/CD & Automatisation
level: evaluation
duration_minutes: 330
authors:
  - Quentin Nicolle
tags:
  - evaluation
  - devops
  - cicd
  - terraform
  - ansible

sections_title:
  - 🏁 Introduction
  - 📜 Règles & contraintes
  - 🧪 Sujet officiel
  - 📦 Livrables attendus
  - 📊 Critères d’évaluation
  - 🧠 Conseils & rappels
---

---

# Bienvenue à l’évaluation finale

Cette journée correspond à l’épreuve d’évaluation des compétences :
- Intégration Continue
- Déploiement Continu
- Infrastructure as Code
- Automatisation DevOps

👉 L’objectif n’est pas de produire un projet parfait,
mais de **démontrer votre capacité à structurer, automatiser et expliquer**.

---

# Règles & contraintes

- Travail individuel
- Aucun cloud externe (Azure, AWS, GCP)
- Déploiement 100 % local
- Toute action manuelle après lancement du déploiement est interdite
- Tout ce qui n’est pas automatisé ou documenté sera pénalisé
- Aucune aide technique ne sera apportée. Vous pouvez utiliser la documentation officielle.

---

# README du projet (référence officielle)

Les consignes techniques ci-dessous sont **exactement celles du dépôt Git fourni**.  
Elles font partie intégrante du sujet d’évaluation.
***
## Consignes techniques (README du projet)

## TP Évaluation — CI/CD + Docker + IaC (Terraform) + Automatisation (Ansible)

### Objectif
Industrialiser le déploiement d’une application web **locale** :
1) Conteneuriser l’app (Dockerfile)
2) Provisionner l’infra locale avec Terraform (provider Docker)
3) Automatiser le déploiement/config avec Ansible
4) Proposer une chaîne CI/CD (GitHub Actions ou simulation locale)

> ⚠️ Ce dépôt est un **starter**. Certaines parties sont volontairement incomplètes.

### Ce qui est fourni
- Une application Flask minimale dans `app/` (**sans Dockerfile**).
- Une structure d’infrastructure : `infra/terraform/`, `infra/ansible/`.
- Un squelette de workflow GitHub Actions (CI) qui doit devenir fonctionnel.

### Pré-requis
- Docker Desktop / Docker Engine
- Terraform >= 1.5
- Ansible >= 2.15 (Windows : WSL2 recommandé)
- Git

### Consignes de rendu
- Tout doit être versionné (commits réguliers).
- Aucune étape manuelle après lancement du déploiement automatisé.
- Fournir un README final expliquant :
  - build de l’image
  - déploiement Terraform
  - configuration/déploiement Ansible
  - vérification (healthcheck)
  - limites + améliorations


### Démarrage (app en local, sans Docker)
```bash
cd app
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
## puis: curl http://localhost:5000/health
```

### À faire (checklist)
#### 1) Docker
- [ ] Créer `app/Dockerfile`
- [ ] Ajouter un `.dockerignore`
- [ ] Build + run :
  - `docker build -t tp-app:latest app/`
  - `docker run -p 8080:5000 tp-app:latest`
- [ ] Vérifier : `curl http://localhost:8080/health`

#### 2) Terraform (local / Docker provider)
- [ ] Définir un réseau Docker
- [ ] Déployer un reverse proxy (Nginx) exposé sur `localhost:8080`
- [ ] Déployer le conteneur app sur le même réseau
- [ ] Outputs : url, noms de conteneurs, etc.

#### 3) Ansible
- [ ] Automatiser le déploiement (idempotent)
- [ ] Variables d’environnement (APP_ENV, PORT)
- [ ] Vérification post-déploiement (commande ou task)

#### 4) CI/CD (au choix)
- [ ] GitHub Actions : build image + vérif + (optionnel) déploiement
  ou
- [ ] Simulation locale documentée (script + README)

### Structure
```text
app/
infra/
  terraform/
  ansible/
.github/workflows/
docs/
```

---

# Livrables attendus

- Dépôt Git complet
- Dockerfile fonctionnel
- Fichiers Terraform exploitables
- Playbook Ansible idempotent
- README final clair et structuré

---

# Critères d’évaluation

| Élément | Pondération |
|------|-------------|
| Dockerfile | 15 % |
| Terraform | 20 % |
| Ansible | 20 % |
| Déploiement fonctionnel | 15 % |
| CI/CD | 15 % |
| Documentation | 15 % |

👉 Le barème valorise la méthode autant que le résultat.

---

# Conseils pour réussir

- Commencez par quelque chose de fonctionnel
- Automatisez avant d’optimiser
- Documentez au fur et à mesure
- Justifiez vos choix techniques dans le README

⚠️ Un projet simple mais propre vaut mieux
qu’un projet ambitieux inachevé.