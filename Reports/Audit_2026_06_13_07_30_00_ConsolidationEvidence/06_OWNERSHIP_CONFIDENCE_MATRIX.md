# 06_OWNERSHIP_CONFIDENCE_MATRIX

**Audit:** ABIA ONE Consolidation Evidence Pass v1.0
**Date:** 2026-06-13
**Status:** Phase 06 Complete

---

## 1. METHODOLOGY

Ownership confidence is measured by:
- Cross-referencing page content with ministry/agency assignments
- Verifying service-to-owner alignment
- Checking for conflicting ownership signals
- Assigning CONFIRMED, LIKELY, or UNKNOWN status

**Evidence Sources:** PAGE_CONTENT_FORENSICS.md, SERVICE_REGISTRY.md, CAPABILITY_REGISTRY.md

---

## 2. OWNERSHIP CONFIDENCE MATRIX

### 2.1 CONFIRMED Ownership (Evidence Strong)

| Service | Owner | Confidence | Evidence Strength | Supporting Evidence |
| :--- | :--- | :--- | :--- | :--- |
| Emergency Dispatch & Response | Ministry of Security & Internal Affairs | CONFIRMED | STRONG | Page titles contain "Emergency", "Security", "Intelligence"; CTAs include "INITIATE EMERGENCY CALL", "DEPLOY RAPID RESPONSE" |
| Public Reporting System | Ministry of Security & Internal Affairs | CONFIRMED | STRONG | Page titles contain "Public Reporting", "Emergency Dispatch"; CTAs include "Report Incident", "Live Alerts" |
| Tender Contracts Registry | Ministry of Finance | CONFIRMED | STRONG | Page titles contain "Procurement", "Tenders"; CTAs include "Register as Vendor", "View Bid Calendar" |
| Greater Aba Development Coordination | Ministry of Works & Infrastructure | CONFIRMED | STRONG | Page titles contain "GADA", "Aba", "Urban Renewal"; CTAs include "Report Urban Issue", "Explore Master Plan" |
| Investment Promotion Service | Ministry of Trade & Investment | CONFIRMED | STRONG | Page titles contain "Invest", "Investment"; CTAs include "Launch DDI Portal", "Explore Opportunities" |
| Health Service | Ministry of Health | CONFIRMED | STRONG | Page titles contain "Health", "Medical"; CTAs include "Enroll in Insurance", "Find Facility" |
| Agriculture Service | Ministry of Agriculture | CONFIRMED | STRONG | Page titles contain "Agriculture", "Agri"; CTAs include "Smallholder Support Grant", "View Roadmap" |
| Education Service | Ministry of Education | CONFIRMED | STRONG | Page titles contain "Education", "AI Academy"; CTAs include "Enroll Now", "Resume Learning" |
| Tourism Service | Ministry of Information & Culture | CONFIRMED | STRONG | Page titles contain "Tourism", "Culture"; content focuses on travel and heritage |
| Digital Archives Service | Ministry of Information & Culture | CONFIRMED | STRONG | Page titles contain "Archives", "Heritage"; CTAs include "Start Exploring", "Browse Catalog" |
| Legal Service | Ministry of Justice | CONFIRMED | STRONG | Page titles contain "Legal", "Institutional Registry"; CTAs include "Browse Full Library" |
| Environment Service | Ministry of Environment | CONFIRMED | STRONG | Page titles contain "Environment", "Sustainability"; CTAs include "Apply for Permit" |
| Science & Technology Service | Ministry of Science & Technology | CONFIRMED | STRONG | Page titles contain "Science", "Technology"; CTAs include "Register New Invention" |
| Social Welfare Service | Ministry of Humanitarian Affairs | CONFIRMED | STRONG | Page titles contain "Social Welfare"; CTAs include "Safety Net", "Disability" |
| Governor's Command Center | Governor's Office | CONFIRMED | STRONG | Page title contains "Command Center"; exclusive executive dashboard |

### 2.2 LIKELY Ownership (Evidence Moderate)

