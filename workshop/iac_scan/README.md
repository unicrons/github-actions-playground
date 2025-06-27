# Infrastructure as Code (IaC) Security Scanning

This workshop module focuses on scanning Infrastructure as Code (IaC) configurations to identify security misconfigurations before infrastructure deployment.

## What is IaC Security Scanning?

IaC security scanning analyzes infrastructure definitions (Terraform, CloudFormation, Kubernetes YAML, etc.) to identify security misconfigurations, compliance violations, and best practice deviations before resources are provisioned.

## Common IaC Security Issues

### Access Control:
1. **Overly Permissive Policies** - Broad IAM permissions
2. **Public Access** - Resources exposed to the internet
3. **Missing Authentication** - No access controls
4. **Weak Passwords** - Default or weak credentials

### Encryption:
1. **Unencrypted Storage** - S3, EBS, RDS without encryption
2. **Weak Encryption** - Outdated encryption algorithms
3. **Missing TLS** - Unencrypted data in transit
4. **Unencrypted Backups** - Backup data without encryption

### Network Security:
1. **Open Security Groups** - 0.0.0.0/0 access rules
2. **Missing VPC** - Resources in default VPC
3. **No Network Segmentation** - Flat network architecture
4. **Public Subnets** - Unnecessary public exposure

### Compliance:
1. **Missing Logging** - No audit trails
2. **No Monitoring** - Missing security alerts
3. **Backup Issues** - No backup strategies
4. **Resource Tagging** - Missing cost and security tags

## Tools Used in This Module

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

## Terraform Security Best Practices

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

## Common Vulnerabilities Examples

### AWS S3 Bucket (Insecure):
```hcl
resource "aws_s3_bucket" "example" {
  bucket = "my-bucket"
  
  # Missing: encryption, versioning, public access block
}
```

### Security Group (Overly Permissive):
```hcl
resource "aws_security_group" "web" {
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Dangerous!
  }
}
```

## Security Checklist

- [ ] All resources encrypted at rest and in transit
- [ ] Least privilege access policies
- [ ] No hardcoded secrets or credentials
- [ ] Proper network segmentation
- [ ] Logging and monitoring enabled
- [ ] Backup and disaster recovery configured
- [ ] Resource tagging for governance
- [ ] Compliance requirements met
