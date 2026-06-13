# FINAL PLATFORM BLUEPRINT

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 18 Complete — Executive Blueprint

---

## 1. PLATFORM IDENTITY

- **Platform Name:** ABIA ONE
- **Platform Type:** State Operating System (NOT a website, SaaS, or dashboard app)
- **Platform Purpose:** Unified digital interface for all Abia State government services, dashboards, and citizen experiences
- **Platform Owner:** Ministry of Digital Economy & Transformation
- **Platform Operator:** ABIA ONE Platform Team

---

## 2. PLATFORM ARCHITECTURE SUMMARY

| Layer | Count | Purpose |
| :--- | :--- | :--- |
| Executive Dashboards | 2 | Governor's oversight and MDA performance |
| Ministry Portals | 9 | Domain-specific ministry service aggregation |
| Service Sector Pages | 10 | Cross-ministry service delivery |
| Citizen Experience Pages | 12 | Experience-based navigation (12 experiences) |
| Standalone Pages | 7 | Special-purpose standalone pages |
| Registry Pages | 5 | Data listing and transparency |
| Public Reporting Pages | 2 | Emergency and incident reporting |
| **Total Canonical Pages** | **52** | — |

---

## 3. PLATFORM METRICS

### 3.1 Current State (Pre-Consolidation)
- Total Pages: 115
- Canonical Pages: 52 (63 are variants)
- Header Navigation Items: 285
- Sidebar Navigation Items: 514
- CTA Items: 1,708
- Dashboards: 3
- Ministries: 14
- Agencies: 6
- Experiences: 12
- Services: 20
- Capabilities: 20

### 3.2 Target State (Post-Consolidation)
- Total Pages: 52 (55% reduction)
- Canonical Pages: 52
- Header Navigation Items: 285 (no change)
- Sidebar Navigation Items: ~100 (81% reduction)
- CTA Items: ~500 (71% reduction)
- Dashboards: 2 (33% reduction)
- Ministries: 14 (no change)
- Agencies: 6+ (potential additions for education, health, agriculture)
- Experiences: 12 (no change)
- Services: 20 (no change)
- Capabilities: 20 (no change)

---

## 4. PLATFORM GOVERNANCE PRINCIPLES

### 4.1 Zero Assumption Policy
- Never determine page purpose from route name
- Never determine ownership from file name
- Never determine service from component name
- Never determine experience from folder name
- Every classification requires evidence

### 4.2 Evidence-Based Governance
- All analysis uses raw CSV evidence (115 pages, 285 nav items, 514 sidebar items, 1,708 CTAs, 3 dashboards)
- No recommendations without evidence
- No assumptions about previous audit findings

### 4.3 Canonical Page Model
- Every logical page has exactly 1 canonical route
- Mobile variants become responsive CSS within canonical pages
- Iteration variants (-2, -3) are merged into canonical pages
- No duplicate routes for same content

### 4.4 Navigation Governance
- Global header menu is identical across all pages (285 items)
- Sidebar is RETAINED on dashboard/workspace pages only
- Sidebar is REMOVED from public-facing pages
- 85% of sidebar items duplicate header nav — eliminated

### 4.5 CTA Governance
- Every page has exactly 1 primary CTA (visually prominent)
- Secondary CTAs use link/ghost button style
- No more than 3 CTAs per page section
- CTA text is consistent across all pages

---

## 5. PLATFORM EXPERIENCE MAP

| Experience | Purpose | Canonical Pages | Primary Service |
| :--- | :--- | :--- | :--- |
| discover_abia | Public tourism, cultural archive, heritage | 1 | Digital Archives Service |
| invest_abia | Marketplace for commercial and investment projects | 2 | Investment Promotion Service |
| live_abia | Information portal for housing, sanitation, healthcare | 1 | Health Service |
| work_abia | Employment listings, civil service job portal | 2 | Jobs Service |
| build_abia | Infrastructure progress, land registries, planning | 2 | Greater Aba Development Coordination |
| learn_abia | Educational tools, school registries, AI Academy | 2 | Education Service |
| visit_abia | Travel advisories, hotels, transport, local tours | 1 | Tourism Service |
| secure_abia | Intelligence dashboards, security logs, incident reporting | 1 | Public Reporting System |
| govern_abia | Command centers, civil service scorecards, performance | 1 | Department Portal Interface |
| serve_abia | Department portals, GADA citizen workspace, tax tools | 1 | General Portal Services |
| open_abia | State transparency logs, budget details, audit documents | 1 | Transparency Service |
| connect_abia | Engagement forums, suggestion boxes, support desk | 1 | General Portal Services |

