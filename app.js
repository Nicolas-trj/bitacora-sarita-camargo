const ASSETS = {
  hero: "assets/hero-architecture.png",
  reading: "assets/reading-still-life.png",
  studio: "assets/studio-process.png",
  animals: "assets/animales-arquitectos.jpeg"
};

// Edita este bloque durante el semestre: cada objeto crea automáticamente una tarjeta y su página individual.
const content = {
  lecturas: [
    { id: "lectura-01", number: "01", date: "[Fecha]", title: "Animales Arquitectos", author: "Juhani Pallasmaa", image: ASSETS.animals, excerpt: "Espacio para registrar las ideas principales y la interpretación personal de esta lectura." }
  ],
  reflexiones: [
    { id: "reflexion-guia", number: "01", date: "[Fecha]", title: "[Título de la reflexión]", image: ASSETS.reading, excerpt: "Guía: reemplaza este texto con un fragmento de tu reflexión personal cuando la hayas realizado." }
  ],
  ejercicios: [
    { id: "ejercicio-guia", number: "01", title: "[Nombre del ejercicio]", image: ASSETS.studio }
  ],
  trabajos: [
    { id: "trabajo-final-guia", number: "01", title: "[Nombre del trabajo final]", theme: "[Tema del proyecto]", image: ASSETS.studio }
  ]
};

const app = document.querySelector("#app");
const nav = document.querySelector("#main-nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
});

const arrow = `<span aria-hidden="true">→</span>`;
const placeholder = text => `<p class="placeholder">${text}</p>`;

function pageHead(number, title, intro) {
  return `<header class="page-head"><div><span class="index-no">${number}</span><h1 class="page-title">${title}</h1></div><p class="lead">${intro}</p></header>`;
}

function home() {
  return `<article class="page">
    <section class="home-hero">
      <div class="hero-kicker"><span class="eyebrow">Arquitectura · Bitácora de semestre</span><span class="eyebrow">Archivo en construcción</span></div>
      <div class="hero-copy"><h1 class="display">Teoría e historia<br>de la <em>arquitectura</em></h1><p class="subtitle">Bitácora académica</p></div>
      <div class="hero-image"><img src="${ASSETS.hero}" alt="Collage editorial de elementos arquitectónicos, planos y maqueta" /></div>
      <div class="hero-info"><span>Sarita Camargo Prado · Estudiante de Arquitectura</span><span>Universidad Tolima · Grupo 02</span><span>Semestre 1</span></div>
    </section>
    <section class="intro"><div><span class="eyebrow">Sobre esta bitácora</span></div><div><p class="lead">Este sitio reúne mi proceso durante la materia: las lecturas que acompañan cada tema, las reflexiones que nacen de ellas, los ejercicios realizados en clase y los trabajos que sintetizan lo aprendido durante el semestre.</p></div><aside>Un archivo vivo para observar cómo cambia mi manera de leer, pensar y hacer arquitectura.</aside><div></div></section>
    <section class="journey"><div class="journey-grid">
      ${[["01","Lecturas","Lo que leo","lecturas"],["02","Reflexiones","Lo que pienso","reflexiones"],["03","Ejercicios","Lo que hago","ejercicios"],["04","Trabajos finales","Lo que aprendo","trabajos"]].map(([n,t,p,r]) => `<a class="journey-card" href="#/${r}"><span class="index-no">${n}</span><div class="shape" aria-hidden="true"></div><div><h3>${t}</h3><p>${p}</p></div></a>`).join("")}
    </div></section>
  </article>`;
}

function readings() {
  return `<article class="page">${pageHead("01 / 05", "Lecturas", "Un archivo de los textos trabajados durante el semestre: sus ideas principales, conceptos y las interpretaciones que construyo a partir de ellos.")}
    <section class="archive"><div class="card-grid">${content.lecturas.map(item => `<article class="entry-card"><div class="entry-image"><img src="${item.image}" alt="Imagen editorial para ${item.title}" /></div><div class="entry-meta"><span>Lectura ${item.number}</span><span>${item.date}</span></div><h2>${item.title}</h2><span class="eyebrow">${item.author}</span><p>${item.excerpt}</p><a class="text-link" href="#/lecturas/${item.id}">Leer más →</a></article>`).join("")}</div></section>
  </article>`;
}

function reflections() {
  return `<article class="page">${pageHead("02 / 05", "Reflexiones", "Notas personales para registrar lo que pienso, lo que cuestiono y lo que voy comprendiendo sobre la arquitectura a través de la historia.")}
    <section class="reflection-list">${content.reflexiones.map(item => `<article class="reflection-row"><span class="index-no">${item.number}</span><div><span class="eyebrow">${item.date}</span><h2>${item.title}</h2></div><p>${item.excerpt}</p><a class="arrow-link" href="#/reflexiones/${item.id}" aria-label="Ver ${item.title}">${arrow}</a></article>`).join("")}</section>
  </article>`;
}

