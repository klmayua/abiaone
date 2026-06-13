# 02_TARGET_STATE_MODEL

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Target State Model Complete
**Evidence:** All prior audits, consolidation evidence, and architecture principles

---

## 1. TARGET STATE VISION

ABIA ONE is a State Operating System — not a website, SaaS, or dashboard app. The target state eliminates all duplication, enforces single-source navigation, and delivers experiences before services before pages.

### 1.1 Architecture Principles

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| Experience First | Every user journey starts with an experience, not a page | MASTER_EXPERIENCE_MATRIX.md |
| Services Before Pages | Every page exists to deliver a service | 05_SERVICE_DECOMPOSITION.md |
| Single Source of Navigation | Header menu is the only global navigation | MASTER_NAVIGATION_MATRIX.md |
| Eliminate Duplication | No duplicate routes, CTAs, sidebars, or content | 01_PAGE_FAMILY_FORENSICS.md |
| Public Simplicity | Public pages have no dashboard navigation | RAW_SIDEBAR_CAPTURE.csv |
| Workspace Separation | Dashboard/workspace pages have sidebar; public pages do not | FINAL_NAVIGATION_MODEL.md |

### 1.2 Zero Assumption Policy

| Rule | Definition |
| :--- | :--- |
| Never determine page purpose from route name | Evidence required for every page classification |
| Never determine ownership from file name | Evidence required for every ownership assignment |
| Never determine service from component name | Evidence required for every service mapping |
| Never determine experience from folder name | Evidence required for every experience mapping |
| If evidence insufficient | Output INSUFFICIENT_EVIDENCE and stop |

---

## 2. TARGET STATE METRICS

| Metric | Current | Target | Reduction |
| :--- | :--- | :--- | :--- |
| Total Pages | 115 | 52 | 55% |
| Canonical Pages | 52 | 52 | 0% |
| Header Nav Items | 285 | 285 | 0% |
| Sidebar Items | 514 | ~100 | 81% |
| CTA Items | 1,708 | ~500 | 71% |
| Dashboards | 3 | 2 | 33% |
| Mobile Variants | ~30 | 0 | 100% |
| Iteration Variants | ~25 | 0 | 100% |
| Ministry Attribution Accuracy | ~60% | >95% | +35% |
| Agency Assignment Coverage | ~50% | >90% | +40% |
| Experiences | 12 | 12 | 0% |
| Services | 20 | 20 | 0% |
| Capabilities | 20 | 20 | 0% |
| Ministries | 14 | 14 | 0% |
| Agencies | 6 | 6+ | 0% |

---

## 3. TARGET STATE ARCHITECTURE

### 3.1 Experience Layer (Top)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    12 EXPERIENCES                                    │
│  discover | invest | live | work | build | learn |                  │
│  visit | secure | govern | serve | open | connect                   │
├─────────────────────────────────────────────────────────────────────┤
│                    20 SERVICES                                       │
│  Each experience has 1 primary service owner                        │
├─────────────────────────────────────────────────────────────────────┤
│                    20 CAPABILITIES                                   │
│  Each service delivers specific capabilities                        │
├─────────────────────────────────────────────────────────────────────┤
│                    20 OUTCOMES                                       │
│  Each capability produces measurable outcomes                       │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Page Layer (Middle)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    52 CANONICAL PAGES                                │
│  Every logical page has exactly 1 canonical route                   │
├─────────────────────────────────────────────────────────────────────┤
│                    0 MOBILE VARIANTS                                 │
│  Mobile variants become responsive CSS within canonical pages       │
├─────────────────────────────────────────────────────────────────────┤
│                    0 ITERATION VARIANTS                              │
│  Iteration variants (-2, -3) merged into canonical pages            │
├─────────────────────────────────────────────────────────────────────┤
│                    0 DUPLICATE ROUTES                                │
│  No duplicate routes for same content                               │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.3 Navigation Layer (Bottom)

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

## 4. TARGET STATE PAGE ARCHITECTURE

### 4.1 Page Categories

