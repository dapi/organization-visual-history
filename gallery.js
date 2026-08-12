const simcity = [
  ["hq-departments-futuristic-simcity.png", "HQ SimCity — исходник", "experiment", "Первый найденный язык: детальная изометрическая организация с крупными кабинетами."],
  ["hq-departments-futuristic-simcity-legal.png", "Добавление Legal", "experiment", "Legal встроен как отдельный связанный кабинет."],
  ["hq-departments-futuristic-simcity-full.png", "Добавление Research и Content", "experiment", "Карта приведена к полному локальному перечню того этапа."],
  ["hq-departments-futuristic-simcity-media.png", "Добавление Media", "experiment", "Media отделён от редакционной функции Content."],
  ["hq-structure-simcity-vs-current.png", "Сравнительный визуал", "experiment", "Промежуточное сравнение структуры, если файл присутствовал в HQ."],
];

const islands = [
  ["organization-production-radial-v1.png", "Production radial v1"],
  ["organization-production-radial-rejected-grid-v2.png", "Отклонённая сетка v2"],
  ["organization-production-radial-oval-v3.png", "Радиальный овал v3"],
  ["organization-production-radial-oval-v4.png", "Радиальный овал v4"],
  ["organization-production-radial-oval-v5.png", "Радиальный овал v5"],
  ["organization-production-radial-oval-v6.png", "Радиальный овал v6"],
  ["organization-production-radial-oval-final.png", "Финальный радиальный овал"],
  ["organization-archipelago-radial-production.png", "Production-архипелаг"],
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

function card(path, title, status, note, promptSource) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `<img loading="lazy" src="${path}" alt="${title}"><div class="copy"><span class="badge ${status}">${status === "rejected" ? "отклонён" : "эксперимент"}</span><h3>${title}</h3><p>${note}</p><details><summary>Промпт и происхождение</summary><p>Полный prompt и последовательность edit-проходов: <a href="${promptSource}">${promptSource.split('/').pop()}</a>.</p></details></div>`;
  return article;
}

const simcityRoot = document.querySelector("#simcity-gallery");
for (const [file, title, status, note] of simcity) {
  const path = `assets/simcity/${file}`;
  fetch(path, { method: "HEAD" }).then(response => {
    if (response.ok) simcityRoot.append(card(path, title, status, note, "sources/simcity-prompts.md"));
  });
}

const islandRoot = document.querySelector("#island-gallery");
for (const [file, title] of islands) {
  const rejected = file.includes("rejected") || file.includes("dense-v3");
  islandRoot.append(card(`assets/islands/${file}`, title, rejected ? "rejected" : "experiment", rejected ? "Вариант сохранён как отрицательный результат." : "Шаг поиска радиальной островной метафоры.", "sources/island-experiments-prompts.md"));
}
