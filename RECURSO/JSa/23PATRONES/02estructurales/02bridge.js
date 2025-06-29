// Implementaciones
class DrawingAPI {
  drawCircle(x, y, radius) {
    throw new Error("El método drawCircle debe ser implementado");
  }
}

class DrawingAPI1 extends DrawingAPI {
  drawCircle(x, y, radius) {
    console.log(`API1.circle at ${x}:${y} radius ${radius}`);
  }
}

class DrawingAPI2 extends DrawingAPI {
  drawCircle(x, y, radius) {
    console.log(`API2.circle at ${x}:${y} radius ${radius}`);
  }
}

// Abstracción
class Shape {
  constructor(drawingAPI) {
    this.drawingAPI = drawingAPI;
  }

  draw() {
    throw new Error("El método draw debe ser implementado");
  }

  resizeByPercentage(percentage) {
    throw new Error("El método resizeByPercentage debe ser implementado");
  }
}

// Abstracción refinada
class CircleShape extends Shape {
  constructor(x, y, radius, drawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }

  resizeByPercentage(percentage) {
    this.radius *= 1 + percentage / 100;
  }
}

// Uso del patrón
const shapes = [
  new CircleShape(1, 2, 3, new DrawingAPI1()),
  new CircleShape(5, 7, 11, new DrawingAPI2()),
];

for (let shape of shapes) {
  shape.draw();
  shape.resizeByPercentage(50);
  shape.draw();
}
