# 07_CONSOLIDATION_RISK_MATRIX

**Audit:** ABIA ONE Consolidation Evidence Pass v1.0
**Date:** 2026-06-13
**Status:** Phase 07 Complete

---

## 1. METHODOLOGY

Consolidation risk is measured by:
- Dependencies on the candidate (what breaks if removed)
- Affected pages, navigation items, and dashboards
- Risk level assignment (LOW, MEDIUM, HIGH)
- Blocking factors identification

**Evidence Sources:** All prior phases, RAW_PAGE_CAPTURE.csv, RAW_NAVIGATION_CAPTURE.csv, RAW_SIDEBAR_CAPTURE.csv, RAW_CTA_CAPTURE.csv

---

## 2. CONSOLIDATION RISK MATRIX

### 2.1 Page Retirement Candidates

| Candidate | Candidate Type | Reason | Dependencies | Affected Pages | Affected Navigation | Affected Dashboards | Risk Level | Safe to Execute | Blocking Factors | Supporting Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/serve-abia-2` | Iteration variant | Duplicate of `/serve-abia` | None | 0 | 0 | 0 | LOW | YES | None | 92% content similarity with canonical |
| `/serve-abia-3` | Iteration variant | Duplicate of `/serve-abia` | None | 0 | 0 | 0 | LOW | YES | None | 92% content similarity with canonical |
| `/serve-abia-mobile` | Mobile variant | Mobile layout of `/serve-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/secure-abia-2` | Iteration variant | Duplicate of `/secure-abia` | None | 0 | 0 | 0 | LOW | YES | None | 87% content similarity with canonical |
| `/secure-abia-3` | Iteration variant | Duplicate of `/secure-abia` | None | 0 | 0 | 0 | LOW | YES | None | 87% content similarity with canonical |
| `/secure-abia-mobile` | Mobile variant | Mobile layout of `/secure-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/secure-abia-mobile-2` | Mobile variant | Mobile layout of `/secure-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/economic-transformation-2` | Iteration variant | Duplicate of `/economic-transformation` | None | 0 | 0 | 0 | LOW | YES | None | 95% content similarity with canonical |
| `/digital-archives-heritage-2` | Iteration variant | Duplicate of `/digital-archives-heritage` | None | 0 | 0 | 0 | LOW | YES | None | 88% content similarity with canonical |
| `/digital-archives-heritage-mobile` | Mobile variant | Mobile layout of `/digital-archives-heritage` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/ministry-of-agriculture-2` | Iteration variant | Duplicate of `/ministry-of-agriculture` | None | 0 | 0 | 0 | LOW | YES | None | 84% content similarity with canonical |
| `/ministry-of-agriculture-3` | Iteration variant | Duplicate of `/ministry-of-agriculture` | None | 0 | 0 | 0 | LOW | YES | None | 84% content similarity with canonical |
| `/ministry-of-agriculture-mobile` | Mobile variant | Mobile layout of `/ministry-of-agriculture` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/ministry-of-agriculture-mobile-2` | Mobile variant | Mobile layout of `/ministry-of-agriculture` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/ministry-of-health-2` | Iteration variant | Duplicate of `/ministry-of-health` | None | 0 | 0 | 0 | LOW | YES | None | 86% content similarity with canonical |
| `/ministry-of-health-mobile` | Mobile variant | Mobile layout of `/ministry-of-health` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/ministry-of-health-mobile-2` | Mobile variant | Mobile layout of `/ministry-of-health` | None | 0 | 0, 0 | LOW | YES | None | Responsive CSS can replace |
| `/ai-academy-2` | Iteration variant | Duplicate of `/ai-academy` | None | 0 | 0 | 0 | LOW | YES | None | 82% content similarity with canonical |
| `/ai-academy-mobile` | Mobile variant | Mobile layout of `/ai-academy` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/education-learning-2` | Iteration variant | Duplicate of `/education-learning` | None | 0 | 0 | 0 | LOW | YES | None | 91% content similarity with canonical |
| `/health-wellness-2` | Iteration variant | Duplicate of `/health-wellness` | None | 0 | 0 | 0 | LOW | YES | None | 89% content similarity with canonical |
| `/environment-sustainability-2` | Iteration variant | Duplicate of `/environment-sustainability` | None | 0 | 0 | 0 | LOW | YES | None | 85% content similarity with canonical |
| `/environment-sustainability-mobile` | Mobile variant | Mobile layout of `/environment-sustainability` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/open-abia-2` | Iteration variant | Duplicate of `/open-abia` | None | 0 | 0 | 0 | LOW | YES | None | 87% content similarity with canonical |
| `/open-abia-mobile` | Mobile variant | Mobile layout of `/open-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/border-trade-logistics-2` | Iteration variant | Duplicate of `/border-trade-logistics` | None | 0 | 0 | 0 | LOW | YES | None | 83% content similarity with canonical |
| `/commerce-trade-2` | Iteration variant | Duplicate of `/commerce-trade` | None | 0 | 0 | 0 | LOW | YES | None | 88% content similarity with canonical |
| `/housing-urban-development-2` | Iteration variant | Duplicate of `/housing-urban-development` | None | 0 | 0 | 0 | LOW | YES | None | 86% content similarity with canonical |
| `/legal-institutional-registry-2` | Iteration variant | Duplicate of `/legal-institutional-registry` | None | 0 | 0 | 0 | LOW | YES | None | 84% content similarity with canonical |
| `/legal-institutional-registry-mobile` | Mobile variant | Mobile layout of `/legal-institutional-registry` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/cooperatives-micro-credit-2` | Iteration variant | Duplicate of `/cooperatives-micro-credit` | None | 0 | 0 | 0 | LOW | YES | None | 81% content similarity with canonical |
| `/cooperatives-micro-credit-mobile` | Mobile variant | Mobile layout of `/cooperatives-micro-credit` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/social-welfare-2` | Iteration variant | Duplicate of `/social-welfare` | None | 0 | 0 | 0 | LOW | YES | None | 85% content similarity with canonical |
| `/science-technology-2` | Iteration variant | Duplicate of `/science-technology` | None | 0 | 0 | 0 | LOW | YES | None | 87% content similarity with canonical |
| `/women-gender-affairs-2` | Iteration variant | Duplicate of `/women-gender-affairs` | None | 0 | 0 | 0 | LOW | YES | None | 83% content similarity with canonical |
| `/women-gender-affairs-mobile` | Mobile variant | Mobile layout of `/women-gender-affairs` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/civil-service-portal-2` | Iteration variant | Duplicate of `/civil-service-portal` | None | 0 | 0 | 0 | LOW | YES | None | 80% content similarity with canonical |
| `/civil-service-mobile` | Mobile variant | Mobile layout of `/civil-service-portal` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/transport-mobility-2` | Iteration variant | Duplicate of `/transport-mobility` | None | 0 | 0 | 0 | LOW | YES | None | 79% content similarity with canonical |
| `/transport-mobility-mobile` | Mobile variant | Mobile layout of `/transport-mobility` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/transport-mobility-hub-mobile` | Mobile variant | Mobile layout of `/transport-mobility` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/water-resources-irrigation-2` | Iteration variant | Duplicate of `/water-resources-irrigation` | None | 0 | 0 | 0 | LOW | YES | None | 86% content similarity with canonical |
| `/transparent-governance-2` | Iteration variant | Duplicate of `/transparent-governance` | None | 0 | 0 | 0 | LOW | YES | None | 88% content similarity with canonical |
| `/invest-abia-mobile` | Mobile variant | Mobile layout of `/invest-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/gada-mobile` | Mobile variant | Mobile layout of `/gada` | None | 0 | 0, 0 | LOW | YES | None | Responsive CSS can replace |
| `/gada-mobile-2` | Mobile variant | Mobile layout of `/gada` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/build-abia-mobile` | Mobile variant | Mobile layout of `/build-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/connect-abia-mobile` | Mobile variant | Mobile layout of `/connect-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/jobs-abia-mobile` | Mobile variant | Mobile layout of `/jobs-abia` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/citizen-identity-mobile` | Mobile variant | Mobile layout of `/citizen-identity-civil-registry` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/aba-20-mobile` | Mobile variant | Mobile layout of `/aba-20` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |
| `/ministry-of-communication-2` | Iteration variant | Duplicate of `/ministry-of-communication` | None | 0 | 0 | 0 | LOW | YES | None | 87% content similarity with canonical |
| `/governors-command-center-mobile` | Mobile variant | Mobile layout of `/governors-command-center` | None | 0 | 0 | 0 | LOW | YES | None | Responsive CSS can replace |

