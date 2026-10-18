# Supernova.io — Complete Website Clone

A high-fidelity clone of the complete **Supernova.io** web ecosystem, capturing all marketing, product, documentation, and authentication surfaces.

## 🌟 Pages & Subsystems Included

| Path | Title | Description |
|------|-------|-------------|
| `/` | **Home** | Main landing page highlighting the agentic design system platform |
| `/for-ai` | **For AI Agents** | Model Context Protocol (MCP) distribution & AI code generation |
| `/design-system-management` | **Design System Management** | Centralized token management, multi-brand themes, and AST pipelines |
| `/documentation` | **Living Documentation** | Living documentation blocks, Do/Don't cards, and interactive playgrounds |
| `/pricing` | **Pricing & Plans** | Free, Team, and Enterprise plan comparisons |
| `/enterprise` | **Enterprise** | SOC 2 Type II compliance, SSO/SAML, audit logs, and custom exporters |
| `/customers` | **Customer Stories** | Case studies and testimonials (Mews, OneSignal, Userlane, etc.) |
| `/integrations` | **Integrations** | Figma, GitHub, GitLab, Bitbucket, Storybook, VS Code, and Tokens Studio |
| `/blog` | **Blog & Insights** | Design systems engineering articles and release updates |
| `/learn` | **Contexts 101** | Documentation and step-by-step developer guides |
| `/signup` | **Sign Up** | Cloud workspace registration and authentication surface |
| `/login` | **Log In** | Workspace authentication interface |

---

## 🚀 Quickstart

Run locally using Node.js (zero external dependencies required):

```bash
# Clone the repository
git clone https://github.com/prudhviraj0310/supernova-website.git
cd supernova-website

# Start the server (default port 8080)
npm start

# Or with a custom port
PORT=3000 npm start
```

Visit `http://localhost:8080` in your browser.

---

## 📁 Repository Structure

```
supernova-website/
├── index.html                           # Supernova Home Page
├── for-ai/index.html                    # For AI Agents
├── design-system-management/index.html  # DSM Hub
├── documentation/index.html             # Living Documentation
├── pricing/index.html                   # Pricing & Plans
├── enterprise/index.html                # Enterprise Solutions
├── customers/index.html                 # Customer Case Studies
├── integrations/index.html              # Tool Integrations
├── blog/index.html                      # Technical Blog
├── learn/index.html                     # Learning & Contexts 101
├── contexts-101/index.html              # Alias route
├── signup/index.html                    # Cloud Registration
├── login/index.html                     # Cloud Login
├── _next/static/                        # Stylesheets, fonts, and Webpack chunks
├── static/                              # Vector icons, customer logos, and product graphics
├── latest/assets/                       # Documentation stylesheets and assets
├── assets/                              # Auth stylesheets and vector illustrations
├── server.js                            # Clean-URL zero-dependency HTTP server
├── package.json
└── README.md
```

## 🛠️ Deployment

This repository is ready to deploy directly to:
- **Vercel** (`vercel deploy`)
- **Netlify** (`netlify deploy --dir=.`)
- **GitHub Pages** (Settings > Pages > Branch: `main`, Folder: `/`)
- **AWS S3 / CloudFront**
