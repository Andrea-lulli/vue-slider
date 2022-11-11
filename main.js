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


      //ANCHOR - freccia sx camcio immagine
      cambioImg: function () {

        this.index++;

        if (this.index > 4) {
          this.index = 0;
        }

      },

      //FIXME - freccia dx cambio immagine
      cambioImgN: function () {

        this.index--;

        if (this.index < 0) {
          this.index = 4;
        }
      },


      // SECTION bottoni cambio immagine
      cambioImg0: function () {
        this.index = 0
      },

      cambioImg1: function () {
        this.index = 1
      },

      cambioImg2: function () {
        this.index = 2
      },

      cambioImg3: function () {
        this.index = 3
      },

      cambioImg4: function () {
        this.index = 4
      },
    },

  })