---
title: Introduction
description: "Blazingly-fast, rock-solid, local application development with Kubernetes."
sidebar_position: 1
---

# Gefyra: Blazingly-fast, rock-solid, local application development with Kubernetes.

## Gefyra offers you to
- run services locally on a developer machine
- operate feature-branches in a production-like Kubernetes environment with all adjacent services
- write code in the IDE you already love, be fast, be confident
- leverage all the neat development features, such as debugger, code-hot-reloading, overriding environment variables
- run high-level integration tests against all dependent services
- keep peace-of-mind when pushing new code to the integration environment 

Gefyra was designed to be fast and robust on an average developer machine and supports most platforms.  

**Remark**: Gefyra requires a running Docker engine on the development machine.

## Core Features

### Run a container instance on a developer machine and connect it to Kubernetes-based resources
You can run an arbitrary container on your local development machine that behaves as it would run within a Kubernetes cluster. It connects to Kubernetes-based resources (such as databases, APIs, or assets), making it very
convenient to test a new service in the cluster or write code that depends on Kubernetes resources.

<div align="center">
 <img src="/img/gefyra_run_action.svg" alt="Gefyra run action"/>
</div>

### Overlay a container running within a Kubernetes Pod with a local instance 
You can simply replace a container running in a Kubernetes Pod with a local container instance. That will 
serve the requests to that Pod from your local container instances. That makes it very convenient to test changes in a realistic production-close
environment before pushing the code to CI/CD.

<div align="center">
 <img src="/img/gefyra_bridge_action.svg" alt="Gefyra bridge action"/>
</div>

## Quick installation

```bash
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

Looking for Homebrew or Windows installation? Checkout the [installation guide](/docs/installation).

## Use Cases and Demos
If you are interested in more sophisticated use cases or want to develop modern Kubernetes-based architectures, 
check out the [use cases and demos](/usecases-and-demos/) or [the media section](/media/). 


