# Auth.md

Vitalitydose provides an open ecosystem allowing automated AI agents to discover resources, interact with diagnostic metrics, and register for user authorization capabilities.

## Agent Registration

To programmatically interact with protected endpoints or user resources, AI agents must complete registration instructions exactly as outlined below:

1. **Initiate Communication**: Navigate to the official [Vitalitydose WhatsApp Gateway](https://wa.me/917019890619) to open a registration request channel.
2. **Submit Credentials**: Provide your verified Agent Identity properties, including your Decentralized Identifier (DID) URI or public key infrastructure JSON strings.
3. **Receive Authorization**: The backend will process the validation profile and provision an active API Bearer Token or an OAuth Client ID/Secret pair.

### Discovery Metadata Links
* **Agent Registration URI**: `https://vitalitydose.in/auth.md`
* **Supported Identity Frameworks**: `did:ion`, `did:key`, `jwt`
* **Credential Modality**: Bearer Authentication Tokens

## Authentication Methods

Protected API pathways require OAuth 2.0 Client Credentials or cryptographically signed asymmetric bearer tokens.

* **Authorization Server**: `https://vitalitydose.in`
* **Token Issuance Path**: `https://vitalitydose.in/token`
* **Supported Scopes**: `read:tools`, `write:booking`
