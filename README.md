# Student Portal - Makerere University

A modern, high-performance student dashboard designed specifically for the students of Makerere University.

## 🚀 Deployment to Cloudflare Pages

The project is specifically a **Cloudflare Pages** project. 

### ⚠️ Important Deployment Note
The error `✘ [ERROR] It looks like you've run a Workers-specific command in a Pages project` occurs because `wrangler deploy` is being called instead of `wrangler pages deploy`.

To fix this:
1. If you are using an automated CI/CD platform (like the one in your logs), locate the **Deployment Command** setting in your project dashboard.
2. Change the command from `npx wrangler deploy` to:
   ```bash
   npx wrangler pages deploy dist
   ```

### Manual Deployment via CLI
```bash
# 1. Build the production assets
npm run build

# 2. Deploy specifically to Pages
npx wrangler pages deploy dist
```

## 🛠️ Tech Stack
- **React 19**
- **Vite** (Build Tool)
- **Tailwind CSS**
- **Recharts**
- **Cloudflare Pages** (Hosting)

---
*Disclaimer: This is a digital portal concept designed for Makerere University.*