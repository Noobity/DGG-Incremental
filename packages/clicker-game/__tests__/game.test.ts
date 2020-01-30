import { Game, ActionType } from "../lib"

const dateGen = function*() {
  let current = 0
  while(true) {
    yield new Date(current++)
  }
}

test("first scavenge gives one scrap", () => {
  const game = new Game()
  expect(game.getCurrentState().scrap).toBe(0)
  game.scavenge(new Date())
  expect(game.getCurrentState().scrap).toBe(1)
})

test("scavenge ads scavenge action to queue", () => {
  const game = new Game()
  const timestamp = new Date()

  game.scavenge(timestamp)

  expect(game.state.actions.length).toBe(1)
  expect(game.state.actions[0].action).toBe(ActionType.scavenge)
  expect(game.state.actions[0].timestamp).toBe(timestamp)
})

test("each scavenge gives gives one scrap", () => {
  const game = new Game()
  game.scavenge(new Date())
  game.scavenge(new Date())

  expect(game.getCurrentState().scrap).toBe(2)
})

test("init with state set actions", () => {
  const [a, b, c, d, e] = dateGen()
  const game = new Game({
    actions: [{ action: ActionType.scavenge, timestamp: b }],
    lastSynced: a
  })
  expect(game.getStateAt(c).scrap).toBe(1)
  game.scavenge(d)
  expect(game.state.actions.length).toBe(2)
  expect(game.getStateAt(e).scrap).toBe(2)
})
