// ============================================
// ÉRY DELICE — SCRIPT v2
// ============================================

// ---- MENU DE LA SEMAINE (modifiable chaque semaine) ----
const MENU_SEMAINE = [
  {
    jour: "Lundi",
    name: "Riz Jollof Festif",
    price: "3 800 FCFA",
    spots: "Places restantes : 8",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80"
  },
  {
    jour: "Mercredi",
    name: "Djinkoumé Royal",
    price: "4 500 FCFA",
    spots: "Places restantes : 5",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
  },
  {
    jour: "Jeudi",
    name: "Riz au Gras Traditionnel",
    price: "3 500 FCFA",
    spots: "Places restantes : 10",
    img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80"
  },
  {
    jour: "Samedi",
    name: "Amiwô & Poulet Braisé",
    price: "5 000 FCFA",
    spots: "Places restantes : 6",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
  }
];

// ---- TOUS LES PLATS ----
const MENU = [
  {
    id: 1,
    name: "Djinkoumé Royal",
    cat: "plat principal",
    badge: "Au programme",
    badgeType: "programme",
    price: "4 500 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Une pâte de maïs fermentée onctueuse, façonnée à la main avec une maîtrise héritée de générations. Accompagnée d'un poulet braisé lentement aux épices du terroir et d'une salade de légumes croquants — un voyage sensoriel vers l'authenticité béninoise.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
  },
  {
    id: 2,
    name: "Riz Jollof Festif",
    cat: "riz",
    badge: "Au programme",
    badgeType: "programme",
    price: "3 800 FCFA",
    time: "⏱ Préparation 50 min",
    desc: "Cuit lentement dans une sauce tomate parfumée de laurier, de thym et d'épices secrètes. Chaque grain imprégné de saveur, chaque bouchée une explosion de chaleur et de richesse. Servi avec un poulet rôti à la peau dorée et craquante.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80"
  },
  {
    id: 3,
    name: "Légumes Égrainés au Poisson",
    cat: "légumes",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 200 FCFA",
    time: "⏱ Préparation 40 min",
    desc: "Un lit de légumes verts finement hachés, parfumés et mijotés avec des morceaux de poisson fumé aux chairs fondantes. La fraîcheur des feuilles rencontre la profondeur marine — une harmonie délicate que la nature seule peut offrir.",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80"
  },
  {
    id: 4,
    name: "Amiwô & Poulet Braisé",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "5 000 FCFA",
    time: "⏱ Préparation 1h",
    desc: "La pâte de maïs orangée d'Amiwô, douce et veloutée, trône au centre du plat comme une couronne. Flanquée d'un poulet braisé à feu vif jusqu'à l'os craquant et d'une salsa de piments et oignons confits — un festin qui rassasie le corps et réjouit l'âme.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
  },
  {
    id: 5,
    name: "Dokounou & Poissons Grillés",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 500 FCFA",
    time: "⏱ Préparation 35 min",
    desc: "Les célèbres galettes de maïs cuites à la vapeur — une texture unique, ni pâte ni pain, quelque chose d'entièrement singulier. Accompagnées de poissons grillés à la chair juteuse et d'une sauce rouge vif qui enflamme les sens avec douceur.",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80"
  },
  {
    id: 6,
    name: "Poulet Mayo Banane Plantain",
    cat: "accompagnement",
    badge: "Au programme",
    badgeType: "programme",
    price: "4 200 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Des tranches de banane plantain frites à la perfection — caramélisées dehors, fondantes dedans — accompagnent un poulet nappé d'une sauce mayo-épices maison d'une onctuosité remarquable. Un mariage sucré-salé audacieux et inoubliable.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
  },
  {
    id: 7,
    name: "Atassi & Tilapia en Sauce",
    cat: "riz",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 600 FCFA",
    time: "⏱ Préparation 55 min",
    desc: "Le riz aux haricots emblématique du Bénin — chaque grain porte la mémoire d'une cuisine populaire et noble à la fois. Servi avec un tilapia en sauce rouge généreuse et un œuf dur, ce plat est une ode à la générosité africaine.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
  },
  {
    id: 8,
    name: "Spaghetti Rouge Maison",
    cat: "plat principal",
    badge: "Au programme",
    badgeType: "programme",
    price: "2 800 FCFA",
    time: "⏱ Préparation 30 min",
    desc: "Des spaghettis cuits dans une sauce tomate épicée maison, agrémentés de saucisses tendres, de légumes colorés et de sardines marinées. Simple en apparence, extraordinaire en saveur — un plat qui réconcilie tradition et modernité.",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80"
  },
  {
    id: 9,
    name: "Pâte Blanche & Sauce Tomate",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 000 FCFA",
    time: "⏱ Préparation 40 min",
    desc: "La pâte blanche lisse comme de la soie, baignant dans une sauce tomate riche et généreuse avec des morceaux de viande mijotée. Des feuilles d'épinards émergent comme un écrin vert — rustique, réconfortant, parfaitement équilibré.",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
  },
  {
    id: 10,
    name: "Banane Plantain & Omelette",
    cat: "accompagnement",
    badge: "Au programme",
    badgeType: "programme",
    price: "2 500 FCFA",
    time: "⏱ Préparation 20 min",
    desc: "L'alliance la plus sincère de notre cuisine — des tranches de plantain dorées accompagnent une omelette moelleuse garnie d'oignons, de poivrons et d'une touche de piment. Disponible le matin, le midi ou le soir — toujours parfait.",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80"
  },
  {
    id: 11,
    name: "Ragoût de Légumes & Riz",
    cat: "légumes",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 800 FCFA",
    time: "⏱ Préparation 1h",
    desc: "Haricots verts, carottes, pommes de terre mijotés avec du bœuf tendre dans un bouillon parfumé aux herbes fraîches. Sur un lit de riz vapeur délicat, ce plat réunit la terre et ses richesses dans votre assiette avec une générosité sans retenue.",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80"
  },
  {
    id: 12,
    name: "Riz aux Haricots & Sauce Poisson",
    cat: "riz",
    badge: "Au programme",
    badgeType: "programme",
    price: "3 400 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Un riz blanc aux haricots servi avec une sauce poisson braisé d'une générosité irréprochable. Les morceaux de poisson nappés d'une sauce tomate épicée révèlent une complexité aromatique qui se construit à chaque bouchée.",
    img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80"
  }
];

