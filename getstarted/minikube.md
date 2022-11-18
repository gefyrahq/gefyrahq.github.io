---
layout: page
title: Minikube
permalink: /getting-started/minikube/
nav_order: 1
parent: Getting Started
---
# Getting started with Gefyra and Minikube
This guide describes the usage of Gefyra for the local development of a Kubernetes
application running in [Minikube](https://minikube.sigs.k8s.io/).
{: .fs-6 .fw-300 }

**Important:** This getting started guide for [Minikube](https://minikube.sigs.k8s.io/) requires Gefyra in version **0.9.0+**.

## Prerequisites
1. Minikube is [installed](https://minikube.sigs.k8s.io/docs/start/) (at least in version v1.26.1)
2. Gefyra is [available](https://gefyra.dev/installation) (at least in version 0.9.0)


## Creating a local Kubernetes cluster
1. Create a local Kubernetes cluster with Minikube by running:  
```bash
> minikube start
```  
**Important:** the following example does not _fully_ work with `--driver=qemu` since `minikube service` is not currently 
implemented with the qemu2 driver. See [https://github.com/kubernetes/minikube/issues/14146](https://github.com/kubernetes/minikube/issues/14146) for details.   
Tested drivers are: _docker_, _kvm2_, _kvm_, _virtualbox_. Others are potentially working, but are not tested.

After some time of downloading the required resources, the cluster will be running. You may enable the required 
addons based on your requirements. The `kubectl` context is immediately set to this cluster. You can check if 
`kubectl config current-context` is set to `minikube`.
2. Apply some workload, for example from the testing directory of this repository:  
`kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml`
3. Check the output of the deployed app with:
   1. `kubectl expose deployment hello-nginxdemo --type=NodePort --port=80`
   2. `minikube service hello-nginxdemo`

## Running Gefyra
1. Set up Gefyra with your Minikube cluster: `gefyra up --minikube`  
The `--minikube` switch detects all required connection parameters from your local cluster.
2. Run a local Docker image with Gefyra in order to  make it part of the cluster.
   1. Build your Docker image with a local tag, for example [from the testing directory](https://github.com/gefyrahq/gefyra/tree/main/testing):
   `cd testing/images/ && docker build -f Dockerfile.local . -t pyserver`
   2. Execute Gefyra's run command:    
   `gefyra run -i pyserver -N mypyserver -n default`
   3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
   `docker exec -it mypyserver bash`  
   `wget -O- hello-nginx` will print out the website of the cluster service _hello-nginx_ from within the cluster.
3. Create a bridge in order to intercept the traffic to the cluster application with the one running locally:    
`gefyra bridge -N mypyserver -n default --port 8000:80 --target deploy/hello-nginxdemo/hello-nginx`    
Check out the locally running server comes up by refreshing the address from: `minikube service hello-nginxdemo`  
4. List all running _bridges_:  
`gefyra list --bridges`
5. _Unbridge_ the local container and reset the cluster to its original state: 
`gefyra unbridge -N mypybridge`
Check out the initial response from: `minikube service hello-nginxdemo`

## Cleaning up
Remove Gefyra's components from the cluster with `gefyra down`
