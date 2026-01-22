# UI/UX Issues Report - Meridian Bay Capital Website

## Executive Summary
This report identifies UI (User Interface) and UX (User Experience) issues found during code review. Issues are categorized by severity and type, with actionable recommendations for each.

---

## Critical Issues

### 1. Navigation Header Spacer Height Mismatch

**Issue Description:** The navigation spacer div uses `h-18 md:h-[calc(4.5rem+2rem)]` but the actual header height varies. The trust indicator bar is only shown on `md:` screens, but the spacer calculation doesn't properly account for this.

**Impact on UI/UX:** Content may appear cut off or overlap with the fixed navigation on mobile devices. On desktop, there's potential for content to be hidden behind the header when scrolling to anchor links.

**Location:** `components/layout/Navigation.tsx:219`

**Suggested Improvement:**
```tsx
// Before
<div className="h-18 md:h-[calc(4.5rem+2rem)]" />

// After - Use consistent CSS variables or calculate properly
<div className="h-[72px] md:h-[104px]" /> // Match actual header heights
```

---

### 2. Mobile Menu Z-Index Potential Conflict

**Issue Description:** The mobile menu uses `z-50` but the header also uses `z-50`. While the backdrop is `z-40`, the menu panel and header are at the same z-index level.

**Impact on UI/UX:** Could cause unpredictable stacking behavior where parts of the header might appear above the mobile menu on some browsers.

**Location:** `components/layout/Navigation.tsx:47, 147`

**Suggested Improvement:**
```tsx
// Header should be z-40
<header className={cn("fixed top-0 left-0 right-0 z-40 ...")} >

// Mobile menu panel should be z-50
<motion.div className="fixed ... z-50 lg:hidden shadow-large">
```

---

### 3. Hero Section Minimum Height Issue on Short Viewports

**Issue Description:** Hero section uses `min-h-[90vh]` which on mobile devices with browser chrome can cause content to be pushed off-screen.

**Impact on UI/UX:** Users on mobile devices may not see the CTA buttons or scroll indicator without scrolling, reducing engagement.

**Location:** `components/home/HeroSection.tsx:18`

**Suggested Improvement:**
```tsx
// Use dynamic viewport height for mobile
<section className="relative min-h-[90vh] min-h-[90dvh] flex items-center ...">
```
Add to `tailwind.config.ts`:
```ts
extend: {
  minHeight: {
    'screen-dvh': '100dvh',
  }
}
```

---

## Major Issues

### 4. Missing Focus States on Interactive Elements

**Issue Description:** Several interactive elements lack visible focus states, particularly:
- Category buttons in FAQ sidebar
- Net worth radio options in contact form
- Investment goal toggle buttons
- Testimonial navigation dots

**Impact on UI/UX:** Keyboard users cannot determine which element is currently focused, failing WCAG 2.1 accessibility requirements.

**Location:**
- `app/faq/page.tsx:122-138`
- `app/contact/page.tsx:244-262, 271-284`

**Suggested Improvement:**
```tsx
// Add focus-visible states to all interactive elements
<button className="... focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
```

---

### 5. Testimonial Carousel Navigation Arrows Hidden on Mobile

**Issue Description:** Navigation arrows for the testimonial carousel are hidden on mobile (`hidden md:flex`), but the dots remain small and hard to tap.

**Impact on UI/UX:** Mobile users have difficulty navigating testimonials. The dots are only 10px (2.5 * 4px) which is below the recommended 44x44px touch target size.

**Location:** `components/home/TestimonialsSection.tsx:112, 130-144`

**Suggested Improvement:**
```tsx
// Make dots larger for touch targets
<button
  className={cn(
    "w-4 h-4 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300",
    "min-w-[44px] min-h-[44px] flex items-center justify-center", // Touch target wrapper
    index === activeIndex ? "bg-primary w-10" : "bg-neutral-300"
  )}
/>

// Or show arrows on mobile too
<div className="flex items-center justify-between absolute ...">
```

---

### 6. Form Select Elements Missing Custom Styling

**Issue Description:** Native `<select>` elements in the contact form use inconsistent styling compared to other form inputs. They lack the dropdown chevron indicator and have browser-default appearance.

**Impact on UI/UX:** Visual inconsistency breaks the premium design language. Users may not recognize them as interactive dropdowns.

**Location:** `app/contact/page.tsx:317-341`

**Suggested Improvement:**
```tsx
// Add custom select styling
<div className="relative">
  <select className="w-full px-4 py-3 pr-10 bg-white border border-neutral-400 rounded-lg appearance-none">
    ...
  </select>
  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary pointer-events-none" />
</div>
```

---

### 7. Card Hover Effect Not Visible with Keyboard Navigation

**Issue Description:** Cards with `variant="hover"` only apply hover styles on mouse interaction. Keyboard focus doesn't trigger the lift effect.

**Impact on UI/UX:** Keyboard users miss visual feedback that the card is interactive/focused.

**Location:** `components/ui/Card.tsx:17`

