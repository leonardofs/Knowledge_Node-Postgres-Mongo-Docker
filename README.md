
##  CRUD com Node, Express e Postgres sobre containers usando Docker e Docker Compose.

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Setup

Edit enviroment variables inside .env file in this format (set the credentials as you wish):

        DB_NAME=node_crud
        DB_USER=postgres
        DB_PW=postgres
        DB_PORT=5432 // Optional - defaults to 5432

        

Run `docker-compose build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* install all dependencies from the package.json locally
* expose port 3000 to the host
* instruct the container to execute `npm start` on start up.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).

