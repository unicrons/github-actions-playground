# Runtime Infrastructure Scan

This workshop module focuses on scanning the deployed (runtime) infrastructure for vulnerabilities and misconfigurations that may not be detectable through static analysis of code or configuration files.

## Why is Runtime Infrastructure Scanning Important?

While IaC scans catch many issues pre-deployment, runtime infrastructure scanning is crucial because some vulnerabilities or misconfigurations only manifest once resources are live. This could be due to manual changes, dynamic variables, complex interactions, or even a bug in your IaC provider that end up deploying resources in a way that is not intended.

Continuous runtime scanning helps ensure your infrastructure remains secure after deployment and as it evolves.


## Common Runtime Infrastructure Issues

1. **Unpatched Systems** – Outdated OS or software with known vulnerabilities
2. **Open Ports/Services** – Unnecessary or insecurely exposed network services
3. **Weak Authentication** – Default or weak credentials on cloud resources
4. **Misconfigured Security Groups/Firewalls** – Overly permissive access
5. **Missing Encryption** – Data at rest or in transit not properly encrypted
6. **Publicly Exposed Resources** – Databases, storage buckets, or admin interfaces accessible from the internet
7. **Lack of Monitoring/Logging** – Insufficient visibility into activity and incidents

## Tools Used in This Module #TODO: Update this section

- **Trivy** – Can scan cloud resources for misconfigurations and vulnerabilities
- **Scout Suite** – Multi-cloud security auditing tool
- **Prowler** – AWS security best practices assessment
- **CloudSploit** – Cloud account configuration scanner
- **AWS Inspector / Azure Security Center / GCP Security Command Center** – Native cloud provider tools for runtime security

## Learning Objectives

By the end of this module, you will:
- Understand the importance of runtime infrastructure scanning
- Learn to use automated tools to assess live cloud environments
- Identify and prioritize runtime security issues
- Integrate runtime scanning into your CI/CD pipeline

## Workshop Exercise

1. Run a runtime infrastructure scan using one or more of the listed tools
2. Review the scan results for vulnerabilities and misconfigurations
3. Prioritize findings based on risk and exposure
4. Implement fixes for critical issues
5. Re-scan to verify remediation

## Security Checklist

- [ ] All systems and services are up to date with security patches
- [ ] No unnecessary open ports or services
- [ ] Strong authentication and access controls in place
- [ ] Security groups/firewalls follow least privilege
- [ ] Encryption enabled for data at rest and in transit
- [ ] No sensitive resources publicly exposed
- [ ] Monitoring and logging enabled for all critical resources
- [ ] Regular runtime scans scheduled and reviewed

