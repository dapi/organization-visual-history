# Prompt организационной карты

Этот документ хранит воспроизводимую цепочку генерации иллюстрации карты
департаментов Pismenny Office. Названия поверх production-карты принадлежат HTML,
а маршруты — SVG, поэтому новые растровые версии генерируются **без текста,
линий и узлов**.

> Актуальная архитектура: ImageGen отвечает только за тринадцать сцен и цветные
> ауры. Топология сети не является частью prompt и задаётся в `owner.js` через
> `departmentNetwork`.

## Происхождение

Исходные prompt найдены в локальной истории Codex за 12 августа 2026 года.
Утверждённая композиция получилась в два прохода:

1. `Variant 4, “Archipelago of work”` создал сцены, персонажей и связи.
2. `Color Variant C, “Colored aura”` добавил цветовые поля департаментов.

Исторические референсы:

- `docs/product/concepts/organization-map-archive/10-work-archipelago.png`;
- `docs/product/concepts/organization-map-archive/15-archipelago-colored-auras.png`;
- `~/code/hq/.agents/skills/pismenny-editorial-systems/assets/reference-v1.png`.

## Исходный prompt композиции — дословно

```text
Use case: style-transfer
Asset type: wide conceptual preview for the Pismenny Office organization map.
Input images: Image 1 is the approved “Living catalogue” direction; preserve its editorial typography, connected mini-world concept and active-card logic, but do not repeat identical office cards. Image 2 supplies pale isometric paper-diorama craft. Image 3 is the primary backoffice palette/grid reference. Image 4 supplies subtle print texture only; backoffice palette overrides its colors.
Primary request: Create Variant 4, “Archipelago of work”. Show HQ and eleven departments as twelve genuinely different miniature worlds floating on warm paper, connected by a thin deep-green network. No repeated cubicle rooms and no repeated desk-monitor pose.
Exact unique scenes and actions:
- HQ: central open-air round strategy table under a light greenhouse canopy; owner standing and arranging route cards.
- Marketing: rooftop garden with a person raising a small banner and releasing a paper kite.
- Sales: tiny café terrace on a bridge; representative leaning forward in conversation and shaking hands with a visitor.
- Finance: small rocky island with a lighthouse-like ledger tower; analyst standing at an abacus/ledger, active deep-green accent.
- Ops: practical workshop with pegboard, crates and a small conveyor; person moving a box with a hand trolley.
- Tech: server greenhouse with cables growing like vines; engineer kneeling to connect a module.
- Design: sunlit atelier balcony with fabric, color swatches and drawing board; person standing and pinning a poster.
- Support: soft sofa nook with floor lamp, tea and headset; representative reclining slightly while helping someone through a call.
- Product: garage maker-space with prototype blocks and workbench; two figures testing a small model.
- Community: circular garden amphitheater around a low fire/table; several tiny figures talking together.
- Research: hilltop observatory with telescope and specimen cabinet; researcher looking outward through the telescope.
- Content: a soft paper cloud carrying a small library, microphone and writing desk; creator sitting cross-legged and recording/writing.
Labels: elegant serif names near each world, exact and once each: HQ, Marketing, Sales, Finance, Ops, Tech, Design, Support, Product, Community, Research, Content. No other text.
Composition: wide 1.91:1, HQ largest and central, eleven worlds balanced around it; routes travel between worlds with small square nodes; generous negative space.
Palette: #f3f1eb, #f8f7f2, #121513, #73756f, #d5d3cb, #174c37, #e3ebe5, restrained #8a6c23. No blue or coral.
Characters: varied silhouettes, ages, body types, hairstyles and poses; a few abstract non-humanoid agents are allowed for Tech or Content; everyone is actively doing something different.
Style: sophisticated editorial paper diorama, flat 2.5D, subtle risograph grain, calm, whimsical and intelligent.
Avoid: repeated offices, rows of desks, everyone seated at computers, closed windowless rooms, photorealism, glossy 3D, dark background, black plaques, childish game UI, random text, logos, watermark.
```

