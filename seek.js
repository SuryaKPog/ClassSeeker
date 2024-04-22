const classes = [
    // Day Order 1, Lunch Hour 11:35-12:25
    { id: "1001", floor: 10, schedule: { 1: [695, 745] } },
    { id: "1102", floor: 11, schedule: { 1: [695, 745] } },
    { id: "1203", floor: 12, schedule: { 1: [695, 745] } },
  
    // Day Order 2, Lunch Hour 11:35-12:25
    { id: "1004", floor: 10, schedule: { 2: [695, 745] } },
    { id: "1105", floor: 11, schedule: { 2: [695, 745] } },
    { id: "1201", floor: 12, schedule: { 2: [695, 745] } },
  
    // Day Order 3, Lunch Hour 11:35-12:25
    { id: "1002", floor: 10, schedule: { 3: [695, 745] } },
    { id: "1103", floor: 11, schedule: { 3: [695, 745] } },
    { id: "1205", floor: 12, schedule: { 3: [695, 745] } },
  
    // Day Order 4, Lunch Hour 11:35-12:25
    { id: "1005", floor: 10, schedule: { 4: [695, 745] } },
    { id: "1101", floor: 11, schedule: { 4: [695, 745] } },
    { id: "1204", floor: 12, schedule: { 4: [695, 745] } },
  
    // Day Order 5, Lunch Hour 11:35-12:25
    { id: "1003", floor: 10, schedule: { 5: [695, 745] } },
    { id: "1104", floor: 11, schedule: { 5: [695, 745] } },
    { id: "1202", floor: 12, schedule: { 5: [695, 745] } },
  
    // Day Order 1, Lunch Hour 12:30-1:20
    { id: "1007", floor: 10, schedule: { 1: [750, 800] } },
    { id: "1108", floor: 11, schedule: { 1: [750, 800] } },
    { id: "1209", floor: 12, schedule: { 1: [750, 800] } },
  
    // Day Order 2, Lunch Hour 12:30-1:20
    { id: "1009", floor: 10, schedule: { 2: [750, 800] } },
    { id: "1106", floor: 11, schedule: { 2: [750, 800] } },
    { id: "1207", floor: 12, schedule: { 2: [750, 800] } },
  
    // Day Order 3, Lunch Hour 12:30-1:20
    { id: "1011", floor: 10, schedule: { 3: [750, 800] } },
    { id: "1109", floor: 11, schedule: { 3: [750, 800] } },
    { id: "1210", floor: 12, schedule: { 3: [750, 800] } },
  
    // Day Order 4, Lunch Hour 12:30-1:20
    { id: "1012", floor: 10, schedule: { 4: [750, 800] } },
    { id: "1110", floor: 11, schedule: { 4: [750, 800] } },
    { id: "1213", floor: 12, schedule: { 4: [750, 800] } },
  
    // Day Order 5, Lunch Hour 12:30-1:20
    { id: "1013", floor: 10, schedule: { 5: [750, 800] } },
    { id: "1111", floor: 11, schedule: { 5: [750, 800] } },
    { id: "1214", floor: 12, schedule: { 5: [750, 800] } },
  ];
  
  function findFreeClasses(dayOrder, lunchHour) {
    const lunchStart = lunchHour === "1" ? 695 : 750; // 11:35 -> 695 minutes, 12:30 -> 750 minutes
    const lunchEnd = lunchHour === "1" ? 745 : 800;   // 12:25 -> 745 minutes, 1:20 -> 800 minutes
  
    const freeClasses = classes.filter((cls) => {
      const schedule = cls.schedule && cls.schedule[dayOrder];
      if (!schedule) return false; // No schedule for this day order
      const startTime = schedule[0];
      const endTime = schedule[1];
      return startTime >= lunchEnd || endTime <= lunchStart;
    });
  
    return freeClasses;
  }
  
  function findAndDisplay() {
    const dayOrder = document.getElementById("dayOrder").value;
    const lunchHour = document.getElementById("lunchHour").value;
  
    const freeClasses = findFreeClasses(dayOrder, lunchHour);
  
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = ""; // Clear previous results
  
    if (freeClasses.length === 0) {
      resultsElement.innerHTML = "No free classes found.";
    } else {
      const list = document.createElement("ul");
      freeClasses.forEach((cls) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Floor ${cls.floor}, Class ${cls.id}`;
        list.appendChild(listItem);
      });
      resultsElement.appendChild(list);
    }
  }
  
  // Event listener for the "Find Free Classes" button
  document.getElementById("findButton").addEventListener("click", findAndDisplay);
  