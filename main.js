/*
realizzare uno slider
Inserire 2 frecce a sinistra e a destra dell'immagine momentanea 
dello slider che permettono di andare avanti e indietro tra le 
immagini
BONUS:
nello slider ci sono dei pallini in basso al click dei pallini 
cambia l'immagine nello slider
a ogni 3 sec l'immagine cambia automaticamente senza nessun click
 da parte nostra
*/

var app = new Vue(
  {
    el: '#root',

    data: {

      img: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/seed/picsum/200/300", "https://picsum.photos/200/300?grayscale", "https://picsum.photos/200/300/?blur", "https://picsum.photos/200/300.jpg"],
      index: 0,




    },
    methods: {
      cambioImg: function () {

        this.index++;

        if (this.index > 4) {
          this.index = 0;
        }

      },

      cambioImgN: function () {

        this.index--;

        if (this.index < 0) {
          this.index = 4;
        }
      },
    },

  })