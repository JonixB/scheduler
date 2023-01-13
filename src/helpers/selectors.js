export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(stateDay => stateDay.name === day)
  const result = [];

  if (filteredDays.length < 1) {
    return result;
  }

  if (state.days.length < 1) {
    return result;
  }

  //loops through the appointment array in the filteredday and matches the id in appointment object
  for (let x = 0; x < filteredDays[0].appointments.length; x++) {
    if ((filteredDays[0].appointments[x]) in state.appointments) {
      result.push(state.appointments[filteredDays[0].appointments[x]]);
    }
  }
  return result;
}