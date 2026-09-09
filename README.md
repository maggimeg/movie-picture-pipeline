# Full-Stack CI/CD Final Submission

This package implements the requested GitHub Actions CI/CD structure for a Node.js frontend/backend application and Kubernetes deployment.

## Workflows
- `.github/workflows/frontend-ci.yaml` — PR CI
- `.github/workflows/backend-ci.yaml` — PR CI
- `.github/workflows/frontend-cd.yaml` — main-branch CD
- `.github/workflows/backend-cd.yaml` — main-branch CD

## Required GitHub configuration

Create these **GitHub Actions Secrets** (do not place credentials in workflow files):
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `ECR_REGISTRY`
- `FRONTEND_ECR_REPOSITORY`
- `BACKEND_ECR_REPOSITORY`
- `EKS_CLUSTER_NAME`

Create this repository variable:
- `REACT_APP_MOVIE_API_URL` — the public/staging backend API URL used by the frontend build.

The workflows configure AWS credentials from GitHub Secrets and use ECR/EKS. No AWS credential values are stored in the repository.

## Local verification

### Frontend
```bash
cd frontend
npm install
npm run lint
npm test
npm run build
```

### Backend
```bash
cd backend
npm install
npm run lint
npm test
npm run build
```

### Docker
```bash
docker build -t movie-frontend ./frontend
docker build -t movie-backend ./backend
```

## Kubernetes

The manifests in `k8s/` use the ECR image names supplied by the CD workflows. Update the image placeholders if your repository names differ.

Apply:
```bash
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml
kubectl rollout status deployment/backend
kubectl rollout status deployment/frontend
```

The frontend calls the backend through `REACT_APP_MOVIE_API_URL`.

## Important
This is a clean CI/CD-ready reference implementation. Before submitting against an existing application, merge the four workflow files and Kubernetes manifests into the provided application repository and adjust only the image/repository names, Kubernetes namespace/deployment names, and frontend/backend paths if your existing project uses different names.
