const petTypes = ["DOG", "CAT", "HORSE", "GOAT", "COW", "PARROT", "SPARROW", "RABBIT"]
let selectedPets = []

function createPetOptions() {
  const petOptions = document.getElementById("petOptions")
  petTypes.forEach((pet) => {
    const option = document.createElement("div")
    option.className = "pet-option"
    option.textContent = pet
    option.onclick = () => togglePetSelection(pet, option)
    petOptions.appendChild(option)
  })
}

function togglePetSelection(pet, element) {
  if (selectedPets.includes(pet)) {
    selectedPets = selectedPets.filter((p) => p !== pet)
    element.classList.remove("selected")
  } else if (selectedPets.length < 3) {
    selectedPets.push(pet)
    element.classList.add("selected")
  } else {
    alert("You can only select up to 3 pets.")
  }
}

function startSimulation() {
  if (selectedPets.length === 0) {
    alert("Please select at least one pet.")
    return
  }
  document.getElementById("petSelection").style.display = "none"
  document.getElementById("petSimulator").style.display = "block"
  initializePets()
}

function initializePets() {
  const petsContainer = document.getElementById("pets")
  selectedPets.forEach((petType) => {
    const pet = new VirtualPet(petType)
    petsContainer.appendChild(pet.element)
  })
}

class VirtualPet {
  constructor(type) {
    this.type = type
    this.hunger = 50
    this.happiness = 50
    this.energy = 50
    this.isSleeping = false

    this.element = this.createPetElement()
    this.updateDisplay()
    this.startLifeCycle()
  }

  createPetElement() {
    const petElement = document.createElement("div")
    petElement.className = "pet"
    petElement.innerHTML = `
            <div class="pet-image" style="background-image: url('https://via.placeholder.com/100x100?text=${this.type}')"></div>
            <h3>${this.type}</h3>
            <div class="pet-attributes">
                <div class="attribute">
                    <label>Hunger:</label>
                    <progress class="hunger" value="${this.hunger}" max="100"></progress>
                </div>
                <div class="attribute">
                    <label>Happiness:</label>
                    <progress class="happiness" value="${this.happiness}" max="100"></progress>
                </div>
                <div class="attribute">
                    <label>Energy:</label>
                    <progress class="energy" value="${this.energy}" max="100"></progress>
                </div>
            </div>
            <div class="pet-actions">
                <button onclick="this.closest('.pet').__pet.feed()">Feed</button>
                <button onclick="this.closest('.pet').__pet.play()">Play</button>
                <button class="sleepButton" onclick="this.closest('.pet').__pet.toggleSleep()">Sleep</button>
            </div>
        `
    petElement.__pet = this
    return petElement
  }

  updateDisplay() {
    const hungerBar = this.element.querySelector(".hunger")
    const happinessBar = this.element.querySelector(".happiness")
    const energyBar = this.element.querySelector(".energy")

    hungerBar.value = this.hunger
    happinessBar.value = this.happiness
    energyBar.value = this.energy

    this.element.classList.remove("happy", "sad", "sleeping")
    if (this.isSleeping) {
      this.element.classList.add("sleeping")
    } else if (this.happiness > 70) {
      this.element.classList.add("happy")
    } else if (this.happiness < 30) {
      this.element.classList.add("sad")
    }

    const sleepButton = this.element.querySelector(".sleepButton")
    sleepButton.textContent = this.isSleeping ? "Wake Up" : "Sleep"
  }

  feed() {
    if (!this.isSleeping) {
      this.hunger = Math.max(0, this.hunger - 20)
      this.happiness += 5
      this.energy += 5
      this.updateDisplay()
    }
  }

  play() {
    if (!this.isSleeping) {
      this.happiness = Math.min(100, this.happiness + 20)
      this.hunger += 10
      this.energy -= 15
      this.updateDisplay()
    }
  }

  toggleSleep() {
    this.isSleeping = !this.isSleeping
    if (this.isSleeping) {
      this.energy = Math.min(100, this.energy + 30)
    }
    this.updateDisplay()
  }

  startLifeCycle() {
    setInterval(() => {
      if (!this.isSleeping) {
        this.hunger = Math.min(100, this.hunger + 2)
        this.happiness = Math.max(0, this.happiness - 1)
        this.energy = Math.max(0, this.energy - 1)
      } else {
        this.energy = Math.min(100, this.energy + 2)
      }
      this.updateDisplay()
    }, 5000) // Update every 5 seconds
  }
}

function feedAllPets() {
  document.querySelectorAll(".pet").forEach((petElement) => {
    petElement.__pet.feed()
  })
}

function playWithAllPets() {
  document.querySelectorAll(".pet").forEach((petElement) => {
    petElement.__pet.play()
  })
}

function toggleSleepAllPets() {
  document.querySelectorAll(".pet").forEach((petElement) => {
    petElement.__pet.toggleSleep()
  })
}

function logout() {
  localStorage.removeItem("currentUser")
  window.location.href = "index.html"
}

// Initialize pet options and user greeting when the page loads
window.onload = () => {
  const currentUser = localStorage.getItem("currentUser")
  if (!currentUser) {
    window.location.href = "index.html"
  } else {
    document.getElementById("userGreeting").textContent = `Hi, ${currentUser}`
    createPetOptions()
  }
}

