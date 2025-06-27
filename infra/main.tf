terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "workshop-terraform-state"
    key    = "workshop/terraform.tfstate"
    region = "us-west-2"

    # Security issue: No encryption specified
    # encrypt = true

    # Security issue: No state locking
    # dynamodb_table = "terraform-state-lock"
  }
}

provider "aws" {
  region = var.aws_region

  # Security issue: Hardcoded credentials (should use IAM roles)
  # access_key = "AKIAIOSFODNN7EXAMPLE"
  # secret_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}
