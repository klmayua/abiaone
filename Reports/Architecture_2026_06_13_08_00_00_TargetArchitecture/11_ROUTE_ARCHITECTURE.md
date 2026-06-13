# 11_ROUTE_ARCHITECTURE

**Project:** ABIA ONE Target Architecture Design
**Date:** 2026-06-13
**Status:** Route Architecture Complete
**Evidence:** CANONICAL_PAGE_MATRIX.md, 01_PAGE_FAMILY_FORENSICS.md, FINAL_NAVIGATION_MODEL.md, RAW_PAGE_CAPTURE.csv

---

## 1. ROUTE ARCHITECTURE OVERVIEW

- **Current Routes:** 115
- **Target Routes:** 52 (canonical)
- **Reduction:** 55%
- **Mobile Variants:** ~30 → 0 (responsive CSS)
- **Iteration Variants:** ~25 → 0 (merged into canonical)

---

## 2. ROUTE ARCHITECTURE PRINCIPLES

| Principle | Definition | Evidence |
| :--- | :--- | :--- |
| One Page, One Route | Every logical page has exactly 1 canonical route | CANONICAL_PAGE_MATRIX.md |
| No Duplicate Routes | No duplicate routes for same content | 01_PAGE_FAMILY_FORENSICS.md |
| Responsive Design | Mobile variants become responsive CSS | 01_PAGE_FAMILY_FORENSICS.md |
| Evidence-Based Routes | All routes must be evidence-based | 00_MASTER_EVIDENCE_INDEX.md |

---

## 3. CANONICAL ROUTE REGISTRY

