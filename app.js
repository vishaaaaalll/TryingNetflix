// TryingNetflix demo data. Every title, description and poster gradient here
// is invented for this demo. No third-party artwork, video or branding is used.
const TITLES = [
  { id: "monsoon-heist", title: "Monsoon Heist", year: 2026, genre: "Thriller", row: "trending",
    desc: "When the rains flood the city, a crew of unlikely thieves plans the one job the water will wash away.",
    grad: "linear-gradient(135deg,#7f1d1d,#e50914)" },
  { id: "last-lighthouse", title: "The Last Lighthouse", year: 2026, genre: "Mystery", row: "trending",
    desc: "A keeper on a remote island starts receiving letters addressed to people who never lived there.",
    grad: "linear-gradient(135deg,#0c4a6e,#38bdf8)" },
  { id: "neon-streets", title: "Neon Streets", year: 2025, genre: "Action", row: "trending",
    desc: "A night-shift courier discovers a package that every gang in the city wants back by dawn.",
    grad: "linear-gradient(135deg,#831843,#ec4899)" },
  { id: "chai-chaos", title: "Chai & Chaos", year: 2025, genre: "Comedy", row: "trending",
    desc: "Two cousins inherit a roadside tea stall and accidentally turn it into the neighbourhood stock exchange.",
    grad: "linear-gradient(135deg,#92400e,#f59e0b)" },
  { id: "orbit-nine", title: "Orbit Nine", year: 2026, genre: "Sci-Fi", row: "trending",
    desc: "Nine strangers wake up on a station that insists they have always lived there.",
    grad: "linear-gradient(135deg,#1e1b4b,#6366f1)" },

  { id: "delhi-diaries", title: "Delhi Diaries", year: 2025, genre: "Drama", row: "series",
    desc: "Three generations of one family, one old house in Delhi, and the secrets in its walls.",
    grad: "linear-gradient(135deg,#14532d,#22c55e)" },
  { id: "cartographer", title: "The Cartographer's Daughter", year: 2026, genre: "Adventure", row: "series",
    desc: "She inherits her father's maps and finds one island that appears on no modern chart.",
    grad: "linear-gradient(135deg,#713f12,#eab308)" },
  { id: "midnight-metro", title: "Midnight Metro", year: 2024, genre: "Thriller", row: "series",
    desc: "The last train never reaches its terminus, and the passengers stop asking why.",
    grad: "linear-gradient(135deg,#111827,#6b7280)" },
  { id: "salt-smoke", title: "Salt & Smoke", year: 2025, genre: "Drama", row: "series",
    desc: "A coastal chef returns home to save her family's restaurant from a rival she once trained.",
    grad: "linear-gradient(135deg,#9a3412,#fb923c)" },
  { id: "archivists", title: "The Archivists", year: 2026, genre: "Mystery", row: "series",
    desc: "Clerks in a forgotten records office realise the files are quietly rewriting themselves.",
    grad: "linear-gradient(135deg,#3b0764,#a855f7)" },

  { id: "river-red", title: "A River Runs Red", year: 2025, genre: "Drama", row: "films",
    desc: "Two brothers on opposite banks of a river choose different sides of the same dam dispute.",
    grad: "linear-gradient(135deg,#7f1d1d,#f97316)" },
  { id: "silent-summit", title: "The Silent Summit", year: 2024, genre: "Adventure", row: "films",
    desc: "A retired climber takes one last route up the mountain that ended her career.",
    grad: "linear-gradient(135deg,#0f766e,#2dd4bf)" },
  { id: "paper-moons", title: "Paper Moons", year: 2026, genre: "Romance", row: "films",
    desc: "A kite-maker and a lighthouse keeper exchange letters that arrive a season late.",
    grad: "linear-gradient(135deg,#9d174d,#f472b6)" },
  { id: "harbor-lights", title: "Harbor Lights", year: 2025, genre: "Drama", row: "films",
    desc: "A harbourmaster's daughter unravels the night her father's boat came back empty.",
    grad: "linear-gradient(135deg,#1e3a8a,#60a5fa)" },
  { id: "dust-empires", title: "Dust of Empires", year: 2023, genre: "History", row: "films",
    desc: "An archaeologist traces a vanished trade route across three modern borders.",
    grad: "linear-gradient(135deg,#78350f,#d6a419)" },

  { id: "flatmates", title: "Flatmates!", year: 2025, genre: "Comedy", row: "comedy",
    desc: "Five strangers, one flat, and a chore wheel nobody has ever followed.",
    grad: "linear-gradient(135deg,#be185d,#fb7185)" },
  { id: "shaadi-planner", title: "The Shaadi Planner", year: 2026, genre: "Comedy", row: "comedy",
    desc: "A wedding planner who hates weddings takes the biggest booking of her life.",
    grad: "linear-gradient(135deg,#c2410c,#facc15)" },
  { id: "office-fire", title: "Office On Fire", year: 2024, genre: "Comedy", row: "comedy",
    desc: "A small startup's office literally catches fire on funding day, and nobody leaves the meeting.",
    grad: "linear-gradient(135deg,#b91c1c,#f87171)" },
  { id: "gully-gurus", title: "Gully Gurus", year: 2025, genre: "Comedy", row: "comedy",
    desc: "Retired street-cricket legends coach a team of kids who refuse to lose gracefully.",
    grad: "linear-gradient(135deg,#166534,#4ade80)" },

  { id: "himalaya-above", title: "Himalaya From Above", year: 2025, genre: "Documentary", row: "docs",
    desc: "Aerial journeys over the highest villages, rivers and passes of the Himalaya.",
    grad: "linear-gradient(135deg,#155e75,#22d3ee)" },
  { id: "spice-routes", title: "The Spice Routes", year: 2024, genre: "Documentary", row: "docs",
    desc: "Following pepper, cardamom and tea from farm to port across centuries of trade.",
    grad: "linear-gradient(135deg,#7c2d12,#fb923c)" },
  { id: "city-lakes", title: "City of Lakes", year: 2026, genre: "Documentary", row: "docs",
    desc: "How one city's lakes shaped its palaces, its monsoons and its people.",
    grad: "linear-gradient(135deg,#1d4ed8,#93c5fd)" },
  { id: "voices-thar", title: "Voices of the Thar", year: 2025, genre: "Documentary", row: "docs",
    desc: "Musicians, herders and storytellers keeping desert traditions alive.",
    grad: "linear-gradient(135deg,#a16207,#fde047)" },
];

