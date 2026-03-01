let name = localStorage.getItem("studentName");
let mark = parseInt(localStorage.getItem("mark12"));
let group = localStorage.getItem("group");
let maxFee = parseInt(localStorage.getItem("maxFee"));

document.getElementById("greet").innerText =
  "Hi " + name + " 👋";

let selected = null;

for (let c of colleges) {
  let fee = c.fees[group];

  if (mark >= 90) fee *= 0.8;
  else if (mark >= 80) fee *= 0.9;

  if (fee <= maxFee) {
    selected = { c, fee: Math.round(fee) };
    break;
  }
}

if (selected) {
  college.innerText = selected.c.name;
  fees.innerText = selected.fee;
  location.innerText = selected.c.location;
  spec.innerText = selected.c.spec;
} else {
  college.innerText = "No college found";
  fees.innerText = "-";
  location.innerText = "-";
  spec.innerText = "Increase fee limit";
}
