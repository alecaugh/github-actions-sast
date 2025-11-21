# checkov

## Key Features

- [Official GitHub Action for Grype](https://github.com/anchore/scan-action)

## Description

Run [`Grype`](https://github.com/anchore/scan-action) image static analysis.

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
