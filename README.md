# maria-martucci website

## Setup
``` bash
# clone source repo
git clone https://github.com/johnstallo/maria-martucci.git

# install ZEIT's Now CLI
npm install -g now
```

## Develop
```bash
cd maria-martucci
npm install
npm run dev
```

## Deploy
```bash
# Run from the root folder
now
```
## Deploy to Production
```bash
# View deployments
now ls

# Deploy to production
now --target production 

# (optional) Scale min 2, max 4 instances
now scale my-deployment-123.now.sh 2 4
```