## Исходный prompt цветных аур — дословно

```text
Use case: precise-object-edit
Asset type: wide conceptual preview for the Pismenny Office organization map.
Input images: Image 1 is the edit target “Archipelago of work”. Preserve its complete composition, all twelve unique scenes, characters, exact labels, routes, paper texture and object placement. Image 2 is the backoffice style reference. Image 3 supplies subtle print texture. Change only the department color-coding system described below.
Primary request: Create Color Variant C, “Colored aura”. Keep every department miniature and its local platform essentially neutral, but place one soft irregular translucent risograph color field behind each world. The fields resemble offset screen-printed circles, arches or organic paper cutouts, do not touch each other, and occupy about 55–70% of each mini-world footprint. They must sit behind the objects, never cover characters or labels.
Stable department aura colors, rendered muted and translucent at 12–18% strength:
- HQ forest green #174c37 / green-soft #e3ebe5.
- Marketing muted mustard #c49a3a.
- Sales terracotta #b65f45.
- Finance olive #6f7f45.
- Ops clay orange #a66732.
- Tech steel blue #4c708c.
- Design dusty plum #8a5d73.
- Support sage #7f9b83.
- Product muted teal #4f8079.
- Community cranberry #9a4c4c.
- Research indigo #56648c.
- Content lavender #8d7aa3.
Preserve exact serif labels once each: HQ, Marketing, Sales, Finance, Ops, Tech, Design, Support, Product, Community, Research, Content. No other text.
Connections: retain all routes and square junctions uniformly deep green #174c37, drawn above the aura fields where necessary. Do not color-code routes.
Style: sophisticated Swiss editorial map, subtle off-register risograph halos, calm natural pigments, warm paper still dominant.
Constraints: change only the background fields; keep characters, actions, scenes, platforms, props, spacing and typography identical in spirit to Image 1.
Avoid: colored platforms, colored objects, gradients, blurry glow, neon, saturated circles, overlapping fields, rainbow toy aesthetic, missing departments, duplicate labels, random text, logos, watermark.
```

## Актуальный prompt регенерации — версия 2

Перед запуском обновить секции `Department inventory`, `Unique scenes` и
`Aura colors`, если изменился состав организации. Число внешних миров должно
совпадать с числом отдельных линий из HQ.

