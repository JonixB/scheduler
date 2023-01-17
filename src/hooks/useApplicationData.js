import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

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

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //need to use RETURN here so we return a function not the result/resolving of the function
    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        const days = spotUpdate(state, appointments);
        setState({ ...state, appointments, days })
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const days = spotUpdate(state, appointments);
        setState({ ...state, days })
    })
  }

  //multiple async calls to the API to grab the necessarry
  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []); // empty array for useEffect dependency. Ensures the promise is only done on-load/once 

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}