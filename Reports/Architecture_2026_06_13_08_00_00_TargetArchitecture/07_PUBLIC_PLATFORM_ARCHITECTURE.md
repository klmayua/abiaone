# 07_PUBLIC_PLATFORM_ARCHITECTURE

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Public Platform Architecture Complete
**Evidence:** FINAL_NAVIGATION_MODEL.md, FINAL_PAGE_OWNERSHIP_MODEL.md, CANONICAL_PAGE_MATRIX.md, RAW_PAGE_CAPTURE.csv

---

## 1. PUBLIC PLATFORM ARCHITECTURE OVERVIEW

- **Total Public Pages:** 49 (94.2% of 52 canonical pages)
- **Access Model:** No authentication required
- **Sidebar Presence:** NONE
- **Header Menu:** Present (identical across all public pages)
- **Portal Directory:** Present (floating overlay)

---

## 2. PUBLIC PLATFORM PRINCIPLES

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| Public Simplicity | Public pages have no dashboard navigation | RAW_SIDEBAR_CAPTURE.csv |
| Experience First | Every user journey starts with an experience, not a page | FINAL_EXPERIENCE_MODEL.md |
| Single Source of Navigation | Header menu is the only global navigation | MASTER_NAVIGATION_MATRIX.md |
| One Primary CTA | Every page has exactly 1 primary CTA | MASTER_CTA_MATRIX.md |

---

## 3. PUBLIC PAGE CATEGORIES

### 3.1 Experience Pages (15)

| Experience | Page | Route | Ministry Owner |
| :--- | :--- | :--- | :--- |
| discover_abia | Digital Archives & Heritage | `/digital-archives-heritage` | Ministry of Information & Culture |
| invest_abia | Invest in Aba | `/invest-in-aba` | Ministry of Trade & Investment |
| invest_abia | Sovereign Fund Portfolio | `/sovereign-fund-investment-portfolio` | Ministry of Trade & Investment |
| live_abia | Live Incident Feed | `/live-incident-feed` | Ministry of Health |
| work_abia | Jobs Abia | `/jobs-abia` | Ministry of Trade & Investment |
| work_abia | Employer Portal | `/employer-portal` | Ministry of Trade & Investment |
| build_abia | Build Abia | `/build-abia` | Ministry of Works & Infrastructure |
| build_abia | GADA Field Operations | `/gada` | Ministry of Works & Infrastructure |
| learn_abia | AI Academy | `/ai-academy` | Ministry of Education |
| learn_abia | Education & Learning | `/education-learning` | Ministry of Education |
| visit_abia | Tourism & Culture | `/tourism-culture` | Ministry of Information & Culture |
| secure_abia | Secure Abia | `/secure-abia` | Ministry of Security & Internal Affairs |
| govern_abia | Local Governance | `/local-governance` | Governor's Office |
| serve_abia | Serve Abia | `/serve-abia` | Ministry of Digital Economy & Transformation |
| open_abia | Open Abia | `/open-abia` | Ministry of Finance |
| connect_abia | Connect Abia | `/connect-abia` | Ministry of Digital Economy & Transformation |

### 3.2 Ministry Portal Pages (9)

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

### 3.3 Service Sector Pages (10)

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

### 3.4 Standalone Pages (7)

| Page | Route | Ministry Owner |
| :--- | :--- | :--- |
| Aba 2.0 Evolution | `/aba-20` | Ministry of Works & Infrastructure |
| Agri-Transformation | `/agri-transformation` | Ministry of Agriculture |
| Citizen Consultations | `/citizen-consultations` | Ministry of Digital Economy & Transformation |
| Citizen Identity & Civil Registry | `/citizen-identity-civil-registry` | Ministry of Digital Economy & Transformation |
| Economic Transformation | `/economic-transformation` | Ministry of Digital Economy & Transformation |
| Greater Aba Development Authority | `/greater-aba-development-authority` | Ministry of Works & Infrastructure |
| News & Press Center | `/news-press-center` | Ministry of Information & Culture |

### 3.5 Special Pages (3)

| Page | Route | Ministry Owner |
| :--- | :--- | :--- |
| Procurement & Tenders Registry | `/procurement-tenders-registry` | Ministry of Finance |
| Civil Service Portal | `/civil-service-portal` | Ministry of Digital Economy & Transformation |
| AB One Concept Note | `/aboneconceptnote` | Ministry of Digital Economy & Transformation |

### 3.6 Public Reporting Pages (2)

| Page | Route | Ministry Owner |
| :--- | :--- | :--- |
| Public Reporting | `/public-reporting` | Ministry of Security & Internal Affairs |
| Emergency Response | `/emergency-response` | Ministry of Security & Internal Affairs |

### 3.7 Other Pages (3)

| Page | Route | Ministry Owner |
| :--- | :--- | :--- |
| Diaspora Gateway | `/diaspora-gateway` | Ministry of Trade & Investment |
| Utilities & Environment | `/utilities-environment` | Ministry of Environment |
| State Archives | `/state-archives` | Ministry of Information & Culture |

