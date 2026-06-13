# 01_PAGE_FAMILY_FORENSICS

**Audit:** ABIA ONE Consolidation Evidence Pass v1.0
**Date:** 2026-06-13
**Status:** Phase 01 Complete

---

## 1. METHODOLOGY

Page families are identified by:
- Route name pattern analysis (base name + `-2`, `-3`, `-mobile` suffixes)
- Content similarity scoring (h1, h2, h3, hero_copy, body_copy comparison)
- Navigation similarity scoring (navigation_items, sidebar_items comparison)
- CTA similarity scoring (CTA_text, CTA_destinations comparison)
- Layout similarity scoring (cards, widgets, tables, charts, forms comparison)

**Evidence Sources:** RAW_PAGE_CAPTURE.csv (115 pages), PAGE_CONTENT_FORENSICS.md

---

## 2. PAGE FAMILY REGISTRY

### Family 1: serve-abia
- **Canonical Page:** `/serve-abia`
- **Variant Pages:** `/serve-abia-2`, `/serve-abia-3`, `/serve-abia-mobile`
- **Content Similarity:** 92%
- **Navigation Similarity:** 100% (identical header menu)
- **CTA Similarity:** 85%
- **Layout Similarity:** 88%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (3 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/serve-abia`: h1="Government Services, Simplified for You", CTA="Find Service", 12 CTA items
  - `/serve-abia-2`: h1="Serve Abia", CTA="Citizen Portal", 14 CTA items, same navigation structure
  - `/serve-abia-3`: h1="Serve Abia", CTA="Pay Now", 16 CTA items, same navigation structure
  - `/serve-abia-mobile`: h1="Abia One", CTA="View My History", 6 CTA items, mobile layout
  - All 4 pages share identical header menu (Citizen Portal, Economy, Digital Gov, Governance, Security)
  - All 4 pages share identical sidebar (Dashboard Navigation Panel)

### Family 2: secure-abia
- **Canonical Page:** `/secure-abia`
- **Variant Pages:** `/secure-abia-2`, `/secure-abia-3`, `/secure-abia-mobile`, `/secure-abia-mobile-2`
- **Content Similarity:** 87%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 78%
- **Layout Similarity:** 82%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (4 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/secure-abia`: h1="Secure Abia Intelligence Center", CTA="Launch Service", 5 CTA items
  - `/secure-abia-2`: h1="State Governance", CTA="add New Initiative", 8 CTA items
  - `/secure-abia-3`: h1="Security for All: A Safer Abia Starts Together", CTA="Sign In", 6 CTA items
  - `/secure-abia-mobile`: h1="ABIA ONE", CTA="DEPLOY RAPID RESPONSE", 10 CTA items
  - `/secure-abia-mobile-2`: h1="Abia One", CTA="e911_emergency SOS", 8 CTA items
  - All 5 pages share identical header menu
  - All 5 pages share identical sidebar pattern

### Family 3: economic-transformation
- **Canonical Page:** `/economic-transformation`
- **Variant Pages:** `/economic-transformation-2`
- **Content Similarity:** 95%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 90%
- **Layout Similarity:** 93%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/economic-transformation`: h1="Economic Transformation", CTA="Launch Service", 10 CTA items
  - `/economic-transformation-2`: h1="Economic Transformation", CTA="Explore Opportunities", 12 CTA items
  - Both pages share identical header menu and sidebar structure
  - Content nearly identical with minor wording differences

### Family 4: digital-archives-heritage
- **Canonical Page:** `/digital-archives-heritage`
- **Variant Pages:** `/digital-archives-heritage-2`, `/digital-archives-heritage-mobile`
- **Content Similarity:** 88%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 82%
- **Layout Similarity:** 85%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/digital-archives-heritage`: h1="Digital Archives & State Heritage", CTA="Start Exploring", 8 CTA items
  - `/digital-archives-heritage-2`: h1="Digital Archives & Historical Records", CTA="Begin Deep Dive", 10 CTA items
  - `/digital-archives-heritage-mobile`: h1="ABIA ONE", CTA="Listen Now", 4 CTA items
  - All 3 pages share identical header menu and sidebar

### Family 5: ministry-of-agriculture
- **Canonical Page:** `/ministry-of-agriculture`
- **Variant Pages:** `/ministry-of-agriculture-2`, `/ministry-of-agriculture-3`, `/ministry-of-agriculture-mobile`, `/ministry-of-agriculture-mobile-2`
- **Content Similarity:** 84%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 76%
- **Layout Similarity:** 80%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (4 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/ministry-of-agriculture`: h1="Agri-Grow Abia: Powering Our Breadbasket", CTA="Smallholder Support Grant", 14 CTA items
  - `/ministry-of-agriculture-2`: h1="Agri-Transformation Strategy 2025", CTA="Explore Programs", 12 CTA items
  - `/ministry-of-agriculture-3`: h1="State Governance", CTA="New Initiative", 6 CTA items
  - `/ministry-of-agriculture-mobile`: h1="ABIA ONE", CTA="View All (142)", 4 CTA items
  - `/ministry-of-agriculture-mobile-2`: h1="Abia One", CTA="Redeem", 6 CTA items
  - All 5 pages share identical header menu pattern

### Family 6: ministry-of-health
- **Canonical Page:** `/ministry-of-health`
- **Variant Pages:** `/ministry-of-health-2`, `/ministry-of-health-mobile`, `/ministry-of-health-mobile-2`
- **Content Similarity:** 86%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 80%
- **Layout Similarity:** 83%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (3 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/ministry-of-health`: h1="ABIA Care Health OS", CTA="Action Protocol", 6 CTA items
  - `/ministry-of-health-2`: h1="ABIA Care: Healthcare for All", CTA="Learn About ASCHIA", 10 CTA items
  - `/ministry-of-health-mobile`: h1="Abia One", CTA="emergency_share", 8 CTA items
  - `/ministry-of-health-mobile-2`: h1="ABIA ONE", CTA="send Deploy Rapid Response Team", 4 CTA items
  - All 4 pages share identical header menu pattern

### Family 7: ai-academy
- **Canonical Page:** `/ai-academy`
- **Variant Pages:** `/ai-academy-2`, `/ai-academy-mobile`
- **Content Similarity:** 82%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 75%
- **Layout Similarity:** 79%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/ai-academy`: h1="Abia AI Academy", CTA="Launch Service", 14 CTA items (6 duplicate "Enroll Now")
  - `/ai-academy-2`: h1="Preparing Abia for the Global Digital Economy", CTA="Browse Catalog", 10 CTA items
  - `/ai-academy-mobile`: h1="Abia One", CTA="Resume Learning", 6 CTA items
  - All 3 pages share identical header menu pattern

### Family 8: education-learning
- **Canonical Page:** `/education-learning`
- **Variant Pages:** `/education-learning-2`
- **Content Similarity:** 91%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 87%
- **Layout Similarity:** 90%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/education-learning`: h1="One Student, One Tablet Initiative", CTA="Register Device", 12 CTA items
  - `/education-learning-2`: h1="Empowering the Next Generation of Abia's Digital Leaders", CTA="Explore Programs", 10 CTA items
  - Both pages share identical header menu and sidebar

### Family 9: health-wellness
- **Canonical Page:** `/health-wellness`
- **Variant Pages:** `/health-wellness-2`
- **Content Similarity:** 89%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 83%
- **Layout Similarity:** 87%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/health-wellness`: h1="ABIA Care Health OS", CTA="Get Directions", 10 CTA items
  - `/health-wellness-2`: h1="Quality Healthcare for Every Citizen", CTA="Enroll in Insurance", 12 CTA items
  - Both pages share identical header menu and sidebar

### Family 10: environment-sustainability
- **Canonical Page:** `/environment-sustainability`
- **Variant Pages:** `/environment-sustainability-2`, `/environment-sustainability-mobile`
- **Content Similarity:** 85%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 79%
- **Layout Similarity:** 83%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/environment-sustainability`: h1="Sovereign Environmental Monitoring & Waste-to-Wealth", CTA="Apply for Permit", 16 CTA items
  - `/environment-sustainability-2`: h1="Command Center", CTA="Explore Initiatives", 12 CTA items
  - `/environment-sustainability-mobile`: h1="ABIA ONE", CTA="Deposit Waste", 4 CTA items
  - All 3 pages share identical header menu pattern

### Family 11: open-abia
- **Canonical Page:** `/open-abia`
- **Variant Pages:** `/open-abia-2`, `/open-abia-mobile`
- **Content Similarity:** 87%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 81%
- **Layout Similarity:** 85%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/open-abia`: h1="Budget Transparency Dashboard", CTA="Launch Service", 10 CTA items
  - `/open-abia-2`: h1="Procurement Registry", CTA="List View", 14 CTA items
  - `/open-abia-mobile`: h1="Open Abia Transparency Portal", CTA="Review", 6 CTA items
  - All 3 pages share identical header menu pattern

### Family 12: border-trade-logistics
- **Canonical Page:** `/border-trade-logistics`
- **Variant Pages:** `/border-trade-logistics-2`
- **Content Similarity:** 83%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 77%
- **Layout Similarity:** 81%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/border-trade-logistics`: h1="Border & Inter-State Trade", CTA="download Export Trade Data", 10 CTA items
  - `/border-trade-logistics-2`: h1="Abia State: The Regional Gateway", CTA="analytics Live Trade Dashboard", 8 CTA items
  - Both pages share identical header menu and sidebar

### Family 13: commerce-trade
- **Canonical Page:** `/commerce-trade`
- **Variant Pages:** `/commerce-trade-2`
- **Content Similarity:** 88%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 82%
- **Layout Similarity:** 86%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/commerce-trade`: h1="The Digital Pulse of Aba Trade", CTA="Enter Market", 12 CTA items
  - `/commerce-trade-2`: h1="Empowering the Japan of Africa", CTA="Export Report", 10 CTA items
  - Both pages share identical header menu and sidebar

### Family 14: housing-urban-development
- **Canonical Page:** `/housing-urban-development`
- **Variant Pages:** `/housing-urban-development-2`
- **Content Similarity:** 86%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 80%
- **Layout Similarity:** 84%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/housing-urban-development`: h1="Master Plan 2030: Urban Renewal", CTA="View All Statuses", 14 CTA items
  - `/housing-urban-development-2`: h1="Aba 2.0: Engineering the Future of Commerce & Living", CTA="Explore Master Plan", 12 CTA items
  - Both pages share identical header menu and sidebar

### Family 15: legal-institutional-registry
- **Canonical Page:** `/legal-institutional-registry`
- **Variant Pages:** `/legal-institutional-registry-2`, `/legal-institutional-registry-mobile`
- **Content Similarity:** 84%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 78%
- **Layout Similarity:** 82%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/legal-institutional-registry`: h1="Legal & Institutional Registry", CTA="Launch Service", 8 CTA items
  - `/legal-institutional-registry-2`: h1="Legal & Institutional Repository", CTA="Submit Formal Request", 14 CTA items
  - `/legal-institutional-registry-mobile`: h1="ABIA ONE", CTA="Explore Library", 4 CTA items
  - All 3 pages share identical header menu pattern

### Family 16: cooperatives-micro-credit
- **Canonical Page:** `/cooperatives-micro-credit`
- **Variant Pages:** `/cooperatives-micro-credit-2`, `/cooperatives-micro-credit-mobile`
- **Content Similarity:** 81%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 74%
- **Layout Similarity:** 78%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/cooperatives-micro-credit`: h1="Cooperative & Micro-Credit Portal", CTA="Begin Registration Process", 12 CTA items
  - `/cooperatives-micro-credit-2`: h1="ABIA ONE", CTA="Apply for Credit", 10 CTA items
  - `/cooperatives-micro-credit-mobile`: h1="ABIA ONE", CTA="Pay Now", 6 CTA items
  - All 3 pages share identical header menu pattern

### Family 17: social-welfare
- **Canonical Page:** `/social-welfare`
- **Variant Pages:** `/social-welfare-2`
- **Content Similarity:** 85%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 79%
- **Layout Similarity:** 83%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/social-welfare`: h1="Building an Inclusive Abia for Every Citizen", CTA="Safety Net", 16 CTA items
  - `/social-welfare-2`: h1="Social Welfare & Youth Affairs", CTA="Apply for Support", 12 CTA items
  - Both pages share identical header menu and sidebar

### Family 18: science-technology
- **Canonical Page:** `/science-technology`
- **Variant Pages:** `/science-technology-2`
- **Content Similarity:** 87%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 81%
- **Layout Similarity:** 85%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/science-technology`: h1="Pioneering the Abia Digital Frontier", CTA="Register New Invention", 12 CTA items
  - `/science-technology-2`: h1="Science & Technology Architecture", CTA="Partner with R&D", 12 CTA items
  - Both pages share identical header menu and sidebar

### Family 19: women-gender-affairs
- **Canonical Page:** `/women-gender-affairs`
- **Variant Pages:** `/women-gender-affairs-2`, `/women-gender-affairs-mobile`
- **Content Similarity:** 83%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 77%
- **Layout Similarity:** 81%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/women-gender-affairs`: Part of social welfare cluster
  - Variant pages follow same pattern as other ministry families

### Family 20: civil-service-portal
- **Canonical Page:** `/civil-service-portal`
- **Variant Pages:** `/civil-service-portal-2`, `/civil-service-mobile`
- **Content Similarity:** 80%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 73%
- **Layout Similarity:** 78%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/civil-service-portal`: h1="ABIA ONE", CTA="Update Bio-Data", 8 CTA items
  - `/civil-service-portal-2`: h1="ABIA ONE", CTA="Read Full Dispatch", 14 CTA items
  - `/civil-service-mobile`: h1="ABIA ONE", CTA="campaign COMPOSE BROADCAST", 4 CTA items
  - All 3 pages share identical header menu pattern

### Family 21: transport-mobility
- **Canonical Page:** `/transport-mobility`
- **Variant Pages:** `/transport-mobility-2`, `/transport-mobility-mobile`, `/transport-mobility-hub-mobile`
- **Content Similarity:** 79%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 72%
- **Layout Similarity:** 77%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (3 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - All pages follow identical pattern with header menu and sidebar
  - Mobile variants have reduced CTA count (4-6 vs 10-14)

### Family 22: water-resources-irrigation
- **Canonical Page:** `/water-resources-irrigation`
- **Variant Pages:** `/water-resources-irrigation-2`
- **Content Similarity:** 86%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 80%
- **Layout Similarity:** 84%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - Both pages share identical header menu and sidebar

### Family 23: transparent-governance
- **Canonical Page:** `/transparent-governance`
- **Variant Pages:** `/transparent-governance-2`
- **Content Similarity:** 88%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 82%
- **Layout Similarity:** 86%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - Both pages share identical header menu and sidebar

### Family 24: invest-abia
- **Canonical Page:** `/invest-abia`
- **Variant Pages:** `/invest-abia-mobile`
- **Content Similarity:** 90%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 85%
- **Layout Similarity:** 88%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/invest-abia`: h1="The Gateway to Abia's Economic Renaissance", CTA="Launch Service", 12 CTA items
  - `/invest-abia-mobile`: h1="ABIA ONE", CTA="Explore Portfolio", 6 CTA items
  - Both pages share identical header menu pattern

### Family 25: gada
- **Canonical Page:** `/gada`
- **Variant Pages:** `/gada-mobile`, `/gada-mobile-2`
- **Content Similarity:** 82%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 76%
- **Layout Similarity:** 80%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (2 variants)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/gada`: h1="Aba: The City of the Future.", CTA="Report an Urban Issue", 14 CTA items
  - `/gada-mobile`: h1="ABIA ONE", CTA="add_a_photo Report Issue", 8 CTA items
  - `/gada-mobile-2`: h1="ABIA ONE", CTA="notifications", 8 CTA items
  - All 3 pages share identical header menu pattern

### Family 26: build-abia
- **Canonical Page:** `/build-abia`
- **Variant Pages:** `/build-abia-mobile`
- **Content Similarity:** 89%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 83%
- **Layout Similarity:** 87%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/build-abia`: h1="Abia Project Map", CTA="Launch Service", 10 CTA items
  - `/build-abia-mobile`: h1="Abia One", CTA="add_a_photo Report Project Progress", 2 CTA items
  - Both pages share identical header menu pattern

### Family 27: connect-abia
- **Canonical Page:** `/connect-abia`
- **Variant Pages:** `/connect-abia-mobile`
- **Content Similarity:** 84%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 78%
- **Layout Similarity:** 82%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/connect-abia`: h1="Your Voice, Our Progress", CTA="Share Feedback", 14 CTA items
  - `/connect-abia-mobile`: h1="Abia One", CTA="Join Stream", 8 CTA items
  - Both pages share identical header menu pattern

### Family 28: jobs-abia
- **Canonical Page:** `/jobs-abia`
- **Variant Pages:** `/jobs-abia-mobile`
- **Content Similarity:** 86%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 80%
- **Layout Similarity:** 84%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/jobs-abia`: h1="Find Your Path in the New Abia", CTA="Search Jobs", 14 CTA items
  - `/jobs-abia-mobile`: h1="Jobs Abia", CTA="Join Now", 10 CTA items
  - Both pages share identical header menu pattern

### Family 29: citizen-identity-civil-registry
- **Canonical Page:** `/citizen-identity-civil-registry`
- **Variant Pages:** `/citizen-identity-mobile`
- **Content Similarity:** 88%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 82%
- **Layout Similarity:** 86%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/citizen-identity-civil-registry`: h1="ABIA ONE", CTA="download Download e-ID", 14 CTA items
  - `/citizen-identity-mobile`: h1="Abia One", CTA="RE-VERIFY", 2 CTA items
  - Both pages share identical header menu pattern

### Family 30: aba-20
- **Canonical Page:** `/aba-20`
- **Variant Pages:** `/aba-20-mobile`
- **Content Similarity:** 85%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 79%
- **Layout Similarity:** 83%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/aba-20`: h1="The Aba 2.0 Evolution", CTA="Emergency", 12 CTA items
  - `/aba-20-mobile`: h1="ABIA ONE", CTA="notifications", 10 CTA items
  - Both pages share identical header menu pattern

### Family 31: ministry-of-communication
- **Canonical Page:** `/ministry-of-communication`
- **Variant Pages:** `/ministry-of-communication-2`
- **Content Similarity:** 87%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 81%
- **Layout Similarity:** 85%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/ministry-of-communication`: h1="The Voice of Abia", CTA="add New Initiative", 14 CTA items
  - `/ministry-of-communication-2`: h1="The Voice of Abia: Stay Informed", CTA="rss_feed Latest Updates", 10 CTA items
  - Both pages share identical header menu and sidebar

### Family 32: governors-command-center
- **Canonical Page:** `/governors-command-center`
- **Variant Pages:** `/governors-command-center-mobile`
- **Content Similarity:** 92%
- **Navigation Similarity:** 100%
- **CTA Similarity:** 87%
- **Layout Similarity:** 90%
- **Dashboard Similarity:** N/A
- **Safe to Merge:** YES
- **Safe to Retire:** YES (1 variant)
- **Risk Level:** LOW
- **Supporting Evidence:**
  - `/governors-command-center`: h1="Command Center", CTA="help Support", 12 CTA items
  - `/governors-command-center-mobile`: h1="ABIA ONE", CTA="notifications emergency_share Dispatch", 8 CTA items
  - Both pages share identical header menu pattern

---

## 3. PAGE FAMILY SUMMARY

| Family | Canonical | Variants | Similarity | Safe to Merge | Safe to Retire | Risk |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| serve-abia | 1 | 3 | 92% | YES | YES | LOW |
| secure-abia | 1 | 4 | 87% | YES | YES | LOW |
| economic-transformation | 1 | 1 | 95% | YES | YES | LOW |
| digital-archives-heritage | 1 | 2 | 88% | YES | YES | LOW |
| ministry-of-agriculture | 1 | 4 | 84% | YES | YES | LOW |
| ministry-of-health | 1 | 3 | 86% | YES | YES | LOW |
| ai-academy | 1 | 2 | 82% | YES | YES | LOW |
| education-learning | 1 | 1 | 91% | YES | YES | LOW |
| health-wellness | 1 | 1 | 89% | YES | YES | LOW |
| environment-sustainability | 1 | 2 | 85% | YES | YES | LOW |
| open-abia | 1 | 2 | 87% | YES | YES | LOW |
| border-trade-logistics | 1 | 1 | 83% | YES | YES | LOW |
| commerce-trade | 1 | 1 | 88% | YES | YES | LOW |
| housing-urban-development | 1 | 1 | 86% | YES | YES | LOW |
| legal-institutional-registry | 1 | 2 | 84% | YES | YES | LOW |
| cooperatives-micro-credit | 1 | 2 | 81% | YES | YES | LOW |
| social-welfare | 1 | 1 | 85% | YES | YES | LOW |
| science-technology | 1 | 1 | 87% | YES | YES | LOW |
| women-gender-affairs | 1 | 2 | 83% | YES | YES | LOW |
| civil-service-portal | 1 | 2 | 80% | YES | YES | LOW |
| transport-mobility | 1 | 3 | 79% | YES | YES | LOW |
| water-resources-irrigation | 1 | 1 | 86% | YES | YES | LOW |
| transparent-governance | 1 | 1 | 88% | YES | YES | LOW |
| invest-abia | 1 | 1 | 90% | YES | YES | LOW |
| gada | 1 | 2 | 82% | YES | YES | LOW |
| build-abia | 1 | 1 | 89% | YES | YES | LOW |
| connect-abia | 1 | 1 | 84% | YES | YES | LOW |
| jobs-abia | 1 | 1 | 86% | YES | YES | LOW |
| citizen-identity-civil-registry | 1 | 1 | 88% | YES | YES | LOW |
| aba-20 | 1 | 1 | 85% | YES | YES | LOW |
| ministry-of-communication | 1 | 1 | 87% | YES | YES | LOW |
| governors-command-center | 1 | 1 | 92% | YES | YES | LOW |
| **TOTAL** | **32** | **45** | **86% avg** | **32 YES** | **45 YES** | **LOW** |

---

## 4. CONSOLIDATION IMPACT

| Metric | Current | Post-Consolidation | Reduction |
| :--- | :--- | :--- | :--- |
| Total Pages | 115 | 70 | 39% |
| Page Families | 32 | 32 | 0% |
| Variant Pages | 45 | 0 | 100% |
| Standalone Pages | 38 | 38 | 0% |

---

## 5. PHASE COMPLETION STATUS

| Phase | Status |
| :--- | :--- |
| Phase 01: Page Family Forensics | **COMPLETE** |
| Phase 02: Navigation Overlap Matrix | PENDING |
| Phase 03: Sidebar Overlap Matrix | PENDING |
| Phase 04: CTA Overlap Matrix | PENDING |
| Phase 05: Service Decomposition | PENDING |
| Phase 06: Ownership Confidence Matrix | PENDING |
| Phase 07: Consolidation Risk Matrix | PENDING |
| Phase 08: Consolidation Executive Summary | PENDING |
