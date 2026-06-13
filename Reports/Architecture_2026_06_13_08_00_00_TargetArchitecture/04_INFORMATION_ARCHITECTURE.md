# 04_INFORMATION_ARCHITECTURE

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Information Architecture Complete
**Evidence:** RAW_PAGE_CAPTURE.csv, CANONICAL_PAGE_MATRIX.md, PLATFORM_TAXONOMY.md, 01_PAGE_FAMILY_FORENSICS.md

---

## 1. INFORMATION ARCHITECTURE OVERVIEW

- **Total Pages:** 52 (canonical, post-consolidation)
- **Content Classifications:** 5
- **Access Models:** 2 (Public, Authenticated)
- **Data Models:** 3

---

## 2. CONTENT CLASSIFICATIONS

| Classification | Pages | Description | Evidence |
| :--- | :--- | :--- | :--- |
| Experience | 15 | Experience-based navigation pages | MASTER_EXPERIENCE_MATRIX.md |
| Ministry Portal | 9 | Domain-specific ministry service aggregation | CANONICAL_PAGE_MATRIX.md |
| Service Sector | 10 | Cross-ministry service delivery | CANONICAL_PAGE_MATRIX.md |
| Standalone | 7 | Special-purpose standalone pages | CANONICAL_PAGE_MATRIX.md |
| Dashboard | 2 | Executive oversight and performance tracking | CANONICAL_PAGE_MATRIX.md |
| Special | 3 | Registry and documentation pages | CANONICAL_PAGE_MATRIX.md |
| Public Reporting | 2 | Emergency and incident reporting | CANONICAL_PAGE_MATRIX.md |
| Diaspora Gateway | 1 | Diaspora investment portal | CANONICAL_PAGE_MATRIX.md |
| Utilities & Environment | 1 | Environmental utilities | CANONICAL_PAGE_MATRIX.md |
| State Archives | 1 | Historical archives | CANONICAL_PAGE_MATRIX.md |
| **TOTAL** | **52** | — | — |

---

## 3. PAGE HIERARCHY

### 3.1 Level 1: Platform Entry

| Page | Route | Purpose | Access |
| :--- | :--- | :--- | :--- |
| Home Dashboard | `/` | Platform entry point | Authenticated |

### 3.2 Level 2: Experience Navigation

| Experience | Entry Page | Route | Purpose |
| :--- | :--- | :--- | :--- |
| discover_abia | Digital Archives & Heritage | `/digital-archives-heritage` | Cultural archive access |
| invest_abia | Invest in Aba | `/invest-in-aba` | Investment marketplace |
| live_abia | Live Incident Feed | `/live-incident-feed` | Real-time incident monitoring |
| work_abia | Jobs Abia | `/jobs-abia` | Employment marketplace |
| build_abia | Build Abia | `/build-abia` | Infrastructure tracking |
| learn_abia | AI Academy | `/ai-academy` | Education portal |
| visit_abia | Tourism & Culture | `/tourism-culture` | Tourism information |
| secure_abia | Secure Abia | `/secure-abia` | Security intelligence |
| govern_abia | Governors Command Center | `/governors-command-center` | Executive oversight |
| serve_abia | Serve Abia | `/serve-abia` | Government services |
| open_abia | Open Abia | `/open-abia` | Transparency portal |
| connect_abia | Connect Abia | `/connect-abia` | Citizen engagement |

### 3.3 Level 3: Service Pages

| Service Sector | Page | Route | Ministry Owner |
| :--- | :--- | :--- | :--- |
| Commerce & Trade | Commerce & Trade | `/commerce-trade` | Ministry of Trade & Investment |
| Border Trade | Border Trade & Logistics | `/border-trade-logistics` | Ministry of Trade & Investment |
| Health | Health & Wellness | `/health-wellness` | Ministry of Health |
| Housing | Housing & Urban Development | `/housing-urban-development` | Ministry of Works & Infrastructure |
| Transport | Transport & Mobility | `/transport-mobility` | Ministry of Works & Infrastructure |
| Water | Water Resources & Irrigation | `/water-resources-irrigation` | Ministry of Environment |
| Cooperatives | Cooperatives & Micro-Credit | `/cooperatives-micro-credit` | Ministry of Trade & Investment |
| SME | SME Growth Support | `/sme-growth-support` | Ministry of Trade & Investment |
| Governance | Transparent Governance | `/transparent-governance` | Ministry of Finance |
| Emergency | Emergency & Crisis Response | `/emergency-crisis-response` | Ministry of Security & Internal Affairs |

### 3.4 Level 4: Ministry Portals

