# Shared AMC MEP web session

AMC MEP web products use one Appwrite project and one first-party API endpoint:

```text
https://auth.amcmep.in/v1
```

This allows the secure Appwrite account cookie to remain first-party for:

- `amcmep.in`
- `app.amcmep.in`
- `workspace.amcmep.in`
- other trusted `*.amcmep.in` web products using the same Appwrite project

## Appwrite setup

1. In Appwrite Console, open project `680b2b830035595d7746`.
2. Under **Settings > Custom domains**, create `auth.amcmep.in` as an API domain.
3. Add the CNAME (and CAA when shown) provided by Appwrite to Cloudflare DNS.
4. Add `amcmep.in`, `app.amcmep.in`, and `workspace.amcmep.in` as Web platforms/allowed domains.
5. Wait for the Appwrite certificate and domain verification to become active.

## Cloudflare setup

Set this build variable in every AMC MEP web project:

```text
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://auth.amcmep.in/v1
```

All projects must use the same `NEXT_PUBLIC_APPWRITE_PROJECT_ID`. Redeploy each project after changing the endpoint. Existing sessions created against `cloud.appwrite.io` may require one final sign-in; sessions created after migration are then shared across the AMC MEP web subdomains.

`APPWRITE_API_KEY` is unrelated to browser SSO. Keep it server-only and add it only to deployments with privileged server routes. The browser-only workspace does not require it.
