# Style exclusions and inconsistencies

Эти элементы есть в макете или сгенерированном Figma-контексте, но их не стоит переносить как правила дизайн-системы без уточнения.

## 1. Copy issues

В макете есть английские ошибки и опечатки. Перед разработкой copy нужно вычитать.

- `Be the first-one` → вероятно, `Be the first to`.
- `Online or offline business?We fits for both!` → нет пробела и ошибка согласования; вероятно, `Online or offline business? We fit both!`.
- `Create complex systems in excel-like interface with bunch of extended features` → нужно переписать натуральнее.
- `Store your students progress data` → нужно `students' progress`.
- `manage graduating` → формулировка неестественная.
- `native-centred` → проверить стиль: US/UK spelling и смысл.
- `customisable` → если весь лендинг в US English, заменить на `customizable`.
- `Track you business income and outcome` → `your business income and expenses`.
- `Keep and growth your team knowledges` → `Keep and grow your team's knowledge`.
- `Wokflow` → `Workflow`.
- `Don't worry about custom features — all are built-in` → возможно, лучше `Don't worry about custom features — they're all built in`.

## 2. Typography mismatch

Hero H1 в Figma/code context использует `Gilroy:Medium`, при этом остальные заголовки и UI в основном используют `Space Grotesk`. Это не похоже на устойчивое правило.

Решение перед разработкой:

- либо подтвердить Gilroy как отдельный display-шрифт;
- либо унифицировать все на Space Grotesk.

## 3. Desktop-only layout

Макет предоставлен только как desktop 1600px. Нельзя считать абсолютные высоты секций и координаты готовыми правилами для responsive.

Исключить из implementation guide:

- жесткую ширину `1600px`;
- жесткую высоту всех секций без адаптивной логики;
- абсолютные `x/y` как основу layout.

Для production нужно строить responsive layout на flex/grid.

## 4. Hidden and placeholder layers

В структуре есть скрытые и служебные слои:

- скрытые пункты меню `Buttons Text / Small / Right Icon`;
- скрытые shape-элементы внутри кнопок;
- скрытые иконки в button instances;
- технические названия вроде `Button text`, `Frame 49`, `Frame 54`.

Их не нужно переносить в контент, CSS tokens или публичные названия компонентов.

## 5. Icon naming inconsistency

Многие интеграционные иконки называются `notion`, хотя визуально представляют разные приложения. Это технический мусор в слоях, а не правило.

Нужно:

- переименовать assets при экспорте;
- хранить иконки по реальному app-name;
- не завязывать код на имена Figma-слоев.

## 6. Text opacity as style primitive

Многие вторичные тексты сделаны через opacity `50%`, placeholder — через opacity `34%`. В коде лучше использовать семантические color tokens, а не наследовать opacity на контейнерах, чтобы не ломать доступность и вложенные элементы.

Рекомендуемые tokens:

- `text-primary`;
- `text-secondary`;
- `text-muted`;
- `text-placeholder`.

## 7. Large negative letter spacing

В Figma/code context у многих текстов есть отрицательный tracking до `-3.84px`. На desktop это выглядит близко к макету, но на mobile может ухудшить читаемость и вызвать наложения.

Нужно задать отдельные responsive typography tokens и не масштабировать tracking напрямую.

## 8. Rasterized/product screenshot dependency

Ключевые продуктовые поверхности в макете выглядят как экспортированные изображения/векторы. Это нормально для лендинга, но не должно стать UI-компонентами в коде.

Решение:

- использовать оптимизированные изображения для демонстрационных экранов;
- не верстать таблицы Notion вручную, если они нужны только как иллюстрация;
- заменить на реальные screenshots, когда продуктовый UI будет готов.

## 9. Inconsistent category labels

В community card используются labels `Automation` и `Wokflow`/`Workflow`, а в integrations cards — `Free`/`$ Paid`. Это разные типы статусов, их нужно разделить в дизайне и коде:

- feature type: Automation, Workflow, Template;
- pricing status: Free, Paid.

## 10. Decorative title spacing

Hero H1 использует визуальные пробелы вокруг встроенных span-иконок: `Manage      all...` и `right in      Notion`. В HTML это нельзя переносить как обычные пробелы.

Нужно реализовать встроенные иконки отдельными inline/flex элементами с контролируемым gap и fallback на mobile.