```text
Use case: style-transfer
Asset type: production-ready wide background illustration for the Pismenny Office organization map. Interactive names and statuses will be rendered separately in HTML.
Input images: Image 1 is the approved Archipelago of Work visual reference. Preserve its miniature-world concepts, individual actions, calm paper-diorama craft, network language and muted colored auras, but rebuild the composition with materially more space. Image 2 supplies subtle paper and risograph texture only.

Primary request: Regenerate “Archipelago of work — spacious connected edition”. Show one central HQ and exactly eleven surrounding department worlds. Every department must have its own fully visible island, aura and dedicated route to HQ.

Department inventory: HQ, Marketing, Sales, Finance, Ops, Tech, Design, Support, Product, Community, Research, Content. Include exactly these twelve worlds, once each.

Unique scenes:
- HQ: central open-air round strategy table under a light greenhouse canopy; owner standing and arranging route cards.
- Marketing: rooftop garden with a person raising a small banner and releasing a paper kite.
- Sales: tiny café terrace on a bridge; representative leaning forward in conversation and shaking hands with a visitor.
- Finance: rocky lighthouse-ledger island; analyst standing at an abacus or ledger.
- Ops: practical workshop with pegboard, crates and conveyor; person moving a box with a hand trolley.
- Tech: server greenhouse with cables growing like vines; engineer kneeling to connect a module.
- Design: sunlit atelier balcony with fabric, swatches and drawing board; designer pinning a poster.
- Support: soft sofa nook with floor lamp, tea and headset; representative helping someone through a call.
- Product: garage maker-space with prototype blocks and workbench; two figures testing a model.
- Community: circular garden amphitheater around a low fire or table; several figures talking together.
- Research: hilltop observatory with telescope and specimen cabinet; researcher looking through the telescope.
- Content: soft paper cloud carrying a small library, microphone and writing desk; creator sitting cross-legged and recording or writing.

Network topology — non-negotiable:
- Draw exactly eleven separate deep-green routes from HQ, one terminating at each surrounding department.
- Every route starts at a visible square junction on the HQ perimeter and ends at a visible square junction touching its department aura or platform.
- Support, at the lower right, must have its own continuous, clearly visible HQ → Support line. It may not stop at Design, merge invisibly with another route, disappear behind an island or end in empty space.
- Routes may curve but may not cross through scenes. Keep all routes above aura fields and visually traceable end to end.

Composition and spacing:
- Wide landscape 1.91:1. HQ centered and largest, occupying no more than 27% of canvas width.
- Make every surrounding world about 10–15% smaller than in the reference.
- Increase the radial distance from HQ and keep a clear paper gap between every pair of islands and auras; no overlap, touching, crowding or cropped scene.
- Reserve at least 5% canvas margin on every outer edge and visibly more negative space between the lower Product, Tech, Design and Support worlds.
- Balance five worlds across the upper/side arc and six across the lower/side arc without forming a cramped continuous row.

Aura colors, muted and translucent at 12–18% strength: HQ forest green #174c37 / #e3ebe5; Marketing #c49a3a; Sales #b65f45; Finance #6f7f45; Ops #a66732; Tech #4c708c; Design #8a5d73; Support #7f9b83; Product #4f8079; Community #9a4c4c; Research #56648c; Content #8d7aa3. Each irregular aura sits behind its world, covers 55–70% of its footprint, and never touches another aura.

Base palette: warm paper #f3f1eb and #f8f7f2, ink #121513, muted gray #73756f, rules #d5d3cb, network #174c37. Characters and platforms remain predominantly neutral.

Style: sophisticated editorial paper diorama, flat 2.5D isometric illustration, subtle off-register risograph grain, calm, whimsical and intelligent.

Text: no baked-in text at all. No department names, letters, numbers, pseudo-text, signs, logos or watermark. Leave clean paper near each world for external HTML labels.

Avoid: missing or merged route to Support, fewer than eleven connections, disconnected nodes, overlapping islands or auras, crowded bottom row, repeated offices, repeated poses, rows of desks, glossy 3D, photorealism, dark background, black plaques, childish game UI, gradients, blurry glow, neon or saturated toy colors.
```

## Приёмка изображения

- присутствуют HQ и ровно двенадцать внешних сцен;
- из HQ выходят ровно двенадцать визуально прослеживаемых линий;
- линия HQ → Support непрерывна и имеет узел на обоих концах;
- сцены и цветовые ауры не соприкасаются;
- нижняя дуга не превращается в плотный ряд;
- в изображении нет текста: названия и статусы добавляет интерфейс;
- ни одна сцена не обрезана внешним краем.

## Результат регенерации 12 августа 2026 года

Версия 2 дала более просторную композицию и восстановила линию к Support, но
пропустила отдельную линию к Tech. Точечный проход добавил Tech, однако Design
остался с висячим узлом. Кандидат отклонён и удалён из `assets/`: генератору
нельзя поручать граф связей.

Prompt точечного исправления:

```text
Use case: precise-object-edit
Asset type: production organizational map background
Primary request: Add the one missing network connection from the central HQ greenhouse to the Tech server-greenhouse island at the bottom center. Draw a thin continuous deep-green #174c37 curved line through the empty paper gap, starting at a new small outlined square junction on the lower perimeter of HQ and ending at a new small outlined square junction touching the upper edge of the Tech aura/platform.
Constraints: Change only this missing HQ-to-Tech route and its two square junctions. Preserve pixel-for-pixel in spirit all twelve scenes, characters, auras, spacing, positions, scale, paper texture, colors, existing ten routes and their nodes. The new line must not connect to Product or Design, must not cross another route, must remain visible end to end, and must terminate at Tech. No text, letters, labels, numbers, logos, watermark, additional objects, or other route changes.
```

