//Business Logic
function Place(greeting,country,location,landmarks, timeYear, notes, images, food, weather ) {
    this.greeting = greeting,
    this.country = country,
    this.location = location,
    this.landmarks = landmarks,
    this.timeYear = timeYear,
    this.notes = notes,
    this.images = images,
    this.food = food
    this.weather = weather
}
var greece  = new Place("καλωσόρισμα","Greece","Athens",["Acropolis","Parthenon"],"Summer-Time","The women were goddesses!","../images/greece.JPEG","Moussaka", "Rainy")

/*Japan - Yokoso</h1>
Hawaii - Welina</h1> */

// User Interface Logic
$(document).ready(function(){
  $(".greece").click(function(){
    var keys = Object.keys(greece)
    var values = Object.values(greece)
    for (var i = 0; i < keys.length; i++) {
      $(".about").append("<li>" + keys[i] + ": "+ values[i]+ "</li>")
    }
  })
})




/*
Place.prototype.forEach = function(){
    for (var index = 0; index < greece.length; index ++ ) {

    }
}
*/

/*
for (var property in greece) {
  // if greece.hasOwnProperty(property)){
  $(".about").append("<li>" + greece.keys + "</li>")
  // }
} */
