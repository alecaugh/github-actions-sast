# checkov

## Key Features

- [Official GitHub Action for TruffleHog](https://github.com/marketplace/actions/trufflehog-oss)
- Output is shown in a PR comment (when run in a workflow triggered by a PR)

## Description

Run [`TruffleHog`](https://trufflesecurity.com/) secrets detection.

## Inputs

| name            | description                                             | required | default |
|-----------------|---------------------------------------------------------|----------|---------|
| `fail_workflow` | <p>Return an error code if there are failed checks.</p> | `false`  | `true`  |

## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    fail_workflow: false
    # Return an error code if there are failed checks.
    #
    # Required: false
    # Default: 'true'
```

## Examples

### GitHub Actions

```yaml
- uses: trustpilot/actions/trufflehog@v1
  with:
    fail_workflow: false

```
