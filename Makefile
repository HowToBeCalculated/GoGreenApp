define get_container_id
$(shell docker-compose ps -q gogreenapp)
endef

status:
	docker-compose ps

stop:
	docker stop $(call get_container_id)

clean:
	docker-compose rm --stop

destroy:
	docker-compose rm --stop
	docker rmi -f $(shell docker-compose images -q)

up:
	docker build -t gogreenapp .

run:
	docker run -p 8000:8000 gogreenapp
