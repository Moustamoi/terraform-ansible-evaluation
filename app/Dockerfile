# Utilise l'image Python 3.11.14 basée sur Alpine
FROM python:3.11.14-alpine3.23

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Installe les dépendances nécessaires pour Alpine (si besoin)
# Par exemple, si ton application nécessite des bibliothèques système :
# RUN apk add --no-cache gcc musl-dev libffi-dev openssl-dev

# Copie le fichier des dépendances Python
COPY requirements.txt .

# Installe les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste de l'application
COPY . .

# Expose le port utilisé par Flask
EXPOSE 5000

# Commande pour lancer l'application
CMD ["python", "app.py"]
