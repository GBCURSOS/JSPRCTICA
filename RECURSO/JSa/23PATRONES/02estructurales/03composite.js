class Component {
  constructor(name) {
    this.name = name;
  }

  add(component) {}
  remove(component) {}
  getChild(index) {}
  operation() {}
}

class Leaf extends Component {
  operation() {
    console.log(`Leaf ${this.name} operation`);
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    return this.children[index];
  }

  operation() {
    console.log(`Composite ${this.name} operation`);
    for (let child of this.children) {
      child.operation();
    }
  }
}

// Uso del patrón
const root = new Composite("root");
root.add(new Leaf("Leaf A"));
root.add(new Leaf("Leaf B"));

const comp = new Composite("Composite X");
comp.add(new Leaf("Leaf XA"));
comp.add(new Leaf("Leaf XB"));

root.add(comp);
root.add(new Leaf("Leaf C"));

// Add and remove a leaf
const leaf = new Leaf("Leaf D");
root.add(leaf);
root.remove(leaf);

root.operation();
