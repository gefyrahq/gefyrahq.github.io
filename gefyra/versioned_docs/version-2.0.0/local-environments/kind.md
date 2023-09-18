---
title: kind
---

import GettingStartedCommon from '../_includes/getting_started_common.md';
import Feedback from '../_includes/feedback.md';

# Getting started with Gefyra and kind
This guide will show you how to use Gefyra for the local development of a Kubernetes application running in [kind](https://kind.sigs.k8s.io/).


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

<GettingStartedCommon hideUp={false} />

10. Remove the locally running Kubernetes cluster with `kind delete cluster`

<Feedback />
