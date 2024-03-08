# Team Alabama A&M University - HBCU Battle of the Brains

## Backend Documentation
This folder contains explorations of how our team uses Artificial Intelligence for our solution, TouchdownAI. It contains models we trained to demonstrate functionality for TouchdownAI, with each subfolder accompanied by a README outlining the specific features.

---


##*Setup and Installation Instructions*
First, you need to clone the repository into your local machine

```sh
git clone https://github.com/moyinoluwa-10/aamu-botb-2024.git
```
Then, you need to navigate to the server folder.

```sh
cd server
```

Then, you need to install the dependencies.

```sh
npm install
```

Then,  you need to create a ```.env``` in root folder and update ```.env``` with [example.env](./example.env)

```sh
touch .env
```

Finally, you need to run the server.

```sh
npm run start
```

---
### Endpoints
You need to run the server concurrently with the client to make API calls from the frontend. This is necessary to be able to sign up and sign in if you are running the program on your local system. 