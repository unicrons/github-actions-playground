# Code Security Analysis (SAST/SCA)

This workshop module covers Static Application Security Testing (SAST) and Software Composition Analysis (SCA) to identify security vulnerabilities in application code and dependencies.

## What is SAST (Static Application Security Testing)?

SAST analyzes source code, bytecode, or binary code to identify security vulnerabilities without executing the program. It examines code patterns, data flow, and control flow to detect potential security issues.

## What is SCA (Software Composition Analysis)?

SCA identifies and analyzes open source components and third-party dependencies in applications to detect known vulnerabilities, license compliance issues, and outdated packages.

## Common Code Security Issues

### SAST Findings:
1. **SQL Injection** - Unsafe database queries
2. **Cross-Site Scripting (XSS)** - Unvalidated user input
3. **Authentication Flaws** - Weak authentication mechanisms
4. **Authorization Issues** - Missing access controls
5. **Hardcoded Secrets** - Credentials in source code
6. **Input Validation** - Missing or improper validation

### SCA Findings:
1. **Known Vulnerabilities** - CVEs in dependencies
2. **Outdated Packages** - Dependencies with security updates
3. **License Issues** - Non-compliant licenses
4. **Supply Chain Risks** - Malicious packages

## Tools Used in This Module

### SAST Tools:
- **Semgrep** - Static analysis with custom rules
- **CodeQL** - GitHub's semantic code analysis
- **SonarQube** - Code quality and security analysis
- **ESLint Security Plugin** - JavaScript security linting

### SCA Tools:
- **npm audit** - Node.js dependency scanner
- **Snyk** - Vulnerability database scanning
- **OWASP Dependency Check** - Dependency vulnerability scanner
- **GitHub Dependabot** - Automated dependency updates

## Learning Objectives

By the end of this module, you will:
- Understand the difference between SAST and SCA
- Learn to configure and run security scanners
- Interpret scan results and prioritize fixes
- Understand common vulnerability patterns
- Learn to integrate security scanning into CI/CD

## Workshop Exercise

1. Run SAST tools on the vulnerable application code
2. Analyze dependency vulnerabilities with SCA tools
3. Review and triage security findings
4. Learn to suppress false positives
5. Implement fixes for critical vulnerabilities

## Security Checklist

- [ ] SAST integrated into CI/CD pipeline
- [ ] SCA scanning for all dependencies
- [ ] Regular dependency updates
- [ ] Security hotspots addressed
- [ ] False positive management
- [ ] Security metrics tracking
