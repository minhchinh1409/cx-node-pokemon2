const express = require("express");
const app = express();
const pokemons = require('./pokedex.json');


app.get("/pokemons", function(request, response) {
  return response.json(pokemons);
});

app.get("/pokemons/:id", function(request, response) {
    return response.json(pokemons[`${request.params.id}`]);
  });

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;

  const deleted = pokemons.find(pokemons => pokemons.id === id);
  if (deleted) {
    pokemons = pokemons.filter(pokemons => pokemons.id !== id);
  }
  return res.json({ message: "Deleted" });
});
app.listen(1234, function() {
  console.log(
    "Server is listening on http://localhost:1234" 
  );
});