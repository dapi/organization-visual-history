const simcity = [
  ["hq-departments-futuristic-simcity.png", "HQ SimCity — исходник", "experiment", "Первый найденный язык: детальная изометрическая организация с крупными кабинетами."],
  ["hq-departments-futuristic-simcity-legal.png", "Добавление Legal", "experiment", "Legal встроен как отдельный связанный кабинет."],
  ["hq-departments-futuristic-simcity-full.png", "Добавление Research и Content", "experiment", "Карта приведена к полному локальному перечню того этапа."],
  ["hq-departments-futuristic-simcity-media.png", "Добавление Media", "experiment", "Media отделён от редакционной функции Content."],
];

const islands = [
  ["organization-production-radial-v1.png", "Production radial v1"],
  ["organization-production-radial-rejected-grid-v2.png", "Отклонённая сетка v2"],
  ["organization-production-radial-oval-v6.png", "Радиальный овал v6"],
  ["organization-archipelago-radial-production-legal-retina.webp", "Архипелаг с Legal"],
  ["organization-archipelago-radial-production-legal-dense-v2.webp", "Плотный архипелаг v2"],
  ["organization-archipelago-radial-production-legal-dense-v3.webp", "Чрезмерно упрощённый v3"],
  ["organization-attempt-1-drafting-atlas.png", "Drafting Atlas"],
  ["organization-attempt-2-architects-engraving.png", "Architect’s Engraving"],
  ["organization-attempt-3-flat-silkscreen.png", "Flat Silkscreen"],
  ["organization-radial-attempt-1-drafting-atlas.png", "Radial Drafting Atlas"],
  ["organization-radial-attempt-2-architect-engraving.png", "Radial Engraving"],
  ["organization-radial-attempt-3-flat-silkscreen.png", "Radial Silkscreen"],
];

const inventory = [
  "assets/islands/organization-archipelago-radial-production-legal-dense-v2.webp",
  "assets/islands/organization-archipelago-radial-production-legal-dense-v3.webp",
  "assets/islands/organization-archipelago-radial-production-legal-retina.webp",
  "assets/islands/organization-archipelago-sharp-clean-retina.webp",
  "assets/islands/organization-attempt-1-drafting-atlas-retina.webp",
  "assets/islands/organization-attempt-1-drafting-atlas.png",
  "assets/islands/organization-attempt-2-architects-engraving-retina.webp",
  "assets/islands/organization-attempt-2-architects-engraving.png",
  "assets/islands/organization-attempt-3-flat-silkscreen-retina.webp",
  "assets/islands/organization-attempt-3-flat-silkscreen.png",
  "assets/islands/organization-production-radial-oval-v6-retina.webp",
  "assets/islands/organization-production-radial-oval-v6.png",
  "assets/islands/organization-production-radial-rejected-grid-v2.png",
  "assets/islands/organization-production-radial-v1-retina.webp",
  "assets/islands/organization-production-radial-v1.png",
  "assets/islands/organization-production-scenes-source-2x.png",
  "assets/islands/organization-production-scenes-source.png",
  "assets/islands/organization-radial-attempt-1-drafting-atlas-retina.webp",
  "assets/islands/organization-radial-attempt-1-drafting-atlas.png",
  "assets/islands/organization-radial-attempt-2-architect-engraving-retina.webp",
  "assets/islands/organization-radial-attempt-2-architect-engraving.png",
  "assets/islands/organization-radial-attempt-3-flat-silkscreen-retina.webp",
  "assets/islands/organization-radial-attempt-3-flat-silkscreen.png",
  "assets/simcity/hq-departments-futuristic-simcity.png",
  "assets/simcity/hq-departments-futuristic-simcity-legal.png",
  "assets/simcity/hq-departments-futuristic-simcity-full.png",
  "assets/simcity/hq-departments-futuristic-simcity-media.png",
  "assets/simcity/hq-simcity-primary.png",
  "assets/simcity/hq-simcity-development.png",
];

function card(path, title, status, note, promptSource) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `<img loading="lazy" src="${path}" alt="${title}"><div class="copy"><span class="badge ${status}">${status === "rejected" ? "отклонён" : "эксперимент"}</span><h3>${title}</h3><p>${note}</p><details><summary>Промпт и происхождение</summary><p>Полный prompt и последовательность edit-проходов: <a href="${promptSource}">${promptSource.split('/').pop()}</a>.</p></details></div>`;
  return article;
}

const simcityRoot = document.querySelector("#simcity-gallery");
for (const [file, title, status, note] of simcity) {
  const path = `assets/simcity/${file}`;
  simcityRoot.append(card(path, title, status, note, "sources/simcity-prompts.md"));
}

const islandRoot = document.querySelector("#island-gallery");
for (const [file, title] of islands) {
  const rejected = file.includes("rejected") || file.includes("dense-v3");
  islandRoot.append(card(`assets/islands/${file}`, title, rejected ? "rejected" : "experiment", rejected ? "Вариант сохранён как отрицательный результат." : "Шаг поиска радиальной островной метафоры.", "sources/island-experiments-prompts.md"));
}

const inventoryRoot = document.querySelector("#asset-inventory");
for (const path of inventory) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = path;
  link.textContent = path.replace("assets/", "");
  item.append(link);
  inventoryRoot.append(item);
}
