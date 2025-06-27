# Container Security Scanning

This workshop module covers container security scanning to identify vulnerabilities in Docker images, base images, and container configurations.

## What is Container Security Scanning?

Container security scanning analyzes Docker images and container configurations to identify security vulnerabilities, misconfigurations, and compliance issues before deployment to production environments.

## Container Security Concerns

### Image Vulnerabilities:
1. **Base Image CVEs** - Known vulnerabilities in base operating systems
2. **Package Vulnerabilities** - Outdated or vulnerable packages
3. **Malware** - Malicious software in images
4. **Secrets in Images** - Embedded credentials or keys

### Configuration Issues:
1. **Root User** - Running containers as root
2. **Excessive Privileges** - Unnecessary capabilities
3. **Exposed Ports** - Unintended network exposure
4. **Missing Security Controls** - No health checks or resource limits

### Registry Security:
1. **Image Integrity** - Unsigned or tampered images
2. **Supply Chain** - Untrusted base images
3. **Access Control** - Improper registry permissions

## Tools Used in This Module

### Vulnerability Scanners:
- **Trivy** - Comprehensive vulnerability scanner
- **Grype** - Container vulnerability scanner
- **Clair** - Static analysis for containers
- **Snyk Container** - Developer-first container scanning

### Configuration Scanners:
- **Docker Bench** - CIS Docker benchmark
- **Hadolint** - Dockerfile linter
- **Checkov** - Infrastructure as code scanner

### Runtime Security:
- **Falco** - Runtime security monitoring
- **Sysdig** - Container runtime protection

## Common Vulnerabilities

1. **CVE-2021-44228** - Log4j vulnerability
2. **CVE-2022-0492** - Container escape vulnerabilities
3. **CVE-2021-30465** - RunC vulnerabilities
4. **Base Image CVEs** - Operating system vulnerabilities

## Learning Objectives

By the end of this module, you will:
- Understand container security risks
- Learn to scan images for vulnerabilities
- Identify Dockerfile security best practices
- Understand supply chain security for containers
- Learn to integrate scanning into CI/CD pipelines

## Workshop Exercise

1. Scan the workshop Docker image for vulnerabilities
2. Analyze base image security issues
3. Review Dockerfile configuration problems
4. Learn to interpret scanner results
5. Implement security fixes and best practices

## Container Security Best Practices

- Use minimal base images (distroless, alpine)
- Run containers as non-root users
- Implement proper health checks
- Use multi-stage builds to reduce attack surface
- Regularly update base images
- Sign and verify image integrity
- Implement runtime security monitoring

## Security Checklist

- [ ] Base image vulnerabilities addressed
- [ ] No high/critical CVEs in final image
- [ ] Container runs as non-root user
- [ ] Minimal attack surface
- [ ] Health checks implemented
- [ ] Security scanning in CI/CD
- [ ] Image signing and verification
- [ ] Runtime security monitoring
