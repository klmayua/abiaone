# 10_SIDEBAR_POLICY

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Sidebar Policy Complete
**Evidence:** MASTER_SIDEBAR_MATRIX.md, FINAL_NAVIGATION_MODEL.md, RAW_SIDEBAR_CAPTURE.csv, 03_SIDEBAR_OVERLAP_MATRIX.md

---

## 1. SIDEBAR POLICY OVERVIEW

- **Current Sidebar Items:** 514
- **Target Sidebar Items:** ~100
- **Reduction:** 81%
- **Duplicate Header Items:** 437 (85%)
- **Unjustified Sidebars:** 105 (91.3%)

---

## 2. SIDEBAR POLICY PRINCIPLES

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| Dashboard-Only | Sidebar only appears on dashboard/workspace pages | FINAL_NAVIGATION_MODEL.md |
| Public Simplicity | Public pages have no dashboard navigation | RAW_SIDEBAR_CAPTURE.csv |
| Unique Items Only | Sidebar contains ONLY items not in header menu | MASTER_SIDEBAR_MATRIX.md |
| Maximum 20 Items | Sidebar limited to 20 items per dashboard | FINAL_NAVIGATION_MODEL.md |
| No Duplication | 85% of current sidebar items duplicate header — eliminated | MASTER_SIDEBAR_MATRIX.md |

---

## 3. SIDEBAR GOVERNANCE RULES

### 3.1 Sidebar Presence Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Dashboard Pages | Sidebar PRESENT | FINAL_NAVIGATION_MODEL.md |
| Workspace Pages | Sidebar PRESENT | FINAL_NAVIGATION_MODEL.md |
| Public Pages | Sidebar NOT PRESENT | FINAL_NAVIGATION_MODEL.md |
| Experience Pages | Sidebar NOT PRESENT | FINAL_NAVIGATION_MODEL.md |
| Ministry Portal Pages | Sidebar NOT PRESENT | FINAL_NAVIGATION_MODEL.md |
| Service Sector Pages | Sidebar NOT PRESENT | FINAL_NAVIGATION_MODEL.md |

### 3.2 Sidebar Content Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Unique Items Only | Sidebar contains ONLY items not in header menu | MASTER_SIDEBAR_MATRIX.md |
| Maximum 20 Items | Sidebar limited to 20 items per dashboard | FINAL_NAVIGATION_MODEL.md |
| No Header Duplication | Sidebar items must not duplicate header menu | 03_SIDEBAR_OVERLAP_MATRIX.md |
| Dashboard-Specific | Sidebar items must be dashboard-specific | FINAL_NAVIGATION_MODEL.md |

### 3.3 Sidebar Navigation Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Dashboard Sections | Sidebar provides quick access to dashboard sections | FINAL_NAVIGATION_MODEL.md |
| Admin Tools | Sidebar provides access to admin tools | FINAL_NAVIGATION_MODEL.md |
| Quick Actions | Sidebar provides shortcuts to common tasks | FINAL_NAVIGATION_MODEL.md |
| NOT for Public Navigation | Sidebar is NOT a secondary header menu | FINAL_NAVIGATION_MODEL.md |

---

## 4. SIDEBAR ITEM CATEGORIES

### 4.1 Current State (514 Items)

| Category | Items | Percentage |
| :--- | :--- | :--- |
| Header Duplicate Items | 437 | 85% |
| Unique Sidebar Items | 77 | 15% |
| **Total** | **514** | **100%** |

### 4.2 Target State (~100 Items)

| Category | Items | Purpose |
| :--- | :--- | :--- |
| Dashboard Sections | ~10 | KPI cards, charts, filters |
| Admin Tools | ~5 | Settings, user management, reports |
| Quick Actions | ~3 | Common tasks, shortcuts |
| **Total** | **~18** | — |

### 4.3 Sidebar Reduction

| Metric | Current | Target | Reduction |
| :--- | :--- | :--- | :--- |
| Total Sidebar Items | 514 | ~100 | 81% |
| Duplicate Header Items | 437 | 0 | 100% |
| Unique Sidebar Items | 77 | ~100 | +30% |
| Sidebar on Public Pages | 105 | 0 | 100% |
| Sidebar on Dashboard Pages | 3 | 2 | 33% |

---

## 5. SIDEBAR REMOVAL CANDIDATES

### 5.1 Public Pages with Sidebar (65 Pages)

