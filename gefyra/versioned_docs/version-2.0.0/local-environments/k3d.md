---
title: k3d
---

import GettingStarted from '../_includes/getting_started.md';
import Feedback from '../_includes/feedback.md';

# Getting started with Gefyra and k3d
This guide will show you how to use Gefyra for the local development of a Kubernetes application running in [k3d](https://k3d.io/).


## Prerequisites
1. K3d is [installed](https://k3d.io/#installation) (at least in version v5.4.9)
2. Gefyra is [available](https://gefyra.dev/installation) (at least in version 2.0.0)

**Hint** there is a bug in Docker Desktop v4.17-v4.18 which causes `gefyra up` to fail with k3d clusters that run on that DD version.

## Creating a local Kubernetes cluster

<Terminal src="/img/minikube2.gif" alt="Set up Minikube" />


### 1. Create a local Kubernetes cluster with k3d by running:

```sh
k3d cluster create mycluster --agents 1 -p 8080:80@agent:0 -p 31820:31820/UDP@agent:0
```
This creates a Kubernetes cluster that binds port 8080 and 31820 to localhost. The `kubectl` context is immediately set to this cluster.

### 2. Apply some workload, for example from the testing directory of this repo:  
```
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml
```
Check out this workload running under: http://hello.127.0.0.1.nip.io:8080/

## Running Gefyra

#### 1. Set up Gefyra with your k3d cluster:
```
gefyra up
```

<GettingStarted />

## Deleting the locally running k3d Kubernetes cluster with
```sh
k3d cluster delete mycluster
```

<Feedback />
