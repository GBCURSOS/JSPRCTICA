class CPU {
  freeze() {
    console.log("CPU: Freezing...");
  }
  jump(position) {
    console.log(`CPU: Jumping to ${position}`);
  }
  execute() {
    console.log("CPU: Executing...");
  }
}

class Memory {
  load(position, data) {
    console.log(`Memory: Loading data to ${position}`);
  }
}

class HardDrive {
  read(lba, size) {
    console.log(`HardDrive: Reading data from sector ${lba} with size ${size}`);
  }
}

class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

// Uso del patrón
const computer = new ComputerFacade();
computer.start();
