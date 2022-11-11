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
      bgcolor: "",
      bgcolor1: "",
      bgcolor2: "",
      bgcolor3: "",
      bgcolor4: "",

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
    this.bgcolor = "bg-dark"

  },

  cambioImg1: function () {
    this.index = 1
    this.bgcolor1 = "bg-dark"
  },

  cambioImg2: function () {
    this.index = 2
    this.bgcolor2 = "bg-dark"
  },

  cambioImg3: function () {
    this.index = 3
    this.bgcolor3 = "bg-dark"
  },

  cambioImg4: function () {
    this.index = 4
    this.bgcolor4 = "bg-dark"
  },

  //REVIEW - funzione per far scorrere img in automatico ogni 3 sec
  //  callFunction: function () {
  //  var v = this;
  //  setInterval (function () {
  //       v.index++;
  //       if (v.index > 4) {
  //         v.index = 0;
  //       }
        
  //   }, 3000)
  // },
},



mounted() {
  this.callFunction()
}

})