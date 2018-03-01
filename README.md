# hacktivpress

Blogging system

| Route | HTTP | Description |
|--------|-------------|------------------|
| /auth/login | POST | Login into system |
| /auth/register | POST | Register into system |
| /articles | GET | Get all article collection |
| /articles | POST | Create new article collection |
| /articles/:id | GET | Get specific article collection |
| /articles/:id | PUT | Update specific article collection |
| /articles/:id | DELETE | Delete specific article collection |

Usage

	npm install
	npm start
	npm run dev

* Access auth api via http://localhost:3000/auth 
* Access article api via http://localhost:3000/articles