### 3.1 Dashboard Routes (3)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/` | `/` | `/home-mobile` | RETAIN |
| `/governors-command-center` | `/governors-command-center` | `/governors-command-center-mobile` | RETAIN |
| `/mda-performance` | `/mda-performance` | — | RETAIN (merge into Governor's Command Center) |

### 3.2 Experience Routes (15)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/digital-archives-heritage` | `/digital-archives-heritage-2` | `/digital-archives-heritage-mobile` | RETAIN |
| `/invest-in-aba` | — | `/invest-abia-mobile` | RETAIN |
| `/sovereign-fund-investment-portfolio` | — | — | RETAIN |
| `/live-incident-feed` | — | — | RETAIN |
| `/jobs-abia` | — | `/jobs-abia-mobile` | RETAIN |
| `/employer-portal` | — | — | RETAIN |
| `/build-abia` | — | `/build-abia-mobile` | RETAIN |
| `/gada` | — | `/gada-mobile`, `/gada-mobile-2` | RETAIN |
| `/ai-academy` | `/ai-academy-2` | `/ai-academy-mobile` | RETAIN |
| `/education-learning` | `/education-learning-2` | — | RETAIN |
| `/tourism-culture` | `/tourism-culture-2` | `/tourism-culture-mobile` | RETAIN |
| `/secure-abia` | `/secure-abia-2`, `/secure-abia-3` | `/secure-abia-mobile`, `/secure-abia-mobile-2` | RETAIN |
| `/local-governance` | — | — | RETAIN |
| `/serve-abia` | `/serve-abia-2`, `/serve-abia-3` | `/serve-abia-mobile` | RETAIN |
| `/open-abia` | `/open-abia-2` | `/open-abia-mobile` | RETAIN |
| `/connect-abia` | — | `/connect-abia-mobile` | RETAIN |

### 3.3 Ministry Portal Routes (9)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/ministry-of-health` | `/ministry-of-health-2` | `/ministry-of-health-mobile`, `/ministry-of-health-mobile-2` | RETAIN |
| `/ministry-of-agriculture` | `/ministry-of-agriculture-2`, `/ministry-of-agriculture-3` | `/ministry-of-agriculture-mobile`, `/ministry-of-agriculture-mobile-2` | RETAIN |
| `/ministry-of-communication` | — | — | RETAIN |
| `/social-welfare` | `/social-welfare-2` | — | RETAIN |
| `/women-gender-affairs` | `/women-gender-affairs-2` | `/women-gender-affairs-mobile` | RETAIN |
| `/youth-sports` | — | — | RETAIN |
| `/science-technology` | `/science-technology-2` | — | RETAIN |
| `/environment-sustainability` | `/environment-sustainability-2` | `/environment-sustainability-mobile` | RETAIN |
| `/legal-institutional-registry` | `/legal-institutional-registry-2` | `/legal-institutional-registry-mobile` | RETAIN |

### 3.4 Service Sector Routes (10)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/commerce-trade` | `/commerce-trade-2` | — | RETAIN |
| `/border-trade-logistics` | `/border-trade-logistics-2` | `/trade-logistics-mobile` | RETAIN |
| `/health-wellness` | `/health-wellness-2` | `/health-wellness-mobile` | RETAIN |
| `/housing-urban-development` | `/housing-urban-development-2` | — | RETAIN |
| `/transport-mobility` | `/transport-mobility-2` | `/transport-mobility-mobile`, `/transport-mobility-hub-mobile` | RETAIN |
| `/water-resources-irrigation` | `/water-resources-irrigation-2` | — | RETAIN |
| `/cooperatives-micro-credit` | `/cooperatives-micro-credit-2` | `/cooperatives-micro-credit-mobile` | RETAIN |
| `/sme-growth-support` | — | — | RETAIN |
| `/transparent-governance` | `/transparent-governance-2` | — | RETAIN |
| `/emergency-crisis-response` | — | — | RETAIN |

### 3.5 Standalone Routes (7)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/aba-20` | — | `/aba-20-mobile` | RETAIN |
| `/agri-transformation` | — | — | RETAIN |
| `/citizen-consultations` | — | — | RETAIN |
| `/citizen-identity-civil-registry` | — | `/citizen-identity-mobile` | RETAIN |
| `/economic-transformation` | — | — | RETAIN |
| `/greater-aba-development-authority` | — | — | RETAIN |
| `/news-press-center` | — | — | RETAIN |

### 3.6 Special Routes (3)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/procurement-tenders-registry` | — | — | RETAIN |
| `/civil-service-portal` | `/civil-service-portal-2` | `/civil-service-mobile` | RETAIN |
| `/aboneconceptnote` | — | — | RETAIN |

### 3.7 Public Reporting Routes (2)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/public-reporting` | — | — | RETAIN |
| `/emergency-response` | — | — | RETAIN |

### 3.8 Other Routes (3)

| Canonical Route | Desktop Variants | Mobile Variants | Retention Decision |
| :--- | :--- | :--- | :--- |
| `/diaspora-gateway` | — | — | RETAIN |
| `/utilities-environment` | — | — | RETAIN |
| `/state-archives` | — | — | RETAIN |

---

## 4. ROUTE RETIREMENT CANDIDATES

### 4.1 Retirement Summary

| Category | Routes | Percentage |
| :--- | :--- | :--- |
| Mobile Variants | ~30 | 26% |
| Iteration Variants | ~25 | 22% |
| **Total Retirement Candidates** | **~55** | **48%** |

### 4.2 Retirement Evidence

| Evidence | Value | Source |
| :--- | :--- | :--- |
| Content Similarity | >79% average | 01_PAGE_FAMILY_FORENSICS.md |
| Navigation Similarity | 100% | 01_PAGE_FAMILY_FORENSICS.md |
| Dependencies | Zero | 07_CONSOLIDATION_RISK_MATRIX.md |
| Risk Level | LOW | 07_CONSOLIDATION_RISK_MATRIX.md |

---

## 5. ROUTE REDIRECT STRATEGY

### 5.1 Redirect Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| Permanent Redirect | Use 301 permanent redirect for retired routes | 07_CONSOLIDATION_RISK_MATRIX.md |
| Canonical Target | Redirect to canonical route | CANONICAL_PAGE_MATRIX.md |
| No Broken Links | Ensure no broken links after redirect | FINAL_NAVIGATION_MODEL.md |

### 5.2 Redirect Map

| Retired Route | Canonical Target | Redirect Type |
| :--- | :--- | :--- |
| `/serve-abia-2` | `/serve-abia` | 301 |
| `/serve-abia-3` | `/serve-abia` | 301 |
| `/serve-abia-mobile` | `/serve-abia` | 301 |
| `/secure-abia-2` | `/secure-abia` | 301 |
| `/secure-abia-3` | `/secure-abia` | 301 |
| `/secure-abia-mobile` | `/secure-abia` | 301 |
| `/secure-abia-mobile-2` | `/secure-abia` | 301 |
| `/economic-transformation-2` | `/economic-transformation` | 301 |
| `/digital-archives-heritage-2` | `/digital-archives-heritage` | 301 |
| `/digital-archives-heritage-mobile` | `/digital-archives-heritage` | 301 |
| `/ministry-of-agriculture-2` | `/ministry-of-agriculture` | 301 |
| `/ministry-of-agriculture-3` | `/ministry-of-agriculture` | 301 |
| `/ministry-of-agriculture-mobile` | `/ministry-of-agriculture` | 301 |
| `/ministry-of-agriculture-mobile-2` | `/ministry-of-agriculture` | 301 |
| `/ministry-of-health-2` | `/ministry-of-health` | 301 |
| `/ministry-of-health-mobile` | `/ministry-of-health` | 301 |
| `/ministry-of-health-mobile-2` | `/ministry-of-health` | 301 |
| `/ai-academy-2` | `/ai-academy` | 301 |
| `/ai-academy-mobile` | `/ai-academy` | 301 |
| `/education-learning-2` | `/education-learning` | 301 |
| `/health-wellness-2` | `/health-wellness` | 301 |
| `/environment-sustainability-2` | `/environment-sustainability` | 301 |
| `/environment-sustainability-mobile` | `/environment-sustainability` | 301 |
| `/open-abia-2` | `/open-abia` | 301 |
| `/open-abia-mobile` | `/open-abia` | 301 |
| `/border-trade-logistics-2` | `/border-trade-logistics` | 301 |
| `/commerce-trade-2` | `/commerce-trade` | 301 |
| `/housing-urban-development-2` | `/housing-urban-development` | 301 |
| `/legal-institutional-registry-2` | `/legal-institutional-registry` | 301 |
| `/legal-institutional-registry-mobile` | `/legal-institutional-registry` | 301 |
| `/cooperatives-micro-credit-2` | `/cooperatives-micro-credit` | 301 |
| `/cooperatives-micro-credit-mobile` | `/cooperatives-micro-credit` | 301 |
| `/social-welfare-2` | `/social-welfare` | 301 |
| `/science-technology-2` | `/science-technology` | 301 |
| `/women-gender-affairs-2` | `/women-gender-affairs` | 301 |
| `/women-gender-affairs-mobile` | `/women-gender-affairs` | 301 |
| `/civil-service-portal-2` | `/civil-service-portal` | 301 |
| `/civil-service-mobile` | `/civil-service-portal` | 301 |
| `/transport-mobility-2` | `/transport-mobility` | 301 |
| `/transport-mobility-mobile` | `/transport-mobility` | 301 |
| `/transport-mobility-hub-mobile` | `/transport-mobility` | 301 |
| `/water-resources-irrigation-2` | `/water-resources-irrigation` | 301 |
| `/transparent-governance-2` | `/transparent-governance` | 301 |
| `/invest-abia-mobile` | `/invest-in-aba` | 301 |
| `/gada-mobile` | `/gada` | 301 |
| `/gada-mobile-2` | `/gada` | 301 |
| `/build-abia-mobile` | `/build-abia` | 301 |
| `/connect-abia-mobile` | `/connect-abia` | 301 |
| `/jobs-abia-mobile` | `/jobs-abia` | 301 |
| `/citizen-identity-mobile` | `/citizen-identity-civil-registry` | 301 |
| `/aba-20-mobile` | `/aba-20` | 301 |
| `/ministry-of-communication-2` | `/ministry-of-communication` | 301 |
| `/governors-command-center-mobile` | `/governors-command-center` | 301 |

---

## 6. ROUTE COMPLIANCE

### 6.1 Compliance Rules

| Rule | Definition | Evidence |
| :--- | :--- | :--- |
| One Page, One Route | Every logical page has exactly 1 canonical route | CANONICAL_PAGE_MATRIX.md |
| No Duplicate Routes | No duplicate routes for same content | 01_PAGE_FAMILY_FORENSICS.md |
| No Broken Links | No dead navigation links (404 errors) | FINAL_NAVIGATION_MODEL.md |
| Redirect Retired Routes | Retired routes must be redirected to canonical | 07_CONSOLIDATION_RISK_MATRIX.md |

### 6.2 Compliance Monitoring

| Monitoring Type | Frequency | Purpose |
| :--- | :--- | :--- |
| Automated Route Audit | Weekly | Verify all routes are canonical |
| Dead Link Scan | Monthly | Verify no dead navigation links |
| Redirect Validation | Monthly | Verify redirects are working correctly |

---

**END OF ROUTE ARCHITECTURE**
