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

var greece  = new Place("καλωσόρισμα","Greece","Athens",["Acropolis","Parthenon"],"Summer-Time","The women were goddesses!","images/greece.JPEG","Moussaka", "Humid")

var japan = new Place("Yokoso","Japan","Kyoto",["Fushimi Inari Taisha","Arashiyama"],"Spring-Time","The smell of blossoms drifting in the wind is unforgettable!","images/japan.JPEG","Sushi", "Rainy")

var hawaii = new Place("Welina","Hawaii","Maui",["Molokini","Iao Valley"],"End of Year","Learned how to dance the hula!","images/hawaii.JPEG","Kalua Pork","hot")

Place.prototype.clicks = function(){
    var keys = Object.keys(this)
    var values = Object.values(this)
    for (var i = 0; i < keys.length; i++) {
    /*  if (keys[i]="images") {
        $(".about").append("<li class='info'>"+ keys[i] + ": "+ "<img src=' "+ values[i] +"' alt='" + keys[0] + "'>" + "</li>")
      } else if (keys[i] = "greeting"){(INSERT)} */
        $(".about").append("<li class='info'>" + keys[i] + ": "+ values[i]+ "</li>")
       //end of else
    };
}

// User Interface Logic
$(document).ready(function(){
  $(".greece").click(function(){
    $("li.info").remove();
    greece.clicks();
  }) //end of greece button
  $(".japan").click(function(){
    $("li.info").remove();
    japan.clicks();
  }) //end of japan button
  $(".hawaii").click(function(){
    $("li.info").remove();
    hawaii.clicks();
  }) //end of hawaii button
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
