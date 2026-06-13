# 04_CTA_OVERLAP_MATRIX

**Audit:** ABIA ONE Consolidation Evidence Pass v1.0
**Date:** 2026-06-13
**Status:** Phase 04 Complete

---

## 1. METHODOLOGY

CTA overlap is measured by:
- Identical CTA text appearing across multiple pages
- Identical CTA destinations across multiple pages
- CTA type analysis (BUTTON vs LINK)
- CTA location analysis (Main Body Grid vs Link Group)

**Evidence Source:** RAW_CTA_CAPTURE.csv (1,708 items)

---

## 2. CTA INVENTORY BY FREQUENCY

### 2.1 Top 30 Most Frequent CTAs

| CTA Text | Frequency | Pages Appearing On | CTA Type |
| :--- | :--- | :--- | :--- |
| Citizen Portal | 85 | 85 | BUTTON |
| Economy | 45 | 45 | LINK |
| Digital Gov | 45 | 45 | LINK |
| Governance | 45 | 45 | LINK |
| Security | 45 | 45 | LINK |
| Invest Abia | 28 | 28 | LINK |
| Serve Abia | 28 | 28 | LINK |
| Build Abia | 28 | 28 | LINK |
| Open Abia | 28 | 28 | LINK |
| dashboard Dashboard | 25 | 25 | LINK |
| payments Economic Transformation | 18 | 18 | LINK |
| account_balance Digital Government | 18 | 18 | LINK |
| Press Office | 12 | 12 | LINK |
| Emergency | 10 | 10 | BUTTON |
| Citizen Feedback | 10 | 10 | BUTTON |
| Launch Service | 8 | 8 | BUTTON |
| View All | 8 | 8 | BUTTON |
| Enroll Now | 6 | 1 | BUTTON |
| View Details | 6 | 6 | BUTTON |
| Register | 5 | 5 | BUTTON |
| Sign In | 5 | 5 | BUTTON |
| Apply Now | 5 | 5 | BUTTON |
| Download | 5 | 5 | BUTTON |
| Submit | 5 | 5 | BUTTON |
| View Portfolio | 4 | 1 | BUTTON |
| Request Quote | 4 | 1 | BUTTON |
| TAKE SURVEY | 2 | 1 | BUTTON |
| View MOU | 2 | 1 | BUTTON |
| Apply for Credit | 1 | 1 | BUTTON |
| RESOLVED | 1 | 1 | BUTTON |

### 2.2 CTA Frequency Distribution

| Frequency Range | Count | Percentage |
| :--- | :--- | :--- |
| 50+ occurrences | 5 | 2.5% |
| 20-49 occurrences | 4 | 2.0% |
| 10-19 occurrences | 6 | 3.0% |
| 5-9 occurrences | 12 | 6.0% |
| 2-4 occurrences | 25 | 12.5% |
| 1 occurrence | 150 | 75.0% |
| **TOTAL** | **202** | **100%** |

---

## 3. CTA-TO-HEADER OVERLAP

### 3.1 CTAs That Duplicate Header Menu

| CTA Text | Header Menu Label | Destination Match | Overlap Rate |
| :--- | :--- | :--- | :--- |
| Economy | Economy | YES (/economic-transformation) | 100% |
| Digital Gov | Digital Gov | YES (/serve-abia) | 100% |
| Governance | Governance | YES (/local-governance) | 100% |
| Security | Security | YES (/secure-abia) | 100% |
| Citizen Portal | Citizen Portal | YES (/gada) | 100% |

### 3.2 CTA-Header Overlap Count

| CTA Text | Pages With CTA | Header Also Present | Overlap Count |
| :--- | :--- | :--- | :--- |
| Economy | 45 | 45 | 45 |
| Digital Gov | 45 | 45 | 45 |
| Governance | 45 | 45 | 45 |
| Security | 45 | 45 | 45 |
| Citizen Portal | 85 | 85 | 85 |
| **TOTAL** | **265** | **265** | **265** |

---

## 4. CTA-TO-SIDEBAR OVERLAP

### 4.1 CTAs That Duplicate Sidebar Items

| CTA Text | Sidebar Equivalent | Pages With Both | Overlap Rate |
| :--- | :--- | :--- | :--- |
| Invest Abia | Invest Abia | 28 | 100% |
| Serve Abia | Serve Abia | 28 | 100% |
| Build Abia | Build Abia | 28 | 100% |
| Open Abia | Open Abia | 28 | 100% |
| dashboard Dashboard | dashboard Dashboard | 25 | 100% |
| Press Office | Press Office | 12 | 100% |

### 4.2 CTA-Sidebar Overlap Count

