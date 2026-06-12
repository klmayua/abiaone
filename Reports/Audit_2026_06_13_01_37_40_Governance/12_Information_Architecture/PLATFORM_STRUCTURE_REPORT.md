# Platform Structure Report

## Recommended Nested Route Directory Blueprint

```
app/
├── layout.tsx
├── page.tsx (Public Home)
├── (public)/
│   ├── tourism/page.tsx
│   ├── archives/page.tsx
│   └── invest/page.tsx
├── (auth)/
│   ├── dashboard/
│   │   ├── governor/page.tsx
│   │   ├── security/page.tsx
│   │   └── performance/page.tsx
│   └── workspace/
│       ├── gada/page.tsx
│       └── services/page.tsx
└── (ministries)/
    ├── agriculture/page.tsx
    └── communication/page.tsx
```