| Category | Pages | Justification |
| :--- | :--- | :--- |
| Experience Pages | 15 | No workspace/admin functions needed |
| Ministry Portal Pages | 9 | No workspace/admin functions needed |
| Service Sector Pages | 10 | No workspace/admin functions needed |
| Standalone Pages | 7 | No workspace/admin functions needed |
| Special Pages | 3 | No workspace/admin functions needed |
| Public Reporting Pages | 2 | No workspace/admin functions needed |
| Diaspora Gateway | 1 | No workspace/admin functions needed |
| Utilities & Environment | 1 | No workspace/admin functions needed |
| State Archives | 1 | No workspace/admin functions needed |
| Other Pages | 16 | No workspace/admin functions needed |
| **Total** | **65** | — |

### 5.2 Mobile Pages with Sidebar (30 Pages)

| Category | Pages | Justification |
| :--- | :--- | :--- |
| Mobile Variants | 30 | Mobile layout should not have sidebar |
| **Total** | **30** | — |

### 5.3 Variant Pages with Sidebar (22 Pages)

| Category | Pages | Justification |
| :--- | :--- | :--- |
| Iteration Variants | 22 | Variants being retired |
| **Total** | **22** | — |

### 5.4 Pages That KEEP Sidebar (12 Pages)

| Category | Pages | Justification |
| :--- | :--- | :--- |
| Dashboard Pages | 3 | Dashboard navigation required |
| Workspace Pages | 3 | Admin functions required |
| Command Center Pages | 3 | Emergency response functions required |
| Admin Pages | 3 | Admin functions required |
| **Total** | **12** | — |

---

## 6. SIDEBAR CHANGE WORKFLOW

### 6.1 Adding a Sidebar Item

1. Ministry requests new sidebar item
2. Platform Team validates against sidebar governance rules
3. Platform Team ensures item is not in header menu
4. Platform Team ensures item is dashboard-specific
5. Platform Team updates sidebar component
6. Platform Team tests across all affected pages
7. Platform Team deploys sidebar update

### 6.2 Removing a Sidebar Item

1. Ministry requests sidebar item removal
2. Platform Team confirms no active dependencies
3. Platform Team removes item from sidebar component
4. Platform Team tests across all affected pages
5. Platform Team deploys sidebar update

### 6.3 Modifying a Sidebar Item

1. Ministry requests sidebar item modification
2. Platform Team validates change against sidebar governance rules
3. Platform Team updates sidebar component
4. Platform Team tests across all affected pages
5. Platform Team deploys sidebar update

---

## 7. SIDEBAR COMPLIANCE

### 7.1 Compliance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Dashboard-Only | Sidebar must only appear on dashboard/workspace pages | FINAL_NAVIGATION_MODEL.md |
| Unique Items Only | Sidebar must contain only unique items (not in header) | MASTER_SIDEBAR_MATRIX.md |
| Maximum 20 Items | Sidebar limited to 20 items per dashboard | FINAL_NAVIGATION_MODEL.md |
| No Header Duplication | Sidebar items must not duplicate header menu | 03_SIDEBAR_OVERLAP_MATRIX.md |
| No Dead Links | No dead navigation links in sidebar | FINAL_NAVIGATION_MODEL.md |

### 7.2 Compliance Monitoring

| Monitoring Type | Frequency | Purpose |
| :--- | :--- | :--- |
| Automated Sidebar Presence Check | Weekly | Verify public pages do not have sidebar |
| Automated Header Duplication Check | Weekly | Verify sidebar items do not duplicate header |
| Sidebar Item Count Audit | Monthly | Verify sidebar does not exceed 20 items |
| Dead Link Scan | Monthly | Verify no dead navigation links in sidebar |

### 7.3 Compliance Violations

| Violation | Severity | Response |
| :--- | :--- | :--- |
| Sidebar on Public Page | MEDIUM | Remove within 1 week |
| Sidebar Duplication >10% | MEDIUM | Deduplicate within 1 week |
| Sidebar Item Count >20 | LOW | Reduce within 2 weeks |
| Dead Sidebar Link | LOW | Remove within 2 weeks |

---

## 8. SIDEBAR METRICS

### 8.1 Current State vs Target State

| Metric | Current | Target | Reduction |
| :--- | :--- | :--- | :--- |
| Total Sidebar Items | 514 | ~100 | 81% |
| Duplicate Header Items | 437 | 0 | 100% |
| Unique Sidebar Items | 77 | ~100 | +30% |
| Sidebar on Public Pages | 105 | 0 | 100% |
| Sidebar on Dashboard Pages | 3 | 2 | 33% |
| Average Items Per Sidebar | 4.5 | ~18 | +300% |

---

**END OF SIDEBAR POLICY**