### 2.2 Navigation Consolidation Candidates

| Candidate | Candidate Type | Reason | Dependencies | Affected Pages | Affected Navigation | Affected Dashboards | Risk Level | Safe to Execute | Blocking Factors | Supporting Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Duplicate sidebar items (85%) | Sidebar dedup | Same items appear in header | None | 0 | 514→100 | 0 | LOW | YES | None | 85% sidebar items duplicate header |
| "Economy" CTA | CTA dedup | Duplicates header menu | None | 0 | 45 removed | 0 | LOW | YES | None | 100% overlap with header |
| "Digital Gov" CTA | CTA dedup | Duplicates header menu | None | 0 | 45 removed | 0 | LOW | YES | None | 100% overlap with header |
| "Governance" CTA | CTA dedup | Duplicates header menu | None | 0 | 45 removed | 0 | LOW | YES | None | 100% overlap with header |
| "Security" CTA | CTA dedup | Duplicates header menu | None | 0 | 45 removed | 0 | LOW | YES | None | 100% overlap with header |
| "Invest Abia" CTA | CTA dedup | Duplicates sidebar | None | 0 | 28 removed | 0 | LOW | YES | None | 100% overlap with sidebar |
| "Serve Abia" CTA | CTA dedup | Duplicates sidebar | None | 0 | 28 removed | 0 | LOW | YES | None | 100% overlap with sidebar |
| "Build Abia" CTA | CTA dedup | Duplicates sidebar | None | 0 | 28 removed | 0 | LOW | YES | None | 100% overlap with sidebar |
| "Open Abia" CTA | CTA dedup | Duplicates sidebar | None | 0 | 28 removed | 0 | LOW | YES | None | 100% overlap with sidebar |

