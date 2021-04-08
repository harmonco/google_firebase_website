var godot = {
    cost: "Free",
    description:
      "Godot is a free game creation engine under the MIT liscence. You can download and learn to use it for free. It uses a programming language called GCScript.",
    things: [
      "Free",
      "Open source",
      "Large community",
      "Dynamic programming language",
      "2D and 3D game creation",
      "Export to many platforms",
    ],
  };
  document.getElementById("godotcost").innerHTML = "Cost: " + godot.cost;
  document.getElementById("godotthings").innerHTML = godot.things.join("<br>");
  document.getElementById("godotdescription").innerHTML = godot.description;
  var unity = {
    things: [
      "Strong 3D game creation",
      "C# programming with other supported languages",
      "Easy characted animations",
      "Export to all popular platforms",
    ],
    cost: "Free(until you make $100,000 dollars or more)",
    description:
      "Unity is a free game creation engine. It does require a liscence purchase if you make 100 thousand dollars or from software made with the engine. I has strong 3D and 2D graphics support.",
  };
  document.getElementById("unitycost").innerHTML = "Cost: " + unity.cost;
  document.getElementById("unitythings").innerHTML = unity.things.join("<br>");
  document.getElementById("unitydescription").innerHTML = unity.description;
  var gamemaker = {
    things: [
      "Very little coding experience required",
      "Easy to use features",
      "Strong community and support",
      "Tons of tutorials",
      "Relatively low up front price",
    ],
    cost: "$99.00 (PC and Mac support) or $199.00(Smartphones/Tablet support)",
    description:
      "GameMaker 2.0 is a very popular engine for new creators. It has a one time fee for the software an then can be used to create as much as you like. It requires very little knowledge of programming languages.",
  };
  document.getElementById("gamemakercost").innerHTML = "Cost: " + gamemaker.cost;
  document.getElementById("gamemakerthings").innerHTML = gamemaker.things.join("<br>");
  document.getElementById("gamemakerdescription").innerHTML = gamemaker.description;