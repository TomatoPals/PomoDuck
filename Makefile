build:
	docker build -t pomoduck:v0.1.0-prod -f Dockerfile .

tag:
	docker tag pomoduck:v0.1.0-prod  registry.digitalocean.com/pomoduck/pomoduck:v0.1.0-prod

push:
	docker push registry.digitalocean.com/pomoduck/pomoduck:v0.1.0-prod