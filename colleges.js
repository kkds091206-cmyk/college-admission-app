let colleges = [];

// Base colleges
colleges.push(
  {
    name: "Nehru Arts and Science College",
    location: "Coimbatore",
    spec: "NAAC A+ | Good Placements",
    fees: { BSc: 25000, BBA: 28000, BCom: 26000, BA: 22000 }
  },
  {
    name: "Government Arts College",
    location: "Salem",
    spec: "Government | Low Fees",
    fees: { BSc: 18000, BBA: 20000, BCom: 19000, BA: 15000 }
  }
);

// Auto-generate colleges up to 200
for (let i = 3; i <= 200; i++) {
  colleges.push({
    name: "Arts and Science College " + i,
    location: "District " + (i % 10 + 1),
    spec: "Affiliated | Skill Based Programs",
    fees: {
      BSc: 20000 + i * 5,
      BBA: 22000 + i * 5,
      BCom: 21000 + i * 5,
      BA: 18000 + i * 5
    }
  });
}