| Category | Pages | Purpose |
| :--- | :--- | :--- |
| Dashboard Pages | 2 | Executive oversight and MDA performance |
| Experience Pages | 15 | Experience-based navigation (12 experiences) |
| Ministry Portal Pages | 9 | Domain-specific ministry service aggregation |
| Service Sector Pages | 10 | Cross-ministry service delivery |
| Standalone Pages | 7 | Special-purpose standalone pages |
| Special Pages | 3 | Registry and documentation pages |
| Public Reporting Pages | 2 | Emergency and incident reporting |
| Diaspora Gateway | 1 | Diaspora investment portal |
| Utilities & Environment | 1 | Environmental utilities |
| State Archives | 1 | Historical archives |
| **TOTAL** | **52** | — |

### 4.2 Page Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Page, One Route | Every logical page has exactly 1 canonical route | CANONICAL_PAGE_MATRIX.md |
| One Page, One Owner | Every canonical page has exactly 1 ministry owner | FINAL_PAGE_OWNERSHIP_MODEL.md |
| One Page, One Primary CTA | Every page has exactly 1 primary CTA | MASTER_CTA_MATRIX.md |
| No Duplicate Routes | No duplicate routes for same content | 01_PAGE_FAMILY_FORENSICS.md |
| Responsive Design | Mobile variants become responsive CSS | 01_PAGE_FAMILY_FORENSICS.md |

---

## 5. TARGET STATE NAVIGATION ARCHITECTURE

### 5.1 Header Menu (Global)

| Label | Items | Purpose |
| :--- | :--- | :--- |
| Citizen Portal | ~57 | Public-facing citizen services |
| Security | ~57 | Emergency and security services |
| Governance | ~57 | Government transparency and oversight |
| Economy | ~57 | Investment, trade, and economic services |
| About | ~57 | State information and contact details |
| **TOTAL** | **285** | — |

**Governance:** Header menu is identical across all 52 canonical pages. No dynamic items. No role-based items. No page-specific items.

### 5.2 Sidebar (Dashboard/Workspace Only)

| Category | Items | Purpose |
| :--- | :--- | :--- |
| Dashboard Sections | ~10 | KPI cards, charts, filters |
| Admin Tools | ~5 | Settings, user management, reports |
| Quick Actions | ~3 | Common tasks, shortcuts |
| **TOTAL** | **~18** | — |

**Governance:** Sidebar only appears on dashboard/workspace pages. Sidebar contains ONLY items not in header menu. Maximum 20 items per dashboard.

### 5.3 Portal Directory (Overlay)

| Feature | Description |
| :--- | :--- |
| Quick Navigation | Floating overlay for fast page access |
| Search | Find pages by name or keyword |
| Categories | Grouped by experience or ministry |
| Availability | Visible on all public pages |

---

## 6. TARGET STATE CTA ARCHITECTURE

### 6.1 CTA Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Primary CTA | Every page has exactly 1 primary CTA (visually prominent) | MASTER_CTA_MATRIX.md |
| Secondary CTAs | Secondary CTAs use link/ghost button style | MASTER_CTA_MATRIX.md |
| Maximum 3 Per Section | No more than 3 CTAs per page section | MASTER_CTA_MATRIX.md |
| Consistent Text | CTA text is consistent across all pages | MASTER_CTA_MATRIX.md |

### 6.2 CTA Reduction

| Metric | Current | Target | Reduction |
| :--- | :--- | :--- | :--- |
| Total CTAs | 1,708 | ~500 | 71% |
| Primary CTAs Per Page | 3-5 | 1 | 80% |
| Header Duplicate CTAs | 265 | 0 | 100% |
| Sidebar Duplicate CTAs | 149 | 0 | 100% |
| Within-Page Duplicates | 42 | 0 | 100% |

---

## 7. TARGET STATE DASHBOARD ARCHITECTURE

### 7.1 Dashboard Structure