const byId = Object.fromEntries(TITLES.map(t => [t.id, t]));
const myList = new Set(JSON.parse(localStorage.getItem("tn-mylist") || "[]"));
let current = null;

function cardEl(t, rank) {
  const b = document.createElement("button");
  b.className = "card";
  b.style.background = t.grad;
  b.dataset.title = t.title.toLowerCase();
  const rankHtml = rank ? `<span class="rank">${rank}</span>` : "";
  b.innerHTML = `${rankHtml}<span><span class="card-title">${t.title}</span><br><span class="card-sub">${t.year} &middot; ${t.genre}</span></span>`;
  b.addEventListener("click", () => openModal(t));
  return b;
}

function renderRows() {
  for (const row of ["trending", "series", "films", "comedy", "docs"]) {
    const track = document.getElementById("track-" + row);
    track.innerHTML = "";
    TITLES.filter(t => t.row === row).forEach((t, i) =>
      track.appendChild(cardEl(t, row === "trending" ? i + 1 : null)));
  }
  renderMyList();
}

function renderMyList() {
  const section = document.getElementById("row-mylist");
  const track = document.getElementById("track-mylist");
  track.innerHTML = "";
  const items = [...myList].map(id => byId[id]).filter(Boolean);
  section.hidden = items.length === 0;
  items.forEach(t => track.appendChild(cardEl(t)));
}

function saveList() {
  localStorage.setItem("tn-mylist", JSON.stringify([...myList]));
  renderMyList();
  if (current) updateListButton();
}

function updateListButton() {
  document.getElementById("modal-list").textContent =
    myList.has(current.id) ? "✓ In My List" : "+ My List";
}

function openModal(t) {
  current = t;
  document.getElementById("modal-title").textContent = t.title;
  document.getElementById("modal-meta").textContent = `${t.year} · ${t.genre} · TryingNetflix Original`;
  document.getElementById("modal-desc").textContent = t.desc;
  document.getElementById("modal-poster").style.background = t.grad;
  updateListButton();
  document.getElementById("modal").hidden = false;
}

function closeModal() { document.getElementById("modal").hidden = true; }

function openPlayer(title) {
  document.getElementById("player-title").textContent = title;
  document.getElementById("player").hidden = false;
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("player-close").addEventListener("click", () => {
  document.getElementById("player").hidden = true;
});
document.getElementById("modal").addEventListener("click", e => {
  if (e.target.id === "modal") closeModal();
});
document.getElementById("player").addEventListener("click", e => {
  if (e.target.id === "player") document.getElementById("player").hidden = true;
});
document.getElementById("modal-play").addEventListener("click", () => {
  closeModal();
  openPlayer(current.title);
});
document.getElementById("modal-list").addEventListener("click", () => {
  if (myList.has(current.id)) myList.delete(current.id);
  else myList.add(current.id);
  saveList();
});
document.getElementById("hero-play").addEventListener("click", () =>
  openPlayer(document.getElementById("hero-title").textContent));
document.getElementById("hero-info").addEventListener("click", () =>
  openModal(byId["monsoon-heist"]));

document.querySelectorAll(".arrow").forEach(btn => {
  btn.addEventListener("click", () => {
    const track = btn.parentElement.querySelector(".track");
    const dir = btn.classList.contains("left") ? -1 : 1;
    track.scrollBy({ left: dir * 520, behavior: "smooth" });
  });
});

document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  let anyVisible = false;
  document.querySelectorAll(".row[data-row]").forEach(section => {
    let rowVisible = false;
    section.querySelectorAll(".card").forEach(card => {
      const show = !q || card.dataset.title.includes(q);
      card.style.display = show ? "" : "none";
      if (show) rowVisible = true;
    });
    section.hidden = !rowVisible;
    if (rowVisible) anyVisible = true;
  });
  document.getElementById("noresults").hidden = anyVisible || !q;
  document.getElementById("row-mylist").hidden = true;
  if (!q) renderMyList();
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
    const row = link.dataset.filterRow;
    if (row === "all") {
      document.querySelectorAll(".row").forEach(s => { s.hidden = false; });
      renderMyList();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (row === "mylist") {
      document.querySelectorAll(".row[data-row]").forEach(s => { s.hidden = true; });
      renderMyList();
      document.getElementById("row-mylist").scrollIntoView({ behavior: "smooth" });
    } else {
      const target = document.getElementById("row-" + row);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("solid", window.scrollY > 40);
});

document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const open = answer.hidden;
    answer.hidden = !open;
    btn.querySelector("span").textContent = open ? "×" : "+";
  });
});

document.getElementById("signup-form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("signup-note").hidden = false;
});

renderRows();
