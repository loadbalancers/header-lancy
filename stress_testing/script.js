import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  // vus: 50,
  // vus: 500,
  // vus: 1000,
  // duration: "1m"
  stages: [
    // { duration: "15s", target: 250 }, // Ramp up
    { duration: "15s", target: 500 }, // Ramp up
    { duration: "30s", target: 1000 }, // Further ramp up, for 1 minute at 1000 RPS
    { duration: "15s", target: 500 } // Ramp down
  ]
  // stages: [
  //   { duration: "30s", target: 1000 } // Further ramp up
  // ]
};

// Skipped: add second res, for location
export default function() {
  // let res = http.get("/artists/:artistID")
  let id = getRandomInt(1, 10000000);
  let res = http.get(`http://localhost:3004/artists/${id}`);
  check(res, {
    "status was 200": r => r.status == 200,
    "transaction time OK": r => r.timings.duration < 200
  });
  sleep(1);
}

// Helper function: modified, from app.jsx
// Return integers, rounded up by Math.ceil()
function getRandomInt(min, max) {
  let random1 = Math.random(); // % of times
  let random2 = Math.random(); // Use this random number, to get artist ID

  // Newly modified: replaced 0.5 with 0.2, to follow Pareto distribution
  // Note: the 20% of artists who get 80% of the traffic
  if (random1 < 0.4) {
    return Math.ceil(Math.floor((random2 / 1000) * (max * 0.2 - min)) + min);
  } else if (random1 < 0.8) {
    return Math.ceil(Math.floor(random2 * (max * 0.2 - min)) + min);
  }
  // Note: the majority of artists who get not so much traffic
  else {
    return Math.ceil(Math.floor(random2 * (max - max * 0.2)) + max * 0.2);
  }
}
