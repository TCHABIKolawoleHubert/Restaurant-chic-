// ============================================
// ÉRY DELICE — SCRIPT v2 (photos locales)
// ============================================

const MENU_SEMAINE = [
  {
    jour: "Lundi",
    name: "Riz Jollof Festif",
    price: "3 800 FCFA",
    spots: "Places restantes : 8",
    img: "photos/plat2.jpg"
  },
  {
    jour: "Mercredi",
    name: "Djinkoumé Royal",
    price: "4 500 FCFA",
    spots: "Places restantes : 5",
    img: "photos/plat4.jpg"
  },
  {
    jour: "Jeudi",
    name: "Riz au Gras Traditionnel",
    price: "3 500 FCFA",
    spots: "Places restantes : 10",
    img: "photos/plat15.jpg"
  },
  {
    jour: "Samedi",
    name: "Amiwô & Poulet Braisé",
    price: "5 000 FCFA",
    spots: "Places restantes : 6",
    img: "photos/plat12.jpg"
  }
];

const MENU = [
  {
    id: 1,
    name: "Pâte Noire & Légumes au Poisson Fumé",
    cat: "légumes",
    badge: "Au programme",
    badgeType: "programme",
    price: "3 200 FCFA",
    time: "⏱ Préparation 40 min",
    desc: "Une pâte de sorgho sombre et veloutée, servie avec un accompagnement de légumes finement égrainés et parfumés au poisson fumé. La fumée, les épices, la texture — tout se retrouve dans une assiette d'une générosité absolue.",
    img: "photos/plat1.jpg"
  },
  {
    id: 2,
    name: "Riz Jollof Festif",
    cat: "riz",
    badge: "Au programme",
    badgeType: "programme",
    price: "3 800 FCFA",
    time: "⏱ Préparation 50 min",
    desc: "Cuit lentement dans une sauce tomate parfumée de laurier, de thym et d'épices secrètes. Chaque grain imprégné de saveur, chaque bouchée une explosion de chaleur et de richesse. Servi avec un poulet rôti à la peau dorée.",
    img: "photos/plat2.jpg"
  },
  {
    id: 3,
    name: "Spaghetti Rouge Maison",
    cat: "plat principal",
    badge: "Au programme",
    badgeType: "programme",
    price: "2 800 FCFA",
    time: "⏱ Préparation 30 min",
    desc: "Des spaghettis cuits dans une sauce tomate épicée maison, agrémentés de saucisses tendres, d'un œuf dur, de légumes colorés et de sardines marinées. Simple en apparence, extraordinaire en saveur.",
    img: "photos/plat3.jpg"
  },
  {
    id: 4,
    name: "Djinkoumé Royal",
    cat: "plat principal",
    badge: "Au programme",
    badgeType: "programme",
    price: "4 500 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Une pâte de maïs fermentée onctueuse, façonnée à la main avec une maîtrise héritée de générations. Accompagnée d'un poulet braisé lentement aux épices du terroir et d'une salade de légumes croquants — un voyage sensoriel vers l'authenticité béninoise.",
    img: "photos/plat4.jpg"
  },
  {
    id: 5,
    name: "Pâte Blanche & Sauce Tomate",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 000 FCFA",
    time: "⏱ Préparation 40 min",
    desc: "La pâte blanche lisse comme de la soie, baignant dans une sauce tomate riche et généreuse avec des morceaux de viande mijotée. Des feuilles d'épinards émergent comme un écrin vert — rustique, réconfortant, parfaitement équilibré.",
    img: "photos/plat5.jpg"
  },
  {
    id: 6,
    name: "Dokounou & Poissons Grillés",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 500 FCFA",
    time: "⏱ Préparation 35 min",
    desc: "Les célèbres galettes de maïs cuites à la vapeur — une texture unique, ni pâte ni pain. Accompagnées de poissons grillés à la chair juteuse et d'une sauce rouge vif qui enflamme les sens avec douceur et générosité.",
    img: "photos/plat6.jpg"
  },
  {
    id: 7,
    name: "Poulet Mayo Banane Plantain",
    cat: "accompagnement",
    badge: "Au programme",
    badgeType: "programme",
    price: "4 200 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Des tranches de banane plantain frites à la perfection — caramélisées dehors, fondantes dedans — accompagnent un poulet nappé d'une sauce mayo-épices maison d'une onctuosité remarquable. Un mariage sucré-salé audacieux et inoubliable.",
    img: "photos/plat7.jpg"
  },
  {
    id: 8,
    name: "Riz Jollof & Poulet Rôti",
    cat: "riz",
    badge: "Au programme",
    badgeType: "programme",
    price: "4 000 FCFA",
    time: "⏱ Préparation 50 min",
    desc: "Le riz Jollof dans sa version la plus généreuse — un poulet entier rôti posé fièrement sur un lit de riz orangé et parfumé. Une assiette qui nourrit autant les yeux que l'estomac, idéale pour les grandes occasions.",
    img: "photos/plat8.jpg"
  },
  {
    id: 9,
    name: "Atassi Complet",
    cat: "riz",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 600 FCFA",
    time: "⏱ Préparation 55 min",
    desc: "Le grand classique béninois dans toute sa splendeur — riz aux haricots rouges, spaghettis dorés, poisson braisé, poulet en sauce et œuf dur. Un plat-festin qui célèbre l'abondance et la richesse de notre cuisine traditionnelle.",
    img: "photos/plat9.jpg"
  },
  {
    id: 10,
    name: "Tilapia en Sauce Tomate",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "4 500 FCFA",
    time: "⏱ Préparation 50 min",
    desc: "Un tilapia entier mijoté dans une sauce tomate généreuse aux oignons, poivrons et épices locales. La chair tendre du poisson s'imprègne de chaque arôme — un plat marin d'une profondeur aromatique irrésistible.",
    img: "photos/plat10.jpg"
  },
  {
    id: 11,
    name: "Plantain Frit & Omelette",
    cat: "accompagnement",
    badge: "Au programme",
    badgeType: "programme",
    price: "2 500 FCFA",
    time: "⏱ Préparation 20 min",
    desc: "L'alliance la plus sincère de notre cuisine — des tranches de plantain dorées accompagnent une omelette moelleuse garnie d'oignons et de poivrons. Disponible matin, midi ou soir — simple, savoureux, toujours parfait.",
    img: "photos/plat11.jpg"
  },
  {
    id: 12,
    name: "Amiwô Rouge & Poulet Braisé",
    cat: "plat principal",
    badge: "Sur commande",
    badgeType: "commande",
    price: "5 000 FCFA",
    time: "⏱ Préparation 1h",
    desc: "La pâte de maïs rouge d'Amiwô, dense et parfumée, accompagnée d'un poulet braisé à la peau croustillante, d'une sauce pimentée et d'une julienne de légumes croquants. Un plat complet, généreux et profondément ancré dans notre terroir.",
    img: "photos/plat12.jpg"
  },
  {
    id: 13,
    name: "Omelette Maison & Plantain",
    cat: "accompagnement",
    badge: "Au programme",
    badgeType: "programme",
    price: "2 800 FCFA",
    time: "⏱ Préparation 20 min",
    desc: "Une omelette généreuse aux légumes du jardin — tomates, poivrons, oignons fondants — servie avec de belles tranches de plantain frit bien doré. Le petit-déjeuner des champions, élevé au rang de plat de caractère.",
    img: "photos/plat13.jpg"
  },
  {
    id: 14,
    name: "Assortiment Plantain Frit",
    cat: "accompagnement",
    badge: "Au programme",
    badgeType: "programme",
    price: "1 500 FCFA",
    time: "⏱ Préparation 15 min",
    desc: "Deux variétés de plantain frit dans une même assiette — le plantain mûr caramélisé et le plantain vert croustillant. Un accompagnement incontournable qui sublime n'importe quel plat principal.",
    img: "photos/plat14.jpg"
  },
  {
    id: 15,
    name: "Riz Festif & Poulet Frit",
    cat: "riz",
    badge: "Au programme",
    badgeType: "programme",
    price: "4 200 FCFA",
    time: "⏱ Préparation 50 min",
    desc: "Un riz Jollof joliment présenté en forme de cœur, accompagné d'un poulet frit croustillant, d'un coleslaw frais et maison, et de plantain grillé. La présentation soignée pour les moments qui comptent.",
    img: "photos/plat15.jpg"
  },
  {
    id: 16,
    name: "Ragoût de Légumes & Riz",
    cat: "légumes",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 800 FCFA",
    time: "⏱ Préparation 1h",
    desc: "Haricots verts, carottes, pommes de terre et bœuf tendre mijotés dans un bouillon parfumé aux herbes fraîches. Sur un lit de riz vapeur délicat — un plat qui réunit la terre et ses richesses dans votre assiette.",
    img: "photos/plat16.jpg"
  },
  {
    id: 17,
    name: "Riz & Pois Chiches en Sauce",
    cat: "riz",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 000 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Un riz blanc immaculé accompagné de pois chiches mijotés dans une sauce tomate épicée, couronné d'un œuf dur. Un plat végétarien riche en protéines, nourrissant et plein de caractère.",
    img: "photos/plat17.jpg"
  },
  {
    id: 18,
    name: "Riz Haricots & Sauce Poisson",
    cat: "riz",
    badge: "Sur commande",
    badgeType: "commande",
    price: "3 400 FCFA",
    time: "⏱ Préparation 45 min",
    desc: "Le riz aux haricots servi avec une sauce poisson braisé d'une générosité irréprochable. Les morceaux de poisson nappés d'une sauce tomate épicée révèlent une complexité aromatique qui se construit à chaque bouchée.",
    img: "photos/plat18.jpg"
  },
  {
    id: 19,
    name: "Atassi & Poulet en Sauce",
    cat: "riz",
    badge: "Au programme",
    badgeType: "programme",
    price: "3 800 FCFA",
    time: "⏱ Préparation 55 min",
    desc: "Le riz aux haricots noir-œil servi avec des morceaux de poulet fondants dans une sauce tomate onctueuse, garni d'oignons rouges marinés. Chaque élément se complète — un plat équilibré, coloré et profondément satisfaisant.",
    img: "photos/plat19.jpg"
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
