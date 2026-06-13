# PLATFORM CONSOLIDATION MODEL

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 17 Complete

---

## 1. CONSOLIDATION METHODOLOGY

Consolidation recommendations are based on:
- Canonical page analysis (52 canonical from 115 current)
- Page variant registry (63 retirement candidates)
- Navigation duplication analysis (85% sidebar-header overlap)
- CTA governance findings (multiple primary CTAs per page)
- Dashboard governance (3 dashboards, potential consolidation)
- No assumptions — every recommendation requires evidence

---

## 2. CONSOLIDATION CATEGORIES

### 2.1 Viewport Consolidation (Mobile → Responsive)
- **Impact:** 30 mobile variant pages → 0 (all become responsive variants of canonical pages)
- **Priority:** HIGH
- **Evidence:** RAW_PAGE_CAPTURE.csv shows ~30 pages with `-mobile` suffix
- **Approach:** Convert all `-mobile` pages to responsive CSS breakpoints within canonical pages
- **Risk:** LOW — Mobile variants are exact content copies with different layouts
- **Estimated Effort:** 2-3 weeks per ministry (CSS refactoring)

### 2.2 Iteration Consolidation (-2, -3 → Canonical)
- **Impact:** 25 iteration variant pages → 0
- **Priority:** HIGH
- **Evidence:** PAGE_VARIANT_REGISTRY.md confirms `-2`, `-3` are "iterative designer variations"
- **Approach:** Merge best elements from variants into canonical page; delete variants
- **Risk:** MEDIUM — Some variants may contain unique content not in canonical
- **Estimated Effort:** 1 week per page family (content audit + merge)

### 2.3 Navigation Consolidation (Sidebar → Header)
- **Impact:** 514 sidebar items → ~285 (85% reduction)
- **Priority:** CRITICAL
- **Evidence:** MASTER_SIDEBAR_MATRIX.md shows 85% of sidebar links duplicate header nav
- **Approach:** Remove duplicate sidebar links; retain only unique sidebar items (settings, profile, admin)
- **Risk:** LOW — Duplicate links provide no user value
- **Estimated Effort:** 1 day (single component edit)

### 2.4 CTA Consolidation (Multiple Primary → Single Primary)
- **Impact:** 3-5 primary CTAs per page → 1 primary CTA per page
- **Priority:** HIGH
- **Evidence:** MASTER_CTA_MATRIX.md shows multiple primary CTAs (green buttons) per page
- **Approach:** Designate 1 primary CTA per page; demote others to secondary/link style
- **Risk:** MEDIUM — May affect conversion rates if primary CTA is wrong choice
- **Estimated Effort:** 1 day per page (design review + CSS change)