**Suggested Improvement:**
```tsx
const variants = {
  hover: "shadow-soft hover:-translate-y-1 hover:shadow-medium focus-within:-translate-y-1 focus-within:shadow-medium cursor-pointer",
};
```

---

### 8. Process Timeline Connecting Line Behind Step Icons

**Issue Description:** The horizontal connecting line in the process timeline has a lower z-index than intended, but the icon circles don't have explicit z-index making the stacking order browser-dependent.

**Impact on UI/UX:** The animated gradient line may appear on top of the step icons in some rendering scenarios.

**Location:** `components/home/ProcessTimeline.tsx:54-62, 76`

**Suggested Improvement:**
```tsx
// Ensure line is behind icons
<div className="absolute top-16 left-0 right-0 h-0.5 bg-neutral-200 z-0">

// Ensure icons are above
<div className="relative inline-flex ... z-10">
```

---

## Medium Issues

### 9. Insufficient Color Contrast on Trust Indicator Text

**Issue Description:** The trust indicator bar uses `text-primary` on `bg-primary-50` background. While technically passing WCAG AA for large text, the small caption size (`text-caption`) may be difficult to read.

**Impact on UI/UX:** Users with visual impairments may struggle to read trust indicators, which are important for credibility.

**Location:** `components/layout/Navigation.tsx:54-64`

**Suggested Improvement:**
```tsx
// Use a higher contrast color
<span className="text-primary-700">{COMPANY.registration.sec}</span>
```

---

### 10. Footer Links Missing Hover Underline

**Issue Description:** Footer links only change color on hover but don't have an underline or other visual indicator that they're clickable links.

**Impact on UI/UX:** Users may not immediately recognize all footer items as clickable links, reducing discoverability.

**Location:** `components/layout/Footer.tsx:74-79`

**Suggested Improvement:**
```tsx
<Link
  href={link.href}
  className="text-body-sm text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors"
>
```

---

### 11. Stats Counter Animation Not Respecting Reduced Motion

**Issue Description:** The stats counter animations run regardless of user's motion preferences, which can cause discomfort for users with vestibular disorders.

**Impact on UI/UX:** Fails accessibility best practices for respecting user motion preferences.

**Location:** `components/home/StatsSection.tsx:58-80`

**Suggested Improvement:**
```tsx
// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

useEffect(() => {
  if (!isInView) return;
  if (prefersReducedMotion) {
    setCount(end); // Skip animation
    return;
  }
  // ... existing animation code
}, [isInView, end, duration, prefersReducedMotion]);
```

---

### 12. Button `asChild` Pattern Loses Loading and Icon Props

**Issue Description:** When using `asChild` prop on Button component, the `loading`, `leftIcon`, and `rightIcon` props are ignored because only the className is passed to the child.

**Impact on UI/UX:** Developers may expect these props to work with `asChild`, leading to inconsistent button appearances.

**Location:** `components/ui/Button.tsx:77-81`

**Suggested Improvement:**
Document this limitation clearly or enhance the implementation:
```tsx
// Either document the limitation:
/**
 * Note: When using asChild, loading, leftIcon, and rightIcon props are ignored.
 * Add icons directly to the child element.
 */

// Or implement full prop forwarding
if (asChild && isValidElement(children)) {
  const childProps = (children as ReactElement).props;
  return cloneElement(children as ReactElement, {
    className: cn(combinedClassName, childProps.className),
    children: (
      <>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : leftIcon}
        {childProps.children}
        {rightIcon && !loading && rightIcon}
      </>
    ),
    ...props,
  });
}
```

---

### 13. FAQ Accordion Missing ARIA Pattern

**Issue Description:** The FAQ accordion is missing the complete ARIA accordion pattern. While `aria-expanded` is present, `aria-controls` and `id` connections are missing.

**Impact on UI/UX:** Screen readers cannot announce the relationship between trigger and content panel.

**Location:** `app/faq/page.tsx:23-54`

**Suggested Improvement:**
```tsx
<button
  onClick={onToggle}
  aria-expanded={isOpen}
  aria-controls={`faq-panel-${id}`}
  id={`faq-trigger-${id}`}
>
  ...
</button>
<motion.div
  id={`faq-panel-${id}`}
  role="region"
  aria-labelledby={`faq-trigger-${id}`}
>
```

---

### 14. Contact Form Multi-Step Navigation Lacks Validation

**Issue Description:** The "Continue" button in the contact form allows progressing to the next step without validating current step fields.

**Impact on UI/UX:** Users can reach step 3 with empty fields, then must go back to fix errors. This creates a frustrating experience.

**Location:** `app/contact/page.tsx:220-223`

**Suggested Improvement:**
```tsx
const validateStep = async () => {
  const fields = {
    1: ['firstName', 'lastName', 'email', 'phone'],
    2: ['netWorth'],
    3: []
  }[currentStep];

  const isValid = await trigger(fields);
  if (isValid) nextStep();
};

<Button type="button" onClick={validateStep}>Continue</Button>
```

---

### 15. Service Section Image Placeholder Needs Alt Text Context

