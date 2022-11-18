---
layout: page
title: kind
permalink: /getting-started/kind/
nav_order: 2
parent: Getting Started
---
# Getting started with Gefyra and kind
This guide will show you how to use Gefyra for the local development of a Kubernetes application running in [kind](https://kind.sigs.k8s.io/).
{: .fs-6 .fw-300 }

## Prerequisites
1. Follow the [installation](https://gefyra.dev/installation) for your preferred platform.

2. Create a local Kubernetes cluster with `kind` like this:
Create a file `kind-config.yaml`:

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 31820
    hostPort: 31820
    protocol: udp
```

Run:
```bash
kind create cluster --config kind-config.yaml
```

{% include_relative _includes/getting_started_common.md %}
10. Remove the locally running Kubernetes cluster with `kind delete cluster`