function exercises() {
  return `<article class="page">${pageHead("03 / 05", "Ejercicios de clase", "Una galería del hacer: exploraciones geométricas, composiciones y procesos desarrollados dentro del aula.")}
    <section class="exercise-gallery">${content.ejercicios.map(item => `<article class="exercise-card"><div class="exercise-visual" data-number="${item.number}"><img src="${item.image}" alt="Espacio visual para ${item.title}" /></div><div class="exercise-copy"><div><span class="eyebrow">Ejercicio ${item.number}</span><h2>${item.title}</h2><p>Agrega aquí una explicación breve del ejercicio, su consigna y el principal hallazgo del proceso.</p></div><a class="arrow-link" href="#/ejercicios/${item.id}">Ver ejercicio ${arrow}</a></div></article>`).join("")}</section>
  </article>`;
}

function finals() {
  return `<article class="page">${pageHead("04 / 05", "Trabajos finales", "Proyectos que reúnen el proceso completo: desde el planteamiento inicial y las decisiones de diseño hasta el resultado y la reflexión final.")}
    <section class="finals">${content.trabajos.map(item => `<article class="project-card"><div class="project-image"><img src="${item.image}" alt="Espacio visual para ${item.title}" /></div><div class="project-copy"><div><span class="index-no">Proyecto ${item.number}</span><h2>${item.title}</h2><p class="eyebrow">${item.theme}</p></div><div><p>Incluye una introducción breve al proyecto y deja que la página individual muestre el proceso con mayor profundidad.</p><a class="arrow-link" href="#/trabajos/${item.id}">Abrir proyecto ${arrow}</a></div></div></article>`).join("")}</section>
  </article>`;
}

function about() {
  return `<article class="page about"><div class="about-grid"><div class="portrait-placeholder"><strong>SC</strong><span>Espacio para la fotografía de Sarita</span></div><div class="about-copy"><span class="eyebrow">05 / 05 · Sobre mí</span><h1>Sarita Camargo Prado</h1><p class="lead">Soy estudiante de Arquitectura de primer semestre en la Universidad Tolima. Esta bitácora acompaña mi acercamiento a la teoría y la historia de la disciplina.</p>${placeholder("Espacio para que Sarita agregue una presentación personal sobre sus motivaciones para estudiar Arquitectura.")}<blockquote class="quote">“[Frase personal sobre mi manera de entender la arquitectura.]”</blockquote><div class="about-facts"><div><span>Programa</span>Arquitectura</div><div><span>Materia</span>Teoría e Historia de la Arquitectura</div><div><span>Universidad</span>Universidad Tolima</div><div><span>Semestre / Grupo</span>Semestre 1 · Grupo 02</div></div></div></div></article>`;
}

function detail(kind, id) {
  const collection = content[kind];
  const item = collection?.find(entry => entry.id === id);
  if (!item) return notFound();
  const labels = kind === "lecturas" ? ["Información de la lectura", "Ideas principales", "Conceptos importantes", "Mi interpretación"] : kind === "reflexiones" ? ["Reflexión completa", "Lo que aprendí", "Preguntas abiertas"] : kind === "trabajos" ? ["Descripción", "Concepto", "Proceso", "Resultado final", "Reflexión"] : ["Objetivo", "Proceso", "Resultado", "Explicación", "Reflexión personal"];
  const backLabel = { lecturas: "Lecturas", reflexiones: "Reflexiones", ejercicios: "Ejercicios de clase", trabajos: "Trabajos finales" }[kind];
  const meta = item.author || item.theme || `Ejercicio ${item.number}`;
  return `<article class="page detail"><a class="back" href="#/${kind}">← Volver a ${backLabel}</a><header class="detail-head"><h1 class="detail-title">${item.title}</h1><div class="detail-meta"><span class="eyebrow">${meta}</span><p>${item.date || "[Fecha de entrega]"}</p></div></header><div class="detail-hero"><img src="${item.image}" alt="Imagen principal de ${item.title}" /></div><div class="detail-body"><nav aria-label="Contenido de esta entrada">${labels.map((label, i) => `<a href="#section-${i}">${String(i+1).padStart(2,"0")} — ${label}</a>`).join("")}</nav><div>${labels.map((label, i) => `<section id="section-${i}" class="detail-section"><h2>${label}</h2>${placeholder(`Completa este apartado con tu contenido de “${label.toLowerCase()}”.`) }${label === "Proceso" ? `<div class="process-grid"><figure><img src="${ASSETS.studio}" alt="Espacio para una imagen del proceso"/><figcaption>[Pie de foto del proceso]</figcaption></figure><figure><div class="empty-card">+ Agrega otra fotografía, dibujo o composición</div><figcaption>[Pie de foto]</figcaption></figure></div>` : ""}</section>`).join("")}</div></div></article>`;
}

function notFound() {
  return `<article class="page about"><span class="eyebrow">404</span><h1 class="page-title">Esta página aún no existe.</h1><p class="lead">Vuelve al inicio para continuar recorriendo la bitácora.</p><a class="arrow-link" href="#/inicio">Ir al inicio ${arrow}</a></article>`;
}

function render() {
  const route = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const section = route[0] || "inicio";
  const id = route[1];
  const pages = { inicio: home, lecturas: readings, reflexiones: reflections, ejercicios: exercises, trabajos: finals, "sobre-mi": about };
  app.innerHTML = id ? detail(section, id) : (pages[section] || notFound)();
  document.querySelectorAll(".main-nav a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#/${section}`));
  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

window.addEventListener("hashchange", render);
render();
