# Container Security Scanning

This workshop module covers container security scanning to identify vulnerabilities in container images and configurations.

## Why is Container Security Important?
Containers are now one of the most common ways to deploy applications. They are also attractive targets for attackers who can use them to access underlying infrastructure, steal secrets (including cloud credentials), or execute arbitrary code.

Container security scanning analyzes images and container configurations to identify security vulnerabilities, misconfigurations, and compliance issues before releasing them.

## Common Container Security Issues

### Image Vulnerabilities:
- **Image Vulnerabilities** - Outdated or vulnerable dependencies, both in the base image and in the application dependencies.
- **Supply Chain** - Untrusted base images. Trojanized or typo-squatted images pulled from public registries.
- **Secrets in Images** - Hardcoded credentials or keys.

### Configuration Issues:
- **Root User** - Running containers as root
- **Excessive Privileges** - Unnecessary capabilities can allow container escape.
- **Exposed Ports** - Unintended network exposure
- **Missing Security Controls** - No health checks or resource limits
- **Weak Network Segmentation** - Overly permissive ingress rules allow lateral movement
- **Dangerous Volumes** - Mounting host volumes can expose sensitive data or allow privilege escalation.

## Tools Used in This Module

- **Trivy** - Vulnerability, misconfiguration and secret scanner for containers.
  - It also supports scanning filesystems, IaC or repos, but we will focus on containers for this module.

## Learning Objectives

By the end of this module, you will:
- Understand container security risks
- Learn to scan images for vulnerabilities
- Understand supply chain security for containers
- [🔜] Identify Dockerfile security best practices

## Security Checklist

- [ ] **Use minimal, trusted base images** and rebuild them regularly.
- [ ] **Patch all High/Critical CVEs** before shipping; fail the build if any remain.
  - Note: You can also ignore them if you verified the vulnerability is not exploitable.
- [ ] **Run containers as a non-root user** with only the capabilities they truly need.
- [ ] **Remove build tools & secrets** via multi-stage builds to shrink the attack surface.
- [ ] **Sign images and verify signatures** at pull/admission time to ensure provenance.
- [ ] **Enable runtime protection** ([seccomp](https://docs.docker.com/engine/security/seccomp/)/[AppArmor](https://docs.docker.com/engine/security/apparmor/) profiles, resource limits, live detection).
- [ ] **Implement health and readiness checks**



## References
- [NetRise Releases Supply Chain Visibility & Risk Study, Edition 2: Containers, Revealing Signicant Visibility and Risk Challenges within Common Containers](https://www.netrise.io/en/company/announcements/netrise-releases-supply-chain-visibility-risk-study-revealing-signicant-visibility-and-risk-challenges-within-common-containers): Research finds containers have over 600 vulnerabilities a piece on average.
- [Top 10 Container Security Issues](https://www.sentinelone.com/cybersecurity-101/cloud-security/container-security-issues/)
- [Docker Engine security](https://docs.docker.com/engine/security/)

### Other Tools
- [slimtoolkit/slim](https://github.com/slimtoolkit/slim): Tool to reduce the size of container images (making them more secure).