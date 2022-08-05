---
layout: page
title: Minikube
permalink: /getting-started/minikube-docker/
nav_order: 1
parent: Getting Started
---
# Getting started with Gefyra and Minikube
This guide will show you how to use Gefyra for the local development of a Kubernetes
Application running in Minikube.
{: .fs-6 .fw-300 }

**Important:** This getting started guide for Minikube is profiled for Gefyra in version **0.9.0+**.

## Prerequisites
1. You have Minikube [installed](https://minikube.sigs.k8s.io/docs/start/) (at least in version v1.26.1)
2. Follow the [installation](https://gefyra.dev/installation) of Gefyra for your preferred platform  


## Creating a local Kubernetes cluster
1. For Minikube to create a Kubernetes cluster based on Docker containers please run:  
```bash
> minikube start
```  
**Important:** the following example does not _fully_ work with `--driver=qemu` since `minikube service` is not currently 
implemented with the qemu2 driver. See [https://github.com/kubernetes/minikube/issues/14146](https://github.com/kubernetes/minikube/issues/14146) for details.   
Tested drivers are: _docker_, _kvm2_, _kvm_, _virtualbox_. Others are potentially working, but are not tested.

After some time of downloading the required resources, the cluster will be running. You may enable the required 
addons based on your requirements. The `kubectl` context is immediately set to this cluster. You can check if 
`kubectl config current-context` is set to `minikube`.
2. Apply some workload, for example from the testing directory of this repo:  
`kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml`
3. Check the output of the deployed app with:
   1. `kubectl expose deployment hello-nginxdemo --type=NodePort --port=80`
   2. `minikube service hello-nginxdemo`

## Running Gefyra
1. Set up Gefyra with your local Minikube cluster: `gefyra up --minikube`  
The `--minikube` switch detects all required connection parameters from your local machine.
2. Run a local Docker image with Gefyra in order to  make it part of the cluster.
   1. Build your Docker image with a local tag, for example from the testing directory:
   `cd testing/images/ && docker build -f Dockerfile.local . -t pyserver`
   2. Execute Gefyra's run command:    
   `gefyra run -i pyserver -N mypyserver -n default`
   3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
   `docker exec -it mypyserver bash`  
   `wget -O- hello-nginx` will print out the website of the cluster service _hello-nginx_ from within the cluster.
3. Create a bridge in order to intercept the traffic to the cluster application with the one running locally:    
`gefyra bridge -N mypyserver -n default --deployment hello-nginxdemo --port 8000:80 --container-name hello-nginx -I mypybridge`    
Check out the locally running server comes up by refreshing the address from: `minikube service hello-nginxdemo`  
4. List all running _bridges_:  
`gefyra list --bridges`
5. _Unbridge_ the local container and reset the cluster to its original state: 
`gefyra unbridge -N mypybridge`
Check out the initial response from: `minikube service hello-nginxdemo`

## Cleaning up
Remove Gefyra's components from the cluster with `gefyra down`