| Ministry | Page | Route | Owner |
| :--- | :--- | :--- | :--- |
| Health | Ministry of Health | `/ministry-of-health` | Ministry of Health |
| Agriculture | Ministry of Agriculture | `/ministry-of-agriculture` | Ministry of Agriculture |
| Communication | Ministry of Communication | `/ministry-of-communication` | Ministry of Digital Economy & Transformation |
| Social Welfare | Social Welfare | `/social-welfare` | Ministry of Humanitarian Affairs |
| Women | Women & Gender Affairs | `/women-gender-affairs` | Ministry of Humanitarian Affairs |
| Youth | Youth & Sports | `/youth-sports` | Ministry of Humanitarian Affairs |
| Science | Science & Technology | `/science-technology` | Ministry of Science & Technology |
| Environment | Environment & Sustainability | `/environment-sustainability` | Ministry of Environment |
| Justice | Legal & Institutional Registry | `/legal-institutional-registry` | Ministry of Justice |

---

## 4. ACCESS MODELS

### 4.1 Public Access

| Attribute | Description | Evidence |
| :--- | :--- | :--- |
| Authentication | Not required | RAW_PAGE_CAPTURE.csv |
| Sidebar | Not present | FINAL_NAVIGATION_MODEL.md |
| Header Menu | Present | MASTER_NAVIGATION_MATRIX.md |
| Portal Directory | Present | FINAL_NAVIGATION_MODEL.md |
| CTA Style | Primary CTA + secondary links | MASTER_CTA_MATRIX.md |

**Pages:** 49 canonical pages (94.2%)

### 4.2 Authenticated Access

| Attribute | Description | Evidence |
| :--- | :--- | :--- |
| Authentication | Required | RAW_DASHBOARD_CAPTURE.csv |
| Sidebar | Present | FINAL_NAVIGATION_MODEL.md |
| Header Menu | Present | MASTER_NAVIGATION_MATRIX.md |
| Portal Directory | Not present | FINAL_NAVIGATION_MODEL.md |
| CTA Style | Dashboard-specific actions | MASTER_DASHBOARD_MATRIX.md |

**Pages:** 3 canonical pages (5.8%)

---

## 5. DATA MODELS

### 5.1 Service Data

| Data Type | Description | Evidence |
| :--- | :--- | :--- |
| Service Directory | List of all government services | 05_SERVICE_DECOMPOSITION.md |
| Service Details | Service-specific information | 05_SERVICE_DECOMPOSITION.md |
| Service Actions | CTAs and actions per service | RAW_CTA_CAPTURE.csv |

### 5.2 Ministry Data

| Data Type | Description | Evidence |
| :--- | :--- | :--- |
| Ministry Directory | List of all ministries | MINISTRY_OWNERSHIP_MODEL.md |
| Ministry Pages | Pages per ministry | MINISTRY_OWNERSHIP_MODEL.md |
| Ministry Services | Services per ministry | MINISTRY_OWNERSHIP_MODEL.md |

### 5.3 Dashboard Data

| Data Type | Description | Evidence |
| :--- | :--- | :--- |
| KPI Cards | Performance indicators | RAW_DASHBOARD_CAPTURE.csv |
| Charts | Data visualizations | RAW_DASHBOARD_CAPTURE.csv |
| Filters | Data filtering options | RAW_DASHBOARD_CAPTURE.csv |

---

## 6. CONTENT RELATIONSHIPS

### 6.1 Experience → Service → Page

```
Experience (12)
  └── Primary Service (20)
        └── Canonical Pages (52)
```

### 6.2 Ministry → Service → Page

```
Ministry (14)
  └── Services (20)
        └── Canonical Pages (52)
```

### 6.3 Agency → Service → Page

```
Agency (6)
  └── Services (20)
        └── Canonical Pages (52)
```

---

## 7. CONTENT GOVERNANCE

### 7.1 Content Creation Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Evidence Required | All content must be evidence-based | 00_MASTER_EVIDENCE_INDEX.md |
| No Assumptions | No content based on assumptions | 00_MASTER_EVIDENCE_INDEX.md |
| Ministry Approval | Content creation requires ministry approval | FINAL_GOVERNANCE_MODEL.md |
| Platform Team Approval | Content deployment requires Platform Team approval | FINAL_GOVERNANCE_MODEL.md |

### 7.2 Content Modification Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Change Request | All content changes require change request | FINAL_GOVERNANCE_MODEL.md |
| Validation | Changes must be validated against governance rules | FINAL_GOVERNANCE_MODEL.md |
| Testing | Changes must be tested across all affected pages | FINAL_GOVERNANCE_MODEL.md |
| Deployment | Changes must be deployed through Platform Team | FINAL_GOVERNANCE_MODEL.md |

### 7.3 Content Deletion Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Dependency Check | Content deletion requires dependency check | FINAL_GOVERNANCE_MODEL.md |
| Redirect | Deleted content must be redirected to related page | FINAL_GOVERNANCE_MODEL.md |
| Registry Update | Ownership registry must be updated after deletion | FINAL_GOVERNANCE_MODEL.md |

---

**END OF INFORMATION ARCHITECTURE**
