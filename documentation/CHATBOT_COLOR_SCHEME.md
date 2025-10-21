# 🎨 Chatbot Color Scheme - SMK Bina Mandiri

## Color Palette Applied

Chatbot sekarang menggunakan **color palette resmi SMK Bina Mandiri**:

### Primary Colors
- **Primary (Dark Blue)**: `#002147` - Header background
- **Accent (Medium Blue)**: `#0a4d9e` - Border, hover states, loading spinner
- **Secondary (Orange)**: `#fe8e22` - User messages, send button
- **Muted (Light Blue)**: `#d1e3f6` - Message area background

## Component Color Mapping

### 1. Chat Button (Closed State)
```tsx
Background: bg-primary (Dark Blue #002147)
Border: border-accent (Medium Blue #0a4d9e)
Icon: text-primary-foreground (White)
```

**Visual:**
- Dark blue circular button
- Medium blue border (2px)
- White message icon

---

### 2. Header (Open State)
```tsx
Background: bg-primary (Dark Blue #002147)
Hover: hover:bg-accent (Medium Blue #0a4d9e)
Text: text-primary-foreground (White)
Title: "Asisten SMK Bina Mandiri"
```

**Visual:**
- Dark blue header bar
- White text
- Hover changes to medium blue
- Smooth transition

---

### 3. Messages Area
```tsx
Background: bg-muted/30 (Light Blue with opacity)
Dark mode: dark:bg-background
```

**User Messages (Right side):**
```tsx
Background: bg-secondary (Orange #fe8e22)
Text: text-secondary-foreground (White)
```

**Assistant Messages (Left side):**
```tsx
Background: bg-card (White / Dark card)
Text: text-card-foreground
Border: border-border
```

**Visual:**
- Light blue tinted background
- User messages: Orange bubbles with white text
- AI messages: White/dark card with border

---

### 4. Loading Spinner
```tsx
Color: text-accent (Medium Blue #0a4d9e)
Background: bg-card with border
```

**Visual:**
- Medium blue spinning loader
- Appears in white/dark card

---

### 5. Input Area
```tsx
Background: bg-card (White / Dark card)
Border top: border-border
Input field: bg-background with border-input
Focus ring: focus:ring-accent (Medium Blue)
```

**Send Button:**
```tsx
Background: bg-primary (Dark Blue #002147)
Hover: hover:bg-accent (Medium Blue #0a4d9e)
Icon: text-primary-foreground (White)
```

**Visual:**
- White/dark card background
- Input with subtle border
- Dark blue send button with white icon
- Hover changes to medium blue
- Medium blue focus ring

---

## Color Behavior

### Light Mode
- **Header**: Dark blue (#002147)
- **Border**: Medium blue (#0a4d9e)
- **User messages**: Orange (#fe8e22)
- **AI messages**: White with border
- **Background**: Light blue tint (#d1e3f6)
- **Send button**: Dark blue (#002147)

### Dark Mode
- **Header**: Dark blue (adjusted for dark mode)
- **Border**: Medium blue (adjusted)
- **User messages**: Orange (slightly adjusted)
- **AI messages**: Dark card with border
- **Background**: Dark background
- **Send button**: Dark blue (adjusted)

## CSS Variables Used

```css
/* From app/globals.css */

/* Light Mode */
--primary: oklch(0.22 0.06 250)        /* Dark Blue #002147 */
--accent: oklch(0.42 0.12 250)         /* Medium Blue #0a4d9e */
--secondary: oklch(0.70 0.18 45)       /* Orange #fe8e22 */
--muted: oklch(0.88 0.03 250)          /* Light Blue #d1e3f6 */

/* Dark Mode */
--primary: oklch(0.55 0.12 250)        /* Lighter Blue */
--accent: oklch(0.55 0.12 250)         /* Medium Blue */
--secondary: oklch(0.68 0.16 45)       /* Orange (adjusted) */
--muted: oklch(0.28 0.04 250)          /* Darker Blue-Gray */
```

## Tailwind Classes Used

### Container
- `bg-card` - Card background (white/dark)
- `border-accent` - Accent color border
- `shadow-2xl` - Large shadow

### Header
- `bg-primary` - Primary background
- `hover:bg-accent` - Accent on hover
- `text-primary-foreground` - Primary text color

### Messages
- `bg-muted/30` - Muted background with opacity
- `bg-secondary` - Secondary (orange) for user
- `text-secondary-foreground` - White text on orange
- `bg-card` - Card background for AI
- `border-border` - Border color

### Input
- `bg-background` - Background color
- `border-input` - Input border
- `focus:ring-accent` - Accent focus ring
- `text-foreground` - Foreground text

### Button
- `bg-primary` - Primary (dark blue) background
- `hover:bg-accent` - Accent (medium blue) on hover
- `text-primary-foreground` - White text

## Comparison: Before vs After

### Before (Generic Blue)
```tsx
Header: bg-blue-500
Border: border-blue-500
User messages: bg-blue-500
Send button: bg-blue-500
```

### After (SMK Bina Mandiri Palette)
```tsx
Header: bg-primary (Dark Blue #002147)
Border: border-accent (Medium Blue #0a4d9e)
User messages: bg-secondary (Orange #fe8e22)
Send button: bg-primary (Dark Blue #002147)
```

## Benefits

✅ **Brand Consistency**: Matches website color scheme
✅ **Professional Look**: Uses official school colors
✅ **Better Contrast**: Orange messages stand out
✅ **Dark Mode Support**: All colors adapt properly
✅ **Accessibility**: Maintains good contrast ratios
✅ **Maintainable**: Uses CSS variables (easy to update)

## Customization

To change colors, edit `app/globals.css`:

```css
:root {
  /* Change primary color */
  --primary: oklch(0.22 0.06 250);  /* Dark Blue */
  
  /* Change accent color */
  --accent: oklch(0.42 0.12 250);   /* Medium Blue */
  
  /* Change secondary color */
  --secondary: oklch(0.70 0.18 45); /* Orange */
  
  /* Change muted color */
  --muted: oklch(0.88 0.03 250);    /* Light Blue */
}
```

All chatbot colors will automatically update!

## Visual Preview

```
┌─────────────────────────────────┐
│ 🔵 Asisten SMK Bina Mandiri  ✕ │ ← Dark Blue Header
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────┐            │
│  │ AI Message      │            │ ← White/Dark Card
│  └─────────────────┘            │
│                                 │
│            ┌─────────────────┐  │
│            │ User Message    │  │ ← Orange Bubble
│            └─────────────────┘  │
│                                 │
├─────────────────────────────────┤
│ [Input field...........] [🔵→] │ ← Dark Blue Send Button
└─────────────────────────────────┘
```

---

**Updated**: October 21, 2025
**Status**: ✅ Applied
**Colors**: SMK Bina Mandiri Official Palette
