# Secrets Detection

This workshop module focuses on identifying and preventing the exposure of sensitive credentials, API keys, and other secrets in source code, configuration files, and git history.

## What is Secrets Detection?

Secrets detection involves scanning code repositories, commit history, and configuration files to identify exposed credentials such as API keys, passwords, tokens, certificates, and other sensitive information that should not be stored in version control.

## Common Types of Secrets

1. **API Keys** - Third-party service credentials
2. **Database Passwords** - Database connection strings
3. **OAuth Tokens** - Authentication tokens
4. **Private Keys** - SSH keys, TLS certificates
5. **Cloud Credentials** - AWS access keys, Azure tokens
6. **Application Secrets** - JWT secrets, encryption keys
7. **Service Account Keys** - GCP service account JSON files

## Why Secrets Detection Matters

- **Data Breaches** - Exposed credentials can lead to unauthorized access
- **Supply Chain Attacks** - Compromised secrets enable lateral movement
- **Compliance Issues** - Regulatory requirements for data protection
- **Financial Loss** - Unauthorized usage of cloud services
- **Reputation Damage** - Public exposure of security incidents

## Tools Used in This Module

- **TruffleHog** - Git history secrets scanner
- **GitLeaks** - SAST-focused secrets detection
- **detect-secrets** - Yelp's secrets detection library
- **GitHub Secret Scanning** - Built-in GitHub security feature
- **HashiCorp Vault** - Secrets management solution

## Common Secrets Patterns

- **AWS Access Keys**: `AKIA[0-9A-Z]{16}`
- **GitHub Tokens**: `ghp_[0-9a-zA-Z]{36}`
- **Slack Tokens**: `xox[baprs]-[0-9]{12}-[0-9]{12}-[0-9a-zA-Z]{24}`
- **JWT Tokens**: Base64 encoded with specific structure
- **Private Keys**: `-----BEGIN PRIVATE KEY-----`

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

## Security Best Practices

- Use environment variables for secrets
- Implement proper .gitignore patterns
- Use secrets management solutions
- Rotate compromised credentials immediately
- Implement pre-commit hooks for secrets detection
- Regular auditing of repositories

## Security Checklist

- [ ] No secrets in source code
- [ ] Git history cleaned of secrets
- [ ] Environment variables properly configured
- [ ] Secrets management solution implemented
- [ ] Pre-commit hooks for secrets detection
- [ ] Regular secrets auditing process
