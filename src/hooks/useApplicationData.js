import { useReducer, useEffect } from 'react';
import axios from 'axios';

import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "reducers/application";

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
        type: SET_APPLICATION_DATA,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      });
    })
      .catch((err) => console.log(err));

    webSocketConnection();
  }, []); // empty array for useEffect dependency. Ensures the promise is only done on-load/once 

  const setDay = day => dispatch({ type: SET_DAY, day }); //uses reducer function to send an object with the needed action type and new day values

  const webSocketConnection = () => {
    const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);  
    ws.addEventListener('message', (event) => { //listens to every message event from the websocket and dispatches an action if type is "SET_INTERVIEW" to update state
      const { type, id, interview } = JSON.parse(event.data);
      if(type === "SET_INTERVIEW") {
        dispatch({ type, id, interview });
      }
    });

    return () => ws.close();
  };

  function bookInterview(id, interview) {

    //need to use RETURN here so we return a function not the result/resolving of the function
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => { //this resolution already has the resolved promise of adding an appointment
        dispatch({ type: SET_INTERVIEW, id, interview })
      })
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
      .then(() => { //this resolution already has the resolved promise of removing an appointment
        dispatch({ type: SET_INTERVIEW, id, interview: null })
      })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}