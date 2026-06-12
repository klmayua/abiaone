# Master Dashboard Registry

## Dashboard Classification
The following dashboards are implemented in the workspace:

| Route | Dashboard Name | Device | Classification | Intended Owner |
| :--- | :--- | :--- | :--- | :--- |
| `/` | ABIA ONE | DESKTOP | Transformation Dashboard | State Government |
| `/governors-command-center` | Governor's Command Center | DESKTOP | Executive Dashboard | Executive Governor |
| `/secure-abia-2` | Secure Abia Command Dashboard | DESKTOP | Operational Dashboard | Ministry of Internal Security |
| `/mda-performance` | MDA Performance | DESKTOP | Executive Dashboard | Civil Service Commission |
| `/live-incident-feed` | Live Incident Feed | DESKTOP | Operational Dashboard | State Security Forces |
| `/public-reporting` | Public Reporting | DESKTOP | Reporting Dashboard | Citizen Public |

## Metric Duplication Risk
- **Roadmap Progress metrics** are present on both the home dashboard (`/`) and the sector portals.
- **Incident feeds** are duplicated between `/secure-abia-2` and `/live-incident-feed`. Recommend consolidating feeds.
