variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-west-2"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "workshop-app"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

# Security issue: Sensitive variable without sensitive flag
variable "database_password" {
  description = "Database password"
  type        = string
  default     = "changeme123"
  # sensitive = true
}

variable "allowed_cidr_blocks" {
  description = "CIDR blocks allowed to access the application"
  type        = list(string)
  # Security issue: Too permissive default
  default = ["0.0.0.0/0"]
}

# Security issue: Hardcoded API key in variables
variable "api_key" {
  description = "Third-party API key"
  type        = string
  # Security issue: Hardcoded API key
  default = "sk_live_1234567890abcdefghijklmnop"
}

# Security issue: AWS credentials in variables
variable "aws_access_key" {
  description = "AWS Access Key ID"
  type        = string
  default     = "AKIAIOSFODNN7EXAMPLE"
}

variable "aws_secret_key" {
  description = "AWS Secret Access Key"
  type        = string
  default     = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}
