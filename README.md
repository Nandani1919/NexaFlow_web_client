# NexaFlow Workspace

NexaFlow is a project management workspace for planning active work, assigning tasks, collaborating with team members, and tracking delivery progress. This package contains the React frontend that talks to the Express/MongoDB API in `../harmony_server`.

## What This App Does

- Authenticates users through the backend and keeps sessions in an HttpOnly cookie.
- Hydrates the workspace with users, projects, tasks, comments, activity, and notifications.
- Provides dashboards, project pages, task views, team management, calendar planning, reports, and settings.
- Supports admin/member roles so sensitive actions can be restricted.
- Uses a dark cyan-teal brand theme with reusable shadcn/ui components.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui and Radix UI
- Framer Motion
- TanStack Query
- Vitest and Testing Library

## Project Structure

```text
src/
  components/          Shared UI, layout, cards, modals, badges, and primitives
  data/                Mock/reference data used by the UI
  hooks/               Small React hooks
  lib/                 API client and utility helpers
  pages/               Route-level screens
  store/               AppContext for auth, workspace data, theme, and mutations
  test/                Test setup and sample tests
  types/               Shared frontend TypeScript types
```

## Setup

Install dependencies:

```bash
npm install
```

Create a frontend `.env` file:

```bash
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

The backend should be running from `../harmony_server` before signing in or loading protected workspace screens.

## Demo Login

When the backend has `AUTO_SEED=true`, use either demo account:

```text
Email: alex@nexaflow.app
Password: demo1234
Role: admin
```

```text
Email: jamie@nexaflow.app
Password: demo1234
Role: member
```

The login page includes separate demo buttons for admin and member access.

## Roles

Admins can manage projects, tasks, and the team. Members see a scoped workspace, can comment, and can update the status of tasks assigned to them.

## Available Scripts

```bash
npm run dev        # Start Vite dev server
npm run build      # Build production assets
npm run build:dev  # Build with development mode
npm run lint       # Run ESLint
npm run preview    # Preview the production build
npm run test       # Run Vitest once
```

## Frontend Data Flow

`src/lib/api.ts` reads `VITE_API_URL` and sends requests with `credentials: "include"` so the browser includes the backend auth cookie.

`src/store/AppContext.tsx` owns the main app state:

- `currentUser`
- `users`
- `projects`
- `tasks`
- `comments`
- `activities`
- `notifications`
- `theme`

After login, signup, or page refresh, the app calls `/auth/me` and `/workspace` to restore the session and load workspace data.

## Backend Pairing

The expected API base URL is:

```text
http://localhost:5000/api
```

Core endpoints consumed by the frontend include:

- `POST /auth/login`
- `POST /auth/signup`
- `GET /auth/me`
- `POST /auth/logout`
- `GET /workspace`
- `/projects`
- `/tasks`
- `/team`
- `/notifications`

See `../harmony_server/README.md` for backend setup and endpoint details.
