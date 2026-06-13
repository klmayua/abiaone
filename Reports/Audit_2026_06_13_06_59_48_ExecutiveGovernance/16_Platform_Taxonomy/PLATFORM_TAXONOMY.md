# PLATFORM TAXONOMY

**Audit:** ABIA ONE Executive Platform Governance Model v5.0
**Date:** 2026-06-13
**Status:** Phase 16 Complete

---

## 1. PLATFORM TAXONOMY METHODOLOGY

Platform taxonomy maps every canonical page to its:
- **Platform Layer:** Where it sits in the platform architecture
- **Content Classification:** What type of content it delivers
- **Access Model:** Public vs. authenticated
- **Data Model:** Static vs. dynamic vs. real-time
- **Service Dependency:** Which backend service it depends on
- **No assumptions:** Every classification requires evidence

---

## 2. PLATFORM LAYER ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LAYER 1: EXECUTIVE DASHBOARDS                    │
│         Governor's Command Center, MDA Performance, Home            │
├─────────────────────────────────────────────────────────────────────┤
│                    LAYER 2: MINISTRY PORTALS                        │
│    Ministry of Health, Ministry of Agriculture, etc. (9 portals)    │
├─────────────────────────────────────────────────────────────────────┤
│                    LAYER 3: SERVICE SECTOR PAGES                    │
│   Commerce & Trade, Health & Wellness, Housing, Transport, etc.     │
├─────────────────────────────────────────────────────────────────────┤
│                    LAYER 4: CITIZEN EXPERIENCE PAGES                │
│   Serve Abia, Secure Abia, Connect Abia, Open Abia, etc.           │
├─────────────────────────────────────────────────────────────────────┤
│                    LAYER 5: STANDALONE PAGES                        │
│   Aba 2.0, Citizen Consultations, Diaspora Gateway, etc.           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. CONTENT CLASSIFICATION MATRIX

### 3.1 Informational Pages (Static Content)
- **Definition:** Pages delivering static content with no dynamic data
- **Canonical Count:** 18 pages
- **Examples:** `/aba-20`, `/digital-archives-heritage`, `/tourism-culture`, `/science-technology`, `/economic-transformation`
- **Evidence:** PAGE_CONTENT_FORENSICS.md shows `observed_data: None` for these pages
- **Service Dependency:** None (static content)
- **Update Frequency:** Manual content updates only

### 3.2 Transactional Pages (Form-Based Actions)
- **Definition:** Pages enabling user actions via forms, submissions, or workflows
- **Canonical Count:** 14 pages
- **Examples:** `/invest-in-aba`, `/jobs-abia`, `/employer-portal`, `/citizen-identity-civil-registry`, `/ai-academy`
- **Evidence:** PAGE_CONTENT_FORENSICS.md shows CTA patterns like "Register", "Submit", "Apply", "Join"
- **Service Dependency:** Backend form processing services
- **Update Frequency:** Real-time user submissions

### 3.3 Dashboard Pages (Data Visualization)
- **Definition:** Pages displaying real-time data visualizations and KPIs
- **Canonical Count:** 3 pages
- **Examples:** `/`, `/governors-command-center`, `/mda-performance`
- **Evidence:** RAW_DASHBOARD_CAPTURE.csv confirms 3 dashboards
- **Service Dependency:** Analytics and data aggregation services
- **Update Frequency:** Real-time data feeds

### 3.4 Portal Pages (Service Aggregation)
- **Definition:** Pages aggregating multiple ministry services under one interface
- **Canonical Count:** 9 pages
- **Examples:** `/ministry-of-health`, `/ministry-of-agriculture`, `/serve-abia`
- **Evidence:** Ministry portal pattern observed in PAGE_CONTENT_FORENSICS.md
- **Service Dependency:** Multiple backend services
- **Update Frequency:** Mixed (static + dynamic)

### 3.5 Registry Pages (Data Listing)
- **Definition:** Pages displaying structured data listings (tenders, archives, records)
- **Canonical Count:** 5 pages
- **Examples:** `/procurement-tenders-registry`, `/state-archives`, `/legal-institutional-registry`
- **Evidence:** PAGE_CONTENT_FORENSICS.md shows data listing patterns
- **Service Dependency:** Database query services
- **Update Frequency:** Periodic data refresh

---

## 4. ACCESS MODEL CLASSIFICATION

### 4.1 Public Pages (No Authentication Required)
- **Canonical Count:** 49 pages
- **Examples:** All ministry portals, service sector pages, standalone pages
- **Evidence:** RAW_PAGE_CAPTURE.csv `public_or_authenticated: PUBLIC` for 49+ pages
- **Access Pattern:** Open access; no login required
- **Security Level:** LOW

### 4.2 Authenticated Pages (Login Required)
- **Canonical Count:** 3 pages
- **Examples:** `/` (Home Dashboard), `/governors-command-center`, `/mda-performance`
- **Evidence:** RAW_PAGE_CAPTURE.csv `public_or_authenticated: AUTHENTICATED` for 3 pages
- **Access Pattern:** Role-based access control
- **Security Level:** HIGH

---

## 5. DATA MODEL CLASSIFICATION

