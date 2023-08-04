# Weather Website

This project is a Simple API built using Node.js, Express.js, and HBS (Handlebars) that allows users to retrieve weather information based on location.

## Features

- Retrieve weather information for a specific location using the API.
- Utilizes Node.js and Express.js to handle incoming requests.
- Uses HBS (Handlebars) to render dynamic HTML templates for displaying weather data.

## Installation

1. Clone the repository: `git clone https://github.com/ZiadAhmedShawky/Weather-Website.git`
2. Navigate to the project directory: `cd weather-api`
3. Install dependencies: `npm install`

## Usage

1. Run the server: `npm start`
2. Access the API in your browser or API testing tool: `http://localhost:3000`

## API Endpoint

- **GET /weather** - Retrieve weather information for a specific location.
  - Query Parameter: `location` (e.g., `?location=cityname`)
  - Response: JSON data containing weather details.

## Technologies Used

- Node.js
- Express.js
- HBS (Handlebars)

## How to Use

1. Run the server and ensure it's up and running.
2. Make a GET request to the `/weather` endpoint with the desired `location` query parameter.
3. Receive a JSON response with weather information for the provided location.

## Contributing

Contributions are welcome! Please create an issue or pull request for any improvements or features you'd like to add.

## License

This project is licensed under the [MIT License](LICENSE).
