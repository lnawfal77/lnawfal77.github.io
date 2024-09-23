// Tableau de noms
var names = ["John", "Paul", "Jen", "Laura", "Michael", "Jake", "Emma"];

// Parcourir le tableau
for (var i = 0; i < names.length; i++) {
  // Récupérer la première lettre de chaque nom
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Vérifier si la première lettre est "j"
  if (firstLetter === 'j') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
