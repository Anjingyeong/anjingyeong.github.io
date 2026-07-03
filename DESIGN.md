# Anjingyeong Portfolio Design System

## 1. Atmosphere & Identity

This portfolio should feel like a quiet technical dossier: clear, evidence-oriented, and polished without becoming a marketing page. The signature is restrained depth: soft gradient section backgrounds, white card surfaces, blue-violet accents, and readable Korean-first typography.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | `--background` | `hsl(0 0% 99%)` | `hsl(220 20% 7%)` | Page background |
| Surface/card | `--card` | `hsl(0 0% 100%)` | `hsl(220 20% 10%)` | Cards, modal panels |
| Text/primary | `--foreground` | `hsl(220 20% 14%)` | `hsl(0 0% 95%)` | Main text |
| Text/secondary | `--muted-foreground` | `hsl(220 10% 46%)` | `hsl(220 10% 60%)` | Descriptions, captions |
| Border/default | `--border` | `hsl(220 15% 90%)` | `hsl(220 15% 20%)` | Card outlines, dividers |
| Accent/primary | `--primary` | `hsl(220 70% 50%)` | `hsl(220 70% 55%)` | Links, focus, main badges |
| Accent/secondary | `--accent` | `hsl(260 60% 55%)` | `hsl(260 60% 60%)` | Secondary emphasis |
| Gradient/primary | `--gradient-primary` | blue to violet | blue to violet | Accent bars and primary buttons |
| Gradient/section | `--gradient-hero` | pale blue/violet/cyan | dark theme inherited | Section background |

### Rules

- Use semantic Tailwind tokens such as `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, and `text-primary`.
- Project cards may use subtle gradient tints, but body content remains neutral and readable.
- Do not add new raw color values in components unless the token table is updated first.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Section title | `text-3xl md:text-4xl` | 700 | tight | tight | Section headers |
| Modal title | `text-2xl md:text-3xl` | 700 | tight | 0 | Project modal titles |
| Card title | `text-lg` | 600 | snug | 0 | Project cards |
| Detail heading | `text-lg` | 600 | normal | 0 | Modal subsections |
| Body | `text-sm` to `text-base` | 400 | relaxed | 0 | Project descriptions |
| Label | `text-xs` | 600 | normal | 0 | Badges and highlights |

### Font Stack

- Primary: `Pretendard`, `Inter`, `sans-serif`
- Mono: `JetBrains Mono`, `monospace`

### Rules

- Korean body copy should prioritize natural line breaks over dense technical phrasing.
- Use sentence-style project headings, not internal planning labels.
- Body text must remain at least `text-sm` in cards and modals.

## 4. Spacing & Layout

### Base Unit

All spacing follows Tailwind's 4px scale.

| Token | Value | Usage |
|-------|-------|-------|
| `space-2` | 8px | Compact inline gaps |
| `space-4` | 16px | Badge and divider groups |
| `space-5` | 20px | Card paragraph rhythm |
| `space-6` | 24px | Modal content rhythm |
| `space-8` | 32px | Card padding |
| `space-16` | 64px | Supporting project separation |
| `space-24` | 96px | Section vertical padding |

### Grid

- Max content width: Tailwind `container`, capped at `1200px` on `2xl`.
- Project grid: one column on mobile, two columns at `lg`.
- Modal width: `max-w-4xl`, constrained to `90vh` height with internal scroll.

### Rules

- Keep the existing card-click to modal structure.
- Project cards must remain scannable: short description, three highlights, and compact tech tags.
- Supporting projects should feel secondary through ordering and grouping, not hidden styling tricks.

## 5. Components

### Project Card

- **Structure**: gradient header, icon, badge, title, body summary, highlights, tech tags.
- **Variants**: `Main`, `Supporting`.
- **Spacing**: `p-8` header/body, `gap-2` badges, `pt-4` tag divider.
- **States**: hover translate and shadow; click opens modal.
- **Accessibility**: card content must be readable without relying on color alone.
- **Motion**: transform and shadow only.

### Project Modal

- **Structure**: overlay, modal panel, close button, title header, optional GitHub action, detail sections.
- **Variants**: project data controls body content.
- **Spacing**: `p-6 md:p-8`, `space-y-6` detail body.
- **States**: Escape closes via section key handler; overlay click closes.
- **Accessibility**: `role="dialog"`, `aria-modal="true"`, close button has an accessible label.
- **Motion**: existing `animate-in fade-in zoom-in-95`.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150-200ms | ease-out | Button and icon hover |
| Standard | 300ms | cubic-bezier(0.22, 1, 0.36, 1) | Project card hover |
| Scroll reveal | 700ms | cubic-bezier(0.16, 1, 0.3, 1) | Section entry |

### Rules

- Animate `transform`, `opacity`, and shadow only.
- Preserve existing smooth card hover behavior.
- Avoid adding motion that distracts from project evidence.

## 7. Depth & Surface

### Strategy

Mixed, with a neutral card surface plus subtle border and restrained shadow.

| Level | Value | Usage |
|-------|-------|-------|
| Card rest | `0 1px 3px rgba(0, 0, 0, 0.04)` | Project cards |
| Card hover | `0 12px 40px rgba(0, 0, 0, 0.08)` | Project card hover |
| Modal | `shadow-2xl` with backdrop blur | Project modal |
| Divider | `border-border` | Card tag divider and modal body |

### Rules

- Depth should clarify hierarchy, not decorate the page.
- Cards are for repeated project entries; modal content remains a framed reading surface.
