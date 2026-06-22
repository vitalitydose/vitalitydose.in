# Auth.md

Vitalitydose provides an open ecosystem allowing automated AI agents to interact with our diagnostic health tools and submit consultation requests.

## Agent Registration

To register an agent and acquire programmatic access credentials:
1. Initialize an onboarding ticket via the [Vitalitydose WhatsApp Gateway](https://wa.me/917019890619).
2. Submit your agent identity credentials along with your Decentralized Identifier (DID) or public key infrastructure details.
3. The system will provision an automated API Key or OAuth client credential pair.

### Client Configuration Details
* **Registration Endpoint**: `https://vitalitydose.in/auth.md`
* **Supported Identity Types**: `did`, `jwt`
* **Credential Requirements**: Automated bearer tokens

## Authentication Methods

Protected API pathways require OAuth 2.0 Client Credentials or verified bearer tokens.

* **Issuer Endpoint**: `https://vitalitydose.in`
* **Supported Scopes**: `read:tools`, `write:booking`
