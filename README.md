# Interview Scheduler
A responsive single page application that is created using react. The purpose of the project was to help build our knowledge with React, Unit Testing and E2E testing.

## Key Features
- Uses websocket so any updates is passed to all connected users in real time
- Booking an appointment which saves it into the local database using API
- Edit an existing appointment
- Delete an appointment
- Automatically updates the number of spots for the selected day
- Shows appropriate errors when unable to add/edit/delete an appointment
- It will also prevent you from saving an appointment if the student name and interviewer is not set

## Screenshots and short video demonstrations
### Initial View
!["Initial View"](https://github.com/JonixB/scheduler/blob/master/docs/Initial.png?raw=true)
### WebSocket application
https://user-images.githubusercontent.com/113629390/213375088-db2d4df5-8974-43a9-ac18-f702b1c8379c.mp4

### Short video for adding an appointment
https://user-images.githubusercontent.com/113629390/213378061-a80e2d84-7a95-4f50-be0c-66c5a6454e60.mp4

### Short video for editing an appointment
https://user-images.githubusercontent.com/113629390/213378194-cf9bdd01-9e85-48af-8809-9641d5dd7c77.mp4

### Short video for deleting an appointment

https://user-images.githubusercontent.com/113629390/213378255-e4cdcf69-769c-4335-95a4-49da414bca55.mp4

How it looks when there is an error with the API
![Error](https://user-images.githubusercontent.com/113629390/213379104-db6b2505-070e-41e4-b6f8-ae7f78fafd36.png)

### A full video demonstration of the features
https://user-images.githubusercontent.com/113629390/213378536-31ac4a88-6755-4617-aa92-8177fa6fc4ff.mp4


## Dependencies and Dev Dependencies

- React
- React DOM
- Axios
- Babel
- Classnames
- Normalize.css
- Express

- Storybook
- Cypress
- Jest
- React Testing Library

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