Этот prompt сохранён как история неудачной попытки, а не как рекомендованный
этап производства.

## Retina-версия

Для показа карты почти на всю ширину desktop недостаточно исходных 1700 px: на
экране с плотностью `2×` требуется минимум около 2800 px по ширине. Текущий
production-кандидат содержит только сцены и ауры и подготовлен в размере
`3462×1818`:

`assets/organization-archipelago-sharp-clean-retina.webp`.

Стиль изменён с мягкой бумажной диорамы на чёткий технический editorial line
art. После генерации применены масштабирование `2×` фильтром Lanczos и лёгкий
sharpening. WebP quality 92 сохраняет контуры при размере около 723 КБ.

Все двенадцать маршрутов и двадцать четыре узла рисуются в SVG из
`departmentNetwork`; растровый ассет не содержит линий.

## Радиальная композиция — версия 3

После проверки вариантов прямоугольная раскладка сцен признана слишком похожей
на каталог. Для следующих генераций действует отдельный пространственный
контракт:

```text
Composition: HQ is centered and dominant, about 22–24% of canvas width. Arrange
all eleven department islands on one complete, spacious, irregular oval orbit
around HQ, like numerals around a clock. Put islands at 10, 11:30, 1, 2, 3:30,
5, 5:45, 6:30, 7, 8 and 9 o'clock. Department islands must appear directly to
the left and right of HQ at its vertical midline, with the remaining islands
continuing above, below and on the diagonals. The outer silhouette must read as
an oval ring, never as rows, columns or a rectangular grid. Vary radial distance
slightly, preserve broad paper corridors from HQ to every island, keep all
islands separate and fully inside the frame.

Inventory: exactly twelve scenes total — one central HQ plus eleven unique
departments: Research, Marketing, Sales, Finance, Ops, Support, Design, Tech,
Product, Community and Content.

Constraints: no baked-in text, labels, letters, logos, connection lines, cables,
nodes or arrows. The website owns labels and network topology in HTML/SVG.

Avoid: top-row/bottom-row composition, rectangular catalogue layout, crowded
cluster, touching or overlapping islands, cropped scenes, repeated departments,
soft focus, depth of field, haze, bloom and illegible pseudo-text.
```

Радиальный контракт применён к трём стилевым направлениям; детальное описание
сцен и палитры остаётся в версии 2 выше.

| Вариант | Характер | Retina WebP |
|---|---|---|
| R1 · Drafting Atlas | подробный архитектурный рисунок с акварельными заливками | `assets/organization-radial-attempt-1-drafting-atlas-retina.webp` |
| R2 · Architect's Engraving | строгая тонкая гравюра с просторной овальной орбитой | `assets/organization-radial-attempt-2-architect-engraving-retina.webp` |
| R3 · Flat Silkscreen | крупные контрастные формы для максимальной читаемости | `assets/organization-radial-attempt-3-flat-silkscreen-retina.webp` |

Исходные PNG сохранены рядом. Все три изображения созданы встроенным ImageGen,
затем подготовлены как Retina WebP размером `3456×1820`.

### Production-кандидат в текущем стиле сайта

Финальная радиальная версия сначала собрана с точными центрами сцен на эллипсе,
а затем очищена точечным edit-проходом ImageGen. Это понадобилось потому, что
свободная генерация стабильно возвращала сцены к трём горизонтальным рядам.

- исходник: `assets/organization-archipelago-radial-production.png`;
- Retina WebP: `assets/organization-archipelago-radial-production-retina.webp`;
- версия с Legal: `assets/organization-archipelago-radial-production-legal-retina.webp`;
- размер Retina: `3456×1820`;
- актуальный состав: HQ и двенадцать департаментов в текущем production-стиле;
- топология: один замкнутый овальный ряд вокруг HQ, без растровых связей.

