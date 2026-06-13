# SERVICE REGISTRY

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 04 Complete

---

## 1. SERVICE EXTRACTION METHODOLOGY

Services are extracted from:
- `services` column in RAW_PAGE_CAPTURE.csv
- CTA patterns indicating service delivery
- Navigation patterns indicating service access
- Page content forensics

---

## 2. AUTHORITATIVE SERVICE REGISTRY

### Service 1: General Portal Services
- **Description:** Core citizen portal providing access to government services, feedback mechanisms, and emergency contacts
- **Supporting Pages:** 85+ pages
- **Supporting Dashboards:** `/`, `/home-variant`
- **Supporting Navigation:** Header Menu (Citizen Portal)
- **Supporting CTAs:** "Citizen Portal", "Emergency", "Citizen Feedback"
- **Ministry Owner:** Ministry of Digital Economy & Transformation
- **Agency Owner:** ABIA ONE Platform Team
- **Audience:** All citizens, businesses, investors
- **Outcomes:** Service access, feedback submission, emergency reporting
- **Evidence:** RAW_PAGE_CAPTURE.csv lines 2-115

### Service 2: Department Portal Interface
- **Description:** Internal departmental dashboards for ministry and agency operations
- **Supporting Pages:** `/civil-service-portal`, `/civil-service-portal-2`, `/mda-performance`, `/ministry-of-health`, `/ministry-of-communication`, `/social-welfare-2`
- **Supporting Dashboards:** `/governors-command-center`, `/mda-performance`
- **Supporting Navigation:** Header Menu, Dashboard Navigation Panel
- **Supporting CTAs:** "Dashboard", "Command Center", "Communications"
- **Ministry Owner:** Ministry of Digital Economy & Transformation
- **Agency Owner:** Civil Service Commission
- **Audience:** Government officials, ministry staff
- **Outcomes:** Performance monitoring, directive issuance, resource deployment
- **Evidence:** RAW_PAGE_CAPTURE.csv lines 16-18, 64, 70, 97

### Service 3: Public Reporting System
- **Description:** Emergency dispatch and citizen reporting infrastructure
- **Supporting Pages:** `/public-reporting`, `/emergency-response`, `/emergency-crisis-response`, `/secure-abia`, `/secure-abia-2`
- **Supporting Dashboards:** `/governors-command-center`
- **Supporting Navigation:** Header Menu (Security)
- **Supporting CTAs:** "INITIATE EMERGENCY CALL", "Report Incident", "Live Alerts"
- **Ministry Owner:** Ministry of Security & Internal Affairs
- **Agency Owner:** Abia State Emergency Management Agency (ASEMA)
- **Audience:** Citizens, emergency responders, security agencies
- **Outcomes:** Emergency response, incident reporting, public safety
- **Evidence:** RAW_PAGE_CAPTURE.csv lines 34-35, 82-89

### Service 4: Tender Contracts Registry
- **Description:** Public procurement transparency and contract management
- **Supporting Pages:** `/procurement-tenders-registry`, `/open-abia-2`, `/aboneconceptnote`
- **Supporting Dashboards:** None
- **Supporting Navigation:** Header Menu (Governance)
- **Supporting CTAs:** "Register as Vendor", "View Bid Calendar", "Submit Bid"
- **Ministry Owner:** Ministry of Finance
- **Agency Owner:** Abia State Public Procurement Bureau
- **Audience:** Vendors, contractors, citizens
- **Outcomes:** Transparent procurement, vendor registration, bid submission
- **Evidence:** RAW_PAGE_CAPTURE.csv lines 4, 79, 82

