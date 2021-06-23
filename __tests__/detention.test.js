import { storeState } from "../src/js/detention";
import { changeState } from "../src/js/detention";

describe('storeState', () => {
  test('it should create an empty character object', () => {
    const playerOne = storeState()
    expect(playerOne()).toMatchObject({})
  })
  test('it should create a jock object with initial values', () => {

    const initialJockValues = { hitpoints: 100, attack: 10, defense: 5, intelligence: 1 }
    const bryce = storeState(initialJockValues)
    expect(bryce()).toEqual({ hitpoints: 100, attack: 10, defense: 5, intelligence: 1 })
  })
})

describe('changeState', () => {
  test('it should change targeted property', () => {
    const initialJockValues = { hitpoints: 100, attack: 10, defense: 5, intelligence: 1 }
    const bryce = storeState(initialJockValues)
    const takeDamage = changeState("hitpoints")
    const superDamage = takeDamage(-30)
    expect(bryce(superDamage)).toEqual({ hitpoints: 70, attack: 10, defense: 5, intelligence: 1 })
  })
})