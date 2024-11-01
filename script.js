const theories = [
    "The moon landing was staged by the government.",
    "Aliens are living among us, disguised as humans.",
    "The Earth is flat, and all evidence to the contrary is fabricated.",
    "Birds are actually surveillance drones created by the government.",
    "The Titanic sinking was an insurance scam.",
    "A theory suggesting that shapeshifting reptilian aliens control the world by infiltrating human society, including world leaders.",
    "Titanic was swapped with its sister ship, the Olympic, and that the ship that sank was actually the Olympic, which had financial troubles.",
    " Cats are actually aliens sent to Earth to observe humans while pretending to be our pets, and their purring is a way of communicating with their home planet."
];

document.getElementById('generate-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * theories.length);
    document.getElementById('theory').innerText = theories[randomIndex];
});