---

## 6. PLATFORM SERVICE ARCHITECTURE

| Service | Ministry Owner | Agency Owner | Pages |
| :--- | :--- | :--- | :--- |
| General Portal Services | Ministry of Digital Economy & Transformation | ABIA ONE Platform Team | 38 |
| Department Portal Interface | Ministry of Digital Economy & Transformation | Civil Service Commission | 3 |
| Public Reporting System | Ministry of Security & Internal Affairs | ASEMA | 7 |
| Tender Contracts Registry | Ministry of Finance | ASPPB | 3 |
| Greater Aba Development Coordination | Ministry of Works & Infrastructure | GADA | 7 |
| Investment Promotion Service | Ministry of Trade & Investment | ASIPA | 3 |
| Health Service | Ministry of Health | — | 7 |
| Agriculture Service | Ministry of Agriculture | — | 6 |
| Education Service | Ministry of Education | — | 4 |
| Commerce & Trade Service | Ministry of Trade & Investment | — | 5 |
| Environment Service | Ministry of Environment | — | 4 |
| Digital Archives Service | Ministry of Information & Culture | — | 3 |
| Tourism Service | Ministry of Information & Culture | — | 3 |
| Legal Service | Ministry of Justice | — | 3 |
| Social Welfare Service | Ministry of Humanitarian Affairs | — | 5 |
| Science & Technology Service | Ministry of Science & Technology | — | 2 |
| SME Support Service | Ministry of Trade & Investment | — | 3 |
| Jobs Service | Ministry of Trade & Investment | — | 2 |
| Citizen Identity Service | Ministry of Digital Economy & Transformation | — | 2 |
| News & Press Center | Ministry of Information & Culture | — | 1 |

---

## 7. PLATFORM DASHBOARD ARCHITECTURE

| Dashboard | Owner | Purpose | Access |
| :--- | :--- | :--- | :--- |
| Governor's Command Center | Governor's Office | Executive oversight, initiative tracking, directive issuance | Authenticated |
| MDA Performance Dashboard | Ministry of Digital Economy & Transformation | Ministry performance tracking, KPI monitoring | Authenticated |

**Note:** Home Dashboard (`/`) serves as platform entry point with dashboard-like layout but is primarily a navigation hub, not a data dashboard.

---

## 8. PLATFORM CONSOLIDATION ROADMAP

### Week 1-2: Quick Wins
- [ ] Remove duplicate sidebar navigation items (85% reduction)
- [ ] Designate 1 primary CTA per page
- [ ] Convert mobile variants to responsive CSS

### Week 3-4: Content Merge
- [ ] Merge iteration variants (-2, -3) into canonical pages
- [ ] Audit unique content in variants before deletion
- [ ] Update internal links to canonical routes

### Week 5-6: Dashboard Consolidation
- [ ] Merge MDA Performance into Governor's Command Center as tab
- [ ] Update dashboard navigation
- [ ] Test authenticated access controls

### Week 7-8: Service Realignment
- [ ] Re-assign MDET over-attributed pages to domain ministries
- [ ] Create missing agency assignments
- [ ] Update ministry/agency ownership registry

---

## 9. PLATFORM SUCCESS CRITERIA

| Criterion | Current | Target | Measurement |
| :--- | :--- | :--- | :--- |
| Page Count | 115 | 52 | Automated page scan |
| Navigation Duplication | 85% | <10% | Navigation audit |
| Primary CTAs Per Page | 3-5 | 1 | CTA audit |
| Mobile Variants | ~30 | 0 | File count |
| Ministry Attribution Accuracy | ~60% | >95% | Manual review |
| Agency Assignment Coverage | ~50% | >90% | Manual review |

---

## 10. PHASE COMPLETION STATUS

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
| Phase 18: Executive Blueprint | **COMPLETE** |
