# 05_SERVICE_DECOMPOSITION

**Audit:** ABIA ONE Consolidation Evidence Pass v1.0
**Date:** 2026-06-13
**Status:** Phase 05 Complete

---

## 1. METHODOLOGY

Service decomposition breaks broad service buckets into actual services by:
- Analyzing page content for specific service patterns
- Mapping CTAs to specific service actions
- Identifying service-specific navigation patterns
- Cross-referencing with prior audit service registry

**Evidence Sources:** RAW_PAGE_CAPTURE.csv, RAW_CTA_CAPTURE.csv, SERVICE_REGISTRY.md

**Rule:** "General Portal Services" is not an acceptable service name. Every service must have a specific, identifiable function.

---

## 2. DECOMPOSED SERVICE REGISTRY

### Service 1: Emergency Dispatch & Response
- **Description:** Real-time emergency call routing, dispatch coordination, and incident tracking
- **Supporting Pages:** `/public-reporting`, `/emergency-response`, `/emergency-crisis-response`, `/secure-abia`, `/secure-abia-mobile`
- **Supporting Capabilities:** Emergency Dispatch & Response
- **Supporting Experiences:** secure_abia
- **Audience:** Citizens, emergency responders
- **Owner:** Ministry of Security & Internal Affairs
- **Outcomes:** Emergency response time reduction, incident resolution
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "INITIATE EMERGENCY CALL", "Report Incident", "Live Alerts", "DEPLOY RAPID RESPONSE"

### Service 2: Citizen Feedback Collection
- **Description:** Multi-channel citizen feedback, surveys, and consultation participation
- **Supporting Pages:** `/citizen-consultations`, `/connect-abia`, `/connect-abia-mobile`
- **Supporting Capabilities:** Citizen Feedback Collection
- **Supporting Experiences:** connect_abia
- **Audience:** Citizens
- **Owner:** Ministry of Digital Economy & Transformation
- **Outcomes:** Citizen engagement, policy feedback, democratic participation
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Share Feedback", "TAKE SURVEY", "JOIN SESSION", "SUBMIT TO GOVERNANCE HUB"

### Service 3: Financial Transparency & Budget Monitoring
- **Description:** Real-time budget execution, revenue tracking, and expenditure monitoring
- **Supporting Pages:** `/open-abia`, `/open-abia-2`, `/open-abia-mobile`, `/transparent-governance`, `/transparent-governance-2`
- **Supporting Capabilities:** Financial Transparency & Budget Monitoring
- **Supporting Experiences:** open_abia
- **Audience:** Citizens, auditors, civil society
- **Owner:** Ministry of Finance
- **Outcomes:** Fiscal accountability, corruption reduction
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "download Export PDF", "calendar_today FY 2024", "Download Revenue Audit"

### Service 4: Digital Identity Management
- **Description:** Sovereign digital residency cards, vital records, and identity verification
- **Supporting Pages:** `/citizen-identity-civil-registry`, `/citizen-identity-mobile`
- **Supporting Capabilities:** Digital Identity Management
- **Supporting Experiences:** serve_abia
- **Audience:** Citizens
- **Owner:** Ministry of Digital Economy & Transformation
- **Outcomes:** Identity verification, service access authentication
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "download Download e-ID", "Renew Residency", "Re-Verify Identity"

### Service 5: Investment Promotion & Facilitation
- **Description:** FDI attraction, investor matchmaking, and project pipeline management
- **Supporting Pages:** `/invest-abia`, `/invest-abia-mobile`, `/invest-in-aba`, `/sovereign-fund-investment-portfolio`
- **Supporting Capabilities:** Investment Promotion & Facilitation
- **Supporting Experiences:** invest_abia
- **Audience:** Investors, diaspora, businesses
- **Owner:** Ministry of Trade & Investment
- **Outcomes:** FDI growth, job creation, economic development
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Launch Service", "Explore Opportunities", "Launch DDI Portal"

### Service 6: Employment & Skills Matching
- **Description:** Job marketplace, talent registry, and skills training coordination
- **Supporting Pages:** `/jobs-abia`, `/jobs-abia-mobile`, `/employer-portal`
- **Supporting Capabilities:** Employment & Skills Matching
- **Supporting Experiences:** work_abia
- **Audience:** Job seekers, employers, students
- **Owner:** Ministry of Trade & Investment
- **Outcomes:** Employment rate increase, skills development
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Search Jobs", "Apply Now", "Register as Candidate"

### Service 7: Infrastructure Project Tracking
- **Description:** Real-time monitoring of infrastructure projects, progress visualization, and completion tracking
- **Supporting Pages:** `/build-abia`, `/build-abia-mobile`, `/gada`, `/gada-mobile`, `/gada-mobile-2`
- **Supporting Capabilities:** Infrastructure Project Tracking
- **Supporting Experiences:** build_abia
- **Audience:** Citizens, developers, contractors
- **Owner:** Ministry of Works & Infrastructure
- **Outcomes:** Project transparency, accountability
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Launch Service", "Report an Urban Issue", "Explore Master Plan"

