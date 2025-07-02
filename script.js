const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getCreature = () => {
  const creatureNameOrId = searchInput.value.toLowerCase().trim();
  const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      creatureName.textContent = data.name.toUpperCase();
      creatureId.textContent = `#${data.id}`;
      weight.textContent = `Weight: ${data.weight}`;
      height.textContent = `Height: ${data.height}`;
      types.innerHTML = "";
      data.types.forEach((t) => {
        const typeElement = document.createElement("span");
        typeElement.textContent = t.name.toUpperCase();
        types.appendChild(typeElement);
      });

      const stats = {};
      data.stats.forEach((stat) => {
        stats[stat.name] = stat.base_stat;
      });

      hp.textContent = stats.hp;
      attack.textContent = stats.attack;
      defense.textContent = stats.defense;
      specialAttack.textContent = stats["special-attack"];
      specialDefense.textContent = stats["special-defense"];
      speed.textContent = stats.speed;
    })
    .catch((err) => {
      alert("Creature not found");
      creatureName.textContent = "";
      creatureId.textContent = "";
      weight.textContent = "";
      height.textContent = "";
      types.textContent = "";
      hp.textContent = "";
      attack.textContent = "";
      defense.textContent = "";
      specialAttack.textContent = "";
      specialDefense.textContent = "";
      speed.textContent = "";
    });
};

searchButton.addEventListener("click", getCreature);
