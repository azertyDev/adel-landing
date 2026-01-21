# Header Dropdown Menus Design

## Overview

Implement dropdown panels for "About us" and "Contact us" menu items in the header. When clicked, these items reveal content panels below the header instead of navigating to separate pages.

## Requirements

- Both "About us" and "Contact us" open dropdown panels
- Only one panel can be open at a time
- Clicking an active menu item or its × icon closes the panel
- Slide down animation (matching existing mobile menu)
- Desktop only — mobile uses regular page navigation

## Architecture

### State Management

Single state in Header.tsx:

```tsx
const [activeDropdown, setActiveDropdown] = useState<'about' | 'contact' | null>(null);
```

Toggle logic:
- Click on closed item → open it
- Click on open item → close it
- Click on different item → switch to it

### Component Structure

```
src/widgets/header/
├── Header.tsx          # main component + state
├── AboutDropdown.tsx   # about us content panel
├── ContactDropdown.tsx # contact us content panel
└── index.ts            # exports
```

## AboutDropdown Component

### Content

Two paragraphs of company description:

> At ADEL, we design small home appliances that combine refined aesthetics with everyday performance.
> Every product is created with attention to detail, intuitive usability, and long-lasting quality.
>
> We believe technology should feel simple, elegant, and reliable — seamlessly fitting into modern life.

### Styling

- Background: light gray (`bg-gray-50`)
- Text: dark gray, large (18-20px), good line-height
- Padding: large vertical (80-100px top/bottom)
- Max text width: ~900px for readability

## ContactDropdown Component

### Content

2×2 grid with four sections:

| Section | Content |
|---------|---------|
| Chat support | "Support 24/7" link |
| Social media | Facebook, Instagram, Twitter links |
| Phone | Phone number link |
| Delivery and returns | "Online support for your order", "Return policy" links |

### Styling

- Same background as AboutDropdown (`bg-gray-50`)
- Each section: icon + heading (gray) + links (blue, underlined)
- Icons from lucide-react: `MessageCircle`, `Share2`, `Phone`, `Truck`
- Grid responsive: 2×2 on desktop, stacked on tablet

## Navigation Changes

### Desktop (≥768px)

- Products → regular Link to `/products`
- About us → button with dropdown toggle, shows × when active
- Contact us → button with dropdown toggle, shows × when active

### Mobile (<768px)

No changes — all items remain Links to their respective pages.

## Animation

Using Framer Motion (already in project):

```tsx
<AnimatePresence>
  {activeDropdown === 'about' && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <AboutDropdown />
    </motion.div>
  )}
</AnimatePresence>
```

## Edge Cases

### Route Change

Close dropdown when navigating away (via Logo or Products link):

```tsx
const pathname = usePathname();

useEffect(() => {
  setActiveDropdown(null);
}, [pathname]);
```

### Mobile Menu Interaction

When opening mobile menu, close any open dropdown:

```tsx
const openMobileMenu = () => {
  setActiveDropdown(null);
  setMobileMenuOpen(true);
};
```

## Implementation Tasks

1. Create `AboutDropdown.tsx` component
2. Create `ContactDropdown.tsx` component
3. Update `Header.tsx`:
   - Add `activeDropdown` state
   - Modify nav items for about/contact to be buttons
   - Add dropdown rendering with AnimatePresence
   - Add route change effect
4. Add translations for dropdown content
5. Update exports in `index.ts`