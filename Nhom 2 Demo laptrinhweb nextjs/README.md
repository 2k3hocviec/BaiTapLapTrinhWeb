# Next.js Application

This is a Next.js application structure.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # App Router pages and layouts
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── lib/                   # Utility functions and modules
├── public/                # Static assets (images, fonts, etc)
├── styles/                # Global and component styles
├── package.json           # Project dependencies
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm run start` - Starts production server
- `npm run lint` - Runs ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
