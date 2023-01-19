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
Initial View
!["Initial View"](https://github.com/JonixB/scheduler/blob/master/docs/Initial.png?raw=true)
WebSocket application
https://user-images.githubusercontent.com/113629390/213374138-e3ccf456-40c4-439e-9367-c1fc5ee09e08.mov
Short video for adding an appointment
[Adding.webm](https://user-images.githubusercontent.com/113629390/213372305-f51fd811-122f-4443-b3fd-c2b86e85b4f7.webm)
Short video for editing an appointment
[Editing.webm](https://user-images.githubusercontent.com/113629390/213372331-9379a875-812a-4e83-af00-73cd4efe30af.webm)
Short video for deleting an appointment
[Deleting.webm](https://user-images.githubusercontent.com/113629390/213372361-d60f309c-3b61-46b3-aac7-ebb6bb088205.webm)
How it looks when there is an error with the API
[ErrorTest.webm](https://user-images.githubusercontent.com/113629390/213372407-7228fedc-80fd-459f-b26f-de936fb51928.webm)
A full video demonstration of the features
[FullDemo.webm](https://user-images.githubusercontent.com/113629390/213372439-01f31215-bab3-4527-906e-e17286e4c8fe.webm)

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