**Issue Description:** Service section images are currently placeholders with decorative gradient backgrounds and icons. If replaced with actual images, the alt text is missing.

**Impact on UI/UX:** Screen reader users won't understand the content of service images.

**Location:** `components/services/ServiceSection.tsx:93-106`

**Suggested Improvement:**
```tsx
// When adding actual images:
<Image
  src={service.image}
  alt={`Illustration representing ${service.title} services`}
  fill
  className="object-cover"
/>
```

---

## Minor Issues

### 16. Inconsistent Button Icon Spacing

**Issue Description:** Some buttons use `ml-2` for right icons while others rely on the base `gap-2`. This creates inconsistent spacing.

**Impact on UI/UX:** Subtle visual inconsistency that affects the polished feel of the interface.

**Locations:**
- `components/home/ServicesPreview.tsx:90` uses gap-2 (via Button base)
- `app/about/page.tsx` uses `ml-2` inline

**Suggested Improvement:**
Standardize on using the Button's built-in `rightIcon` prop or consistent inline spacing.

---

### 17. Mobile Navigation Menu Animation on Close

**Issue Description:** When the mobile menu closes, the backdrop and panel animate out simultaneously. The panel should finish closing before the backdrop fades for a more polished effect.

**Impact on UI/UX:** Minor polish issue that affects perceived quality.

**Location:** `components/layout/Navigation.tsx:128-147`

**Suggested Improvement:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2, delay: 0.1 }} // Add delay for backdrop
/>
```

---

### 18. Chart Tooltip Contrast Issue

**Issue Description:** Chart tooltips use light backgrounds with potentially light text on hover states.

**Impact on UI/UX:** May have readability issues in certain data scenarios.

**Location:** `components/tools/InvestmentCalculator.tsx:211-218`

**Suggested Improvement:**
```tsx
contentStyle={{
  backgroundColor: "white",
  border: "1px solid #E8DCC4",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(10, 36, 99, 0.1)",
  color: "#2B2D42", // Ensure text color is set
}}
```

---

### 19. Logo Missing Hover Effect

**Issue Description:** The logo in navigation has a `group` class but no visible hover effect is applied.

**Impact on UI/UX:** Users may not realize the logo is clickable to return home.

**Location:** `components/layout/Navigation.tsx:70-78`

**Suggested Improvement:**
```tsx
<Link href="/" className="flex-shrink-0 group">
  <div className="flex flex-col transition-opacity group-hover:opacity-80">
    ...
  </div>
</Link>
```

---

### 20. Portal Dashboard Demo Data Warning

**Issue Description:** The dashboard shows hardcoded demo data without any indication to users that this is sample data.

**Impact on UI/UX:** Users testing the site may be confused about whether data is real or demo.

**Location:** `app/portal/dashboard/page.tsx:32-51`

**Suggested Improvement:**
```tsx
// Add a demo banner
<div className="bg-accent-50 border border-accent-200 rounded-lg p-3 mb-6">
  <p className="text-body-sm text-accent-700">
    <strong>Demo Mode:</strong> This dashboard shows sample data for illustration purposes.
  </p>
</div>
```

---

## Spacing & Layout Issues

### 21. Inconsistent Section Padding

**Issue Description:** Some sections use `section-padding` (py-16 md:py-24 lg:py-32) while others use `section-padding-sm` (py-12 md:py-16 lg:py-20). The choice seems arbitrary rather than systematic.

**Impact on UI/UX:** Creates an uneven visual rhythm when scrolling through pages.

**Suggested Improvement:**
Establish clear rules:
- Hero sections: Custom padding (already handled)
- Primary content sections: `section-padding`
- CTA sections: `section-padding-sm`
- Between related content: `section-padding-sm`

---

### 22. Grid Gap Inconsistency

**Issue Description:** Service preview uses `gap-6 lg:gap-8` while other grids use `gap-8` or `gap-10`. There's no systematic approach.

**Impact on UI/UX:** Subtle visual inconsistency across page layouts.

**Suggested Improvement:**
Standardize grid gaps:
- Cards: `gap-6` (small), `gap-8` (medium)
- Sections: `gap-10` or `gap-12`
- Form elements: `gap-4` or `gap-6`

---

## Summary Statistics

| Severity | Count |
|----------|-------|
| Critical | 3 |
| Major | 5 |
| Medium | 7 |
| Minor | 5 |
| Spacing/Layout | 2 |
| **Total** | **22** |

---

## Recommended Priority Order

1. **Immediate** (Critical): Issues 1-3 - Navigation/header fixes
2. **High** (Major): Issues 4-8 - Accessibility and interaction fixes
3. **Medium**: Issues 9-15 - Enhancement and polish
4. **Low** (Minor): Issues 16-22 - Fine-tuning

---

## Testing Recommendations

After implementing fixes:
1. Test with keyboard-only navigation
2. Test with screen reader (VoiceOver/NVDA)
3. Test on various mobile devices and viewport sizes
4. Run Lighthouse accessibility audit
5. Test with reduced motion preference enabled
6. Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

*Report generated: January 2025*
*Reviewer: Claude Code Analysis*
