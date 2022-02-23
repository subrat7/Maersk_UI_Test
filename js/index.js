class Calender {
  calenderCards = [];
  constructor(calenderCards, container) {
    this.calenderCards = calenderCards;
    this.container = container;
  }
  // Init the content
  initialize = () => {
    this.cardCointainer = document.createElement("div");
    this.buttonContainer = document.createElement("div");
    this.component = document.createElement("div");
    this.cardCointainer.className = "card-container";
    this.buttonContainer.className = "button-container";
    this.component.className = "component";
    this.createButtons();
    this.htmlRender();
  };

  // Create button in HTML

  createButtons = () => {
    const shuffleButton = document.createElement("button");
    const sortButton = document.createElement("button");
    shuffleButton.onclick = this.shuffle;
    sortButton.onclick = this.sort;
    shuffleButton.textContent = "SUFFLE";
    sortButton.textContent = "SORT";
    this.buttonContainer.appendChild(shuffleButton);
    this.buttonContainer.appendChild(sortButton);
    this.component.appendChild(this.buttonContainer);
  };

  // Render in HTML

  htmlRender = () => {
    let calenderCardsHTML = "";
    for (let card of this.calenderCards) {
      calenderCardsHTML += `<div class="card ${card.background}">${
        card.id + 1
      }</div>`;
    }
    this.cardCointainer.innerHTML = calenderCardsHTML;
    this.component.appendChild(this.cardCointainer);
    this.container.appendChild(this.component);
  };

  // Logic to  suffle the Array

  randomData = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // After suffle the array rerender the data

  reRender = () => {
    for (let i = 0; i < this.calenderCards.length; i += 1) {
      document.getElementsByClassName("card")[i].innerText =
        this.calenderCards[i].id + 1;
      document.getElementsByClassName("card")[i].className =
        "card " + this.calenderCards[i].background;
    }
  };
  shuffle = () => {
    this.randomData(this.calenderCards);
    this.reRender();
  };
  sort = () => {
    this.calenderCards.sort((a, b) => {
      return a.id - b.id; // to sort ascending order
    });
    this.reRender();
  };
}

// Static Data

let calenderCards = [
  { id: 0, background: "light-blue" },
  { id: 1, background: "dark-blue" },
  { id: 2, background: "grey-blue" },
  { id: 3, background: "dark-blue" },
  { id: 4, background: "grey-blue" },
  { id: 5, background: "grey" },
  { id: 6, background: "grey" },
  { id: 7, background: "light-blue" },
  { id: 8, background: "grey-blue" },
];
let container = document.createElement("div");
document.body.appendChild(container);
let cube = new Calender(calenderCards, container);
cube.initialize();

let elementDivs = document.createElement("div");
elementDivs.className = "elementDivs-container";
document.body.appendChild(elementDivs);
