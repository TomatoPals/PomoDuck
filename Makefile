docker-dev:
	docker build -t pomoduck:v0.1.0-dev -f build/Dockerfile.dev .
docker-prod:
	docker build -t pomoduck:v0.1.0-prod -f build/Dockerfile.prod .
	