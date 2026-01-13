---
title: pr-comment
description: Composite Action for pr-comment
---

## Key Features

- Feature 1

<!-- action-docs-all source="composite/pr-comment/action.yml" project="./pr-comment" version="v1" -->
## Description

A composite action to add a Document as a comment in a PR.


## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `document_txt_path` | <p>Path to the text file to be used as the comment body</p> | `true` | `""` |
| `pr_comment_title` | <p>Title of the PR comment to identify it</p> | `true` | `""` |


## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: ./pr-comment
  with:
    document_txt_path:
    # Path to the text file to be used as the comment body
    #
    # Required: true
    # Default: ""

    pr_comment_title:
    # Title of the PR comment to identify it
    #
    # Required: true
    # Default: ""
```
<!-- action-docs-all source="composite/pr-comment/action.yml" project="./pr-comment" version="v1" -->

## Examples

### Example title

```yaml
- uses: ./pr-comment
  with:
    pr_comment_title: foo
    document_txt_path: srt/foo.txt
```