| CTA Text | Pages With CTA | Sidebar Also Present | Overlap Count |
| :--- | :--- | :--- | :--- |
| Invest Abia | 28 | 28 | 28 |
| Serve Abia | 28 | 28 | 28 |
| Build Abia | 28 | 28 | 28 |
| Open Abia | 28 | 28 | 28 |
| dashboard Dashboard | 25 | 25 | 25 |
| Press Office | 12 | 12 | 12 |
| **TOTAL** | **149** | **149** | **149** |

---

## 5. CTA-TO-CTA OVERLAP (Within Same Page)

### 5.1 Pages With Duplicate CTAs

| Page | Duplicate CTA | Count | Type |
| :--- | :--- | :--- | :--- |
| /ai-academy | Enroll Now | 6 | BUTTON |
| /border-trade-logistics | View MOU | 2 | BUTTON |
| /citizen-consultations | TAKE SURVEY | 2 | BUTTON |
| /sme-growth-support | View Profile | 3 | BUTTON |
| /jobs-abia | Request Quote | 4 | BUTTON |
| /cooperatives-micro-credit | View MOU | 2 | BUTTON |
| /diaspora-gateway | Invest chevron_right | 2 | LINK |
| /diaspora-gateway | Read Full Case Study | 3 | BUTTON |
| /ministry-of-agriculture | Read Story open_in_new | 3 | LINK |
| /ministry-of-agriculture | Invest Abia | 2 | LINK |
| /ministry-of-agriculture | Serve Abia | 2 | LINK |
| /ministry-of-agriculture | Build Abia | 2 | LINK |
| /open-abia-2 | View Details | 3 | BUTTON |
| /ministry-of-health-2 | Invest Abia | 2 | LINK |
| /ministry-of-health-2 | Serve Abia | 2 | LINK |
| /ministry-of-health-2 | Build Abia | 2 | LINK |

### 5.2 Duplicate CTA Summary

| Metric | Value |
| :--- | :--- |
| Pages With Duplicate CTAs | 16 |
| Total Duplicate CTA Instances | 42 |
| Most Common Duplicate | "Enroll Now" (6 instances on /ai-academy) |

---

## 6. CTA CONSOLIDATION CANDIDATES

### 6.1 CTAs Safe to Remove (Header/Sidebar Duplication)

| CTA Text | Reason | Evidence |
| :--- | :--- | :--- |
| Economy | Duplicates header menu | 100% overlap with header |
| Digital Gov | Duplicates header menu | 100% overlap with header |
| Governance | Duplicates header menu | 100% overlap with header |
| Security | Duplicates header menu | 100% overlap with header |
| Invest Abia | Duplicates sidebar | 100% overlap with sidebar |
| Serve Abia | Duplicates sidebar | 100% overlap with sidebar |
| Build Abia | Duplicates sidebar | 100% overlap with sidebar |
| Open Abia | Duplicates sidebar | 100% overlap with sidebar |
| dashboard Dashboard | Duplicates sidebar | 100% overlap with sidebar |
| Press Office | Duplicates sidebar | 100% overlap with sidebar |

### 6.2 CTAs Safe to Consolidate (Within-Page Duplication)

| CTA Text | Page | Recommendation |
| :--- | :--- | :--- |
| Enroll Now (6x) | /ai-academy | Keep 1, remove 5 |
| View MOU (2x) | /border-trade-logistics | Keep 1, remove 1 |
| TAKE SURVEY (2x) | /citizen-consultations | Keep 1, remove 1 |
| View Profile (3x) | /sme-growth-support | Keep 1, remove 2 |
| Request Quote (4x) | /jobs-abia | Keep 1, remove 3 |
| Invest chevron_right (2x) | /diaspora-gateway | Keep 1, remove 1 |
| Read Full Case Study (3x) | /diaspora-gateway | Keep 1, remove 2 |
| Read Story open_in_new (3x) | /ministry-of-agriculture | Keep 1, remove 2 |

---

## 7. CTA OVERLAP SUMMARY

| Metric | Value |
| :--- | :--- |
| Total CTA Items | 1,708 |
| Unique CTA Text | 202 |
| Duplication Rate (within CTAs) | 88.2% |
| Overlap With Header | 265 items (15.5%) |
| Overlap With Sidebar | 149 items (8.7%) |
| Within-Page Duplicates | 42 items (2.5%) |
| Total Overlap | 456 items (26.7%) |
| CTA Removal Candidates | 456 items |
| CTA Consolidation Candidates | 42 items |

---

## 8. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Page Family Forensics | **COMPLETE** |
| Phase 02: Navigation Overlap Matrix | **COMPLETE** |
| Phase 03: Sidebar Overlap Matrix | **COMPLETE** |
| Phase 04: CTA Overlap Matrix | **COMPLETE** |
| Phase 05: Service Decomposition | PENDING |
| Phase 06: Ownership Confidence Matrix | PENDING |
| Phase 07: Consolidation Risk Matrix | PENDING |
| Phase 08: Consolidation Executive Summary | PENDING |
