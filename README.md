# Perfect Pipeline Workshop

Welcome to the "Perfect Pipeline" workshop! This hands-on workshop teaches you how to build a comprehensive security-focused CI/CD pipeline with multiple layers of security scanning and best practices.

## 🎯 Workshop Objectives

Learn to implement a complete secure software development lifecycle with:
- Pipeline security scanning
- Static and dynamic code analysis
- Secrets detection and management
- Container security scanning
- Infrastructure as Code (IaC) security
- Runtime security testing

## 🏗️ Workshop Structure

The workshop is organized into different modules, each focusing on a specific aspect of pipeline security:

### 📁 Repository Structure

```
├── .github/workflows/               # GitHub Actions workflows
│   ├── pipeline-orchestrator.yml    # Main orchestrator
│   ├── 01-pipeline-scan.yml         # Pipeline security scan
│   ├── 02-code-analysis.yml         # SAST/SCA scanning
│   ├── 03-secrets-detection.yml     # Secrets scanning
│   ├── 04-build.yml                 # Application build
│   ├── 05-container-scan.yml        # Container security
│   ├── 06-iac-scan.yml              # Infrastructure scanning
│   ├── 07-deploy-infrastructure.yml # Infra deployment
│   ├── 08-deploy-application.yml    # App deployment
│   └── 09-runtime-infra-scan.yml    # Runtime infrastructure scan
├── code/                            # Sample vulnerable application
├── infra/                           # Terraform infrastructure
└── workshop/                        # Workshop modules and documentation
```

## 📚 Workshop Modules

### 0. 🐦‍🔥 [Introduction](workshop/)
Workshop introduction and overview.

### 1. 🔍 [Pipeline Security Scan](workshop/pipeline_scan/)
Learn to scan CI/CD pipelines for security misconfigurations and vulnerabilities.

### 2. 🔬 [Code Security Analysis](workshop/code_scan/)
Implement SAST (Static Application Security Testing) and SCA (Software Composition Analysis).

### 3. 🔐 [Secrets Detection](workshop/secrets_scan/)
Detect and prevent exposure of credentials and sensitive information.

### 4. 🐳 [Container Security Scanning](workshop/container_scan/)
Scan Docker images and containers for vulnerabilities and misconfigurations.

### 5. 🏗️ [Infrastructure Security Scan](workshop/iac_scan/)
Analyze Infrastructure as Code (Terraform) for security issues.

### 6. 🔍 [Runtime Infrastructure Scan](workshop/runtime_infra_scan/)
Scan the "real" infrastructure for vulnerabilities.

## 🚀 Getting Started

### Prerequisites
- GitHub account with Actions enabled
- Basic knowledge of CI/CD concepts
- Understanding of Docker and containers
- Familiarity with cloud infrastructure concepts

> [!TIP]
> While this workshop uses GitHub Actions, most of the skills and best practices you learn can be applied to any CI/CD platform.

### Workshop Flow
1. **Fork this repository** to your GitHub account
2. **Follow each module** in the workshop directory
3. **Run the workflows** and observe the security findings
4. **Learn to fix** the identified vulnerabilities
5. **Implement security best practices**

## 🎓 Learning Outcomes

By completing this workshop, you will:
- Understand the importance of shift-left security
- Know how to implement comprehensive security scanning
- Learn to interpret and triage security findings
- Understand security best practices for CI/CD
- Be able to build secure, automated pipelines

---
---

## 🔧 Sample Application

The workshop includes a intentionally vulnerable Node.js application with:
- Hardcoded secrets and credentials
- SQL injection vulnerabilities
- Authentication bypasses
- Insecure file uploads
- Missing input validation
- Information disclosure

## 🏗️ Infrastructure

The Terraform configuration includes common misconfigurations:
- Overly permissive security groups
- Unencrypted resources
- Exposed sensitive outputs
- Missing security controls
- Hardcoded credentials


## 🛠️ Tools Demonstrated

#TODO: Update this section with the tools used in the workshop

The workshop showcases various security tools:
- **GitHub Security Features** (Dependabot, Secret Scanning)
- **SAST Tools** (Semgrep, CodeQL, SonarQube)
- **SCA Tools** (npm audit, Snyk, OWASP Dependency Check)
- **Container Scanners** (Trivy, Grype, Docker Bench)
- **IaC Scanners** (Checkov, TFSec, Terrascan)
- **DAST Tools** (OWASP ZAP, Burp Suite)

## 🤝 Contributing

This workshop is designed to be continuously improved. Feel free to:
- Report issues or suggest improvements
- Add new security scenarios
- Contribute additional tool integrations
- Share your workshop experience

## 📄 License

This workshop is provided under the MIT License for educational purposes.

---

**Ready to build the perfect secure pipeline? Start with [Pipeline Security Scan](workshop/pipeline_scan/)! 🚀**
