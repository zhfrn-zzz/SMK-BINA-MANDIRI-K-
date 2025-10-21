# 🌈 Background Gradient Component

## Overview

Animated gradient background component dengan efek blur dan hover yang smooth. Perfect untuk cards, features, atau highlight elements.

## 📁 Files

- ✅ `components/ui/background-gradient.tsx` - Component
- ✅ Applied to homepage feature cards

## 🎯 Features

- 🌈 Animated gradient background
- ✨ Blur effect with hover enhancement
- 🎨 Colorful radial gradients
- ⚡ Smooth animations with framer-motion
- 🎭 Group hover effects
- 📱 Responsive

## 🚀 Usage

### Basic Usage

```tsx
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function Component() {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <h3>Your Content</h3>
      <p>Content with animated gradient background</p>
    </BackgroundGradient>
  )
}
```

### With Card

```tsx
<BackgroundGradient className="rounded-[22px]" containerClassName="h-full">
  <Card className="h-full bg-white dark:bg-zinc-900">
    <CardHeader>
      <CardTitle>Feature Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Feature description</p>
    </CardContent>
  </Card>
</BackgroundGradient>
```

### Without Animation

```tsx
<BackgroundGradient animate={false} className="rounded-[22px] p-4 bg-white">
  <p>Static gradient background</p>
</BackgroundGradient>
```

## 📝 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to wrap |
| `className` | `string` | - | Classes for inner content wrapper |
| `containerClassName` | `string` | - | Classes for outer container |
| `animate` | `boolean` | `true` | Enable/disable animation |

## 🎨 Gradient Colors

Default gradient uses 4 colors:
- **Cyan**: `#00ccb1` (bottom-left)
- **Purple**: `#7b61ff` (top-right)
- **Yellow**: `#ffc414` (bottom-right)
- **Blue**: `#1ca0fb` (top-left)

### Customize Colors

Edit `components/ui/background-gradient.tsx`:

```tsx
// Change gradient colors
className={cn(
  "absolute inset-0 rounded-3xl z-[1]...",
  "bg-[radial-gradient(circle_farthest-side_at_0_100%,#002147,transparent),radial-gradient(circle_farthest-side_at_100%_0,#0a4d9e,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#fe8e22,transparent),radial-gradient(circle_farthest-side_at_0_0,#d1e3f6,#141316)]"
)}
```

## 🎯 Use Cases

### 1. Feature Cards (Applied)

```tsx
// Homepage feature cards
<BackgroundGradient className="rounded-[22px] h-full" containerClassName="h-full">
  <Card className="h-full bg-white dark:bg-zinc-900">
    <CardHeader>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <GraduationCap className="h-6 w-6" />
      </div>
      <CardTitle>Pendidikan Berkualitas</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        Kurikulum yang disesuaikan dengan kebutuhan industri modern
      </CardDescription>
    </CardContent>
  </Card>
</BackgroundGradient>
```

### 2. Pricing Cards

```tsx
<BackgroundGradient className="rounded-[22px] p-8 bg-white">
  <h3 className="text-2xl font-bold">Premium Plan</h3>
  <p className="text-4xl font-bold my-4">$99/mo</p>
  <ul className="space-y-2">
    <li>✓ Feature 1</li>
    <li>✓ Feature 2</li>
    <li>✓ Feature 3</li>
  </ul>
  <Button className="w-full mt-6">Subscribe</Button>
</BackgroundGradient>
```

### 3. Testimonial Cards

```tsx
<BackgroundGradient className="rounded-[22px] p-6 bg-white">
  <div className="flex items-center gap-4 mb-4">
    <Avatar>
      <AvatarImage src="/avatar.jpg" />
    </Avatar>
    <div>
      <p className="font-semibold">John Doe</p>
      <p className="text-sm text-muted-foreground">CEO, Company</p>
    </div>
  </div>
  <p className="text-muted-foreground">
    "Amazing service! Highly recommended."
  </p>
</BackgroundGradient>
```

### 4. Call-to-Action

```tsx
<BackgroundGradient className="rounded-[22px] p-12 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
  <p className="text-muted-foreground mb-6">
    Join thousands of satisfied customers
  </p>
  <Button size="lg">Sign Up Now</Button>
</BackgroundGradient>
```

## 🎨 Styling Tips

### Rounded Corners

```tsx
// Small radius
className="rounded-lg"

// Medium radius (default)
className="rounded-[22px]"

// Large radius
className="rounded-3xl"

// Full rounded
className="rounded-full"
```

### Padding

```tsx
// Small padding
className="p-4"

// Medium padding
className="p-6 sm:p-8"

// Large padding
className="p-8 sm:p-12"
```

### Background Colors

```tsx
// White background
className="bg-white dark:bg-zinc-900"

// Card background
className="bg-card"

// Transparent (show gradient only)
className="bg-transparent"
```

## ⚙️ Animation Configuration

### Speed

Edit `transition` in component:

```tsx
transition={{
  duration: 5,        // Change to 3 for faster, 10 for slower
  repeat: Infinity,
  repeatType: "reverse",
}}
```

### Background Size

```tsx
style={{
  backgroundSize: "400% 400%",  // Change to 200% for less movement
}}
```

## 🎭 Effects

### Blur Effect

- **Default**: `opacity-60` with `blur-xl`
- **On Hover**: `opacity-100` (group-hover)
- **Transition**: `duration-500`

### Gradient Layers

Component uses 2 gradient layers:
1. **Blur layer**: Creates glow effect
2. **Sharp layer**: Provides solid gradient

## 🔧 Performance

### Optimization Tips

1. **Disable animation** on mobile:
```tsx
const isMobile = window.innerWidth < 768
<BackgroundGradient animate={!isMobile}>
```

2. **Reduce quantity** in grids:
```tsx
// Use on 2-3 cards max per viewport
```

3. **Use `will-change-transform`** (already included):
```tsx
className="will-change-transform"
```

## 🧪 Testing

### Visual Test

1. Hover over cards
2. Check gradient animation
3. Verify blur effect
4. Test dark mode
5. Check responsive

### Performance Test

1. Open DevTools Performance tab
2. Record while scrolling
3. Check FPS (should be 60fps)
4. Monitor CPU usage

## 🎯 Applied To

### Homepage Feature Cards

**Section**: "Mengapa Memilih SMK Bina Mandiri?"

**Cards**:
1. ✅ Pendidikan Berkualitas
2. ✅ Tenaga Pengajar Profesional
3. ✅ Fasilitas Lengkap
4. ✅ Kerjasama Industri

**Effect**:
- Animated gradient border
- Blur glow on hover
- Smooth transitions
- Colorful highlights

## 📱 Responsive Behavior

```tsx
// Adjust padding for mobile
<BackgroundGradient className="rounded-[22px] p-4 sm:p-6 md:p-8">
```

## ♿ Accessibility

- No accessibility issues
- Purely decorative
- Doesn't affect content readability
- Works with screen readers

## 🎨 Color Schemes

### Default (Colorful)
- Cyan, Purple, Yellow, Blue

### SMK Bina Mandiri (Custom)
Replace gradient colors with:
- Primary: `#002147`
- Accent: `#0a4d9e`
- Secondary: `#fe8e22`
- Muted: `#d1e3f6`

### Monochrome
Use single color with opacity variations

## 🔄 Alternatives

If performance is an issue:
1. Use static gradient (animate={false})
2. Use CSS-only gradient
3. Use border-gradient utility

---

**Created:** October 22, 2025  
**Status:** ✅ Applied to homepage  
**Component:** `components/ui/background-gradient.tsx`  
**Dependencies:** framer-motion (already installed)
