# Deployment & Infrastructure Guide

## 1. VPS Infrastructure
The system is hosted on a Linux VPS. The core stack includes:
- **OS**: Ubuntu 22.04 LTS.
- **Runtime**: Node.js (for the Next.js portal) and Docker (for Appwrite).
- **Proxy**: Nginx as a reverse proxy for SSL termination and routing.

## 2. Appwrite Setup
Appwrite is deployed via Docker Compose.
- **Database**: NoSQL collections are used for flexible schema evolution.
- **Storage**: Buckets are configured for public access (listings) and private access (documents).
- **Auth**: Phone authentication is integrated via SMS gateway.

## 3. Web Deployment (Vercel/VPS)
- **CI/CD**: GitHub Actions trigger a build on every merge to .
- **Environment Variables**: All sensitive keys (Appwrite Project ID, API Keys) are stored in the Vercel/VPS environment.
- **Caching**: ISR (Incremental Static Regeneration) is used for business profiles to ensure SEO without sacrificing speed.

## 4. Mobile Release Pipeline
- **Android**: Built via GitHub Actions $\rightarrow$ Play Store Console.
- **iOS**: Built via Xcode Cloud / Codemagic $\rightarrow$ App Store Connect.
