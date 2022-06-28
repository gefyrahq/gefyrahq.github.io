---
layout: page
title: Getting Started (k3d)
permalink: /guides/getting-started-k3d/
nav_order: 1
parent: Guides
---
# Gettings started with Gefyra and k3d
You can easily try Gefyra yourself following this small example.
{: .fs-6 .fw-300 }

## Prerequisites
1. Follow the [installation](https://gefyra.dev/installation) for your preferred platform.

2. Create a local Kubernetes cluster with `k3d` like so:    
**< v5** `k3d cluster create mycluster --agents 1 -p 8080:80@agent[0] -p 31820:31820/UDP@agent[0]`  
**>= v5** `k3d cluster create mycluster --agents 1 -p 8080:80@agent:0 -p 31820:31820/UDP@agent:0`  
This creates a Kubernetes cluster that binds port 8080 and 31820 to localhost. `kubectl` context is immediately set to this cluster.
3. Apply some workload, for example from the testing directory of this repo:  
`kubectl apply -f testing/workloads/hello.yaml`
Check out this workload running under: http://hello.127.0.0.1.nip.io:8080/    
 running Kubernetes cluster with `k3d cluster delete mycluster`

{% include_relative getting_started_common.md %}
