# Perfect Pipeline Introduction

This workshop is designed to help you understand the importance of shift-left security and how to implement comprehensive security scanning in your pipeline.

All of this without forgeting the human factor, as the final objective is not blind security but enabling your users (or yourself) to build secure software.

Let's start with some important concepts:

### What is a Pipeline? CI/CD/CS?

A pipeline is a series of automated steps that build, test, and deploy software. It is a key part of the software development lifecycle and helps ensure that software is delivered with high quality and security.

Related with pipelines, probably you heard about the concepts of Continuous Integration and Continuous Delivery. But to build a truly modern and resilient pipeline, we need to formally add a third component: Continuous Security. Let's quickly define them:

- We started with **Continuous Integration (CI)**. This is where developers merge code into a shared branch multiple times a day. Every merge kicks off an automated build and test, ensuring the mainline of your code is never broken for long.

- Then we evolved to **Continuous Delivery (CD)**. This takes CI a step further. It’s an automated process that ensures any change passing the tests can be safely deployed to production with a single click, making release day a non-event.

- Which brings us to today's focus: **Continuous Security (CS)**. This is the crucial next step in the evolution, embedding security into the process. It means automating security controls and tests throughout the pipeline, just like we do for quality, to find vulnerabilities when they are cheapest and easiest to fix.

### What is Shift-Left Security?

Shift-left security is a security practice that aims to move security checks and mitigations as early as possible in the software development lifecycle. This approach helps catch security issues early, before they reach production, and reduces the risk of vulnerabilities being exploited.


## Workshop Goals
The idea of this workshop is demonstrate  how to build a "perfect" (secure and practical) CI/CD pipeline using open-source tools (OSS).

The goal is inspirational, not prescriptive. We do not want you to copy this examples, but to understand the principles and identify the modular components you can adapt to implement in your own environment.

### Learning Outcomes
- Understand the key stages of a secure pipeline
- Know relevant OSS tools for each stage
- Grasp the principles needed to start building or improving your own secure CI/CD process.


### Out of Scope (What this workshop is NOT)
- Deep dives into specific development workflows (e.g., Gitflow vs. Trunk-based)
- Focus on a specific application technology stack (language/framework agnostic where possible)
- A definitive statement on the "best" tools (alternatives will be mentioned for key steps)


## Workshop Index
We suggest you to follow the workshop in the following order, but feel free to jump around and explore the different modules.

1. [Pipeline Security Scan](pipeline_scan/)
2. [Code Security Analysis](code_scan/)
3. [Secrets Scan](secrets_scan/)
4. [Container Security Scanning](container_scan/)
5. [Infrastructure Security Scan](iac_scan/)
6. [Runtime Infrastructure Scan](runtime_infra_scan/)



