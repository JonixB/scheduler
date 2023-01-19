export const SET_DAY = "SET_DAY";
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_INTERVIEW = "SET_INTERVIEW";

const reducer = (state, action) => { //state is the current value/state while action contains what type of action to do and the new values
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.day
      }
    case SET_APPLICATION_DATA:
      return {
        ...state,
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
};

export default reducer;