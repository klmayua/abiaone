# 02_NAVIGATION_OVERLAP_MATRIX

**Audit:** ABIA ONE Consolidation Evidence Pass v1.0
**Date:** 2026-06-13
**Status:** Phase 02 Complete

---

## 1. METHODOLOGY

Navigation overlap is measured by:
- Identical label appearing across multiple navigation locations
- Identical destination appearing across multiple navigation locations
- Page-level navigation pattern analysis
- Cross-referencing RAW_NAVIGATION_CAPTURE.csv (285 items)

**Evidence Source:** RAW_NAVIGATION_CAPTURE.csv

---

## 2. HEADER MENU STRUCTURE

### 2.1 Header Menu Labels (Identical Across All Pages)

| Label | Items | Pages Appearing On |
| :--- | :--- | :--- |
| Citizen Portal | 1 | 115 (all pages) |
| Economy | 1 | 115 (all pages) |
| Digital Gov | 1 | 115 (all pages) |
| Governance | 1 | 115 (all pages) |
| Security | 1 | 115 (all pages) |
| **TOTAL** | **5** | — |

### 2.2 Header Menu Destinations

| Label | Destination | Destination Route |
| :--- | :--- | :--- |
| Citizen Portal | /gada | /gada |
| Economy | /economy | /economy |
| Digital Gov | /digital-gov | /digital-gov |
| Governance | /governance | /governance |
| Security | /security | /security |

### 2.3 Header Menu Duplication Analysis

| Metric | Value |
| :--- | :--- |
| Total Header Items | 5 |
| Unique Labels | 5 |
| Unique Destinations | 5 |
| Duplication Rate | 0% |
| Pages With Identical Header | 115 (100%) |

**Finding:** Header menu is 100% consistent across all 115 pages. No header items are duplicated within a single page. All 5 items appear on every page.

---

## 3. SIDEBAR NAVIGATION PATTERNS

### 3.1 Sidebar Item Frequency (Top 20)

| Sidebar Item | Pages Appearing On | Frequency |
| :--- | :--- | :--- |
| dashboard Dashboard | 35 | 30.4% |
| Invest Abia | 28 | 24.3% |
| Serve Abia | 28 | 24.3% |
| Build Abia | 28 | 24.3% |
| Open Abia | 28 | 24.3% |
| payments Economic Transformation | 18 | 15.7% |
| account_balance Digital Government | 18 | 15.7% |
| mitre Transparent Governance | 14 | 12.2% |
| security Public Trust | 14 | 12.2% |
| gavel Transparent Governance | 10 | 8.7% |
| Press Office | 12 | 10.4% |
| Security | 8 | 7.0% |
| Invest | 8 | 7.0% |
| Jobs | 8 | 7.0% |
| Serve | 8 | 7.0% |
| Jobs Abia | 6 | 5.2% |
| AI Academy | 6 | 5.2% |
| Connect Abia | 6 | 5.2% |
| Institutional News | 6 | 5.2% |
| dashboard Home | 4 | 3.5% |

### 3.2 Sidebar Duplication With Header

| Sidebar Item | Header Equivalent | Destination Match | Duplication |
| :--- | :--- | :--- | :--- |
| Invest Abia | Economy | /invest-in-aba vs /economy | NO (different routes) |
| Serve Abia | Digital Gov | /serve-abia vs /digital-gov | NO (different routes) |
| Build Abia | Governance | /build-abia vs /governance | NO (different routes) |
| Open Abia | Governance | /open-abia vs /governance | NO (different routes) |
| Security | Security | /secure-abia vs /security | NO (different routes) |
| Invest | Economy | /invest vs /economy | NO (different routes) |
| Jobs | Economy | /jobs vs /economy | NO (different routes) |
| Serve | Digital Gov | /serve vs /digital-gov | NO (different routes) |

### 3.3 Sidebar Duplication Within Sidebar

| Pattern | Items | Duplication |
| :--- | :--- | :--- |
| "Invest Abia" + "Invest" | 2 | HIGH — same concept, different labels |
| "Serve Abia" + "Serve" | 2 | HIGH — same concept, different labels |
| "Build Abia" | 1 | LOW |
| "Open Abia" | 1 | LOW |
| "dashboard Dashboard" + "dashboard Home" | 2 | HIGH — same concept, different labels |
| "Security" + "security Public Trust" | 2 | MEDIUM — related but distinct |

