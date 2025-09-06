function showSection(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const animalData = {
  lion: {
    img: "https://images.unsplash.com/photo-1599498773670-6a3a07c0ab89?auto=format&fit=crop&w=800&q=80",
    qualities: [
      "🦁 Lions are called the 'King of the Jungle'.",
      "👨‍👩‍👧 They live in groups called prides.",
      "⚡ They can run up to 80 km/h for short bursts.",
      "🌙 Lions are mostly active at night (nocturnal)."
    ]
  },
  tiger: {
    img: "https://images.unsplash.com/photo-1590674899484-d4a1e1b1cbf8?auto=format&fit=crop&w=800&q=80",
    qualities: [
      "🐯 Tigers are the largest big cats in the world.",
      "💧 They love water and are excellent swimmers.",
      "🌳 Tigers usually live alone (solitary).",
      "🔊 Their roar can be heard from 3 km away."
    ]
  },
  elephant: {
    img: "https://images.unsplash.com/photo-1617957741649-dcc8b6ad720e?auto=format&fit=crop&w=800&q=80",
    qualities: [
      "🐘 Elephants are the largest land animals.",
      "🧠 They have strong memory and intelligence.",
      "👨‍👩‍👧 They live in herds led by a female (matriarch).",
      "🌿 Elephants eat around 150 kg of food daily."
    ]
  },
}
