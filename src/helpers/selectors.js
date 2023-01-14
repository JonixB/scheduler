export function getAppointmentsForDay(state, day) {

  if (!state.days.find(stateDay => stateDay.name === day)) {
    return [];
  }

  const filteredDay = state.days.find(stateDay => stateDay.name === day)

  if (state.days.length < 1) {
    return [];
  }

  const result = filteredDay.appointments.map((appointment) => {
    if (appointment in state.appointments) {
      return state.appointments[appointment];
    }
  });
  return result;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return { student: interview.student, interviewer: state.interviewers[interview.interviewer] }
}