### 5.1 Static Pages (No Live Data)
- **Canonical Count:** 42 pages
- **Examples:** All informational pages, ministry portals (content-only)
- **Evidence:** PAGE_CONTENT_FORENSICS.md shows `observed_data: None` for these pages
- **Data Source:** Hardcoded content in React components
- **Update Mechanism:** Code deployment required

### 5.2 Dynamic Pages (API-Connected)
- **Canonical Count:** 7 pages
- **Examples:** `/`, `/governors-command-center`, `/mda-performance`, `/jobs-abia`, `/invest-in-aba`
- **Evidence:** Dashboard pages show real-time data patterns; job/investment pages show form submissions
- **Data Source:** Backend APIs
- **Update Mechanism:** Real-time API calls

### 5.3 Hybrid Pages (Mixed Content)
- **Canonical Count:** 3 pages
- **Examples:** `/secure-abia`, `/live-incident-feed`, `/procurement-tenders-registry`
- **Evidence:** Combination of static content + dynamic data feeds
- **Data Source:** Multiple sources
- **Update Mechanism:** Mixed (static + real-time)

---

## 6. PAGE-TO-SERVICE DEPENDENCY MATRIX

| Canonical Page | Primary Service | Secondary Service | Data Model |
| :--- | :--- | :--- | :--- |
| ABIA ONE Home Dashboard | General Portal Services | — | Dynamic |
| Governor's Command Center | Department Portal Interface | Public Reporting System | Dynamic |
| MDA Performance Dashboard | Department Portal Interface | — | Dynamic |
| Serve Abia | General Portal Services | — | Static |
| Secure Abia | Public Reporting System | — | Hybrid |
| Connect Abia | General Portal Services | — | Static |
| Open Abia | Transparency Service | — | Static |
| Invest in Aba | Investment Promotion Service | — | Dynamic |
| Sovereign Fund Portfolio | Investment Promotion Service | — | Static |
| Build Abia | Greater Aba Development Coordination | — | Static |
| GADA Field Operations | Greater Aba Development Coordination | — | Static |
| AI Academy | Education Service | — | Dynamic |
| Education & Learning | Education Service | — | Static |
| Jobs Abia | Jobs Service | — | Dynamic |
| Employer Portal | Jobs Service | — | Static |
| Digital Archives & Heritage | Digital Archives Service | — | Static |
| Tourism & Culture | Tourism Service | — | Static |
| Live Incident Feed | Public Reporting System | — | Dynamic |
| Ministry of Health | Health Service | — | Static |
| Ministry of Agriculture | Agriculture Service | — | Static |
| Ministry of Communication | General Portal Services | — | Static |
| Social Welfare | Social Welfare Service | — | Static |
| Women & Gender Affairs | Social Welfare Service | — | Static |
| Youth & Sports | General Portal Services | — | Static |
| Science & Technology | Science & Technology Service | — | Static |
| Environment & Sustainability | Environment Service | — | Static |
| Legal & Institutional Registry | Legal Service | — | Registry |
| Commerce & Trade | Commerce & Trade Service | — | Static |
| Border Trade & Logistics | Commerce & Trade Service | — | Static |
| Health & Wellness | Health Service | — | Static |
| Housing & Urban Development | Housing Service | — | Static |
| Transport & Mobility | Transport Service | — | Static |
| Water Resources & Irrigation | General Portal Services | — | Static |
| Cooperatives & Micro-Credit | SME Support Service | — | Static |
| SME Growth Support | SME Support Service | — | Static |
| Transparent Governance | Transparency Service | — | Static |
| Emergency & Crisis Response | Public Reporting System | — | Static |
| Aba 2.0 Evolution | Greater Aba Development Coordination | — | Static |
| Agri-Transformation | Agriculture Service | — | Static |
| Citizen Consultations | General Portal Services | — | Static |
| Citizen Identity & Civil Registry | Citizen Identity Service | — | Dynamic |
| Economic Transformation | General Portal Services | — | Static |
| Greater Aba Development Authority | Greater Aba Development Coordination | — | Static |
| News & Press Center | News & Press Center | — | Static |
| Procurement & Tenders Registry | Tender Contracts Registry | — | Registry |
| Civil Service Portal | Department Portal Interface | — | Static |
| AB One Concept Note | General Portal Services | — | Static |
| Public Reporting | Public Reporting System | — | Dynamic |
| Emergency Response | Public Reporting System | — | Static |
| Diaspora Gateway | Investment Promotion Service | — | Static |
| Utilities & Environment | Environment Service | — | Static |
| State Archives | Digital Archives Service | — | Registry |

---

## 7. PLATFORM TAXONOMY SUMMARY

| Taxonomy Dimension | Count | Percentage |
| :--- | :--- | :--- |
| **Total Canonical Pages** | 52 | 100% |
| **By Content Classification** | | |
| Informational | 18 | 35% |
| Transactional | 14 | 27% |
| Dashboard | 3 | 6% |
| Portal | 9 | 17% |
| Registry | 5 | 10% |
| Standalone | 3 | 6% |
| **By Access Model** | | |
| Public | 49 | 94% |
| Authenticated | 3 | 6% |
| **By Data Model** | | |
| Static | 42 | 81% |
| Dynamic | 7 | 13% |
| Hybrid | 3 | 6% |

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
| Phase 17: Consolidation Model | PENDING |
| Phase 18: Executive Blueprint | PENDING |