// ---- STATE ----
let activeCategory = "tous";
let searchQuery = "";

// ---- LIEN WHATSAPP ----
function waLink(platName) {
  const msg = `Bonjour Éry Delice, je souhaite réserver le plat suivant : ${platName}. Pouvez-vous me confirmer la disponibilité et le montant à régler ? Merci.`;
  return `https://wa.me/22900000000?text=${encodeURIComponent(msg)}`;
}

// ---- MENU SEMAINE ----
function renderSemaine() {
  const grid = document.getElementById("semaineGrid");
  grid.innerHTML = MENU_SEMAINE.map(p => `
    <div class="semaine-card">
      <div class="semaine-card__day">
        <span>${p.jour}</span>
        <span class="semaine-card__day-spots">${p.spots}</span>
      </div>
      <img class="semaine-card__img" src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="semaine-card__body">
        <p class="semaine-card__name">${p.name}</p>
        <p class="semaine-card__price">${p.price}</p>
        <a href="${waLink(p.name + ' — ' + p.jour)}" target="_blank" class="semaine-card__btn">
          Réserver pour ${p.jour}
        </a>
      </div>
    </div>
  `).join("");
}

// ---- MENU GRID ----
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const empty = document.getElementById("emptyState");

  let filtered = MENU.filter(p => {
    const matchCat = activeCategory === "tous" || p.cat === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = filtered.map((p, i) => `
    <div class="menu-card" onclick="openModal(${p.id})" style="animation-delay:${i * 0.06}s">
      <div class="menu-card__img-wrap">
        <img class="menu-card__img" src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="menu-card__badge badge--${p.badgeType}">${p.badge}</div>
      </div>
      <div class="menu-card__body">
        <p class="menu-card__cat">${p.cat}</p>
        <h3 class="menu-card__name">${p.name}</h3>
        <p class="menu-card__desc">${p.desc}</p>
        <div class="menu-card__footer">
          <div class="menu-card__meta">
            <span class="menu-card__price">${p.price}</span>
            <span class="menu-card__time">${p.time}</span>
          </div>
          <a href="${waLink(p.name)}" target="_blank" class="menu-card__btn" onclick="event.stopPropagation()">
            Réserver
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// ---- MODAL ----
function openModal(id) {
  const p = MENU.find(m => m.id === id);
  if (!p) return;
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalImg").alt = p.name;
  document.getElementById("modalBadge").textContent = p.badge;
  document.getElementById("modalBadge").className = `modal__badge badge--${p.badgeType}`;
  document.getElementById("modalCat").textContent = p.cat;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalTime").textContent = p.time;
  document.getElementById("modalPrice").textContent = p.price;
  document.getElementById("modalWa").href = waLink(p.name);
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ---- FILTRES ----
document.getElementById("categories").addEventListener("click", e => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  renderMenu();
});

document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderMenu();
});

// ---- NAV SCROLL ----
window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 50);
});

// ---- MOBILE NAV ----
const burger = document.getElementById("navBurger");
const mobileNav = document.getElementById("navMobile");
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
});
mobileNav.querySelectorAll(".nav__mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});

// ---- INIT ----
renderSemaine();
renderMenu();
