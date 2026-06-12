# Information Architecture Report

## Identified Structural Gaps

1. **Flat Route Sprawl:** 61 routes sit directly in the root directory `app/` of the Next.js router. This creates a massive, unmaintainable folder tree.
2. **Orphan Pages:** Variants with `-2` or `-3` suffixes lack menu links and rely on the Portal Directory overlay drawer to be reached.