Финальный prompt очистки:

```text
Use case: precise-object-edit
Asset type: final production website organization-map background.
Input image: edit target. Its genuine oval composition is approved and must be
preserved exactly.

Primary request: Clean the compositing artifacts only. Remove every stray
clipped fragment, tiny partial object, detached aura sliver and accidental mark
that appears in the blank paper gaps between the twelve complete scenes.
Reconstruct those affected gap pixels as uniform warm ivory paper matching the
surrounding background.

Invariants: preserve the exact position, scale, composition, appearance and
content of all twelve complete scene groups pixel-faithful in spirit: central HQ
and the eleven department islands on the established oval orbit. Preserve all
people, props, architecture, colored auras that belong to their complete scenes,
sharpness, palette and empty spacing. Do not move, resize, duplicate, replace or
redraw any island. Keep the complete oval ring unmistakable.

Constraints: change only stray fragments and background cleanup. No connection
lines, nodes, arrows, labels, text, letters, logos or watermark. No new objects.
Keep output wide 1.91:1 and uniformly sharp.
```

## Три резких варианта от 12 августа 2026 года

После отказа от мягкой диорамы сгенерированы три независимых фона. Каждый
содержит двенадцать сцен без текста, линий и узлов; сеть накладывается SVG.

| Вариант | Характер | Retina WebP |
|---|---|---|
| 1 · Drafting Atlas | чёткий архитектурный чертёж, умеренная детализация | `assets/organization-attempt-1-drafting-atlas-retina.webp` |
| 2 · Architect's Engraving | взрослая тонкая гравюра, минимум цвета | `assets/organization-attempt-2-architects-engraving-retina.webp` |
| 3 · Flat Silkscreen | крупные плоские формы, максимальная читаемость | `assets/organization-attempt-3-flat-silkscreen-retina.webp` |

Исходные PNG сохранены рядом для последующих точечных edit-проходов. Варианты
генерировались с нуля встроенным ImageGen; общий invariant: никаких baked-in
маршрутов и подписей.

## Добавление Legal — версия 4

12 августа 2026 года в свободную верхнюю центральную зону production-фона
добавлена тринадцатая сцена: компактный юридический кабинет с договором,
библиотекой и весами. Остальные сцены сохранены по композиции, а новый маршрут
и два узла добавлены отдельно в `departmentNetwork`.

Финальный проектный ассет:

`assets/organization-archipelago-radial-production-legal-retina.webp`

Финальный prompt встроенного ImageGen:

```text
Use case: precise-object-edit
Asset type: production raster background for an interactive organization map
Primary request: Add exactly one new Legal department vignette in the empty
upper-center gap between the two existing top vignettes. The new vignette is a
compact isometric legal office/library pavilion: one professional reviewing a
contract at a desk, orderly law books, document folders, and a small
balanced-scales object. Give it a subtle muted blue-gray oval aura matching the
existing pastel auras.
Style/medium: match the existing finely inked editorial architectural
illustration exactly: warm off-white paper, delicate black linework, restrained
natural colors, small isometric architectural scene.
Composition/framing: keep the full wide canvas and all existing twelve scenes
in exactly their current positions and appearance. The new Legal vignette must
be smaller than the two neighboring top scenes, centered near x=54%, y=15%,
with generous separation and no overlap.
Constraints: preserve every existing subject, layout, background, aspect ratio,
and resolution as closely as possible; add only the single Legal vignette; no
connecting lines because routes are drawn by code; no labels or text; no logos;
no watermark.
Avoid: moving, removing, redesigning, duplicating, blurring, or recoloring any
existing scene; avoid gavels, police, courtroom drama, flags, lettering, UI
chrome, borders, and route lines.
```
