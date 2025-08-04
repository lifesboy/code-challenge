# Problem 5: A Crude Server
## Requirements:
- Docker, Node
- Working dir at [root of code-challenge project](../../readme.md)

## Run database:
```
docker compose -f deployment/docker-compose.yml up --force-recreate
```
## Run app server:
```
npm run problem5:clean:test:run
```