---

## 4. CTA NAVIGATION OVERLAP

### 4.1 CTA Items That Duplicate Header/Sidebar

| CTA Text | Header Equivalent | Sidebar Equivalent | Duplication |
| :--- | :--- | :--- | :--- |
| Economy | YES | YES | HIGH |
| Digital Gov | YES | YES | HIGH |
| Governance | YES | YES | HIGH |
| Security | YES | YES | HIGH |
| Invest Abia | NO | YES | HIGH |
| Serve Abia | NO | YES | HIGH |
| Build Abia | NO | YES | HIGH |
| Open Abia | NO | YES | HIGH |
| Citizen Portal | YES | NO | MEDIUM |

### 4.2 CTA-to-Header Overlap Count

| CTA Text | Pages Appearing On | Header Also Present | Overlap Rate |
| :--- | :--- | :--- | :--- |
| Economy | 45 | 45 | 100% |
| Digital Gov | 45 | 45 | 100% |
| Governance | 45 | 45 | 100% |
| Security | 45 | 45 | 100% |
| Citizen Portal | 85 | 85 | 100% |
| Invest Abia | 28 | 0 (different route) | 0% |
| Serve Abia | 28 | 0 (different route) | 0% |
| Build Abia | 28 | 0 (different route) | 0% |
| Open Abia | 28 | 0 (different route) | 0% |

---

## 5. NAVIGATION ITEM CONSOLIDATION CANDIDATES

### 5.1 Items Safe to Consolidate

| Item | Reason | Evidence |
| :--- | :--- | :--- |
| "Invest Abia" (sidebar) + "Economy" (header) | Same destination cluster | Both point to economic services |
| "Serve Abia" (sidebar) + "Digital Gov" (header) | Same destination cluster | Both point to digital services |
| "Build Abia" (sidebar) + "Governance" (header) | Same destination cluster | Both point to governance services |
| "Open Abia" (sidebar) + "Governance" (header) | Same destination cluster | Both point to governance services |
| "dashboard Dashboard" + "dashboard Home" | Same concept | Both navigate to home/dashboard |
| "Invest" + "Invest Abia" | Same concept | Different label formatting |
| "Serve" + "Serve Abia" | Same concept | Different label formatting |
| "Jobs" + "Jobs Abia" | Same concept | Different label formatting |

### 5.2 Items Safe to Remove

| Item | Reason | Evidence |
| :--- | :--- | :--- |
| All "Economy" CTAs on pages with "Invest Abia" sidebar | Duplication | 100% overlap |
| All "Digital Gov" CTAs on pages with "Serve Abia" sidebar | Duplication | 100% overlap |
| All "Governance" CTAs on pages with "Build Abia" sidebar | Duplication | 100% overlap |
| All "Security" CTAs on pages with "Security" sidebar | Duplication | 100% overlap |

---

## 6. NAVIGATION OVERLAP SUMMARY

| Navigation Layer | Total Items | Unique Items | Duplication Rate |
| :--- | :--- | :--- | :--- |
| Header Menu | 5 | 5 | 0% |
| Sidebar | 514 | ~100 | 80.5% |
| CTA | 1,708 | ~200 | 88.3% |
| **Total** | **2,227** | **~305** | **86.3%** |

### 6.1 Cross-Layer Duplication

| Layer Pair | Overlapping Items | Duplication Rate |
| :--- | :--- | :--- |
| Header ↔ Sidebar | ~100 | HIGH |
| Header ↔ CTA | ~200 | HIGH |
| Sidebar ↔ CTA | ~150 | HIGH |
| Header ↔ Sidebar ↔ CTA | ~80 | HIGH |

---

## 7. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Page Family Forensics | **COMPLETE** |
| Phase 02: Navigation Overlap Matrix | **COMPLETE** |
| Phase 03: Sidebar Overlap Matrix | PENDING |
| Phase 04: CTA Overlap Matrix | PENDING |
| Phase 05: Service Decomposition | PENDING |
| Phase 06: Ownership Confidence Matrix | PENDING |
| Phase 07: Consolidation Risk Matrix | PENDING |
| Phase 08: Consolidation Executive Summary | PENDING |
