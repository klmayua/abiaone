# 08_WORKSPACE_ARCHITECTURE

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Workspace Architecture Complete
**Evidence:** FINAL_NAVIGATION_MODEL.md, FINAL_PAGE_OWNERSHIP_MODEL.md, CANONICAL_PAGE_MATRIX.md, RAW_SIDEBAR_CAPTURE.csv

---

## 1. WORKSPACE ARCHITECTURE OVERVIEW

- **Total Workspace Pages:** 3 (5.8% of 52 canonical pages)
- **Access Model:** Authentication required
- **Sidebar Presence:** YES
- **Header Menu:** Present (identical across all workspace pages)

---

## 2. WORKSPACE PRINCIPLES

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| Workspace Separation | Dashboard/workspace pages have sidebar; public pages do not | FINAL_NAVIGATION_MODEL.md |
| Authentication Required | All workspace pages require authentication | RAW_DASHBOARD_CAPTURE.csv |
| Sidebar Required | All workspace pages have sidebar navigation | FINAL_NAVIGATION_MODEL.md |
| Dashboard Navigation | Sidebar provides quick access to dashboard sections | FINAL_NAVIGATION_MODEL.md |

---

## 3. WORKSPACE PAGE CATEGORIES

### 3.1 Dashboard Pages (2)

| Dashboard | Route | Owner | Purpose | Access |
| :--- | :--- | :--- | :--- | :--- |
| Home Dashboard | `/` | Ministry of Digital Economy & Transformation | Platform entry point | Authenticated |
| Governor's Command Center | `/governors-command-center` | Governor's Office | Executive oversight | Authenticated |

### 3.2 MDA Performance (Merged)

| Dashboard | Route | Owner | Purpose | Access |
| :--- | :--- | :--- | :--- | :--- |
| MDA Performance | `/mda-performance` | Ministry of Digital Economy & Transformation | Ministry performance tracking | Authenticated |

**Note:** MDA Performance will be merged into Governor's Command Center as a tab. This requires executive approval.

---

## 4. WORKSPACE PAGE LAYOUT

### 4.1 Standard Workspace Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GLOBAL HEADER MENU                                │
│         5 Labels × ~57 items each = 285 total items                │
├──────────────┬──────────────────────────────────────────────────────┤
│              │                    PAGE CONTENT                       │
│   SIDEBAR    │         Dashboard KPIs → Charts → Filters            │
│   (~18)      │         → Data Tables → Actions                      │
│              │                                                      │
├──────────────┴──────────────────────────────────────────────────────┤
│                    FOOTER                                            │
│         Contact Information → Copyright                             │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 Workspace Page Components

| Component | Description | Governance |
| :--- | :--- | :--- |
| Header Menu | Global navigation (285 items) | Identical across all pages |
| Sidebar | Dashboard-specific navigation (~18 items) | Unique items only, not in header |
| Page Content | Dashboard KPIs, charts, filters | Authenticated content |
| Footer | Contact information, copyright | Consistent across all pages |

---

## 5. WORKSPACE SIDEBAR ARCHITECTURE

### 5.1 Sidebar Purpose

| Purpose | Description | Evidence |
| :--- | :--- | :--- |
| Dashboard Navigation | Quick access to dashboard sections and KPIs | FINAL_NAVIGATION_MODEL.md |
| Admin Navigation | Ministry-specific admin tools and settings | FINAL_NAVIGATION_MODEL.md |
| NOT for Public Navigation | Sidebar is NOT a secondary header menu | FINAL_NAVIGATION_MODEL.md |

### 5.2 Sidebar Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Dashboard-Only | Sidebar only appears on dashboard/workspace pages | FINAL_NAVIGATION_MODEL.md |
| Unique Items Only | Sidebar contains ONLY items not in header menu | FINAL_NAVIGATION_MODEL.md |
| Maximum 20 Items | Sidebar limited to 20 items per dashboard | FINAL_NAVIGATION_MODEL.md |
| No Duplication | 85% of current sidebar items duplicate header — eliminated | MASTER_SIDEBAR_MATRIX.md |

