# 03_EXPERIENCE_ARCHITECTURE

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Experience Architecture Complete
**Evidence:** MASTER_EXPERIENCE_MATRIX.md, FINAL_EXPERIENCE_MODEL.md, 05_SERVICE_DECOMPOSITION.md, RAW_PAGE_CAPTURE.csv

---

## 1. EXPERIENCE ARCHITECTURE OVERVIEW

- **Total Experiences:** 12
- **Total Canonical Pages:** 52
- **Pages Per Experience Average:** 4.3
- **Experience Governance:** Each experience has exactly 1 primary service owner

---

## 2. EXPERIENCE ARCHITECTURE PRINCIPLES

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| Experience First | Every user journey starts with an experience, not a page | FINAL_EXPERIENCE_MODEL.md |
| One Experience, One Service | Every experience has exactly 1 primary service owner | FINAL_EXPERIENCE_MODEL.md |
| One Experience, One Ministry | Every experience has exactly 1 ministry owner | FINAL_EXPERIENCE_MODEL.md |
| Experience Page Minimum | Every experience has at least 1 canonical page | FINAL_EXPERIENCE_MODEL.md |
| Experience CTA Consistency | Every experience has exactly 1 primary conversion point | FINAL_EXPERIENCE_MODEL.md |

---

## 3. EXPERIENCE REGISTRY

### 3.1 discover_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Public tourism, cultural archive, and heritage visibility | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Citizens, tourists, diaspora, researchers | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Increased interest in local history and tourism engagement | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/digital-archives-heritage`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Digital Archives Service | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Tourism Service | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Information & Culture | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/digital-archives-heritage` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Digital Archives link click | MASTER_EXPERIENCE_MATRIX.md |

### 3.2 invest_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Marketplace for commercial and investment projects in Aba/Abia | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Global investors, diaspora, developers | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Form submissions for trade registry or joint venture proposals | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 2 (`/invest-in-aba`, `/sovereign-fund-investment-portfolio`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Investment Promotion Service | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Diaspora Investment Service | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Trade & Investment | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/invest-in-aba` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Register Interest form | MASTER_EXPERIENCE_MATRIX.md |

### 3.3 live_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Information portal for housing, sanitation, and healthcare services | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Residents, families, emergency contacts | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Access to local healthcare databases and sanitation centers | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/live-incident-feed`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Health Service | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Public Reporting System | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Health | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/live-incident-feed` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Emergency contact clicks | MASTER_EXPERIENCE_MATRIX.md |

### 3.4 work_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Employment listings, civil service job portal, and training links | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Job-seekers, civil servants, students | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Job application or training request registry | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 2 (`/jobs-abia`, `/employer-portal`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Jobs Service | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | SME Support Service | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Trade & Investment | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/jobs-abia` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Apply Online action | MASTER_EXPERIENCE_MATRIX.md |

### 3.5 build_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Infrastructure progress, land registries, planning permissions | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Property developers, builders, engineers | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Building permit application downloads and progress tracking | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 2 (`/build-abia`, `/gada`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Greater Aba Development Coordination | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Housing Service | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Works & Infrastructure | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/gada` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Download Planning Guidelines | MASTER_EXPERIENCE_MATRIX.md |

### 3.6 learn_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Educational tools, school registries, and AI Academy pathways | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Students, teachers, tech innovators | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | AI Academy registration and course progress tracking | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 2 (`/ai-academy`, `/education-learning`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Education Service | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | None | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Education | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/ai-academy` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Join Academy button | MASTER_EXPERIENCE_MATRIX.md |

### 3.7 visit_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Travel advisories, hotels, transport hubs, and local tours | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Tourists, business travelers, diaspora | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Tour booking guides and transportation scheduler clicks | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/tourism-culture`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Tourism Service | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Transport Service | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Information & Culture | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/tourism-culture` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | View Hotels list | MASTER_EXPERIENCE_MATRIX.md |

### 3.8 secure_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Intelligence dashboards, security logs, incident reporting tools | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Law enforcement, security agencies, public reporters | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Incident report uploads and command visualization updates | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/secure-abia`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Public Reporting System | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Emergency Crisis Response | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Security & Internal Affairs | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/secure-abia` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Submit Emergency Report | MASTER_EXPERIENCE_MATRIX.md |

### 3.9 govern_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Command centers, civil service scorecards, performance telemetry | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Executive Governor, commissioners, state managers | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Real-time performance metric tracking and decision making | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/local-governance`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Department Portal Interface | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | None | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Governor's Office | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/governors-command-center` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Drilldown analytics inspection | MASTER_EXPERIENCE_MATRIX.md |

### 3.10 serve_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Department portals, GADA citizen workspace, tax tools | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | General public, taxpayers, business owners | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Digital service fee payments and application tracking | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/serve-abia`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Government Service Portal | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | GADA Portal, Procurement Services | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Digital Economy & Transformation | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/serve-abia` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Launch Portal action | MASTER_EXPERIENCE_MATRIX.md |

