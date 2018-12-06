import http from "k6/http";
import { check, sleep, group } from "k6"; // Newly modified, by adding "group" here

export let options = {
  // vus: 10, // 50
  // duration: "10s"

  // Low to medium load, with stages
  // stages: [
  // { duration: "15s", target: 250 }, // Ramp up
  // { duration: "30s", target: 500 }, // Further ramp up, for 1 minute at 1000 RPS
  // { duration: "15s", target: 250 } // Ramp down
  // ]

  // High load, with stages
  stages: [
    { duration: "15s", target: 500 }, // Ramp up
    { duration: "30s", target: 1000 }, // Further ramp up, for 1 minute at 1000 RPS
    { duration: "15s", target: 500 } // Ramp down
  ]
};

// About: to test multiple GET requests at the same time
// Note: can either test 1 HTTP request, or all requests on the page
// Ref (teammate Andy's script): https://gist.github.com/AndySiamas/298fc090b478b57d13bf0dbbb4dbe7c5
export default function() {
  group("header_page", function() {
    let req, res;
    let id = getRandomInt(1, 10000000);
    req = [
      {
        method: "get",
        // url: `http://54.193.126.17:3004/artists/${id}` // Service 1
        // url: `http://54.153.126.47:3004/artists/${id}` // Service 2
        url: `http://18.144.22.249/artists/${id}` // LB (with 3 services)
      },
      {
        method: "get",
        // url: `http://54.193.126.17:3004/locations/${id}` // Service 1
        // url: `http://54.153.126.47:3004/locations/${id}` // Service 2
        url: `http://18.144.22.249/locations/${id}` // LB (with 3 services)
      }
    ];

    res = http.batch(req); // Both of my HTTP requests
    sleep(1);
  });
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

/*
  Previous/old scripts
  Note: did not use load test to specify artist IDs
*/
// export default function() {
//   // let res = http.get(`http://54.193.126.17:3004`);  // All requests, with 1 service server
//   let res = http.get(`http://18.144.22.249/`); // All requests, with load balancer (3 service servers)

//   check(res, {
//     "status was 200": r => r.status == 200,
//     "transaction time OK": r => r.timings.duration < 200
//   });
//   sleep(1);
// }
