# Secrets Detection

This workshop module focuses on identifying and preventing the exposure of sensitive credentials, API keys, and other secrets in source code, configuration files, and git history.

## Why is Secrets Detection Important?
This is an old problem, but it is still a common one ([especially with the AI surge](https://www.wiz.io/blog/leaking-ai-secrets-in-public-code)). Secrets are the keys to your kingdom. If a password or token is accidentally committed to code, it's immediately at risk, potentially leading to:

- **Data Breaches** - Exposed credentials can lead to unauthorized access
- **Supply Chain Attacks** - Compromised secrets enable lateral movement
- **Compliance Issues** - Regulatory requirements for data protection
- **Financial Loss** - Unauthorized usage of cloud services
- **Reputation Damage** - Public exposure of security incidents

Secrets detection involves scanning code repositories, commit history, and configuration files to identify exposed credentials such as API keys, passwords, tokens, certificates, and other sensitive information that should not be stored in version control.

Ideally, we should implement this before pushing the code to the repository, using [pre-commit](https://github.com/pre-commit/pre-commit) or similar tools. But accidents happen, so it's important to have a process to detect them in the pipeline as a safety net.

### Common Types of Secrets

1. **API Keys** - Third-party service credentials
2. **Database Passwords** - Database connection strings
3. **OAuth Tokens** - Authentication tokens
4. **Private Keys** - SSH keys, TLS certificates
5. **Cloud Credentials** - AWS access keys, Azure tokens
6. **Application Secrets** - JWT secrets, encryption keys
7. **Service Account Keys** - GCP service account JSON files

### Other types of secrets or sensitive data
There are other types of secrets or sensitive data that may not be covered by the tools we will use in this workshop, but that are still important to keep in mind:

- **Webhooks** - Webhooks are used to trigger actions in other systems, and can be used to trigger malicious actions.
  - Like Slack webhooks #TODO: Elaborate on this
- **AWS Account IDs** - AWS account IDs (or other cloud provider identifiers) can be used to enumerate resources and help attackers to map the attack surface.
  - There's a lot of discussion about if this should be considered a secret or not. #TODO: Elaborate on this, and find references.

## Tools Used in This Module #TODO: Update this section

- **TruffleHog** - Git history secrets scanner
- **GitLeaks** - SAST-focused secrets detection
- **detect-secrets** - Yelp's secrets detection library
- **GitHub Secret Scanning** - Built-in GitHub security feature
- **HashiCorp Vault** - Secrets management solution

## Learning Objectives

By the end of this module, you will:
- Understand different types of secrets and their risks
- Learn to use automated secrets detection tools
- Know how to scan git history for leaked credentials
- Understand secrets management best practices
- Learn to prevent future secret exposures

## Workshop Exercise

1. Scan the repository for exposed secrets
2. Review git history for leaked credentials
3. Identify different types of secrets in code
4. Learn to configure secrets detection tools
5. Implement prevention strategies

## Security Best Practices #TODO: Should we merge this with the checklist?

- Use environment variables for secrets
- Implement proper .gitignore patterns
- Use secrets management solutions
- Rotate compromised credentials immediately
- Implement pre-commit hooks for secrets detection
- Regular auditing of repositories

## Security Checklist

- [ ] Use environment variables for secrets
- [ ] Implement proper .gitignore patterns
- [ ] No secrets in source code
- [ ] Git history cleaned of secrets
- [ ] Environment variables properly configured
- [ ] Secrets management solution implemented
- [ ] Pre-commit hooks for secrets detection
- [ ] Rotate compromised credentials immediately
- [ ] Regular secrets auditing process
