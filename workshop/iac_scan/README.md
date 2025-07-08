# Infrastructure as Code (IaC) Security Scanning

This workshop module focuses on scanning Infrastructure as Code (IaC) configurations to identify security misconfigurations before infrastructure deployment.

## Why is IaC Security important?
This is a key step in our shift-left security approach. The same way we analyze our application code before deploying it, we should do the same with our infrastructure code.

IaC security scanning analyzes infrastructure definitions (Terraform, CloudFormation, Kubernetes YAML, etc.) to identify security misconfigurations, compliance violations, and best practice deviations before resources are provisioned.

This step has its limitations, as some issues can only be detected at runtime, but all we can catch before the resources are deployed will be easier to fix and will provide a faster feedback loop.

## Common IaC Security Issues

### Access Control:
1. **Overly Permissive Policies** - Broad IAM permissions
2. **Public Access** - Resources exposed to the internet
3. **Missing Authentication** - No access controls
4. **Weak Passwords** - Default or weak credentials

### Encryption:
1. **Unencrypted Storage** - Storage without encryption
2. **Weak Encryption** - Outdated encryption algorithms
3. **Missing TLS** - Unencrypted data in transit
4. **Unencrypted Backups** - Backup data without encryption

### Network Security:
1. **Open Security Groups** - 0.0.0.0/0 access rules
2. **Public Subnets** - Unnecessary public exposure

### Compliance:
1. **Missing Logging** - No audit trails
2. **No Monitoring** - Missing security alerts
3. **Backup Issues** - No backup strategies
4. **Resource Tagging** - Missing cost and security tags

## Tools Used in This Module #TODO: Update this section

### Policy as Code:
- **Checkov** - Static analysis for IaC
- **TFSec** - Terraform security scanner
- **Terrascan** - Multi-IaC security scanner
- **Snyk IaC** - Developer-first IaC scanning

### Cloud-Specific Tools:
- **AWS Config** - AWS resource compliance
- **Azure Security Center** - Azure security recommendations
- **Google Security Command Center** - GCP security insights

### Custom Policy Engines:
- **Open Policy Agent (OPA)** - Policy as code framework
- **Sentinel** - HashiCorp policy framework
- **Polaris** - Kubernetes best practices

## Terraform Security Best Practices #TODO: Should we have an annex talking about IaC best practices, from the IaC point of view itself?

1. **Remote State** - Use encrypted remote backends
2. **State Locking** - Prevent concurrent modifications
3. **Sensitive Variables** - Mark sensitive data appropriately
4. **Provider Versions** - Pin provider versions
5. **Module Security** - Vet third-party modules

## Learning Objectives

By the end of this module, you will:
- Understand IaC security scanning principles
- Learn to identify common misconfigurations
- Configure and run IaC security tools
- Understand policy as code concepts
- Integrate IaC scanning into CI/CD pipelines

## Workshop Exercise

1. Scan Terraform configurations for security issues
2. Identify and analyze security misconfigurations
3. Learn to write custom security policies
4. Review compliance and best practice violations
5. Implement fixes for identified issues

## Security Checklist

- [ ] All resources encrypted at rest and in transit
- [ ] Least privilege access policies
- [ ] No hardcoded secrets or credentials
- [ ] Proper network segmentation
- [ ] Logging and monitoring enabled
- [ ] Backup and disaster recovery configured
- [ ] Resource tagging for governance
- [ ] Compliance requirements met
