export { storeState, changeState }

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

const jock = storeState(initialJockValues)
const nerd = storeState(initialNerdValues)
const goth = storeState(initialGothValues)
const drama = storeState(initialDramaValues)
const cheerleader = storeState(initialCheerleaderValues)


const takeDamage = changeState("hitpoints")
const superDamage = takeDamage(-30)
const moderateDamage = takeDamage(-20)
const lowDamage = takeDamage(-10)
const lightPotion = takeDamage(10)
const medPotion = takeDamage(20)
const strongPotion = takeDamage(30)

const strength = changeState("attack")
const stronger = strength(5)
const weaker = strength(-5)

const shield = changeState("defense")
const superDefense = shield(5)
const weakenDefense = shield(-5)

const knowledge = changeState("intelligence")
const Smarter = knowledge(5)
const dumber = knowledge(-5)

// const minimalDamage = takeDamage(Attacker.Attack - Victims.Defence)

