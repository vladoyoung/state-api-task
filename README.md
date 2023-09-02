# State management and API fetch Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can see the deployed version [here](https://vlad-state-api-task.netlify.app/) or follow the below steps to reproduce locally.

## About the task

The task was to create a simple webapp that meets the following requirements:

- Implement a "Hello World" component using your preferred UI framework e.g. react/vue or similar. 
- Add a state management library of your choice, imagining this would become a large webapp. 
- Add an input and button that allows you to type in a string and update the "hello world" text. 
- Add a table below the hello world that displays a table of dummy numeric data, populated with data from a mock data service API. We are not concerned with what the data is, only that the mock service API is built in a way that makes sense and could easily be swapped for some other data service API in a real-world situation.

I've achieved the above by extending the create-react-app boilerplate with Redux, Redux Toolkit, Redux Persist, Axios and TailwindCSS.

## How to run locally

In the project directory, you can run:

### `npm install`

Installs all the dependencies required to run the app locally.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## License

Distributed under the MIT License. See `LICENSE` for more information.