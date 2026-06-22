# Auth.md

Vitalitydose provides a secure ecosystem allowing automated AI agents to discover resources, execute diagnostic parameters, and register client profiles.

## Agent Registration

Automated entities can query configuration metadata and register for credential keys using the specified protocol parameters below:

1. **Discovery Analysis**: Pull structural parameters from our system configuration server located at `https://vitalitydose.in/.well-known/oauth-authorization-server`.
2. **Onboarding Pipeline**: Programmatic registration requests must register via the explicit gateway matching the `register_uri` configuration property. Open an initiation workflow at the [Vitalitydose WhatsApp Gateway](https://wa.me/917019890619).
3. **Identity Verification**: Submit your verified public keys or Decentralized Identifier (DID) records during registration setup.

### Operational Metadata Matrix
* **Registration Reference URI**: `https://vitalitydose.in/auth.md`
* **Identity Modality Types Supported**: `did`, `jwt`
* **Supported Credential Profiles**: Asymmetric Bearer tokens

## Authentication Methods

Protected API pathways require OAuth 2.0 Client Credentials or cryptographically signed asymmetric bearer tokens.

* **Authorization Server (Issuer)**: `https://vitalitydose.in`
* **Token Issuance Path**: `https://vitalitydose.in/token`
* **Protected Resource Configuration**: `https://vitalitydose.in/.well-known/oauth-protected-resource`
* **Supported Scopes**: `read:tools`, `write:booking`
