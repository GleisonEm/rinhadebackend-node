up:
	docker-compose -f composeConfigAll.yml up -d
up2:
	docker-compose up
up3:
	docker-compose -f docker-compose2.yml up -d
build:
	docker build . -t gleisin/node-web-app
buildUp:
	docker build . -t gleisin/node-web-app
	docker-compose -f composeConfigAll.yml up
