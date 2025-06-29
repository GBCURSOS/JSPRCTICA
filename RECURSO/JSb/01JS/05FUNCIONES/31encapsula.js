// este codigo es para explicación, NO ejecuta
/* 
function aMenosQue(prueba, entonces) {
  if (!(i % 2 == 1)) console.log(i, "es par");
}
 */

function repetir(n, accion) {
  for (let i = 0; i < 3; i++) {
    aMenosQue(i % 2 == 1, () => {
      console.log(n, "es par");
    });
  }
}

repetir(3, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "es par");
  });
});