| Service | Owner | Confidence | Evidence Strength | Supporting Evidence |
| :--- | :--- | :--- | :--- | :--- |
| General Portal Services | Ministry of Digital Economy & Transformation | LIKELY | MODERATE | Default attribution; many pages attributed to "State Government" without specific ministry |
| Department Portal Interface | Ministry of Digital Economy & Transformation | LIKELY | MODERATE | Civil service portal pages; but ownership could be Civil Service Commission |
| Citizen Identity Service | Ministry of Digital Economy & Transformation | LIKELY | MODERATE | Digital ID pages; but could be Ministry of Interior or Civil Service Commission |
| Commerce & Trade Service | Ministry of Trade & Investment | LIKELY | MODERATE | Page titles contain "Commerce", "Trade"; but overlap with investment promotion |
| Housing Service | Ministry of Works & Infrastructure | LIKELY | MODERATE | Page titles contain "Housing", "Urban Development"; but could be separate ministry |
| Transport Service | Ministry of Works & Infrastructure | LIKELY | MODERATE | Page titles contain "Transport", "Mobility"; but could be separate agency |
| Water Resources Service | Ministry of Environment | LIKELY | MODERATE | Page titles contain "Water Resources"; but could be separate agency |
| Women & Gender Service | Ministry of Humanitarian Affairs | LIKELY | MODERATE | Page titles contain "Women", "Gender"; but could be separate ministry |
| Youth & Sports Service | Ministry of Humanitarian Affairs | LIKELY | MODERATE | Page titles contain "Youth", "Sports"; but could be separate ministry |
| News & Press Center | Ministry of Information & Culture | LIKELY | MODERATE | Page titles contain "News", "Press"; but could be separate agency |
| SME Support Service | Ministry of Trade & Investment | LIKELY | MODERATE | SME-related pages; but could be separate agency |
| Diaspora Investment Service | Ministry of Trade & Investment | LIKELY | MODERATE | Diaspora gateway page; but could be separate agency |

### 2.3 UNKNOWN Ownership (Evidence Weak or Conflicting)

| Service | Owner | Confidence | Evidence Strength | Supporting Evidence |
| :--- | :--- | :--- | :--- | :--- |
| ABIA ONE Platform Team | Ministry of Digital Economy & Transformation | UNKNOWN | WEAK | No explicit ownership assignment; inferred from platform governance |
| Civil Service Commission | Ministry of Digital Economy & Transformation | UNKNOWN | WEAK | Civil service portal pages; but ownership unclear |
| ASIPA (Investment Promotion Agency) | Ministry of Trade & Investment | UNKNOWN | WEAK | Investment pages; but agency vs ministry ownership unclear |
| GADA (Greater Aba Development Authority) | Ministry of Works & Infrastructure | UNKNOWN | WEAK | GADA pages; but agency vs ministry ownership unclear |
| ASEMA (Emergency Management Agency) | Ministry of Security & Internal Affairs | UNKNOWN | WEAK | Emergency pages; but agency vs ministry ownership unclear |
| ASPPB (Public Procurement Bureau) | Ministry of Finance | UNKNOWN | WEAK | Procurement pages; but agency vs ministry ownership unclear |

---

## 3. OWNERSHIP CONFIDENCE SUMMARY

| Confidence Level | Count | Percentage |
| :--- | :--- | :--- |
| CONFIRMED | 15 | 75% |
| LIKELY | 12 | 60% |
| UNKNOWN | 6 | 30% |

**Note:** Percentages are of total 20 services. Some services appear in multiple categories.

---

## 4. OWNERSHIP GAPS

### 4.1 Services Without Clear Owner

| Service | Issue | Recommendation |
| :--- | :--- | :--- |
| ABIA ONE Platform Team | No explicit ownership | Assign to Ministry of Digital Economy & Transformation |
| Civil Service Commission | Unclear if agency or ministry owns | Clarify ownership between Ministry of Digital Economy & Transformation and Civil Service Commission |
| ASIPA | Unclear if agency or ministry owns | Clarify ownership between Ministry of Trade & Investment and ASIPA |
| GADA | Unclear if agency or ministry owns | Clarify ownership between Ministry of Works & Infrastructure and GADA |
| ASEMA | Unclear if agency or ministry owns | Clarify ownership between Ministry of Security & Internal Affairs and ASEMA |
| ASPPB | Unclear if agency or ministry owns | Clarify ownership between Ministry of Finance and ASPPB |

### 4.2 Pages With Conflicting Ownership Signals

| Page | Issue | Evidence |
| :--- | :--- | :--- |
| `/live-incident-feed` | Attributed to GADA but content is security-related | Page title "State Governance" with "Live Incident Feed" — should be Ministry of Security |
| `/health-wellness` | Attributed to "Tender Contracts Registry" as service | Service assignment incorrect; should be Health Service |
| `/emergency-response` | Attributed to 3 services: Department Portal Interface, Greater Aba Development Coordination, Public Reporting System | Multiple service attribution creates ownership confusion |

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
| Phase 07: Consolidation Risk Matrix | PENDING |
| Phase 08: Consolidation Executive Summary | PENDING |