### 2.5 Dashboard Consolidation (3 → 2)
- **Impact:** 3 dashboards → 2 (merge MDA Performance into Governor's Command Center)
- **Priority:** MEDIUM
- **Evidence:** MASTER_DASHBOARD_MATRIX.md shows `/mda-performance` is a subset of `/governors-command-center`
- **Approach:** Add MDA Performance as a tab/view within Governor's Command Center
- **Risk:** MEDIUM — Governor's Command Center may become overloaded
- **Estimated Effort:** 1-2 weeks (dashboard redesign)

---

## 3. CONSOLIDATION IMPACT ANALYSIS

### 3.1 Page Count Reduction

| Category | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Dashboard Pages | 3 | 2 | 33% |
| Serve Abia | 4 | 1 | 75% |
| Secure Abia | 5 | 1 | 80% |
| Connect Abia | 2 | 1 | 50% |
| Open Abia | 3 | 1 | 67% |
| Invest Abia | 3 | 2 | 33% |
| Build Abia | 4 | 2 | 50% |
| Learn Abia | 5 | 2 | 60% |
| Live Abia | 1 | 1 | 0% |
| Discover Abia | 3 | 1 | 67% |
| Visit Abia | 3 | 1 | 67% |
| Work Abia | 3 | 2 | 33% |
| Govern Abia | 1 | 1 | 0% |
| Ministry Portals | 21 | 9 | 57% |
| Service Sector | 19 | 10 | 47% |
| Standalone | 9 | 7 | 22% |
| Special | 5 | 3 | 40% |
| Public Reporting | 2 | 2 | 0% |
| Diaspora Gateway | 1 | 1 | 0% |
| Utilities | 1 | 1 | 0% |
| State Archives | 1 | 1 | 0% |
| **TOTAL** | **115** | **52** | **55%** |

### 3.2 Navigation Item Reduction

| Navigation Type | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Header Menu Items | 285 | 285 | 0% |
| Sidebar Items | 514 | ~100 | 81% |
| CTA Items | 1,708 | ~500 | 71% |
| **Total Navigation** | **2,507** | **~885** | **65%** |

### 3.3 Code Reduction Estimate

| Category | Current Files | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Page Components | 115 | 52 | 55% |
| Mobile Variants | ~30 | 0 | 100% |
| Iteration Variants | ~25 | 0 | 100% |
| **Total Components** | **~170** | **52** | **69%** |

---

## 4. CONSOLIDATION RISK ASSESSMENT

### 4.1 Low Risk Consolidations
- Viewport consolidation (mobile → responsive): LOW risk, HIGH impact
- Navigation consolidation (sidebar dedup): LOW risk, HIGH impact
- Iteration consolidation (-2, -3 → canonical): MEDIUM risk, HIGH impact

### 4.2 Medium Risk Consolidations
- CTA consolidation (multiple primary → single primary): MEDIUM risk, MEDIUM impact
- Dashboard consolidation (3 → 2): MEDIUM risk, MEDIUM impact

### 4.3 High Risk Consolidations
- Ministry portal consolidation (9 → fewer): HIGH risk, LOW impact (not recommended)

---

## 5. CONSOLIDATION SEQUENCE

### Phase 1: Quick Wins (Week 1-2)
1. Navigation sidebar dedup (85% reduction in sidebar items)
2. CTA primary designation (1 primary CTA per page)
3. Mobile variant deletion (30 pages → responsive CSS)

### Phase 2: Content Merge (Week 3-4)
4. Iteration variant merge (-2, -3 → canonical)
5. Content audit for unique elements in variants

### Phase 3: Dashboard Consolidation (Week 5-6)
6. MDA Performance → tab within Governor's Command Center
7. Dashboard navigation update

### Phase 4: Service Realignment (Week 7-8)
8. Re-assign MDET over-attributed pages to domain ministries
9. Create missing agency assignments for education, health, agriculture

---

## 6. CLEANUP PRIORITY MATRIX

| Priority | Action | Impact | Effort | Risk | Timeline |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P0 | Navigation sidebar dedup | HIGH | LOW | LOW | Week 1 |
| P0 | CTA primary designation | HIGH | LOW | LOW | Week 1 |
| P1 | Mobile variant → responsive | HIGH | MEDIUM | LOW | Week 1-2 |
| P1 | Iteration variant merge | HIGH | MEDIUM | MEDIUM | Week 2-3 |
| P2 | Dashboard consolidation | MEDIUM | HIGH | MEDIUM | Week 4-5 |
| P2 | Ministry page re-assignment | MEDIUM | HIGH | LOW | Week 5-6 |
| P3 | Agency creation (education, health, agriculture) | LOW | HIGH | LOW | Week 6-8 |

---

## 7. CONSOLIDATION SUCCESS METRICS

| Metric | Current | Target | Measurement |
| :--- | :--- | :--- | :--- |
| Total Pages | 115 | 52 | Page count |
| Sidebar Navigation Items | 514 | ~100 | Navigation item count |
| CTA Items | 1,708 | ~500 | CTA count |
| Primary CTAs Per Page | 3-5 | 1 | CTA audit |
| Mobile Variants | ~30 | 0 | File count |
| Iteration Variants | ~25 | 0 | File count |
| Code Components | ~170 | 52 | Component count |

---

## 8. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Evidence Inventory | **COMPLETE** |
| Phase 02: Evidence Completeness | **COMPLETE** |
| Phase 03: Visual Verification | **CANCELLED** |
| Phase 04: Service Registry | **COMPLETE** |
| Phase 05: Capability Registry | **COMPLETE** |
| Phase 06: Outcome Registry | **COMPLETE** |
| Phase 07: Experience Model | **COMPLETE** |
| Phase 08: Page Semantic Mapping | **COMPLETE** |
| Phase 09: Navigation Governance | **COMPLETE** |
| Phase 10: CTA Governance | **COMPLETE** |
| Phase 11: Sidebar Governance | **COMPLETE** |
| Phase 12: Dashboard Governance | **COMPLETE** |
| Phase 13: Ministry Ownership | **COMPLETE** |
| Phase 14: Agency Ownership | **COMPLETE** |
| Phase 15: Canonical Structure | **COMPLETE** |
| Phase 16: Platform Taxonomy | **COMPLETE** |
| Phase 17: Consolidation Model | **COMPLETE** |
| Phase 18: Executive Blueprint | PENDING |