### Service 8: Agricultural Supply Chain Management
- **Description:** Crop monitoring, farmer registration, fertilizer distribution, and market linkage
- **Supporting Pages:** `/agri-transformation`, `/ministry-of-agriculture`, `/ministry-of-agriculture-2`, `/ministry-of-agriculture-3`
- **Supporting Capabilities:** Agricultural Supply Chain Management
- **Supporting Experiences:** live_abia
- **Audience:** Farmers, agribusinesses
- **Owner:** Ministry of Agriculture
- **Outcomes:** Food security, farmer income increase
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Smallholder Support Grant", "View Roadmap", "Start Your Application"

### Service 9: Health Service Delivery
- **Description:** Health insurance management, facility finder, immunization tracking, and health monitoring
- **Supporting Pages:** `/health-wellness`, `/health-wellness-2`, `/ministry-of-health`, `/ministry-of-health-2`
- **Supporting Capabilities:** Health Service Delivery
- **Supporting Experiences:** live_abia
- **Audience:** Citizens, healthcare providers
- **Owner:** Ministry of Health
- **Outcomes:** Healthcare access, public health improvement
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Get Directions", "Enroll in Insurance", "Find Facility"

### Service 10: Trade & Commerce Facilitation
- **Description:** Market access, licensing, export facilitation, and trade compliance
- **Supporting Pages:** `/commerce-trade`, `/commerce-trade-2`, `/border-trade-logistics`, `/border-trade-logistics-2`
- **Supporting Capabilities:** Trade & Commerce Facilitation
- **Supporting Experiences:** invest_abia
- **Audience:** Businesses, traders, exporters
- **Owner:** Ministry of Trade & Investment
- **Outcomes:** Trade volume increase, business growth
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Enter Market", "Export Trade Data", "New Trade Agreement"

### Service 11: Environmental Monitoring
- **Description:** Waste management, erosion control, environmental permits, and sustainability tracking
- **Supporting Pages:** `/environment-sustainability`, `/environment-sustainability-2`, `/environment-sustainability-mobile`
- **Supporting Capabilities:** Environmental Monitoring
- **Supporting Experiences:** live_abia
- **Audience:** Citizens, businesses
- **Owner:** Ministry of Environment
- **Outcomes:** Environmental protection, sustainability
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Apply for Permit", "Explore Live Data", "Deposit Waste"

### Service 12: Digital Archives & Heritage Preservation
- **Description:** Historical records digitization, cultural heritage preservation, and genealogical research
- **Supporting Pages:** `/digital-archives-heritage`, `/digital-archives-heritage-2`, `/digital-archives-heritage-mobile`, `/state-archives`
- **Supporting Capabilities:** Digital Archives & Heritage Preservation
- **Supporting Experiences:** discover_abia
- **Audience:** Citizens, researchers, tourists
- **Owner:** Ministry of Information & Culture
- **Outcomes:** Cultural preservation, historical access
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Start Exploring", "Begin Deep Dive", "Browse Catalog"

### Service 13: Tourism Promotion
- **Description:** Tourist attraction showcase, hotel directory, and travel facilitation
- **Supporting Pages:** `/tourism-culture`, `/tourism-culture-2`, `/tourism-culture-mobile`
- **Supporting Capabilities:** Tourism Promotion
- **Supporting Experiences:** visit_abia
- **Audience:** Tourists, businesses
- **Owner:** Ministry of Information & Culture
- **Outcomes:** Tourism revenue increase, cultural exposure
- **Evidence:** RAW_PAGE_CAPTURE.csv shows tourism-focused content

### Service 14: Education & Skills Development
- **Description:** Educational tools, school registries, and AI Academy pathways
- **Supporting Pages:** `/ai-academy`, `/ai-academy-2`, `/ai-academy-mobile`, `/education-learning`, `/education-learning-2`
- **Supporting Capabilities:** Employment & Skills Matching (shared)
- **Supporting Experiences:** learn_abia
- **Audience:** Students, teachers, tech innovators
- **Owner:** Ministry of Education
- **Outcomes:** AI Academy registration, course progress tracking
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Launch Service", "Enroll Now", "Resume Learning"

### Service 15: Legal & Regulatory Access
- **Description:** Law library, institutional registry, and legislative tracking
- **Supporting Pages:** `/legal-institutional-registry`, `/legal-institutional-registry-2`, `/legal-institutional-registry-mobile`
- **Supporting Capabilities:** Legal & Regulatory Access
- **Supporting Experiences:** serve_abia
- **Audience:** Citizens, lawyers, businesses
- **Owner:** Ministry of Justice
- **Outcomes:** Legal access, regulatory compliance
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Launch Service", "Browse Full Library", "Search MDAs"

