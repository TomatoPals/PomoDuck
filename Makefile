pomoduck-dev:
	docker build -t pomoduck:v0.1.0-dev -f build/Dockerfile.dev .
pomoduck-prod:
	docker build -t pomoduck:v0.1.0-prod -f build/Dockerfile.prod .
run-dev:
	docker run --rm -it  -p 3000:3000/tcp pomoduck:v0.1.0-dev	
