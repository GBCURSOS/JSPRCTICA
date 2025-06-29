// State Pattern Example
class State {
  doAction(context) {}
}

class StartState extends State {
  doAction(context) {
    console.log("Player is in start state");
    context.setState(this);
  }
}

class StopState extends State {
  doAction(context) {
    console.log("Player is in stop state");
    context.setState(this);
  }
}

class Context {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Usage
const context = new Context();
const startState = new StartState();
startState.doAction(context); // Outputs: Player is in start state

const stopState = new StopState();
stopState.doAction(context); // Outputs: Player is in stop state