### 2.3 Dashboard Consolidation Candidates

| Candidate | Candidate Type | Reason | Dependencies | Affected Pages | Affected Navigation | Affected Dashboards | Risk Level | Safe to Execute | Blocking Factors | Supporting Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/mda-performance` | Dashboard merge | Subset of `/governors-command-center` | Governor's Office approval | 1 | 0 | 1 | MEDIUM | YES | Executive approval required | MDA Performance data already shown in Governor's Command Center |

---

## 3. RISK LEVEL SUMMARY

| Risk Level | Candidates | Percentage |
| :--- | :--- | :--- |
| LOW | 54 | 96% |
| MEDIUM | 2 | 4% |
| HIGH | 0 | 0% |
| **TOTAL** | **56** | **100%** |

---

## 4. SAFE-TO-EXECUTE SUMMARY

| Category | Candidates | Risk |
| :--- | :--- | :--- |
| Page Retirement | 52 | LOW |
| Navigation Consolidation | 9 | LOW |
| Dashboard Consolidation | 1 | MEDIUM |
| **TOTAL** | **62** | **LOW-MEDIUM** |

---

## 5. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Page Family Forensics | **COMPLETE** |
| Phase 02: Navigation Overlap Matrix | **COMPLETE** |
| Phase 03: Sidebar Overlap Matrix | **COMPLETE** |
| Phase 04: CTA Overlap Matrix | **COMPLETE** |
| Phase 05: Service Decomposition | **COMPLETE** |
| Phase 06: Ownership Confidence Matrix | **COMPLETE** |
| Phase 07: Consolidation Risk Matrix | **COMPLETE** |
| Phase 08: Consolidation Executive Summary | PENDING |
