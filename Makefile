build:
	docker build -t pomoduck:v0.1.0-prod -f Dockerfile .

tag:
	docker tag pomoduck:v0.1.0-prod  registry.digitalocean.com/pomoduck/pomoduck:v0.1.0-prod

run: 
	docker run --rm -d  -p 80:80/tcp pomoduck:v0.1.0-prod

push:
	docker push registry.digitalocean.com/pomoduck/pomoduck:v0.1.0-prod