# Style guide: Autonomo landing

## 1. Общий визуальный язык

Лендинг минималистичный, светлый, продуктовый. Основной фон — светло-серый, карточки и продуктовые поверхности — белые. Акценты используются точечно: фиолетовый брендовый знак, зеленый и оранжево-красный для voting/progress и категорий.

Ключевые принципы:

- много воздуха и крупная типографика;
- мягкие карточки с легкой тенью;
- понятная сетка и повторяемые отступы;
- product-first подача через скриншоты Notion/workflows;
- минимальная декоративность, кроме брендовых span-иконок.

## 2. Layout

- Desktop-макет: 1600px ширина.
- Основной контентный контейнер: 1540px, внешние отступы по 30px.
- Секции идут вертикально без разрывов:
  - hero: 591px;
  - best fits: 330px;
  - Notion education: 1316px;
  - solutions: 1366px;
  - integrations: 1052px;
  - community voting: 847px;
  - final CTA/footer: 862px.
- Основной gap между элементами:
  - 12px для компактных рядов и кнопок;
  - 16px для карточек и внутрикартонного контента;
  - 24px для формы/текста;
  - 40px и 80px для крупных вертикальных блоков.

## 3. Colors

- Background light: `#F1F1F1`.
- Surface: `#FFFFFF`.
- Text primary: `#000000`.
- Text secondary: `rgba(0, 0, 0, 0.5)`.
- Text muted/placeholder: `rgba(0, 0, 0, 0.34)`.
- Border: `#E2E3E6`.
- Brand violet: `#5A3FFF`.
- Success green: `#00A05C`.
- Success tint: `#DFF3EB`.
- Warning/accent orange: `#FE6645`.
- Progress orange-red: `#F45C3B`.
- Warning tint: `#FFE5DF`.

## 4. Typography

Primary font in most layers: `Space Grotesk`.

Observed hero title mismatch: generated code references `Gilroy:Medium` in the hero H1, while other headings use `Space Grotesk:Medium`. Before implementation, choose one production rule:

- preferred: use `Space Grotesk` for all headings and UI text;
- optional: use `Gilroy` only for hero H1 if licensed and confirmed.

Desktop type scale:

- Hero H1: 96px, line-height 1.0-1.05, medium weight.
- Final CTA H2: 96px, line-height 1.0.
- Section H2: 64px, line-height 70px, medium weight.
- Feature large title: 36px, line-height 1.3.
- Card title: 28px, line-height 1.3, medium weight.
- Body large: 20px, line-height 30px, regular.
- Body/card text: 18px, line-height 26px, regular.
- Nav text: 16px, line-height 24px, medium.
- Badge text: 12px, line-height 20px, semibold.

Letter spacing in the Figma output is negative on most text styles. For web implementation, keep it subtle and consistent; avoid excessive negative tracking on responsive text.

## 5. Components

### Buttons

Primary:

- background `#000000`;
- text `#FFFFFF`;
- height 50px;
- padding 12px 14px;
- border-radius 10px;
- optional 24px icon on the right or left.

Secondary/input-like outline:

- background `#FFFFFF`;
- border 1px solid `#E2E3E6`;
- text `#000000`;
- placeholder/muted text opacity around 34%;
- height 50px;
- border-radius 10px.

Small text buttons:

- transparent background;
- 16px text;
- optional 24px chevron icon;
- 4px gap between text and icon.

### Cards

Audience cards:

- white surface;
- 20px radius;
- 20px padding;
- 16px gap;
- subtle shadow `0 20px 20px rgba(0, 0, 0, 0.04)`.

Integration cards:

- width around 373px on desktop;
- height around 202px;
- 20px padding;
- 20px radius;
- app icon row at top;
- Free/Paid badge at top-right.

Voting card:

- white surface with 20px radius;
- split two feature panels with a 1px divider;
- bottom row with vote buttons and progress bar.

### Badges

Free/Paid badge:

- small rounded pill/label;
- 8px horizontal padding;
- 2px bottom padding;
- 8px radius;
- green tint for `Automation`/positive statuses;
- orange tint for `Workflow`/secondary statuses.

### Icons

- Product/integration icons: 32px.
- Button icons: 24px.
- Social icons: 32px.
- Decorative span icons in hero/final CTA: around 78-82px.

## 6. Imagery

- Product screenshots should be high-resolution raster images, optimized for web.
- Large Notion dashboard screenshot sits inside the Notion education section and dominates the lower part of the block.
- Solutions screenshot sits on the right side of a large white rounded panel.
- Decorative final CTA background uses a large bottom shape/wave asset from the design.

## 7. Section Rules

- Hero and early product blocks use `#F1F1F1` background.
- The Notion education block ends with large bottom rounding: 80px bottom-left and bottom-right.
- Solutions and final CTA use white background.
- Community voting returns to `#F1F1F1` and uses a centered card.
- Footer is embedded into the final section, not a separate dark/footer band.

## 8. Interaction States

Define these states even if not present in the static design:

- Buttons: default, hover, active, focus-visible, disabled, loading.
- Inputs: default, focus, invalid, success, disabled.
- Cards/tabs: default, hover, active/selected.
- Voting: unvoted, selected, submitted, disabled/error.

## 9. Responsive Guidance

- Scale headings by breakpoint, not viewport width.
- On mobile, stack hero form vertically and make both input/button full width.
- Convert 5-card audience row into horizontal scroll or single-column stack.
- Integrations grid: 4 columns desktop, 2 columns tablet, 1 column mobile.
- Keep product screenshots visible and legible; use cropped previews only when full screenshots would become unreadable.
