## About The Project

This project is a simple yet interactive web application that combines a personal portfolio with a real-time weather dashboard of my current town. The portfolio section showcases details about me—my background, education, and interests—while the weather section dynamically fetches and displays current weather information using a public weather API.

The app provides an engaging user experience by:

Displaying the temperature, location, and current weather condition.

Showing relevant weather images (cold, mild, sunny) based on temperature ranges.

Allowing users to toggle between Celsius and Fahrenheit for temperature readings.

Maintaining a clean, modern interface using React + TailwindCSS for styling and responsiveness.

This project demonstrates my ability to integrate API data, manage React states and hooks, and design intuitive user interfaces. It also highlights how real-world data can be presented in a simple, user-friendly way.


## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)
- Internet connection (for fetching live weather data)

### Built With

- React + TypeScript
- Vite
- TailwindCSS
- Axios (for API requests)
- React Router DOM

### Installation & Usage 

_Below is an example of how you can instruct your audience on installing and setting up your app.


1. Clone the repo
   ```sh
   git clone https://github.com/SridharVadla45/my-profile-weather.git
   ```
2. Change Directory to Root
   ```sh 
   cd my-profile-weather
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

4. Run the Application Server on port(default)
   ```sh
    npm run dev
   ```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.


## ApiReference for WeatherData
https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m
