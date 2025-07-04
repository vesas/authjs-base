
## Auth.js + Microsoft Entra ID base

This project contains simple working base for Next.js web application authentication with Microsoft Azure AD (Now called Microsoft Entra ID) in a react project. This app is for the single tenant case (B2B) and not the B2C case.

Register the app in the Azure portal. Go to Microsoft Entra ID, and App Registrations. For development you can use the following as the redirect-url, the auth/callback/microsoft-entra-id part comes from auth.js as the default for Entra ID.
```
http://localhost:3000/api/auth/callback/microsoft-entra-id
```

You will need the application id, Directory (tenant) id, and client secret. Place them in .env.local file the at the project root. This ID_ISSUER url format is for the single tenant case only. See auth.js documentation at https://authjs.dev/getting-started/providers/microsoft-entra-id

```
AUTH_MICROSOFT_ENTRA_ID_ID=<Application (client) ID>
AUTH_MICROSOFT_ENTRA_ID_SECRET=<Client secret>
AUTH_MICROSOFT_ENTRA_ID_ISSUER=https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0
```

## Dependencies

EntraID seems to work now for authjs 5 beta.

```bash
Authjs 5.0.0 beta
Nextjs 15.3.5
```

## Development

To install all dependencies:

```bash
npm install
```

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
