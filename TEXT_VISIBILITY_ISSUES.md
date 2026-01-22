# Text Visibility Issues Report

## Summary
Multiple text elements across the site have poor contrast due to incorrect color usage. The primary issue is that hero section headings and certain buttons use colors that don't provide sufficient contrast against their backgrounds.

---

## Critical Issues

### 1. Header "Contact Us" Button - NO VISIBLE TEXT
**Location:** Navigation header (all pages)
**File:** `components/layout/Navigation.tsx`
**Problem:** The accent/gold button in the header has text that is invisible - the text color appears to match or be too similar to the button background color.
**Impact:** Primary CTA is completely unreadable.
**Fix:** Change button text color to white or dark (primary) for contrast against gold background.

---

### 2. Hero Section Headings - POOR CONTRAST (ALL PAGES)
**Problem:** Hero headings on all pages use a muted/grayish color that provides very poor contrast against the dark blue gradient background (`bg-gradient-ocean`).

**Affected Pages & Headings:**
| Page | Heading | File |
|------|---------|------|
| Homepage | "Navigate Your Financial Future" | `components/home/HeroSection.tsx` |
| Contact | "Start a Conversation" | `app/contact/page.tsx` |
| Services | "Our Services" | `app/services/page.tsx` |
| About | "About Meridian Bay Capital" | `app/about/page.tsx` |
| FAQ | "Frequently Asked Questions" | `app/faq/page.tsx` |
| Insights | (likely same issue) | `app/insights/page.tsx` |
| Team | (likely same issue) | `app/team/page.tsx` |
| Resources | (likely same issue) | `app/resources/page.tsx` |
| Tools | (likely same issue) | `app/tools/page.tsx` |

**Current:** Text appears grayish/muted (possibly using `text-white/60` or similar opacity, or wrong color variable)
**Expected:** Pure white (`text-white`) for maximum contrast
**Fix:** Ensure all hero h1 headings use `text-white` class without opacity reduction.

---

### 3. Homepage "Explore Services" Button - POOR VISIBILITY
**Location:** Homepage hero section
**File:** `components/home/HeroSection.tsx`
**Problem:** The secondary/outline button has light text on a light-bordered button against the blue background, making it hard to read.
**Fix:** Ensure button text is white and border is clearly visible (e.g., `border-white text-white`).

---

## Major Issues

### 4. Homepage CTA Section - POOR CONTRAST
**Location:** "Ready to Start Your Journey?" section
**File:** `components/home/CTASection.tsx` (or similar)
**Problem:** The heading, description text, badges ("Fiduciary Duty", "SEC Registered"), and phone number all have very poor contrast against the gradient background.
**Fix:** Use white text colors for all content in this section.

---

### 5. Contact Page Form Section - LOW CONTRAST
**Location:** Contact page form
**File:** `app/contact/page.tsx`
**Problem:**
- "Your Contact Information" heading is barely visible
- Form labels ("First Name", "Last Name", "Email Address") have low contrast
**Current:** Using muted gray colors
**Fix:** Use darker text colors for form headings and labels (e.g., `text-text` or `text-text-secondary`).

---

### 6. Services Page Section Headings - LOW CONTRAST
**Location:** Services page content sections
**File:** `app/services/page.tsx` or `components/services/ServiceSection.tsx`
**Problem:** Section headings like "Wealth Planning" appear in a very light gray color.
**Fix:** Use proper heading colors (`text-text` class).

---

## Medium Issues

### 7. Footer Section Headers - POTENTIAL CONTRAST ISSUE
**Location:** Footer
**File:** `components/layout/Footer.tsx`
**Problem:** Section headers ("Services", "Company", "Resources") use a gold/accent color on dark blue background. While visible, contrast could be improved.
**Fix:** Consider using white for section headers, or ensure gold color has sufficient contrast.

---

## Root Cause Analysis

The issues appear to stem from:
1. **Incorrect text color classes** on hero sections - likely using opacity or muted variants instead of solid white
2. **Button variant styling** - the `accent` button variant may have text color matching background
3. **Inconsistent color application** in gradient background sections

---

## Files to Modify

1. `components/layout/Navigation.tsx` - Fix Contact Us button text color
2. `components/home/HeroSection.tsx` - Fix hero heading and Explore Services button
3. `components/home/CTASection.tsx` - Fix CTA section text colors
4. `app/contact/page.tsx` - Fix hero heading and form labels
5. `app/services/page.tsx` - Fix hero heading and section headings
6. `app/about/page.tsx` - Fix hero heading
7. `app/faq/page.tsx` - Fix hero heading
8. `app/insights/page.tsx` - Check and fix hero heading
9. `app/team/page.tsx` - Check and fix hero heading
10. `app/resources/page.tsx` - Check and fix hero heading
11. `app/tools/page.tsx` - Check and fix hero heading
12. `components/ui/Button.tsx` - Check accent variant text color

---

## Testing Checklist

After fixes:
- [ ] Header "Contact Us" button text is visible
- [ ] All hero headings are clearly readable (white on blue)
- [ ] "Explore Services" button is clearly visible
- [ ] CTA section text is readable
- [ ] Contact form labels are readable
- [ ] Services section headings are readable
- [ ] Run WCAG contrast checker on all pages

---

*Report generated: January 2025*
*Method: Visual browser inspection using Claude in Chrome*
