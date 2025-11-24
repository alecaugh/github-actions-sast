# checkov

## Key Features

- [Official GitHub Action for checkov](https://github.com/bridgecrewio/checkov-action)
- Output is shown in a PR comment (when run in a workflow triggered by a PR)

## Description

Run [`checkov`](https://www.checkov.io) static analysis for infrastructure security scan.

## Inputs

| name            | description                                             | required | default |
|-----------------|---------------------------------------------------------|----------|---------|
| `directory`     | <p>The directory to scan.</p>                           | `false`  | `"."`   |
| `output_format` | <p>The output format.</p>                               | `false`  | `sarif` |
| `fail_workflow` | <p>Return an error code if there are failed checks.</p> | `false`  | `true`  |

## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    directory:
    # The directory to scan.
    #
    # Required: false
    # Default: '.'

    output_format:
    # The output format.
    #
    # Required: false
    # Default: 'sarif'

    fail_workflow:
    # Return an error code if there are failed checks.
    #
    # Required: false
    # Default: 'true'
```

## Examples

### GitHub Actions

```yaml
- uses: trustpilot/actions/checkov@v1
  with:
    fail_workflow: false

```
