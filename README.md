# Shopping Backend Routes - ORM ecommerce site
> Module 13 - Object-Relational Mapping (ORM) Challenge: E-commerce Back End
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the backend for an ecommerce web application, built using Express.js and Sequelize ORM to interact with a MySQL database.

## Table of Contents
  * [Demo](#demo)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)

## Demo
### [Click here to view the VIDEO DEMO ➡️](https://drive.google.com/file/d/1IWrnTNqohmXfgn_pycZMfVazqVz3GVJ_/view?pli=1)

https://github.com/CypherNyx/shopping-backend-orm/assets/133705303/0a83c6dd-2ad6-4a11-bace-b9f77a96d9c0

## Description

The database uses Sequelize as an ORM to interact with a MySQL database. Models and associations are defined to represent the database structure.

The API provides routes for managing and accessing data for products, categories, and tags.

The routes implement full CRUD functionality using REST conventions:

- GET all and single items
- POST to create new items
- PUT to update existing items by id
- DELETE to remove items by id

 ## Installation
  
1. Clone this GitHub repository to your local machine. <br> 
```sh
git clone https://github.com/CypherNyx/shopping-backend-orm.git
```
2. Open a terminal or command prompt and navigate to the cloned repository's directory.
3. Run ```npm i``` to install the necessary dependencies.
4. Configure .env with your DB credentials
5. Run ```node seeds/index.js``` to seed the DB (optional)
6. Run npm start to start the server on localhost

### Technologies: 
 - Node.js
 - Express
 - Sequelize ORM
 - MySQL
 - dotenv
 - mysql2


<br>

## Usage
The API can be tested locally using a REST client like Insomnia or Postman. The routes can be accessed from the defined base URL.

Some key routes include:

- GET /api/products
- GET /api/categories
- POST /api/products
- PUT /api/categories/1
- DELETE /api/tags/1
- Seed data is provided to prepopulate the database with products, categories and tags.

<br>

## Contributing
Pull requests are welcome. Please open an issue first to discuss any proposed changes or additions.
<br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  https://opensource.org/licenses/MIT <br> 
  This project is open source and available under the MIT License.

<br>

  ## Questions
  GitHub [CypherNyx](https://github.com/CypherNyx)<br>
  Email: dguido.dev@gmail.com




