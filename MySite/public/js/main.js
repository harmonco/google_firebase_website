var title = "Welcome to a webpage about game developement!";
document.getElementById("welcome").innerHTML = title;

//create an object with gaming facts
var gaming = {
  dollars: 138,
  players: 2.5,
};
//display object
document.getElementById("sentence").innerHTML =
  "Gaming is a " +
  gaming.dollars +
  " billion dollar industry with over " +
  gaming.players +
  " billion players worldwide.";

  //create objects containing array
var krita = {
  cost: "Free",
  description:
    "Krita is a free digital painting and illustrating program. It has a ton of features and can be used to create animations and pixel are as well.",
  things: [
    "Free",
    "Open source",
    "Large community",
    "Easy to learn",
    "Many brush types",
    "Digital painting or pixel art",
    "Create animations",
  ],
};
document.getElementById("cost").innerHTML = "Cost: " + krita.cost;
document.getElementById("kritathings").innerHTML = krita.things.join("<br>");
document.getElementById("kritadescription").innerHTML = krita.description;
var blender = {
  things: [
    "3D rendering",
    "Model",
    "Animation",
    "Rendering",
    "Compsoting",
    "Video editing",
  ],
  cost: "Free",
  description:
    "Blender is a free, open source 3d creation program. You can create 3D models, animations, and sprites used in game. It is a powerful tool and rivals some of the paid 3D modeling programs.",
};
document.getElementById("blendercost").innerHTML = "Cost: " + blender.cost;
document.getElementById("blenderthings").innerHTML = blender.things.join(
  "<br>"
);
document.getElementById("blenderdescription").innerHTML = blender.description;
var aseprite = {
  things: [
    "Create pixel art",
    "Sprite sheets",
    "Animated GIFs",
    "PNG Image Sequencing",
    "Tiles and tilesheets",
  ],
  cost: "$15.00",
  description:
    "Asesprite is a very popular tool used for the creation of pixel art. It has customizable pallettes for colors, and several abilities to create tiles, tilesheets and spritesheets.",
};
document.getElementById("asepritecost").innerHTML = "Cost: " + aseprite.cost;
document.getElementById("asepritethings").innerHTML = aseprite.things.join(
  "<br>"
);
document.getElementById("asepritedescription").innerHTML = aseprite.description;

//message to answer for quiz
function platformMessage(text) {
  if (
    text == "PC and Mac" ||
    text == "pc and mac" ||
    text == "PC and mac" ||
    text == "pc and Mac"
  ) {
    document.getElementById("platformAnswer").innerHTML = "That is correct!";
  } else if (text == "Smartphones" || text == "smartphones") {
    document.getElementById("platformAnswer").innerHTML =
      "Close, smartphones came in second. Try again.";
  } else if (text == "PS4" || text == "ps4" || text == "Ps4") {
    document.getElementById("platformAnswer").innerHTML =
      "PS4 came in third, please try again.";
  } else if (text == "Xbox" || text == "xbox" || text == "XBox") {
    document.getElementById("platformAnswer").innerHTML =
      "Xbox came in fourth, please try again.";
  } else {
    document.getElementById("platformAnswer").innerHTML =
      "Please try again, answer not recognized. Check spelling.";
  }
}

//validating form for contact information
function validate() {
  var name = document.forms["contact"]["name"].value;
  if (name == "") {
    alert("Please enter a name");
    return false;
  }
  var email = document.forms["contact"]["email"].value;
  if (email == "") {
    alert("Please enter an eMail address");
    return false;
  }
  var comment = document.forms["contact"]["comments"].value;
  if (comment == "") {
    alert("Please enter comments");
    return false;
  }
}
/*creating the slider photos function for home page
$(".slider").each(function () {
  var $this = $(this);
  var $group = $this.find(".slide-group");
  var $slides = $this.find(".slide");
  var buttonArray = [];
  var currentIndex = 0;
  var timeout;

  //move() goes here
  function move(newIndex){
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else{
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'});
    $group.animate( {left: animateLeft}, function() {
      $slides.eq(currentIndex).css( {display: 'none'} );
      $slides.eq(newIndex).css( {left: 0} );
      $group.css( {left: 0} );
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        moveBy(currentIndex + 1);
      } else {
        moveBy(0);
      }
    }, 4000);
  }

  $each($slides, function (index) {
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass("active");
    }
    $button
      .on("click", function () {
        moveBy(index);
      })
      .appendTo($this.find(".slide-buttons"));
    buttonArray.push($button);
  });

  advance();
});
*/
