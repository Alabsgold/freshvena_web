# Freshvena Glow - Premium Nigerian Food Exports

Welcome to the **Freshvena Glow** project repository. This project is a modern web application built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

## Project Overview

Freshvena Foods Limited is dedicated to exporting premium Nigerian foods worldwide. This website serves as the digital storefront and information hub for customers in the USA, UK, Canada, and Europe.

## Tech Stack

-   **Frontend Framework:** React 18
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui (Radix UI + Tailwind)
-   **Routing:** React Router DOM
-   **Animations:** Framer Motion
-   **Icons:** Lucide React

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/freshvena-glow.git
    cd freshvena-glow
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## Deployment

### GitHub Pages

This project is configured for deployment on GitHub Pages.

1.  Push your code to a GitHub repository.
2.  Go to **Settings** -> **Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** (if you have a workflow) or **Deploy from a branch**.
    -   If deploying from a branch manually:
        -   Run `npm run build`.
        -   Commit the `dist` folder to a `gh-pages` branch (or use a workflow to do this).
    -   **Recommended Workflow:** Use the provided GitHub Actions workflow (you may need to create `.github/workflows/deploy.yml`).

**Note on Routing:**
This project uses client-side routing. A script (`scripts/copy-404.js`) runs after the build to copy `index.html` to `404.html`. This ensures that reloading a page on a specific route works correctly on GitHub Pages.

### Vercel

1.  Connect your GitHub repository to Vercel.
2.  Vercel should automatically detect the Vite project.
3.  The `vercel.json` file handles SPA routing rewrites.
4.  Click **Deploy**.

### Netlify

1.  Connect your GitHub repository to Netlify.
2.  Netlify should automatically detect the build settings (`npm run build`, `dist`).
3.  The `netlify.toml` and `public/_redirects` files handle SPA routing.
4.  Click **Deploy**.

## Project Structure

-   `src/`: Source code
    -   `components/`: Reusable UI components
    -   `pages/`: Application pages (routes)
    -   `lib/`: Utilities and helpers
    -   `assets/`: Images and static files
-   `public/`: Static public assets
-   `dist/`: Production build output

## Scalability & Future Improvements

-   **Code Splitting:** Vite automatically handles code splitting.
-   **Lazy Loading:** Consider lazy loading routes for larger applications using `React.lazy`.
-   **API Integration:** The project is set up with `React Query` (`@tanstack/react-query`) for efficient data fetching and caching when you integrate a backend.
-   **Internationalization (i18n):** Ready for i18n libraries if multi-language support is needed.

## License

[License Name]
