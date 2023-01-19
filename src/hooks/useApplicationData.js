import { useReducer, useEffect } from 'react';
import axios from 'axios';

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

function reducer(state, action) { //state is the current value/state while action contains what type of action to do and the new values
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.day
      }
    case SET_APPLICATION_DATA:
      return { ...state,  
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }
    case SET_INTERVIEW: {
      const spotCounter = (currentDay, appointments) => {
        let spots = 0;
        for (const id of currentDay.appointments) {
          if (!appointments[id].interview) {
            spots++;
          }
        }
        return spots;
      }
    
      const spotUpdate = (state, appointments) => {
        const filteredDay = state.days.findIndex(stateDay => stateDay.name === state.day) //finds the current index of the selected day to use as selector to find the right day to update
        const currentDay = state.days[filteredDay]; //makes sure we have the right selected day to update using index
    
        const spots = spotCounter(currentDay, appointments); //passing in appointments gives the current updated list of all appointments, currentDay gives access to the array of appointments that day
    
        const updatedDays = [...state.days]; //creats copy of all the current days
        const newDayObj = { ...currentDay, spots }; //new object with new spots count
        updatedDays[filteredDay] = newDayObj; //update selected day with the new count value
    
        return updatedDays;
      };

      const appointment = {
        ...state.appointments[action.id],
        interview: action.interview ? { ...action.interview } : null //sets the interview key to have the value of the action.interview if it's not empty, otherwise set to null
      }

      const appointments = {
        ...state.appointments,
        [action.id]: appointment
      }
      return {
        ...state,
        days: spotUpdate(state, appointments),
        appointments
      }
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData() {
  const initialState = {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //multiple async calls to the API to grab the necessarry data 
  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      dispatch({
        type : SET_APPLICATION_DATA,
        days : all[0].data,
        appointments : all[1].data,
        interviewers : all[2].data
      });
    })
      .catch((err) => console.log(err));
  }, []); // empty array for useEffect dependency. Ensures the promise is only done on-load/once 

  const setDay = day => dispatch({ type: SET_DAY, day }); //uses reducer function to send an object with the needed action type and new day values

  function bookInterview(id, interview) {

    //need to use RETURN here so we return a function not the result/resolving of the function
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview })
      })
      .catch((err) => console.log(err));
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview: null })
      })
      .catch((err) => console.log(err));
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}