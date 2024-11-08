# Marvel Series Viewer

This project is a Vue application that allows users to explore Marvel series, save them as favorites, and access their viewing history.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [API Keys Configuration](#api-keys-configuration)
- [Starting the Application](#starting-the-application)
- [Usage](#usage)
- [License](#license)

---

## Requirements

1. **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (version 14 or higher).
2. **Marvel API Key**: You will need a Marvel API key to query its data.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/marvel-series-viewer.git
   cd marvel-series-viewer.
2. **Clave de API de Marvel**: Necesitarás una clave de API de Marvel para poder consultar sus datos.

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/marvel-series-viewer.git
   cd marvel-series-viewer

2. **Install the dependencies**:
    ```bash
    npm install

## API Keys Configuration

This project uses the Marvel API to fetch series data. You will need to configure both a public and private API key. Follow these steps:

### Step 1: Obtain the API Keys
1. **Marvel API Key**:
   - Register or log in at [Marvel Developer Portal](https://developer.marvel.com/).
   - Go to the "Get Started" section and follow the instructions to generate a public and private API key.
   - Keep your **API Key pública** in a safe place as you will need it to make requests to the Marvel API.

### Step 2: Configure the API Key in the Project
1. Create a  `.env` file at the root of the project (if it doesn't exist already).
2. Add the following environment variables to this file to configure your public and private Marvel API keys:

    ```env
    VUE_APP_MARVEL_API_KEY=<Tu_Clave_API_Publica>

### Step 3: Using the API Keys in the Code

Inside your application code, the API keys will be accessible via the environment variables defined in the `.env` file. You can access them using `process.env` in JavaScript:

    const marvelApiKey = process.env.VUE_APP_MARVEL_API_KEY;


## Starting the Application

Once the API keys are configured, start the application with the following command:

    ```bash
    npm run serve

The application will be available at  `http://localhost:8080` 


## Usage
- **Home:** Displays a list of Marvel series. Scroll down to automatically load more series.

- **Details:** View detailed information about a specific Marvel series.

- **History:** 

## License

This project is licensed under the MIT License.