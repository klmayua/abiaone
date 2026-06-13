# AGENCY OWNERSHIP MODEL

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 14 Complete

---

## 1. AGENCY OWNERSHIP METHODOLOGY

Agency ownership is determined by cross-referencing:
- `agency_relationship` field from prior PAGE_OWNERSHIP_REGISTRY.md
- `Agency Owner` field from SERVICE_REGISTRY.md (5 core services)
- Service-to-page mappings from SERVICE_REGISTRY.md
- Page route and title analysis from PAGE_CONTENT_FORENSICS.md
- No assumptions made — every assignment requires evidence

---

## 2. AUTHORITATIVE AGENCY REGISTRY

### Agency 1: ABIA ONE Platform Team
- **Agency Code:** A1PT
- **Parent Ministry:** Ministry of Digital Economy & Transformation
- **Page Count:** 38 pages (inherited from MDET)
- **Services Owned:** 1 (General Portal Services)
- **Capabilities Supported:** 3 (Citizen Feedback Collection, Digital Identity Management, Performance Monitoring & Analytics)
- **Experience Alignment:** serve_abia, connect_abia
- **Supporting Pages (Evidence):** All pages with `agency_relationship: State Government` under MDET ownership
- **Governance Notes:** Platform-level agency; manages the ABIA ONE portal infrastructure itself. All pages attributed to "State Government" in prior audit map to this agency.

### Agency 2: Abia State Emergency Management Agency (ASEMA)
- **Agency Code:** ASEMA
- **Parent Ministry:** Ministry of Security & Internal Affairs
- **Page Count:** 7 pages
- **Services Owned:** 1 (Public Reporting System)
- **Capabilities Supported:** 1 (Emergency Dispatch & Response)
- **Experience Alignment:** secure_abia
- **Supporting Pages (Evidence):** `/secure-abia`, `/secure-abia-2`, `/secure-abia-3`, `/secure-abia-mobile`, `/secure-abia-mobile-2`, `/public-reporting`, `/emergency-response`
- **Dashboard Ownership:** `/governors-command-center` (shared)
- **Governance Notes:** Emergency management agency; sole operator of the Public Reporting System.

### Agency 3: Abia State Public Procurement Bureau
- **Agency Code:** ASPPB
- **Parent Ministry:** Ministry of Finance
- **Page Count:** 3 pages
- **Services Owned:** 1 (Tender Contracts Registry)
- **Capabilities Supported:** 1 (Financial Transparency & Budget Monitoring)
- **Experience Alignment:** open_abia, govern_abia
- **Supporting Pages (Evidence):** `/procurement-tenders-registry`, `/open-abia-2`, `/aboneconceptnote`
- **Governance Notes:** Procurement transparency body; manages tender contracts and vendor registration.

### Agency 4: Greater Aba Development Authority (GADA)
- **Agency Code:** GADA
- **Parent Ministry:** Ministry of Works & Infrastructure
- **Page Count:** 7 pages
- **Services Owned:** 1 (Greater Aba Development Coordination)
- **Capabilities Supported:** 1 (Infrastructure Project Tracking)
- **Experience Alignment:** build_abia
- **Supporting Pages (Evidence):** `/gada`, `/gada-mobile`, `/gada-mobile-2`, `/greater-aba-development-authority`, `/live-incident-feed`, `/aba-20`, `/aba-20-mobile`
- **Dashboard Ownership:** None
- **Governance Notes:** Urban development authority; manages GADA portal and Aba 2.0 transformation pages. `/live-incident-feed` is an anomaly — live incident feeds typically belong to security agencies, not development authorities.

### Agency 5: Abia State Investment Promotion Agency (ASIPA)
- **Agency Code:** ASIPA
- **Parent Ministry:** Ministry of Trade & Investment
- **Page Count:** 3 pages
- **Services Owned:** 1 (Investment Promotion Service)
- **Capabilities Supported:** 1 (Investment Promotion & Facilitation)
- **Experience Alignment:** invest_abia
- **Supporting Pages (Evidence):** `/invest-abia`, `/invest-abia-mobile`, `/sovereign-fund-investment-portfolio`
- **Governance Notes:** Investment promotion body; manages FDI attraction and sovereign fund portfolio pages.

### Agency 6: Civil Service Commission
- **Agency Code:** CSC
- **Parent Ministry:** Ministry of Digital Economy & Transformation
- **Page Count:** 3 pages
- **Services Owned:** 1 (Department Portal Interface)
- **Capabilities Supported:** 1 (Executive Command & Control)
- **Experience Alignment:** govern_abia, work_abia
- **Supporting Pages (Evidence):** `/civil-service-portal`, `/civil-service-portal-2`, `/civil-service-mobile`
- **Dashboard Ownership:** `/governors-command-center` (shared), `/mda-performance`
- **Governance Notes:** Manages civil service portal and MDA performance dashboard. Shares dashboard access with Governor's Office.

---

## 3. AGENCY-TO-PAGE OWNERSHIP MATRIX

| Agency | Page Count | Parent Ministry | Services | Capabilities |
| :--- | :--- | :--- | :--- | :--- |
| ABIA ONE Platform Team | 38 | Ministry of Digital Economy & Transformation | 1 | 3 |
| Greater Aba Development Authority (GADA) | 7 | Ministry of Works & Infrastructure | 1 | 1 |
| Abia State Emergency Management Agency (ASEMA) | 7 | Ministry of Security & Internal Affairs | 1 | 1 |
| Abia State Public Procurement Bureau | 3 | Ministry of Finance | 1 | 1 |
| Abia State Investment Promotion Agency (ASIPA) | 3 | Ministry of Trade & Investment | 1 | 1 |
| Civil Service Commission | 3 | Ministry of Digital Economy & Transformation | 1 | 1 |
| **TOTAL** | **61** | — | **6** | **8** |

