
// métodos de propiedades
/*
{
    const reproductor = {
        reproducir: function(id) {
            console.log(`Reproduciendo canción id ${id}`);
        },
        pausar: function() {
            console.log('pausando...');
        },
        borrar: function(id) {
            console.log(`Borrando canción con id: ${id}`)
        },
        crearPlaylist: function(nombre) {
            console.log(`Creando la Playlist ${nombre}`);
        },
        reproducirPlaylist: function(nombre) {
            console.log(`Reproduciendo la Playlist ${nombre}`)
        }
    }

    reproductor.reproducir(30);
    reproductor.pausar();

    reproductor.borrar(20);
    reproductor.crearPlaylist('Heavy Metal');
    reproductor.reproducirPlaylist('Heavy Metal');
}
*/


{
    const reproductor = {
      cancion: "",

      reproducir1: (id1, id2) =>
        console.log(`Reproduciendo canción id1 ${id1} : id2 ${id2}`),
      reproducir2: function (id) {
        console.log(`Reproduciendo canción id ${id}`);
      },
      pausar: () => console.log("pausando..."),
      borrar: id => console.log(`Borrando canción con id: ${id}`),
      crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
      reproducirPlaylist: (nombre) =>
        console.log(`Reproduciendo la Playlist ${nombre}`),

      set dodo(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${this.cancion}`);
      },

      get dodo() {
        console.log(`${this.cancion}`);
      },
    };

    reproductor.reproducir1(30,50);
    reproductor.reproducir2(40);
    reproductor.pausar();

    reproductor.borrar(20);
    reproductor.crearPlaylist('Heavy Metal');
    reproductor.reproducirPlaylist('Heavy Metal');


    // Probando set y get se utilizando de la siguiente forma
    reproductor.dodo = 'Enter Sandman' ;
    reproductor.dodo
}