---

## 4. PUBLIC PAGE LAYOUT

### 4.1 Standard Public Page Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GLOBAL HEADER MENU                                │
│         5 Labels × ~57 items each = 285 total items                │
├─────────────────────────────────────────────────────────────────────┤
│                    PAGE CONTENT                                      │
│         Hero Section → Content Sections → CTA Section               │
├─────────────────────────────────────────────────────────────────────┤
│                    PORTAL DIRECTORY OVERLAY                          │
│         Floating button for quick navigation                        │
├─────────────────────────────────────────────────────────────────────┤
│                    FOOTER                                            │
│         Contact Information → Social Links → Copyright              │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 Public Page Components

| Component | Description | Governance |
| :--- | :--- | :--- |
| Header Menu | Global navigation (285 items) | Identical across all pages |
| Hero Section | Page title, subtitle, primary CTA | 1 primary CTA per page |
| Content Sections | Page-specific content | Evidence-based content |
| CTA Section | Secondary CTAs (links/ghost buttons) | Maximum 3 per section |
| Portal Directory | Floating overlay for quick navigation | Visible on all public pages |
| Footer | Contact information, social links, copyright | Consistent across all pages |

---

## 5. PUBLIC PAGE CTA GOVERNANCE

### 5.1 CTA Rules for Public Pages

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Primary CTA | Every page has exactly 1 primary CTA (visually prominent) | MASTER_CTA_MATRIX.md |
| Secondary CTAs | Secondary CTAs use link/ghost button style | MASTER_CTA_MATRIX.md |
| Maximum 3 Per Section | No more than 3 CTAs per page section | MASTER_CTA_MATRIX.md |
| Consistent Text | CTA text is consistent across all pages | MASTER_CTA_MATRIX.md |
| No Header Duplication | CTAs must not duplicate header menu items | 04_CTA_OVERLAP_MATRIX.md |
| No Sidebar Duplication | CTAs must not duplicate sidebar items | 04_CTA_OVERLAP_MATRIX.md |

### 5.2 CTA Reduction on Public Pages

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Total CTAs on Public Pages | ~1,500 | ~450 | 70% |
| Primary CTAs Per Page | 3-5 | 1 | 80% |
| Header Duplicate CTAs | 265 | 0 | 100% |
| Sidebar Duplicate CTAs | 149 | 0 | 100% |

---

## 6. PUBLIC PAGE NAVIGATION GOVERNANCE

### 6.1 Navigation Rules for Public Pages

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Header Menu Only | Public pages have header menu as only global navigation | FINAL_NAVIGATION_MODEL.md |
| No Sidebar | Public pages do NOT have sidebar | FINAL_NAVIGATION_MODEL.md |
| Portal Directory | Public pages have floating portal directory | FINAL_NAVIGATION_MODEL.md |
| No Dead Links | No dead navigation links (404 errors) | FINAL_NAVIGATION_MODEL.md |

### 6.2 Navigation Reduction on Public Pages

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Sidebar Items on Public Pages | 514 | 0 | 100% |
| Header Items | 285 | 285 | 0% |
| Portal Directory Items | ~52 | ~52 | 0% |
| **Total Navigation on Public Pages** | **~851** | **~337** | **60%** |

---

## 7. PUBLIC PAGE RESPONSIVE DESIGN

### 7.1 Responsive Design Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Mobile-First | All public pages use responsive CSS | 01_PAGE_FAMILY_FORENSICS.md |
| No Mobile Variants | Mobile variants (-mobile) become responsive CSS | 01_PAGE_FAMILY_FORENSICS.md |
| Consistent Experience | Mobile and desktop users see same content | 01_PAGE_FAMILY_FORENSICS.md |

### 7.2 Mobile Variant Elimination

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Mobile Variants | ~30 | 0 | 100% |
| Responsive CSS Files | 0 | 52 | +100% |
| Device-Specific Routes | ~30 | 0 | 100% |

---

## 8. PUBLIC PAGE COMPLIANCE

### 8.1 Compliance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| No Sidebar | Public pages must not have sidebar | FINAL_NAVIGATION_MODEL.md |
| Header Consistency | Header menu must be identical across all public pages | FINAL_NAVIGATION_MODEL.md |
| One Primary CTA | Every public page must have exactly 1 primary CTA | MASTER_CTA_MATRIX.md |
| No Dead Links | No dead navigation links on public pages | FINAL_NAVIGATION_MODEL.md |
| Responsive Design | All public pages must be responsive | 01_PAGE_FAMILY_FORENSICS.md |

### 8.2 Compliance Monitoring

| Monitoring Type | Frequency | Purpose |
| :--- | :--- | :--- |
| Automated Sidebar Check | Weekly | Verify public pages do not have sidebar |
| Automated Header Consistency Check | Weekly | Verify header menu identical across all public pages |
| CTA Count Audit | Monthly | Verify public pages have exactly 1 primary CTA |
| Dead Link Scan | Monthly | Verify no dead navigation links on public pages |

---

**END OF PUBLIC PLATFORM ARCHITECTURE**