### Service 5: Greater Aba Development Coordination
- **Description:** Urban renewal and infrastructure development coordination
- **Supporting Pages:** `/gada`, `/gada-mobile`, `/gada-mobile-2`, `/greater-aba-development-authority`, `/live-incident-feed`, `/aba-20`, `/aba-20-mobile`
- **Supporting Dashboards:** None
- **Supporting Navigation:** Header Menu, Dashboard Navigation Panel
- **Supporting CTAs:** "Report Urban Issue", "Explore Master Plan", "Register for SME Grants"
- **Ministry Owner:** Ministry of Works & Infrastructure
- **Agency Owner:** Greater Aba Development Authority (GADA)
- **Audience:** Citizens, developers, businesses
- **Outcomes:** Urban issue reporting, master plan access, SME registration
- **Evidence:** RAW_PAGE_CAPTURE.csv lines 2-3, 40-42, 45, 62

---

## 3. SERVICE DUPLICATION ANALYSIS

| Service | Variants | Duplication Risk |
| :--- | :--- | :--- |
| General Portal Services | 85+ pages | HIGH - Over-fragmented |
| Department Portal Interface | 6+ pages | MEDIUM - Multiple ministry portals |
| Public Reporting System | 5+ pages | MEDIUM - Multiple emergency pages |
| Tender Contracts Registry | 3 pages | LOW - Consolidated |
| Greater Aba Development Coordination | 7 pages | MEDIUM - Multiple GADA pages |

---

## 4. SERVICE GAP ANALYSIS

| Expected Service | Status | Evidence |
| :--- | :--- | :--- |
| Citizen Identity Service | EXISTS | `/citizen-identity-civil-registry` |
| Investment Promotion Service | EXISTS | `/invest-abia`, `/invest-in-aba` |
| Tourism Service | EXISTS | `/tourism-culture`, `/tourism-culture-2` |
| Education Service | EXISTS | `/education-learning`, `/ai-academy` |
| Health Service | EXISTS | `/health-wellness`, `/ministry-of-health` |
| Agriculture Service | EXISTS | `/agri-transformation`, `/ministry-of-agriculture` |
| Commerce & Trade Service | EXISTS | `/commerce-trade`, `/border-trade-logistics` |
| Environment Service | EXISTS | `/environment-sustainability` |
| Housing Service | EXISTS | `/housing-urban-development` |
| Transport Service | EXISTS | `/transport-mobility` |
| Social Welfare Service | EXISTS | `/social-welfare` |
| Legal Service | EXISTS | `/legal-institutional-registry` |
| Digital Archives Service | EXISTS | `/digital-archives-heritage`, `/state-archives` |
| Transparency Service | EXISTS | `/open-abia`, `/transparent-governance` |
| Jobs Service | EXISTS | `/jobs-abia`, `/employer-portal` |
| SME Support Service | EXISTS | `/sme-growth-support`, `/cooperatives-micro-credit` |
| Diaspora Investment Service | EXISTS | `/diaspora-gateway` |
| Water Resources Service | EXISTS | `/water-resources-irrigation` |
| Women & Gender Service | EXISTS | `/women-gender-affairs` |
| Youth & Sports Service | EXISTS | `/youth-sports` |

---

## 5. SERVICE-TO-PAGE MAPPING

