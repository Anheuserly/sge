# System Maintenance Guide

## 1. Daily Health Checks
- **Log Monitoring**: Check the API logs for an increase in 5xx errors.
- **Appwrite Status**: Verify that the Docker containers are healthy.
- **Database Performance**: Monitor slow queries in the Appwrite console.

## 2. Backup Strategy
- **Database**: Daily automated snapshots of the Appwrite database.
- **Storage**: S3-compatible backup of all uploaded media objects.
- **Configuration**: Version-controlled  files and infrastructure scripts.

## 3. Update Procedure
1. **Backup**: Take a manual snapshot of the database.
2. **Staging**: Deploy the update to the staging environment first.
3. **Verification**: Run the smoke test suite (Auth $\rightarrow$ Listing $\rightarrow$ Request).
4. **Production**: Deploy to production using a rolling update strategy to avoid downtime.

## 4. Troubleshooting Common Issues
- **Notification Failures**: Check the FCM (Firebase Cloud Messaging) token validity.
- **Listing Invisibility**: Verify that the `published` flag is set to true and the category is active.
- **Auth Loops**: Clear the browser cache and verify the session token expiry.
