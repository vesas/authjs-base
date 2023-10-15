
## Auth.js + Microsoft Entra ID base

This project contains simple working base for Next.js web application authentication with Microsoft Azure AD (Now called Microsoft Entra ID) in a react project.

Register the app in the Azure portal. Go to Microsoft Entra ID, and App Registrations. For development you can use the following as the redirect-url, the auth/callback/azure-ad part comes from auth.js as the default for azure ad.
```
http://localhost:3000/api/auth/callback/azure-ad 
```

You will need the application id, Directory (tenant) id, and client secret. Place them in .env.local file the at the project root:

```
AZURE_AD_CLIENT_SECRET=<client secret>
AZURE_AD_CLIENT_ID=<client id>
AZURE_AD_TENANT_ID=<tenant id>
```

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
