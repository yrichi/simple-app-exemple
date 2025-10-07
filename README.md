# Example Project: Simple App

Petit exemple destiné à tester le déployer.

## Stack
- `docker-compose.yml` : service `web` qui construit l’image locale.
- `Dockerfile` : app Node.js (Express) écoutant sur le port 8080.
- `package.json` : dépendance `express`.
- `server.js` : route `/` et healthcheck `/healthz`.

## Lancer manuellement
```bash
docker compose up --build
# puis http://localhost:8080/
```

Pour l’intégration avec `deploy-project.sh`, il suffit de pointer ce repo sur un sous-domaine. Le healthcheck peut cibler `https://sub.domain/healthz`.