---

## 4. AGENCY-TO-SERVICE MAPPING

| Agency | Service | Ministry Oversight |
| :--- | :--- | :--- |
| ABIA ONE Platform Team | General Portal Services | Ministry of Digital Economy & Transformation |
| Abia State Emergency Management Agency (ASEMA) | Public Reporting System | Ministry of Security & Internal Affairs |
| Abia State Public Procurement Bureau | Tender Contracts Registry | Ministry of Finance |
| Greater Aba Development Authority (GADA) | Greater Aba Development Coordination | Ministry of Works & Infrastructure |
| Abia State Investment Promotion Agency (ASIPA) | Investment Promotion Service | Ministry of Trade & Investment |
| Civil Service Commission | Department Portal Interface | Ministry of Digital Economy & Transformation |

---

## 5. AGENCY OWNERSHIP CONCENTRATION ANALYSIS

| Concentration Level | Agency | Risk |
| :--- | :--- | :--- |
| CRITICAL (>20 pages) | ABIA ONE Platform Team (38) | HIGH — Over-attribution; many pages are ministry-specific, not platform-level |
| MODERATE (5-10 pages) | GADA (7) | LOW — Reasonable for urban development scope |
| MODERATE (5-10 pages) | ASEMA (7) | LOW — Multiple variants of same page |
| LOW (1-4 pages) | All other agencies (9 total) | LOW — Appropriate scope |

---

## 6. AGENCY-TO-MINISTRY GOVERNANCE HIERARCHY

```
Governor's Office
├── Ministry of Digital Economy & Transformation
│   ├── ABIA ONE Platform Team
│   └── Civil Service Commission
├── Ministry of Security & Internal Affairs
│   └── Abia State Emergency Management Agency (ASEMA)
├── Ministry of Finance
│   └── Abia State Public Procurement Bureau
├── Ministry of Works & Infrastructure
│   └── Greater Aba Development Authority (GADA)
├── Ministry of Trade & Investment
│   └── Abia State Investment Promotion Agency (ASIPA)
├── Ministry of Health
├── Ministry of Agriculture
├── Ministry of Information & Culture
├── Ministry of Education
├── Ministry of Justice
├── Ministry of Humanitarian Affairs
├── Ministry of Science & Technology
└── Ministry of Environment
```

---

## 7. AGENCY OWNERSHIP GAPS

### 7.1 Education Service — No Dedicated Agency
- **Evidence:** `/education-learning`, `/education-learning-2`, `/ai-academy`, `/ai-academy-2` have no explicit agency assignment
- **Impact:** AI Academy (flagship capability) has no clear operational owner
- **Recommendation:** Create AI Academy Board or assign to Ministry of Education

### 7.2 Health Service — No Dedicated Agency
- **Evidence:** `/health-wellness`, `/ministry-of-health` pages have no explicit agency assignment
- **Impact:** 7 health pages operated directly by Ministry of Health without agency intermediary
- **Recommendation:** Create Abia State Health Management Board or retain direct ministry operation

### 7.3 Agriculture Service — No Dedicated Agency
- **Evidence:** `/agri-transformation`, `/ministry-of-agriculture` pages have no explicit agency assignment
- **Impact:** 6 agriculture pages operated directly by Ministry of Agriculture
- **Recommendation:** Create Abia State Agricultural Development Board or retain direct ministry operation

### 7.4 Tourism & Culture — No Dedicated Agency
- **Evidence:** `/tourism-culture`, `/digital-archives-heritage` pages have no explicit agency assignment
- **Impact:** 7 pages covering tourism + archives operated directly by Ministry of Information & Culture
- **Recommendation:** Create Abia State Tourism Board and Abia State Digital Archives Authority

---

## 8. AGENCY DUPLICATION ANALYSIS

| Agency | Duplicate Pages | Consolidation Potential |
| :--- | :--- | :--- |
| ABIA ONE Platform Team | 38 (over-attributed) | HIGH — Re-assign to domain agencies |
| GADA | 7 (includes variants) | MEDIUM — `/gada`, `/gada-mobile`, `/gada-mobile-2` = 1 logical page |
| ASEMA | 7 (includes variants) | MEDIUM — `/secure-abia` variants = 1 logical page |
| ASPPB | 3 | LOW — Already consolidated |
| ASIPA | 3 | LOW — Already consolidated |
| Civil Service Commission | 3 (includes variants) | LOW — `/civil-service-portal` variants = 1 logical page |

---

## 9. AGENCY-TO-EXPERIENCE ALIGNMENT

| Agency | Primary Experience | Secondary Experience |
| :--- | :--- | :--- |
| ABIA ONE Platform Team | serve_abia | connect_abia |
| ASEMA | secure_abia | — |
| ASPPB | open_abia | govern_abia |
| GADA | build_abia | — |
| ASIPA | invest_abia | — |
| Civil Service Commission | govern_abia | work_abia |

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
| Phase 15: Canonical Structure | PENDING |
| Phase 16: Platform Taxonomy | PENDING |
| Phase 17: Consolidation Model | PENDING |
| Phase 18: Executive Blueprint | PENDING |