### 3.11 open_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | State transparency logs, budget details, audit documents | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | Journalists, civic watchdogs, public citizens | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Downloadable budget PDFs and performance metrics inspection | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/open-abia`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Financial Transparency & Budget Monitoring | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Tender Contracts Registry | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Finance | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/procurement-tenders-registry` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Download Tender PDF | MASTER_EXPERIENCE_MATRIX.md |

### 3.12 connect_abia

| Attribute | Value | Evidence |
| :--- | :--- | :--- |
| Purpose | Engagement forums, suggestion boxes, support desk links | MASTER_EXPERIENCE_MATRIX.md |
| Target Users | General public, public feedback desk | MASTER_EXPERIENCE_MATRIX.md |
| Primary Outcome | Citizen suggestion submission and ticket tracking | MASTER_EXPERIENCE_MATRIX.md |
| Canonical Pages | 1 (`/connect-abia`) | CANONICAL_PAGE_MATRIX.md |
| Primary Service | Citizen Feedback Collection | 05_SERVICE_DECOMPOSITION.md |
| Secondary Service | Connect Abia Service | 05_SERVICE_DECOMPOSITION.md |
| Ministry Owner | Ministry of Digital Economy & Transformation | FINAL_PAGE_OWNERSHIP_MODEL.md |
| Entry Point | `/connect-abia` | CANONICAL_PAGE_MATRIX.md |
| Conversion Point | Submit Suggestion form | MASTER_EXPERIENCE_MATRIX.md |

---

## 4. EXPERIENCE-TO-SERVICE MATRIX

| Experience | Primary Service | Secondary Service | Ministry Owner |
| :--- | :--- | :--- | :--- |
| discover_abia | Digital Archives Service | Tourism Service | Ministry of Information & Culture |
| invest_abia | Investment Promotion Service | Diaspora Investment Service | Ministry of Trade & Investment |
| live_abia | Health Service | Public Reporting System | Ministry of Health |
| work_abia | Jobs Service | SME Support Service | Ministry of Trade & Investment |
| build_abia | Greater Aba Development Coordination | Housing Service | Ministry of Works & Infrastructure |
| learn_abia | Education Service | — | Ministry of Education |
| visit_abia | Tourism Service | Transport Service | Ministry of Information & Culture |
| secure_abia | Public Reporting System | Emergency Crisis Response | Ministry of Security & Internal Affairs |
| govern_abia | Department Portal Interface | — | Governor's Office |
| serve_abia | Government Service Portal | GADA Portal, Procurement Services | Ministry of Digital Economy & Transformation |
| open_abia | Financial Transparency & Budget Monitoring | Tender Contracts Registry | Ministry of Finance |
| connect_abia | Citizen Feedback Collection | Connect Abia Service | Ministry of Digital Economy & Transformation |

---

## 5. EXPERIENCE-TO-PAGE MATRIX

| Experience | Canonical Pages | Page Count |
| :--- | :--- | :--- |
| discover_abia | `/digital-archives-heritage` | 1 |
| invest_abia | `/invest-in-aba`, `/sovereign-fund-investment-portfolio` | 2 |
| live_abia | `/live-incident-feed` | 1 |
| work_abia | `/jobs-abia`, `/employer-portal` | 2 |
| build_abia | `/build-abia`, `/gada` | 2 |
| learn_abia | `/ai-academy`, `/education-learning` | 2 |
| visit_abia | `/tourism-culture` | 1 |
| secure_abia | `/secure-abia` | 1 |
| govern_abia | `/local-governance` | 1 |
| serve_abia | `/serve-abia` | 1 |
| open_abia | `/open-abia` | 1 |
| connect_abia | `/connect-abia` | 1 |

---

## 6. EXPERIENCE GOVERNANCE

### 6.1 Experience Creation Workflow

1. Ministry identifies need for new experience
2. Ministry submits experience request to Platform Team
3. Platform Team validates against experience model
4. Platform Team assigns primary service owner
5. Platform Team assigns ministry owner
6. Platform Team creates canonical page(s)
7. Platform Team updates navigation
8. Platform Team updates ownership registry

### 6.2 Experience Modification Workflow

1. Ministry requests experience modification
2. Platform Team validates against governance rules
3. Platform Team ensures service continuity
4. Platform Team updates experience documentation
5. Platform Team tests across all affected pages
6. Platform Team deploys experience update

### 6.3 Experience Deletion Workflow

1. Ministry identifies experience for deletion
2. Ministry confirms no active dependencies
3. Platform Team validates against experience model
4. Platform Team removes navigation items
5. Platform Team redirects routes to related experience
6. Platform Team deletes experience pages
7. Platform Team updates ownership registry

---

**END OF EXPERIENCE ARCHITECTURE**
