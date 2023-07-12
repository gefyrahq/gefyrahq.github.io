---
layout: home
position: 1
title: Introduction
permalink: /
description: "Blazingly-fast, rock-solid, local application development with Kubernetes."
---

# Gefyra: Blazingly-fast, rock-solid, local application development with Kubernetes.


## The Problem
Building and pushing containers to test them in Kubernetes is repetitive and time-consuming. Writing and debugging code that depends on services in Kubernetes is daunting. Especially if they are not reachable during development.

<img src="/img/main.png" alt="Gefyra Mascot" width="200" style={{ float: 'right', marginLeft: '15px' }}/>

## The Solution
Gefyra runs local code in any Kubernetes cluster without the build and push cycle. It overlays containers in the cluster making code changes immediately available.

[Try it now](/getting-started/)

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

### Gefyra offers you to
- run services locally on a developer machine
- operate feature-branches in a production-like Kubernetes environment with all adjacent services
- write code in the IDE you already love, be fast, be confident
- leverage all the neat development features, such as debugger, code-hot-reloading, overriding environment variables
- run high-level integration tests against all dependent services
- keep peace-of-mind when pushing new code to the integration environment 

## Quick installation

```bash
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

Looking for Homebrew or Windows installation? Checkout the [installation guide](/installation).

## Use Cases and Demos
If you are interested in more sophisticated use cases or want to develop modern Kubernetes-based architectures, 
check out the [use cases and demos](/usecases/) or [the media section](/media/). 

## Alternative to Telepresence
Compared to [Telepresence](https://www.getambassador.io/docs/telepresence/latest/reference/architecture)
VPN to connect with the Kubernetes cluster. Telepresence provides namespace-scoped connectivity with the cluster via a virtual network interface, and tunnels over gRPC.

Gefyra comes with Docker as baked-in dependency. With Telepresence, Docker is optional. 

Telepresence uses a sidecar pattern to inject the container(s) needed to perform selective intercepts (the original container will receive unintercepted traffic). Gefyra instead replaces the image of the intercepted container with the Gefyra `carrier` image, which then redirects traffic to the local container. Gefyra can therefore support a couple of important use-cases such as the sidecar pattern (see: [this medium article](https://medium.com/bb-tutorials-and-thoughts/kubernetes-learn-sidecar-container-pattern-6d8c21f873d)

Anyway, if you feel you need other features that Telepresence provides and Gefyra misses, please give it a go. Gefyra was heavily 
inspired by Telepresence.

Gefyra was designed to be fast and robust on an average developer machine and supports most platforms.


