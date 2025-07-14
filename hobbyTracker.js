const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" },
];

//add total minutes spent entire week on hobbies
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0); //return the sum of each session.minutes with reduce
  //high-order function is used here by returning reduce()
}
//Improvement Suggestion: add an optional argument to filter by mood or hobby

//print out all unique hobbies
function uniqueHobbies(log) {
  //high-order function used here to transform log into an array of just the hobbies
  const names = log.map((entry) => entry.hobby); //create an array of hobbies
  return [...new Set(names)]; //return a Set object, which does not allow for repeats, as an array
  //this ensures that only unique hobbyies are printed
}

//filter out sessions longer than minMinutes
function longSessions(log, minMinutes) {
  return log.filter((entry) => entry.minutes > minMinutes); //high-order function used here to filter out only entries with minutes > minMinutes
}

//count total sessions with certain mood
function countMood(log, moodType) {
  return log.filter((entry) => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

//New test case
console.log("Calm sessions:", countMood(hobbyLog, "calm"));
