// export { storeState, changeState }

const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const initialJockValues = { hitpoints: 100, attack: 10, defense: 5, intelligence: 1 }
const initialNerdValues = { hitpoints: 100, attack: 3, defense: 6, intelligence: 10 }
const initialGothValues = { hitpoints: 100, attack: 1, defense: 8, intelligence: 4 }
const initialDramaValues = { hitpoints: 100, attack: 2, defense: 1, intelligence: 7 }
const initialCheerleaderValues = { hitpoints: 100, attack: 8, defense: 4, intelligence: 5 }

const userCharacter = storeState()
const currentState = userCharacter()
// const jock = storeState(initialJockValues)
// const nerd = storeState(initialNerdValues)
// const goth = storeState(initialGothValues)
// const drama = storeState(initialDramaValues)
// const cheerleader = storeState(initialCheerleaderValues)

const takeDamage = changeState("hitpoints")
const lowDamage = takeDamage(-10)
const lightPotion = takeDamage(10)

const strength = changeState("attack")
const stronger = strength(5)
const weaker = strength(-5)

const shield = changeState("defense")
const superDefense = shield(5)
const weakenDefense = shield(-5)

const knowledge = changeState("intelligence")
const smarter = knowledge(5)
const dumber = knowledge(-5)

// const minimalDamage = takeDamage(Attacker.Attack - Victims.Defence)

const rollDice = () => {
  Math.random() * 6;
}

const getStrong = (obj) => {
  const newCharacter = [obj](stronger)
  updateStats(newCharacter)
}
const getWeak = (obj) => {
  const newCharacter = [obj](weaker)
  updateStats(newCharacter)
}
const getSmart = (obj) => {
  const newCharacter = [obj](smarter)
  updateStats(newCharacter)
}
const getStupid = (obj) => {
  const newCharacter = [obj](dumber)
  updateStats(newCharacter)
}
const getLife = (obj) => {
  const newCharacter = [obj](lightPotion)
  updateStats(newCharacter)
}
const lessLife = (obj) => {
  const newCharacter = [obj](lowDamage)
  updateStats(newCharacter)
}
const moreDefense = (obj) => {
  const newCharacter = [obj](superDefense)
  updateStats(newCharacter)
}
const lessDefense = (obj) => {
  const newCharacter = [obj](weakenDefense)
  updateStats(newCharacter)
}

const updateStats = (obj) => {
  `Name: ${obj.name} Attack: ${obj.attack} Defense: ${obj.defense} Intelligence: ${obj.intelligence}`;
}

const doAction = (randomNum) => {
  if (randomNum === 1) {
    getStrong()
  } else if (randomNum === 2) {
    getWeak()
  } else if (randomNum === 3) {
    getSmart()
  } else if (randomNum === 4) {
    getStupid()
  } else if (randomNum === 5) {
    getLife()
  } else if (randomNum === 6) {
    lessLife()
  } else if (randomNum === 7) {
    moreDefense()
  } else if (randomNum === 8) {
    lessDefense()
  }
}
