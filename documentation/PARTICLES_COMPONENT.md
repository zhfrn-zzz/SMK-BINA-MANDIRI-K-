# ✨ Particles Component

## Overview

Interactive particle effect component dengan mouse tracking dan animasi smooth. Perfect untuk hero sections, backgrounds, atau decorative elements.

## 📁 Files Created

- ✅ `components/ui/particles.tsx` - Main component
- ✅ `app/(public)/demo-particles/page.tsx` - Demo page

## 🎯 Features

- ✨ Interactive mouse tracking
- 🎨 Customizable colors
- 📊 Adjustable particle quantity
- ⚡ Smooth animations
- 🌓 Dark mode support
- 📱 Responsive
- ♿ Accessibility friendly (aria-hidden)

## 🚀 Usage

### Basic Usage

```tsx
import { Particles } from "@/components/ui/particles"

export default function Page() {
  return (
    <div className="relative h-screen">
      <h1>Your Content</h1>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
      />
    </div>
  )
}
```

### With Theme Support

```tsx
"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export default function Page() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="relative h-screen">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
```

### With SMK Bina Mandiri Colors

```tsx
// Primary Color (Dark Blue)
<Particles
  className="absolute inset-0"
  quantity={150}
  ease={70}
  color="#002147"
/>

// Accent Color (Medium Blue)
<Particles
  className="absolute inset-0"
  quantity={120}
  ease={60}
  color="#0a4d9e"
/>

// Secondary Color (Orange)
<Particles
  className="absolute inset-0"
  quantity={100}
  ease={80}
  color="#fe8e22"
/>
```

## 📝 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |
| `quantity` | `number` | `100` | Number of particles |
| `staticity` | `number` | `50` | How static particles are (higher = less movement) |
| `ease` | `number` | `50` | Animation easing (higher = smoother) |
| `size` | `number` | `0.4` | Base size of particles |
| `refresh` | `boolean` | `false` | Force refresh particles |
| `color` | `string` | `"#ffffff"` | Particle color (hex) |
| `vx` | `number` | `0` | Horizontal velocity |
| `vy` | `number` | `0` | Vertical velocity |

## 🎨 Examples

### Example 1: Hero Section

```tsx
<div className="relative flex h-screen items-center justify-center bg-primary">
  <div className="z-10 text-center">
    <h1 className="text-6xl font-bold text-primary-foreground">
      SMK Bina Mandiri
    </h1>
    <p className="text-xl text-primary-foreground/80 mt-4">
      Unggul, Inovatif, Berkarakter
    </p>
  </div>
  <Particles
    className="absolute inset-0"
    quantity={150}
    ease={70}
    color="#ffffff"
  />
</div>
```

### Example 2: Card Background

```tsx
<div className="relative overflow-hidden rounded-lg border bg-card p-8">
  <div className="relative z-10">
    <h2 className="text-2xl font-bold">Card Title</h2>
    <p className="text-muted-foreground">Card content here</p>
  </div>
  <Particles
    className="absolute inset-0"
    quantity={50}
    ease={80}
    color="#0a4d9e"
  />
</div>
```

### Example 3: Section Divider

```tsx
<div className="relative h-32 bg-secondary">
  <Particles
    className="absolute inset-0"
    quantity={80}
    ease={60}
    color="#002147"
  />
</div>
```

### Example 4: Animated Background

```tsx
<div className="relative h-96 bg-gradient-to-br from-primary to-accent">
  <Particles
    className="absolute inset-0"
    quantity={200}
    ease={50}
    color="#ffffff"
    vx={0.5}  // Move right
    vy={-0.3} // Move up
  />
</div>
```

## 🎯 Use Cases

### 1. Homepage Hero
```tsx
// app/(public)/page.tsx
<section className="relative h-screen">
  <div className="container mx-auto px-4 h-full flex items-center justify-center">
    <div className="text-center z-10">
      <h1 className="text-6xl font-bold">Welcome</h1>
    </div>
  </div>
  <Particles
    className="absolute inset-0"
    quantity={150}
    color="#ffffff"
  />
</section>
```

