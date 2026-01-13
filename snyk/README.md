# Snyk

## Key Features

- [Official GitHub Action for Snyk](https://github.com/snyk/actions)
- Output is shown in a PR comment (when run in a workflow triggered by a PR)

## Description

Run [`Snyk`](https://github.com/snyk/actions) security scan on JavaScript, Typescript or Python projects.

## Inputs

| name            | description                                             | required | default |
|-----------------|---------------------------------------------------------|----------|---------|
| `snyk_token`    | <p>Snyk service account token</p>                       | `true`   |         |
| `fail_workflow` | <p>Return an error code if there are failed checks.</p> | `false`  | `true`  |

## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: ./snyk
  with:
    snyk_token: ${{ secrets.SNYK_GITHUB_ACTIONS_TOKEN }}
    # The image to scan.
    #
    # Required: true

    fail_workflow: false
    # Return an error code if there are failed checks.
    #
    # Required: false
    # Default: 'true'
```

## Examples

### GitHub Actions

```yaml
- uses: ./snyk
  with:
    snyk_token: ${{ secrets.SNYK_GITHUB_ACTIONS_TOKEN }}
    fail_workflow: false
```