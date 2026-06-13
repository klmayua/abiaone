# FINAL NAVIGATION MODEL

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 18 Complete — Executive Navigation

---

## 1. NAVIGATION ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GLOBAL HEADER MENU                                │
│         5 Labels × ~57 items each = 285 total items                │
│         IDENTICAL across all 52 canonical pages                     │
├─────────────────────────────────────────────────────────────────────┤
│                    DASHBOARD SIDEBAR                                 │
│         ~100 items (post-consolidation)                             │
│         ONLY on dashboard/workspace pages                           │
├─────────────────────────────────────────────────────────────────────┤
│                    PORTAL DIRECTORY OVERLAY                          │
│         Floating directory for quick navigation                     │
│         Available on all public pages                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. HEADER MENU STRUCTURE

### 2.1 Header Menu Labels
| Label | Items | Purpose |
| :--- | :--- | :--- |
| Citizen Portal | ~57 | Public-facing citizen services |
| Security | ~57 | Emergency and security services |
| Governance | ~57 | Government transparency and oversight |
| Economy | ~57 | Investment, trade, and economic services |
| About | ~57 | State information and contact details |
| **TOTAL** | **285** | — |

### 2.2 Header Menu Governance Rules
1. **Identical across all pages:** Header menu never changes regardless of page
2. **No dynamic items:** All 285 items are hardcoded in the navigation component
3. **No role-based items:** Same navigation for all users (authenticated or public)
4. **No page-specific items:** Navigation is globally consistent

---

## 3. SIDEBAR NAVIGATION (Post-Consolidation)

### 3.1 Sidebar Purpose
- **Dashboard Navigation:** Quick access to dashboard sections and KPIs
- **Admin Navigation:** Ministry-specific admin tools and settings
- **NOT for public navigation:** Sidebar is NOT a secondary header menu

### 3.2 Sidebar Governance Rules
1. **Dashboard-only:** Sidebar only appears on dashboard/workspace pages
2. **Public pages:** No sidebar on public-facing pages
3. **Unique items only:** Sidebar contains ONLY items not in header menu
4. **Maximum 20 items:** Sidebar limited to 20 items per dashboard
5. **No duplication:** 85% of current sidebar items duplicate header — eliminated

### 3.3 Sidebar Item Categories (Post-Consolidation)
| Category | Items | Purpose |
| :--- | :--- | :--- |
| Dashboard Sections | ~10 | KPI cards, charts, filters |
| Admin Tools | ~5 | Settings, user management, reports |
| Quick Actions | ~3 | Common tasks, shortcuts |
| **TOTAL** | **~18** | — |

---

## 4. PORTAL DIRECTORY OVERLAY

### 4.1 Portal Directory Purpose
- **Quick Navigation:** Floating overlay for fast page access
- **Search:** Find pages by name or keyword
- **Categories:** Grouped by experience or ministry
- **Available on all public pages:** Universal navigation tool

### 4.2 Portal Directory Governance Rules
1. **Always available:** Floating button visible on all public pages
2. **Searchable:** All 52 canonical pages indexed
3. **Categorized:** Pages grouped by experience or ministry
4. **No duplication:** Does not replace header menu; supplements it

---

## 5. NAVIGATION ITEM AUDIT

### 5.1 Current State (Pre-Consolidation)
| Navigation Type | Items | Duplication Rate |
| :--- | :--- | :--- |
| Header Menu | 285 | 0% (unique items) |
| Sidebar | 514 | 85% duplicate header |
| CTA | 1,708 | N/A (CTAs, not navigation) |
| **Total Navigation** | **2,507** | — |

### 5.2 Target State (Post-Consolidation)
| Navigation Type | Items | Duplication Rate |
| :--- | :--- | :--- |
| Header Menu | 285 | 0% |
| Sidebar | ~100 | 0% (only unique items) |
| CTA | ~500 | N/A |
| **Total Navigation** | **~885** | — |

### 5.3 Navigation Reduction
| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Header Items | 285 | 285 | 0% |
| Sidebar Items | 514 | ~100 | 81% |
| CTA Items | 1,708 | ~500 | 71% |
| **Total** | **2,507** | **~885** | **65%** |

---

## 6. NAVIGATION GOVERNANCE COMPLIANCE

### 6.1 Compliance Rules
- Header menu must be identical across all 52 canonical pages
- Sidebar must only appear on dashboard/workspace pages
- Sidebar must contain only unique items (not in header)
- CTA count per page must not exceed 3 (1 primary + 2 secondary)
- No dead navigation links (404 errors)

### 6.2 Compliance Monitoring
- **Weekly:** Automated header consistency check
- **Weekly:** Automated sidebar presence check (public pages must not have sidebar)
- **Monthly:** CTA count audit per page
- **Monthly:** Dead link scan

### 6.3 Compliance Violations
| Violation | Severity | Response |
| :--- | :--- | :--- |
| Header inconsistency | HIGH | Fix within 24 hours |
| Sidebar on public page | MEDIUM | Remove within 1 week |
| Sidebar duplication >10% | MEDIUM | Deduplicate within 1 week |
| CTA count >3 per page | LOW | Reduce within 2 weeks |
| Dead navigation link | LOW | Remove within 2 weeks |

---

## 7. NAVIGATION CHANGE WORKFLOW

### 7.1 Adding a Navigation Item
1. Ministry requests new navigation item
2. Platform Team validates against experience model
3. Platform Team assigns to appropriate navigation type (header/sidebar/CTA)
4. Platform Team updates navigation component
5. Platform Team tests across all 52 canonical pages
6. Platform Team deploys navigation update

### 7.2 Removing a Navigation Item
1. Ministry requests navigation item removal
2. Platform Team confirms no active dependencies
3. Platform Team removes item from navigation component
4. Platform Team tests across all 52 canonical pages
5. Platform Team deploys navigation update

### 7.3 Modifying a Navigation Item
1. Ministry requests navigation item modification
2. Platform Team validates change against governance rules
3. Platform Team updates navigation component
4. Platform Team tests across all 52 canonical pages
5. Platform Team deploys navigation update

---

## 8. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01-17 | **COMPLETE** |
| Phase 18: Executive Blueprint | **COMPLETE** |
