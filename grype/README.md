# checkov

## Key Features

- [Official GitHub Action for Grype](https://github.com/anchore/scan-action)

## Description

Run [`Grype`](https://github.com/anchore/scan-action) container image security scan.

## Inputs

| name            | description                                             | required | default |
|-----------------|---------------------------------------------------------|----------|---------|
| `image_id`      | <p>The image to scan.</p>                               | `true`   |         |
| `output_format` | <p>The output format.</p>                               | `false`  | `sarif` |
| `fail_workflow` | <p>Return an error code if there are failed checks.</p> | `false`  | `true`  |

## Runs

This action is a `composite` action.

## Usage

*This action requires a built container image as input.*

The `image` ID output from the build step can be used to reference the built container image.

```yaml
- uses: trustpilot/actions/grype@v1
  with:
    image_id: <image_id_output_from_container_build_step>
    # The image to scan.
    #
    # Required: true

    output_format: sarif
    # The output format.
    #
    # Required: false
    # Default: 'sarif'

    fail_workflow: true
    # Return an error code if there are failed checks.
    #
    # Required: false
    # Default: 'true'
```

## Examples

### GitHub Actions

```yaml
# 1. Build image step
- name: Run Build Docker
  id: build-docker
  uses: trustpilot/actions/build-docker@main
  with:
    tag: ${{ steps.version.outputs.build_version }}
    src: directory-from-root

# 2. Grype scan image step
- uses: trustpilot/actions/grype@v1
  with:
    image_id: ${{ steps.build-docker.outputs.image }}
    fail_workflow: false
```
