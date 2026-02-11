/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const state = {};
state.freelancers = [];

/*returns a freelancer object
with a randomly generated constants.*/
const createFreelancer = () => {
  //pick random name
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
  //pick random occupation form OCCUPATIONS
  const randomOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  //generate random rate using PRICE_Range
  const randomRate =
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min;
  //returns { name, occupation, rate }
  return {
    name: randomName,
    occupation: randomOccupation,
    rate: randomRate,
  };
};

//runs loop for freelancers
for (let i = 0; i < NUM_FREELANCERS; i++) {
  state.freelancers.push(createFreelancer());
}

const getAverageRate = (freelancers) => {
  //takes an array and will return a number.
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total = total + freelancers[i].rate;
  }
  return total / freelancers.length;
};

const createFreelancerRow = (freelancer) => {
  const { name, occupation, rate } = freelancer;
  const row = document.createElement("tr");

  const values = [name, occupation, `$${rate.toFixed(2)}`];
  for (let i = 0; i < values.length; i++) {
    const td = document.createElement("td");
    td.textContent = values[i];
    row.append(td);
  }
  return row;
};

const renderFreelancers = (tbody) => {
  tbody.innerHTML = "";
  for (let i = 0; i < state.freelancers.length; i++) {
    tbody.append(createFreelancerRow(state.freelancers[i]));
  }
};

const render = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Freelancer Forum";
  app.append(title);
  const averageRate = getAverageRate(state.freelancers);
  const average = document.createElement("p");
  average.textContent = `The average rate is $${averageRate.toFixed(2)}`;
  app.append(average);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["NAME", "OCCUPATION", "RATE"];
  for (let i = 0; i < headers.length; i++) {
    const th = document.createElement("th");
    th.textContent = headers[i];
    headerRow.append(th);
  }
  const tbody = document.createElement("tbody");

  thead.append(headerRow);
  table.append(thead);
  table.append(tbody);
  app.append(table);
  renderFreelancers(tbody);
};

render();
