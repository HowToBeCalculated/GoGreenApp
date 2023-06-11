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
	docker-compose up -d
	sleep 5
	docker-compose ps

run:
	docker exec -it $(call get_container_id) python app.py

test:
	docker exec -it $(call get_container_id) pytest
