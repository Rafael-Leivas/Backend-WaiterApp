# Project Setup Guide

## Running the Project in Development Mode

### 1. Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```

### 2. Install Dependencies
Make sure you have [Yarn](https://yarnpkg.com/) installed, then run:
```sh
yarn install
```

### 3. Set Up the Database
Ensure you have [Docker](https://www.docker.com/) installed to run the database locally.

#### Run MongoDB Container
```sh
docker run --name mongo -p 27017:27017 -d mongo
```
This command will:
- Pull the latest MongoDB image (if not already available)
- Start a MongoDB container named `mongo`
- Bind MongoDB's default port `27017` to the host machine

### 4. Start the Project
Run the development server:
```sh
yarn dev
```

### 5. Verify Setup
Check if the application is running correctly by visiting:
```
http://localhost:<your-port>
```

### Additional Commands
- **Stop MongoDB Container:**
  ```sh
  docker stop mongo
  ```
- **Remove MongoDB Container:**
  ```sh
  docker rm mongo
  ```
- **Restart MongoDB Container:**
  ```sh
  docker start mongo
  ```

---
Now you're all set! 🚀