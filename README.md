# Plural API

In order to correctly initialize the Strapi application, you need to perform the following steps: 

1. Clone this repository.
2. Create a PostgreSQL database.
3. Run the following command to install the dependencies:
	
	> yarn install
	
4. Configure the development server. The proper way to do this is by setting a .env file in the root directory of the application, containing the following variables:
    
    ENV VARIABLE NAME   |   EXAMPLE VALUE
    --|--
    DEVELOPMENT_DATABASE_HOST | 127.0.0.1
    DEVELOPMENT_DATABASE_PORT | 5432
    DEVELOPMENT_DATABASE_NAME | database_name
    DEVELOPMENT_DATABASE_USER | database_user
    DEVELOPMENT_DATABASE_PASSWORD | database_user_password
    
5. Run the following command to build the /admin page:

	> yarn build

6. Finally, run one of the following commands in the root directory to start the server:

	> yarn start
	
	or

	> yarn develop 