### 2. About Page Background
```tsx
// app/(public)/about/page.tsx
<div className="relative min-h-screen bg-primary/5">
  <div className="container mx-auto px-4 py-12">
    {/* Content */}
  </div>
  <Particles
    className="absolute inset-0"
    quantity={100}
    ease={80}
    color="#0a4d9e"
  />
</div>
```

### 3. PPDB Call-to-Action
```tsx
<div className="relative overflow-hidden rounded-lg bg-secondary p-12">
  <div className="relative z-10 text-center">
    <h2 className="text-4xl font-bold text-secondary-foreground">
      Daftar Sekarang!
    </h2>
    <Button className="mt-6">PPDB 2025</Button>
  </div>
  <Particles
    className="absolute inset-0"
    quantity={120}
    color="#002147"
  />
</div>
```

## ⚙️ Configuration Tips

### Quantity
- **Low (50-80)**: Subtle effect, good for cards
- **Medium (100-150)**: Balanced, good for sections
- **High (200+)**: Dense effect, good for hero sections

### Ease
- **Low (30-50)**: Fast, responsive movement
- **Medium (50-80)**: Smooth, balanced
- **High (80-100)**: Very smooth, slow movement

### Staticity
- **Low (20-40)**: Particles move a lot
- **Medium (50-70)**: Balanced movement
- **High (80-100)**: Particles stay mostly static

### Size
- **Small (0.2-0.5)**: Tiny particles
- **Medium (0.5-1.0)**: Normal particles
- **Large (1.0-2.0)**: Big particles

## 🎨 Color Recommendations

### Light Mode
```tsx
// Dark particles on light background
color="#000000"  // Black
color="#002147"  // Primary (Dark Blue)
color="#0a4d9e"  // Accent (Medium Blue)
```

### Dark Mode
```tsx
// Light particles on dark background
color="#ffffff"  // White
color="#d1e3f6"  // Muted (Light Blue)
color="#fe8e22"  // Secondary (Orange)
```

## 🔧 Performance Tips

1. **Reduce quantity** on mobile:
```tsx
const isMobile = window.innerWidth < 768
<Particles quantity={isMobile ? 50 : 150} />
```

2. **Use `pointer-events-none`** (already included):
```tsx
className="pointer-events-none"
```

3. **Limit to visible sections**:
```tsx
// Only render when section is visible
{isVisible && <Particles />}
```

## 🧪 Testing

### Demo Page
Visit: `http://localhost:3001/demo-particles`

### Test Checklist
- [ ] Particles render correctly
- [ ] Mouse tracking works
- [ ] Particles follow mouse
- [ ] Smooth animations
- [ ] No performance issues
- [ ] Works in dark mode
- [ ] Works in light mode
- [ ] Responsive on mobile
- [ ] No console errors

## 🐛 Troubleshooting

### Particles Not Showing
1. Check z-index (use `absolute inset-0`)
2. Check parent has `relative` position
3. Check color contrast (white on white won't show)
4. Check quantity > 0

### Performance Issues
1. Reduce quantity
2. Increase ease value
3. Reduce size
4. Limit to specific sections

### Mouse Tracking Not Working
1. Ensure component is client-side (`"use client"`)
2. Check parent container size
3. Verify no overlapping elements

## 📱 Responsive Considerations

```tsx
// Adjust quantity based on screen size
const quantity = {
  mobile: 50,
  tablet: 100,
  desktop: 150
}

<Particles
  quantity={isMobile ? quantity.mobile : quantity.desktop}
/>
```

## ♿ Accessibility

Component includes:
- `aria-hidden="true"` - Hidden from screen readers
- `pointer-events-none` - Doesn't interfere with interactions
- Purely decorative - No functional purpose

## 🎯 Best Practices

1. **Use sparingly** - Don't overuse on every page
2. **Match brand colors** - Use SMK Bina Mandiri palette
3. **Consider performance** - Reduce quantity on mobile
4. **Test contrast** - Ensure content is readable
5. **Combine with content** - Use as background, not main focus

## 📚 Related Components

- Hero sections
- Call-to-action blocks
- Feature showcases
- Background decorations

---

**Created:** October 22, 2025  
**Status:** ✅ Ready to use  
**Demo:** `/demo-particles`  
**Component:** `components/ui/particles.tsx`