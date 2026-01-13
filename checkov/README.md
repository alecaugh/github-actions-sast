# checkov

## Key Features

- [Official GitHub Action for checkov](https://github.com/bridgecrewio/checkov-action)
- Output is shown in a PR comment (when run in a workflow triggered by a PR)

## Description

Run [`checkov`](https://www.checkov.io) static analysis for infrastructure security scan. All Checkov findings are set as Critical/High severity by default.

## Inputs

| name            | description                                             | required | default |
|-----------------|---------------------------------------------------------|----------|---------|
| `directory`     | <p>The directory to scan.</p>                           | `false`  | `"."`   |
| `fail_workflow` | <p>Return an error code if there are failed checks.</p> | `false`  | `true`  |

## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: ./checkov
  with:
    directory: '.'
    # The directory to scan.
    #
    # Required: false
    # Default: '.'

    fail_workflow: false
    # Return an error code if there are failed checks.
    #
    # Required: false
    # Default: 'true'
```

## Examples

### GitHub Actions

```yaml
- uses: ./checkov
  with:
    fail_workflow: false
```
