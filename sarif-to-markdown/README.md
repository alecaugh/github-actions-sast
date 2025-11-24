# checkov

## Key Features

- Converts SARIF to Markdown. 

## Description

Convert SARIF file from security scan output to Markdown (sarif_converted.md).

## Inputs

| name              | description                                                              | required | default |
|-------------------|--------------------------------------------------------------------------|----------|---------|
| `sarif_file_path` | <p>The path to the SARIF file to be converted (e.g., results.sarif).</p> | `true`   |         |

## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: trustpilot/actions/sarif-to-markdown@v1
  with:
    sarif_file_path:
    # The path to the SARIF file to be converted (e.g., results.sarif).
    #
    # Required: true
```

## Examples

### GitHub Actions

```yaml
- uses: trustpilot/actions/sarif-to-markdown@v1
  with:
    sarif_file_path: results.sarif

```
