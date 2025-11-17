# checkov

[![Version](https://img.shields.io/github/v/release/trustpilot/githubactions-workflows?label=version)](
## Key Features

- [Official GitHub Action for checkov](https://github.com/bridgecrewio/checkov-action)

## Description

Run [`checkov`](https://www.checkov.io) static analysis.

## Inputs

| name            | description                   | required | default              |
|-----------------|-------------------------------|----------|----------------------|
| `directory`     | <p>The directory to scan.</p> | `true`   | `""`                 |
| `framework`     | <p>The framework to scan.</p> | `true`   | `""`                 |
| `output_format` | <p>The output format.</p>     | `false`  | `github_failed_only` |


## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    directory:
    # The directory to scan.
    #
    # Required: true
    # Default: ""

    framework:
    # The framework to scan.
    #
    # Required: true
    # Default: ""

    output_format:
    # The output format.
    #
    # Required: false
    # Default: github_failed_only
```

## Examples

### GitHub Actions

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    directory: .github/workflows
    framework: github_actions
```

### CloudFormation

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    directory: cloudformation
    framework: cloudformation
```

### Terraform

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    directory: terraform
    framework: terraform
```
