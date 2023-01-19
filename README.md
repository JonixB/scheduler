# Interview Scheduler
A responsive single page application that is created using react. The purpose of the project was to help build our knowledge with React, Unit Testing and E2E testing.

## Key Features
-Uses websocket so any updates is passed to all connected users in real time
-Booking an appointment which saves it into the local database using API
-Edit an existing appointment
-Delete an appointment
-Automatically updates the number of spots for the selected day
-Shows appropriate errors when unable to add/edit/delete an appointment
-It will also prevent you from saving an appointment if the student name and interviewer is not set

##Screenshots and short video demonstrations
Initial View
!["Initial View"](https://github.com/JonixB/scheduler/blob/master/docs/Initial.png?raw=true)
WebSocket application
[WebSocket.webm](https://user-images.githubusercontent.com/113629390/213371471-16c81a21-e69f-4976-a879-c5ccb1081fdb.webm)
Short video for adding an appointment
[Adding.webm](https://user-images.githubusercontent.com/113629390/213371138-5f6ae2cb-1019-4323-82b7-9ede4215be6a.webm)
Short video for editing an appointment
[Editing.webm](https://user-images.githubusercontent.com/113629390/213371280-9851b079-1181-4667-9915-eb4c7cc2910f.webm)
Short video for deleting an appointment
[Deleting.webm](https://user-images.githubusercontent.com/113629390/213371343-985d83b6-4a43-4423-9184-cf8caa256ea0.webm)
How it looks when there is an error with the API
[ErrorTest.webm](https://user-images.githubusercontent.com/113629390/213371610-e1133c72-7bc9-4ec1-89f7-b7574f060c5f.webm)
A full video demonstration of the features
[FullDemo.webm](https://user-images.githubusercontent.com/113629390/213371682-924cc1c6-07cc-4127-bdaf-22f74a78820c.webm)

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