| Service | Primary Pages | Mobile Variants |
| :--- | :--- | :--- |
| General Portal Services | `/`, `/home-variant` | `/home-mobile` |
| Department Portal Interface | `/civil-service-portal`, `/civil-service-portal-2` | `/civil-service-mobile` |
| Public Reporting System | `/public-reporting`, `/emergency-response` | None |
| Tender Contracts Registry | `/procurement-tenders-registry`, `/open-abia-2` | `/open-abia-mobile` |
| Greater Aba Development Coordination | `/gada`, `/greater-aba-development-authority` | `/gada-mobile`, `/gada-mobile-2` |
| Citizen Identity Service | `/citizen-identity-civil-registry` | `/citizen-identity-mobile` |
| Investment Promotion Service | `/invest-abia`, `/invest-in-aba` | `/invest-abia-mobile` |
| Tourism Service | `/tourism-culture`, `/tourism-culture-2` | `/tourism-culture-mobile` |
| Education Service | `/education-learning`, `/education-learning-2`, `/ai-academy`, `/ai-academy-2` | `/ai-academy-mobile` |
| Health Service | `/health-wellness`, `/health-wellness-2`, `/ministry-of-health`, `/ministry-of-health-2` | `/ministry-of-health-mobile`, `/ministry-of-health-mobile-2` |
| Agriculture Service | `/agri-transformation`, `/ministry-of-agriculture`, `/ministry-of-agriculture-2`, `/ministry-of-agriculture-3` | `/ministry-of-agriculture-mobile`, `/ministry-of-agriculture-mobile-2` |
| Commerce & Trade Service | `/commerce-trade`, `/commerce-trade-2`, `/border-trade-logistics`, `/border-trade-logistics-2` | `/trade-logistics-mobile` |
| Environment Service | `/environment-sustainability`, `/environment-sustainability-2` | `/environment-sustainability-mobile` |
| Housing Service | `/housing-urban-development`, `/housing-urban-development-2` | None |
| Transport Service | `/transport-mobility`, `/transport-mobility-2` | `/transport-mobility-mobile`, `/transport-mobility-hub-mobile` |
| Social Welfare Service | `/social-welfare`, `/social-welfare-2` | None |
| Legal Service | `/legal-institutional-registry`, `/legal-institutional-registry-2` | `/legal-institutional-registry-mobile` |
| Digital Archives Service | `/digital-archives-heritage`, `/digital-archives-heritage-2`, `/state-archives` | `/digital-archives-heritage-mobile` |
| Transparency Service | `/open-abia`, `/open-abia-2`, `/transparent-governance`, `/transparent-governance-2` | `/open-abia-mobile` |
| Jobs Service | `/jobs-abia`, `/employer-portal` | `/jobs-abia-mobile` |
| SME Support Service | `/sme-growth-support`, `/cooperatives-micro-credit`, `/cooperatives-micro-credit-2` | `/cooperatives-micro-credit-mobile` |
| Diaspora Investment Service | `/diaspora-gateway` | None |
| Water Resources Service | `/water-resources-irrigation`, `/water-resources-irrigation-2` | None |
| Women & Gender Service | `/women-gender-affairs`, `/women-gender-affairs-2` | `/women-gender-affairs-mobile` |
| Youth & Sports Service | `/youth-sports` | None |
| Science & Technology Service | `/science-technology`, `/science-technology-2` | None |
| Local Governance Service | `/local-governance` | None |
| MDA Performance Service | `/mda-performance` | None |
| Emergency Crisis Response | `/emergency-crisis-response`, `/live-incident-feed` | None |
| Sovereign Fund Service | `/sovereign-fund-investment-portfolio` | None |
| Connect Abia Service | `/connect-abia` | `/connect-abia-mobile` |
| News & Press Center | `/news-press-center` | None |
| Land & Property Service | `/land-property` | None |
| Utilities & Environment | `/utilities-environment` | None |

---

## 6. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Evidence Inventory | **COMPLETE** |
| Phase 02: Evidence Completeness | **COMPLETE** |
| Phase 03: Visual Verification | **CANCELLED** |
| Phase 04: Service Registry | **COMPLETE** |
| Phase 05: Capability Registry | PENDING |
| Phase 06: Outcome Registry | PENDING |
| Phase 07: Experience Model | PENDING |
| Phase 08: Page Semantic Mapping | PENDING |
| Phase 09: Navigation Governance | PENDING |
| Phase 10: CTA Governance | PENDING |
| Phase 11: Sidebar Governance | PENDING |
| Phase 12: Dashboard Governance | PENDING |
| Phase 13: Ministry Ownership | PENDING |
| Phase 14: Agency Ownership | PENDING |
| Phase 15: Canonical Structure | PENDING |
| Phase 16: Platform Taxonomy | PENDING |
| Phase 17: Consolidation Model | PENDING |
| Phase 18: Executive Blueprint | PENDING |
