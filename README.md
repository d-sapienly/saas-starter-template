# SaaS Starter with Supabase and Stripe

A comprehensive SaaS starter template with React, TypeScript, Supabase, and Stripe integration.

## Features

- **Authentication**: Complete authentication flow with Supabase Auth
- **Subscription Management**: Stripe integration for subscription billing
- **Role-Based Access Control**: User and admin roles with protected routes
- **User Dashboard**: Profile management and subscription details
- **Admin Dashboard**: User management and subscription analytics
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Modern UI**: Built with Shadcn UI components and Framer Motion animations

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion
- **Backend**: Supabase (Auth, Database, Storage, Edge Functions)
- **Payments**: Stripe for subscription management
- **Routing**: React Router for navigation
- **State Management**: React Context API and Zustand

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Supabase account
- Stripe account

### Environment Setup

1. Clone this repository
2. Copy `.env.example` to `.env` and fill in your Supabase and Stripe credentials:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
VITE_APP_URL=http://localhost:5173
```

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Supabase Setup

1. Create a new Supabase project
2. Run the migration scripts in `supabase/migrations` to set up your database schema
3. Run the seed script in `supabase/seed.sql` to populate initial data
4. Deploy the Edge Functions in `supabase/functions` to your Supabase project

```bash
supabase functions deploy create-checkout-session
supabase functions deploy create-portal-session
supabase functions deploy stripe-webhook
```

### Stripe Setup

1. Create a Stripe account and get your API keys
2. Set up webhook endpoints to point to your Supabase Edge Function
3. Create products and prices in Stripe that match the ones in your seed data

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── admin/          # Admin-specific components
│   │   ├── auth/           # Authentication components
│   │   ├── layout/         # Layout components
│   │   ├── profile/        # User profile components
│   │   ├── subscription/   # Subscription management components
│   │   └── ui/             # UI components (Shadcn)
│   ├── contexts/           # React contexts
│   ├── lib/                # Utility functions and libraries
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── supabase/
│   ├── functions/          # Supabase Edge Functions
│   ├── migrations/         # Database migration scripts
│   └── seed.sql            # Database seed data
├── .env.example            # Example environment variables
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Deployment

### Frontend Deployment

You can deploy the frontend to any static hosting service like Vercel, Netlify, or GitHub Pages.

```bash
# Build for production
npm run build
```

### Supabase Deployment

Deploy your Supabase Edge Functions:

```bash
supabase functions deploy create-checkout-session
supabase functions deploy create-portal-session
supabase functions deploy stripe-webhook
```

## License

This project is licensed under the MIT License.
