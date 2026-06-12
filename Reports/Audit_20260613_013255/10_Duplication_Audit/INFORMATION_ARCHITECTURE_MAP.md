# Information Architecture Map

## Existing Architecture Hierarchy

```mermaid
graph TD
  Home["Home Dashboard (/)"]
  
  subgraph Public Portal
    Home --> Serve["Serve Abia (/serve-abia)"]
    Home --> Jobs["Jobs Abia (/jobs-abia)"]
    Home --> Connect["Connect Abia (/connect-abia)"]
    Home --> AI["AI Academy (/ai-academy)"]
  end

  subgraph Executive Workspaces
    Home --> Gov["Governor's Command Center (/governors-command-center)"]
    Home --> MDA["MDA Performance (/mda-performance)"]
  end

  subgraph Sector Portals
    Home --> Agric["Ministry of Agriculture (/ministry-of-agriculture)"]
    Home --> Health["Ministry of Health (/ministry-of-health)"]
    Home --> Trans["Transport & Mobility (/transport-mobility)"]
  end
```

## Architecture Review
- **Misplaced Pages:** Informational pages like `/digital-archives-heritage` contain executive dashboard widgets.
- **Orphan Pages:** Several deconflicted route variants (e.g. `/serve-abia-2`) are unreachable from standard navigation, but accessible via the Directory.
- **Hierarchy Breakdown:** Suffix page names (like `-2`, `-3`) create a flat route system instead of nested folder structures.