### Service 16: Social Welfare Distribution
- **Description:** Social safety nets, disability support, elderly care, and community grants
- **Supporting Pages:** `/social-welfare`, `/social-welfare-2`, `/women-gender-affairs`, `/women-gender-affairs-2`, `/women-gender-affairs-mobile`
- **Supporting Capabilities:** Social Welfare Distribution
- **Supporting Experiences:** serve_abia
- **Audience:** Vulnerable populations
- **Owner:** Ministry of Humanitarian Affairs
- **Outcomes:** Social protection, inclusion
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Safety Net", "Disability", "Elderly", "Register Now"

### Service 17: Science & Technology Innovation
- **Description:** Startup incubation, IP protection, research grants, and innovation labs
- **Supporting Pages:** `/science-technology`, `/science-technology-2`
- **Supporting Capabilities:** Science & Technology Innovation
- **Supporting Experiences:** serve_abia
- **Audience:** Innovators, researchers, startups
- **Owner:** Ministry of Science & Technology
- **Outcomes:** Innovation ecosystem growth, technology advancement
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Register New Invention", "Partner with R&D"

### Service 18: SME Growth Support
- **Description:** SME registration, mentorship, shared facilities, and export certification
- **Supporting Pages:** `/sme-growth-support`, `/cooperatives-micro-credit`, `/cooperatives-micro-credit-2`, `/cooperatives-micro-credit-mobile`
- **Supporting Capabilities:** SME Growth Support
- **Supporting Experiences:** work_abia
- **Audience:** Small businesses, cooperatives
- **Owner:** Ministry of Trade & Investment
- **Outcomes:** SME growth, job creation
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Register SME", "View Directory", "Begin Registration Process"

### Service 19: Government Service Portal
- **Description:** Unified portal for all government services, application tracking, and service directory
- **Supporting Pages:** `/serve-abia`, `/serve-abia-2`, `/serve-abia-3`, `/serve-abia-mobile`
- **Supporting Capabilities:** Multiple (aggregated)
- **Supporting Experiences:** serve_abia
- **Audience:** General public, taxpayers, business owners
- **Owner:** Ministry of Digital Economy & Transformation
- **Outcomes:** Service access, application tracking
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Find Service", "Pay Now", "View History"

### Service 20: Civil Service Management
- **Description:** Internal departmental dashboards for ministry and agency operations
- **Supporting Pages:** `/civil-service-portal`, `/civil-service-portal-2`, `/civil-service-mobile`, `/mda-performance`
- **Supporting Capabilities:** Executive Command & Control, Performance Monitoring & Analytics
- **Supporting Experiences:** govern_abia
- **Audience:** Government officials, ministry staff
- **Owner:** Ministry of Digital Economy & Transformation
- **Outcomes:** Performance monitoring, directive issuance
- **Evidence:** RAW_CTA_CAPTURE.csv shows CTAs: "Update Bio-Data", "View History", "Continue Learning"

---

## 3. SERVICE DECOMPOSITION SUMMARY

| Service | Pages | Capabilities | Experiences |
| :--- | :--- | :--- | :--- |
| Emergency Dispatch & Response | 5 | 1 | secure_abia |
| Citizen Feedback Collection | 3 | 1 | connect_abia |
| Financial Transparency | 5 | 1 | open_abia |
| Digital Identity Management | 2 | 1 | serve_abia |
| Investment Promotion | 4 | 1 | invest_abia |
| Employment & Skills | 3 | 1 | work_abia |
| Infrastructure Tracking | 5 | 1 | build_abia |
| Agricultural Supply Chain | 4 | 1 | live_abia |
| Health Service Delivery | 4 | 1 | live_abia |
| Trade & Commerce | 4 | 1 | invest_abia |
| Environmental Monitoring | 3 | 1 | live_abia |
| Digital Archives | 4 | 1 | discover_abia |
| Tourism Promotion | 3 | 1 | visit_abia |
| Education & Skills | 5 | 1 | learn_abia |
| Legal & Regulatory | 3 | 1 | serve_abia |
| Social Welfare | 5 | 1 | serve_abia |
| Science & Technology | 2 | 1 | serve_abia |
| SME Growth Support | 4 | 1 | work_abia |
| Government Service Portal | 4 | 1 | serve_abia |
| Civil Service Management | 4 | 1 | govern_abia |
| **TOTAL** | **78** | **20** | **12** |

---

## 4. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Page Family Forensics | **COMPLETE** |
| Phase 02: Navigation Overlap Matrix | **COMPLETE** |
| Phase 03: Sidebar Overlap Matrix | **COMPLETE** |
| Phase 04: CTA Overlap Matrix | **COMPLETE** |
| Phase 05: Service Decomposition | **COMPLETE** |
| Phase 06: Ownership Confidence Matrix | PENDING |
| Phase 07: Consolidation Risk Matrix | PENDING |
| Phase 08: Consolidation Executive Summary | PENDING |
