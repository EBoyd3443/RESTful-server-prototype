# Docker-compose.yml format
services:
  db:
    image: mysql:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ???
      MYSQL_DATABASE: ???
      MYSQL_USER: ???
      MYSQL_PASSWORD: ??? 
    volumes:
      - ./mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  phpmyadmin:
    image: phpmyadmin/phpmyadmin:latest
    restart: always
    depends_on:
      - db
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: ???
    ports:
      - "8080:80"

## Notes
Remember to information to config.env file.