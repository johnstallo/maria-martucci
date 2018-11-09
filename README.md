# maria-martucci

## Setup
``` bash
# clone source repo
git clone https://github.com/johnstallo/maria-martucci.git

# install ZEIT's Now command
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
## Update Prod
```bash
# View deployments
now ls

# Update alias
now alias my-deployment-123.now.sh mariamartucci.com

# (optional) Scale min 2, max 4 instances
now scale my-deployment-123.now.sh 2 4
```