### 5.3 Sidebar Item Categories (Post-Consolidation)

| Category | Items | Purpose |
| :--- | :--- | :--- |
| Dashboard Sections | ~10 | KPI cards, charts, filters |
| Admin Tools | ~5 | Settings, user management, reports |
| Quick Actions | ~3 | Common tasks, shortcuts |
| **TOTAL** | **~18** | — |

---

## 6. WORKSPACE CTA GOVERNANCE

### 6.1 CTA Rules for Workspace Pages

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Primary CTA | Every page has exactly 1 primary CTA (visually prominent) | MASTER_CTA_MATRIX.md |
| Secondary CTAs | Secondary CTAs use link/ghost button style | MASTER_CTA_MATRIX.md |
| Maximum 3 Per Section | No more than 3 CTAs per page section | MASTER_CTA_MATRIX.md |
| Dashboard-Specific | CTAs are dashboard-specific actions | MASTER_DASHBOARD_MATRIX.md |

### 6.2 CTA Reduction on Workspace Pages

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Total CTAs on Workspace Pages | ~50 | ~15 | 70% |
| Primary CTAs Per Page | 3-5 | 1 | 80% |

---

## 7. WORKSPACE NAVIGATION GOVERNANCE

### 7.1 Navigation Rules for Workspace Pages

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Header Menu + Sidebar | Workspace pages have both header menu and sidebar | FINAL_NAVIGATION_MODEL.md |
| Sidebar Uniqueness | Sidebar contains only unique items (not in header) | FINAL_NAVIGATION_MODEL.md |
| No Portal Directory | Workspace pages do NOT have portal directory | FINAL_NAVIGATION_MODEL.md |
| No Dead Links | No dead navigation links (404 errors) | FINAL_NAVIGATION_MODEL.md |

### 7.2 Navigation on Workspace Pages

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Header Items | 285 | 285 | 0% |
| Sidebar Items on Workspace Pages | 514 | ~18 | 96% |
| **Total Navigation on Workspace Pages** | **~799** | **~303** | **62%** |

---

## 8. WORKSPACE AUTHENTICATION

### 8.1 Authentication Requirements

| Requirement | Description | Evidence |
| :--- | :--- | :--- |
| Authentication Required | All workspace pages require authentication | RAW_DASHBOARD_CAPTURE.csv |
| Role-Based Access | Different users see different dashboard sections | FINAL_NAVIGATION_MODEL.md |
| Session Management | Active session required for workspace access | FINAL_NAVIGATION_MODEL.md |

### 8.2 Authentication Flow

1. User navigates to workspace page
2. System checks authentication status
3. If unauthenticated → redirect to login
4. If authenticated → grant access to workspace
5. System loads sidebar navigation
6. System loads dashboard content

---

## 9. WORKSPACE COMPLIANCE

### 9.1 Compliance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Authentication Required | All workspace pages must require authentication | RAW_DASHBOARD_CAPTURE.csv |
| Sidebar Required | All workspace pages must have sidebar | FINAL_NAVIGATION_MODEL.md |
| Header Consistency | Header menu must be identical across all workspace pages | FINAL_NAVIGATION_MODEL.md |
| Sidebar Uniqueness | Sidebar must contain only unique items (not in header) | FINAL_NAVIGATION_MODEL.md |
| No Dead Links | No dead navigation links on workspace pages | FINAL_NAVIGATION_MODEL.md |

### 9.2 Compliance Monitoring

| Monitoring Type | Frequency | Purpose |
| :--- | :--- | :--- |
| Automated Authentication Check | Weekly | Verify workspace pages require authentication |
| Automated Sidebar Check | Weekly | Verify workspace pages have sidebar |
| Automated Header Consistency Check | Weekly | Verify header menu identical across all workspace pages |
| Dead Link Scan | Monthly | Verify no dead navigation links on workspace pages |

---

**END OF WORKSPACE ARCHITECTURE**
