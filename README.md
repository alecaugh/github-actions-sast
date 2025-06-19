---
title: security-scan
description: Reusable Workflow for Security Scanning in Pull Requests
---

Run a full battery of security tests at the pull request stage of the deployment lifecycle. View the results immediately as a comment in the pull request.

## Key Features

- Trivy for software composition analysis (SCA) and security misconfiguration detection
- Semgrep for static application security testing (SAST) of application level code
- TruffleHog for low false positive secrets detection, including option to fail workflow upon detection of valid secret

<!-- action-docs-usage source=".github/workflows/security-scan.yml" project="alecaugh/github-actions-sast/.github/workflows/security-scan.yml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: alecaugh/github-actions-sast/.github/workflows/security-scan.yml@v1
    with:
      fail-on-valid-secret:
      # Fail the secret-scan job if a new valid secret is detected (recommended).
      #
      # Type: boolean
      # Required: true
      # Default: ""
```
<!-- action-docs-usage source=".github/workflows/security-scan.yml" project="alecaugh/github-actions-sast/.github/workflows/security-scan.yml" version="v1" -->

## Examples

```yaml
name: Security scan

on:
  pull_request: {} # Should only be triggered on PR events

permissions:
  contents: read # Required to check out the repository
  issues: write # Required for TruffleHog to create issues in PRs
  pull-requests: write # Required to post comments in PRs

jobs:
  security-scan:
    uses: alecaugh/github-actions-sast/.github/workflows/security-scan.yml@v1
    with:
      fail-on-valid-secret: true # Fail secret-scan job when valid secret detected (recommended)
```