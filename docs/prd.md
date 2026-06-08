# PRD: лендинг Autonomo

## 1. Контекст

Autonomo — лендинг waitlist-продукта для автоматизированных бизнес-воркфлоу и шаблонов в Notion. Макет: Figma `Autonomo`, узел `Main`, `3266:2924`.

Основная задача страницы — объяснить ценность продукта, показать сценарии использования для разных типов бизнеса и собрать e-mail в waitlist до релиза.

## 2. Цели

- Сформировать первое понимание: Autonomo помогает управлять бизнесом в Notion через готовые workflows, templates и integrations.
- Собрать заявки в waitlist через e-mail форму в hero и финальном CTA.
- Показать релевантность для разных сегментов: freelancers/agencies, content creators, online shops/dropshipping, beauty/health, education.
- Подчеркнуть, что продукт работает поверх Notion и может заменить или объединить привычные инструменты вроде Google/Microsoft, Asana/Trello/Jira, Zapier и других интеграций.
- Дать ощущение живого roadmap: пользователи голосуют за следующие функции.

## 3. Аудитории

- Freelancers & Agencies: проекты, задачи, клиенты, invoices, time tracking.
- Content creators: content planning, automations, publishing workflows.
- Online shops & Dropshipping: catalog, supplies, finance tracking.
- Beauty & Health: booking calendar, service catalog, employee schedule.
- Education: student progress, content delivery, graduation management.

## 4. Структура страницы

### 4.1 Header и hero

- Header:
  - левое меню: `Solutions`, `Integrations`;
  - центр: логотип Autonomo;
  - справа: CTA `Join waitlist`.
- Hero:
  - заголовок: `Manage all your business right in Notion`;
  - декоративные/брендовые span-иконки внутри заголовка;
  - пояснение: `Be the first-one to get access to automated business management workflows and templates`;
  - e-mail input с placeholder `Enter your e-mail`;
  - кнопка `Join waitlist`.

### 4.2 Best fits for

Горизонтальный ряд из 5 карточек сегментов:

- Freelancers & Agencies;
- Content creators;
- Online shops & Dropshipping;
- Beauty & Health;
- Education.

Каждая карточка содержит иконку, заголовок и краткое описание сценария.

### 4.3 Notion education

Блок с заголовком `Never heard about Notion? We’ll teach you!`.

Контент:

- связка Notion вместо Google/Microsoft;
- текст о создании сложных систем в excel-like интерфейсе с formulas, rollups, relations, automations;
- CTA `Notion guides` или аналогичный;
- крупный скриншот Notion/project dashboard.

### 4.4 Solutions gallery

Блок `Solutions` с заголовком `Online or offline business? We fits for both!`.

Состав:

- описание универсальности workflows/templates;
- табы по сегментам;
- демонстрационный экран продукта;
- слева список преимуществ для выбранного сегмента:
  - `Track clients, projects and tasks`;
  - `Time tracking and task estimations`;
  - `Auto calculations and invoices`.

Требование: табы должны менять активный сегмент, список преимуществ и демонстрационный экран, если для разработки доступны реальные данные/изображения. Если данных нет, реализовать первый сегмент как активный, остальные как визуальные табы без переключения до уточнения.

### 4.5 Integrations

Блок `Integrations` с заголовком `Don’t worry about custom features — all are built-in`.

Сетка карточек:

- Client management, Free;
- Tasks statuses and progress, Free;
- Online booking for services, Paid;
- Employee schedule, Free;
- Docs generation, Free;
- Financial accounting, Paid;
- Supplies management, Paid;
- Salary calculations, Free;
- Knowledge base, Free;
- Content planning, Free;
- Automations templates, Free;
- Roadmap card: `And we will bring you more!` + CTA `Check roadmap`.

Карточки показывают цепочки интеграций через маленькие app-иконки, разделители `+` и `/`, заголовок, описание, badge Free/Paid.

### 4.6 Community driven / voting

Блок `Vote for the next features`.

Контент:

- надзаголовок `Community driven`;
- пояснение: пользователи выбирают следующие workflows/templates;
- countdown: days/hours/minutes;
- карточка голосования с двумя feature-кандидатами:
  - `Real-time analytics`;
  - `Hiring dashboard`;
- progress bar с процентами и количеством голосов;
- кнопки `Vote`.

Требование: если backend голосования не готов, реализовать статичную демо-версию без отправки голоса, но с визуальными состояниями hover/focus.

### 4.7 Final CTA и footer

Финальный блок:

- icon/span сверху;
- заголовок `Join our waitlist`;
- текст: `Release will be available soon. Don’t miss a chance to try it first!`;
- e-mail input;
- кнопка `Join waitlist`;
- footer:
  - логотип Autonomo слева;
  - Telegram и Instagram по центру;
  - credits справа.

## 5. Функциональные требования

- E-mail формы:
  - обязательная валидация формата e-mail;
  - состояния: default, focus, invalid, loading, success, error;
  - обе формы отправляют данные в один источник waitlist;
  - после успешной отправки показывать короткое подтверждение без перезагрузки страницы.
- Навигация:
  - `Solutions` скроллит к solutions gallery;
  - `Integrations` скроллит к integrations;
  - `Join waitlist` в header скроллит к первой или финальной форме.
- Доступность:
  - все интерактивные элементы доступны с клавиатуры;
  - видимый focus state;
  - иконки с декоративной ролью скрыты от screen reader;
  - формы имеют label/aria-label.
- Производительность:
  - оптимизировать крупные скриншоты и иконки;
  - lazy-load изображений ниже первого экрана;
  - не блокировать рендер сторонними скриптами аналитики.

## 6. Responsive requirements

Макет дан в desktop-версии 1600px. Для разработки нужны адаптивные состояния:

- Desktop: 1200px+; сохранять сетку 1540px max-width с 30px внешними отступами.
- Tablet: 768-1199px; карточки аудиторий в 2-3 колонки, integrations в 2 колонки.
- Mobile: 320-767px; header с компактной навигацией, карточки в одну колонку, hero-форма вертикально, крупные заголовки уменьшаются, табы превращаются в горизонтальный scroll или select/segmented control.

## 7. Контент и copy

Перед разработкой нужно финализировать английский copy: в макете есть грамматические и орфографические ошибки. В код переносить исправленную версию, если владелец продукта подтвердит правки.

## 8. Метрики

- Waitlist conversion rate.
- Submit errors by reason.
- Clicks on header CTA, hero CTA, final CTA.
- Clicks on `Solutions`, `Integrations`.
- Clicks/votes in community block.
- Scroll depth: hero, solutions, integrations, final CTA.

## 9. Критерии приемки

- Лендинг визуально соответствует Figma-макету на desktop.
- Все основные секции, тексты, CTA, карточки и footer присутствуют.
- Формы e-mail имеют валидацию и все обязательные состояния.
- Страница корректно работает на desktop/tablet/mobile.
- Крупные изображения оптимизированы и не вызывают layout shift.
- Lighthouse: performance не ниже 90 на desktop и не ниже 80 на mobile при подключенных production assets.
- Нет переносов текста, обрезаний и наложений на поддерживаемых viewport.
