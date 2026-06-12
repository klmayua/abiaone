# Design System Audit

## Theme Tokens (Google Stitch)

### Color Palette
*   **Primary (Forest Green):** `#004d28`
*   **Primary Container:** `#006838`
*   **Secondary (Brass Gold):** `#735c00`
*   **Secondary Container:** `#fed65b`
*   **Tertiary (Eagle Red):** `#762732`
*   **Background:** `#f6fbf3`
*   **Surface Container (Glassmorphic panels):** `#ebefe8`
*   **Slate Gray:** `#334155`
*   **White:** `#FFFFFF`

### Typography Scale
*   **Montserrat (Headlines):** Used for titles, hero panels, and headings.
*   **Hanken Grotesk (Body):** Used for descriptive text, captions, and user controls.
*   **JetBrains Mono (Labels):** Used for data tables, metrics labels, and status badges.

| Text Level | Font Family | Size | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Montserrat | 48px | 700 | 56px |
| `headline-lg` | Montserrat | 32px | 600 | 40px |
| `headline-md` | Montserrat | 24px | 600 | 32px |
| `body-lg` | Hanken Grotesk | 18px | 400 | 28px |
| `body-md` | Hanken Grotesk | 16px | 400 | 24px |
| `label-md` | JetBrains Mono | 14px | 500 | 20px |
| `caption` | Hanken Grotesk | 12px | 500 | 16px |

### Spacing System
*   **Base Spacing:** `4px`
*   **Gutter Spacing:** `24px`
*   **Desktop Margin:** `64px`
*   **Mobile Margin:** `16px`
*   **Max Width:** `1440px`

### Glassmorphism & Visual Patterns
*   Panel containers use backdrop blurs (`backdrop-blur-md`), low-opacity borders (`border-opacity-20`), and soft shadow effects.
*   Card corners use `ROUND_FOUR` (equivalent to `rounded-lg` or `rounded-xl` Tailwind tokens).
