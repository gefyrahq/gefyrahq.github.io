---
layout: page
title: Docker Desktop Kubernetes (OSX)
permalink: /getting-started/docker-desktop-kubernetes-osx/
nav_order: 2
parent: Getting Started
---
# Getting started with Gefyra and Docker Desktop Kubernetes on MacOS
This example is really similar to the k3d getting started guide.
However, Docker Desktop's Kubernetes comes with some specialities
which must be taken care of to make this guide work.

**Note:** Gefyra works the same for different Kubernetes distributions.
Docker Desktop doesn't come with an ingress installed which must
be added to the cluster to get things working.

You can easily try Gefyra yourself following this small example.
{: .fs-6 .fw-300 }

## Prerequisites
1. Follow the [installation](https://gefyra.dev/installation) for MacOS.

2. Start the Kubernetes cluster that comes with Docker Desktop. This may take moment.

<div align="center">
 <img src="/assets/images/getting_started_docker_desktop_kubernetes.png" alt="docker desktop kubernetes settings"/>
</div>

3. Tell kubectl to use your docker-desktop cluster:
```shell
kubectl config use-context docker-desktop
```
4. Install an ingress to enable routing for the cluster. For this guide we use the nginx
ingress controller like this:
```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.1/deploy/static/provider/cloud/deploy.yaml
```
5. Now patch the nginx ingress controller service to make port `8080` available:
```shell
kubectl patch svc -n ingress-nginx ingress-nginx-controller -p '{"spec": {"ports": [{"appProtocol": "http", "name": "http", "port": 8080, "protocol": "TCP", "targetPort": "http"}]}}' --type merge
```
6. Apply some workload, for example from the testing directory of this repo:  
```shell
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml
```
Check out this workload running under: http://hello.127.0.0.1.nip.io:8080/    


{% include_relative _includes/getting_started_common.md %}
