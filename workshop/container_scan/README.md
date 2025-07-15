# Container Security Scanning

This workshop module covers container security scanning to identify vulnerabilities in container images and configurations.

## Why is Container Security Important?
Containers are now one of the most common ways to deploy applications. They are also a common target for attackers, as they can be used to gain access to the underlying infrastructure, access to secrets (including cloud credentials) or run arbitrary code.

Container security scanning analyzes images and container configurations to identify security vulnerabilities, misconfigurations, and compliance issues before releasing them..

## Common Container Security Issues

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

## Tools Used in This Module #TODO: Update this section

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

## Container Security Best Practices #TODO: Should we merge this with the checklist?

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
