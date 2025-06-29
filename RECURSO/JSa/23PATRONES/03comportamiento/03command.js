// Command Pattern Example
class Command {
  execute() {}
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class Light {
  turnOn() {
    console.log("Light is ON");
  }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
lightOn.execute(); // Outputs: Light is ON
