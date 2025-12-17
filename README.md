# Student Portal - Makerere University

A modern, high-performance student dashboard designed specifically for the students of Makerere University.

## 🚀 Deployment to Cloudflare Pages

The project is configured for **Cloudflare Pages**. 

### CI/CD Configuration
If you are using the Cloudflare Pages Dashboard for automatic deployments:
1. **Build command**: `npm run build`
2. **Build output directory**: `dist`
3. **Root directory**: `/` (Leave as default)

### Manual Deployment via CLI
If you prefer deploying from your terminal, ensure you use the `pages` subcommand:

```bash
# 1. Build the project
npm run build

# 2. Deploy the 'dist' folder
npx wrangler pages deploy dist
```

**Note**: Do not use `npx wrangler deploy` as it will trigger the Workers deployment flow and fail for this project.

## 🛠️ Tech Stack
- **React 19**
- **Vite** (Build Tool)
- **Tailwind CSS**
- **Recharts**
- **Cloudflare Pages** (Hosting)

---
*Disclaimer: This is a digital portal concept designed for Makerere University.*