| Dashboard | Owner | Purpose | Access |
| :--- | :--- | :--- | :--- |
| Governor's Command Center | Governor's Office | Executive oversight, initiative tracking, directive issuance | Authenticated |
| MDA Performance (merged into Governor's Command Center) | Ministry of Digital Economy & Transformation | Ministry performance tracking, KPI monitoring | Authenticated |

**Note:** Home Dashboard (`/`) serves as platform entry point with dashboard-like layout but is primarily a navigation hub, not a data dashboard.

### 7.2 Dashboard Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Maximum 2 Dashboards | No more than 2 executive dashboards | FINAL_PLATFORM_BLUEPRINT.md |
| Authentication Required | All dashboards require authentication | RAW_DASHBOARD_CAPTURE.csv |
| Sidebar Required | All dashboards have sidebar navigation | FINAL_NAVIGATION_MODEL.md |
| KPI Consistency | Dashboard KPIs are consistent across views | MASTER_DASHBOARD_MATRIX.md |

---

## 8. TARGET STATE SERVICE ARCHITECTURE

### 8.1 Service Registry (20 Services)

| Service | Pages | Capabilities | Experiences | Ministry Owner |
| :--- | :--- | :--- | :--- | :--- |
| Emergency Dispatch & Response | 5 | 1 | secure_abia | Ministry of Security & Internal Affairs |
| Citizen Feedback Collection | 3 | 1 | connect_abia | Ministry of Digital Economy & Transformation |
| Financial Transparency | 5 | 1 | open_abia | Ministry of Finance |
| Digital Identity Management | 2 | 1 | serve_abia | Ministry of Digital Economy & Transformation |
| Investment Promotion | 4 | 1 | invest_abia | Ministry of Trade & Investment |
| Employment & Skills | 3 | 1 | work_abia | Ministry of Trade & Investment |
| Infrastructure Tracking | 5 | 1 | build_abia | Ministry of Works & Infrastructure |
| Agricultural Supply Chain | 4 | 1 | live_abia | Ministry of Agriculture |
| Health Service Delivery | 4 | 1 | live_abia | Ministry of Health |
| Trade & Commerce | 4 | 1 | invest_abia | Ministry of Trade & Investment |
| Environmental Monitoring | 3 | 1 | live_abia | Ministry of Environment |
| Digital Archives | 4 | 1 | discover_abia | Ministry of Information & Culture |
| Tourism Promotion | 3 | 1 | visit_abia | Ministry of Information & Culture |
| Education & Skills | 5 | 1 | learn_abia | Ministry of Education |
| Legal & Regulatory | 3 | 1 | serve_abia | Ministry of Justice |
| Social Welfare | 5 | 1 | serve_abia | Ministry of Humanitarian Affairs |
| Science & Technology | 2 | 1 | serve_abia | Ministry of Science & Technology |
| SME Growth Support | 4 | 1 | work_abia | Ministry of Trade & Investment |
| Government Service Portal | 4 | 1 | serve_abia | Ministry of Digital Economy & Transformation |
| Civil Service Management | 4 | 1 | govern_abia | Ministry of Digital Economy & Transformation |

### 8.2 Service Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Service, One Owner | Every service has exactly 1 ministry owner | 05_SERVICE_DECOMPOSITION.md |
| No Catch-All Services | "General Portal Services" decomposed into specific services | 05_SERVICE_DECOMPOSITION.md |
| Service Continuity | No service changes without evidence | 07_CONSOLIDATION_RISK_MATRIX.md |

---

## 9. TARGET STATE OWNERSHIP ARCHITECTURE

### 9.1 Ministry Ownership (14 Ministries)

| Ministry | Canonical Pages | Services | Experiences |
| :--- | :--- | :--- | :--- |
| Ministry of Digital Economy & Transformation | 15 | 2 | serve_abia, connect_abia |
| Ministry of Trade & Investment | 6 | 3 | invest_abia, work_abia |
| Ministry of Information & Culture | 5 | 3 | discover_abia, visit_abia |
| Ministry of Health | 4 | 1 | live_abia |
| Ministry of Agriculture | 3 | 1 | live_abia |
| Ministry of Works & Infrastructure | 4 | 1 | build_abia |
| Ministry of Security & Internal Affairs | 3 | 1 | secure_abia |
| Ministry of Humanitarian Affairs | 3 | 1 | serve_abia |
| Ministry of Environment | 3 | 1 | live_abia |
| Ministry of Finance | 2 | 1 | open_abia, govern_abia |
| Ministry of Justice | 2 | 1 | serve_abia |
| Ministry of Education | 2 | 1 | learn_abia |
| Ministry of Science & Technology | 2 | 1 | serve_abia |
| Governor's Office | 2 | 0 | govern_abia |

### 9.2 Agency Ownership (6 Agencies)

| Agency | Canonical Pages | Parent Ministry | Services |
| :--- | :--- | :--- | :--- |
| ABIA ONE Platform Team | 15 | Ministry of Digital Economy & Transformation | General Portal Services |
| GADA | 4 | Ministry of Works & Infrastructure | Greater Aba Development Coordination |
| ASEMA | 3 | Ministry of Security & Internal Affairs | Public Reporting System |
| ASPPB | 2 | Ministry of Finance | Tender Contracts Registry |
| ASIPA | 2 | Ministry of Trade & Investment | Investment Promotion Service |
| Civil Service Commission | 2 | Ministry of Digital Economy & Transformation | Department Portal Interface |

### 9.3 Ownership Governance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Page, One Owner | Every canonical page has exactly 1 ministry owner | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Ownership by Domain | Ownership assigned by domain expertise, not file location | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Agency Delegation | Ministries may delegate operational ownership to agencies | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Ownership Transfer | Ownership transfers require approval from both parties | FINAL_PAGE_OWNERSHIP_MODEL.md |

---

## 10. TARGET STATE IMPLEMENTATION PHASES

### Phase 1: Quick Wins (Week 1-2)

| Action | Impact | Effort | Risk |
| :--- | :--- | :--- | :--- |
| Remove 52 variant/iteration pages | HIGH | LOW | LOW |
| Remove 456 duplicate navigation items | HIGH | LOW | LOW |
| Remove 105 unjustified sidebars | HIGH | LOW | LOW |
| Designate 1 primary CTA per page | MEDIUM | LOW | LOW |
| Convert mobile variants to responsive CSS | MEDIUM | LOW | LOW |

### Phase 2: Content Merge (Week 3-4)

| Action | Impact | Effort | Risk |
| :--- | :--- | :--- | :--- |
| Merge iteration variants (-2, -3) into canonical pages | HIGH | LOW | LOW |
| Audit unique content in variants before deletion | MEDIUM | MEDIUM | LOW |
| Update internal links to canonical routes | MEDIUM | MEDIUM | LOW |

### Phase 3: Dashboard Consolidation (Week 5-6)

| Action | Impact | Effort | Risk |
| :--- | :--- | :--- | :--- |
| Merge MDA Performance into Governor's Command Center | MEDIUM | MEDIUM | MEDIUM |
| Update dashboard navigation | MEDIUM | LOW | LOW |
| Test authenticated access controls | HIGH | MEDIUM | LOW |

### Phase 4: Service Realignment (Week 7-8)

| Action | Impact | Effort | Risk |
| :--- | :--- | :--- | :--- |
| Re-assign MDET over-attributed pages to domain ministries | HIGH | MEDIUM | LOW |
| Create missing agency assignments | MEDIUM | LOW | LOW |
| Update ministry/agency ownership registry | MEDIUM | LOW | LOW |

---

## 11. TARGET STATE SUCCESS CRITERIA

| Criterion | Current | Target | Measurement |
| :--- | :--- | :--- | :--- |
| Page Count | 115 | 52 | Automated page scan |
| Navigation Duplication | 85% | <10% | Navigation audit |
| Primary CTAs Per Page | 3-5 | 1 | CTA audit |
| Mobile Variants | ~30 | 0 | File count |
| Ministry Attribution Accuracy | ~60% | >95% | Manual review |
| Agency Assignment Coverage | ~50% | >90% | Manual review |
| Sidebar on Public Pages | 105 | 0 | Automated check |
| Dashboard Count | 3 | 2 | Automated check |

---

## 12. TARGET STATE CONSTRAINTS

| Constraint | Definition | Evidence |
| :--- | :--- | :--- |
| Zero Regression | No removal of capabilities, merging of services, changing of navigation, deleting of routes, or changing of experiences without evidence | 07_CONSOLIDATION_RISK_MATRIX.md |
| Evidence Required | No changes based on personal preference | 07_CONSOLIDATION_RISK_MATRIX.md |
| Executive Approval | Dashboard consolidation requires Governor's Office approval | 07_CONSOLIDATION_RISK_MATRIX.md |
| Ownership Clarification | 6 UNKNOWN ownership assignments must be resolved before architecture redesign | 06_OWNERSHIP_CONFIDENCE_MATRIX.md |

---

**END OF TARGET STATE MODEL**
