---
title: Google Cloud Platform (GCP)
sidebar_position: 2
---

import Feedback from '../../_includes/feedback.md';

# Getting started with Gefyra and the Google Cloud Platform
This guide will show you how to use Gefyra for the remote development of a Kubernetes
Application running in the Google Kubernetes Engine (GKE).

## Prerequisites
1. You have the [gcloud](https://cloud.google.com/sdk/docs/install-sdk) command installed
2. Follow the [installation](https://gefyra.dev/installation) of Gefyra for your preferred platform  

Additionally you need an account for the Google Cloud Platform including the
permission to create a new cluster. Make sure your gcloud is using the right
project configuration. Googles documentation is available
[here](https://cloud.google.com/docs/get-started).

## Setup a cluster
1. The easiest way to create a new cluster is using `gcloud`:
```bash
gcloud container clusters create spacecraft
```
This may take a few minutes, there will be 3 VM instances running a kubernetes
cluster ready to serve your applications. `gcloud` will set your
kubectl context to the created cluster, nothing to worry about!  

2. The last thing we need to do is open a port in the firewall. This allows gefyra
to connect to the cluster using wireguard:
```bash
gcloud compute firewall-rules create gefyra --allow udp:31820
```
3. Apply some workload, for example from the testing directory of this repo:  
```shell
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml
```

## Running Gefyra
1. At first, we need a host IP of one of our compute instances. You can get
them with running `gcloud compute instances list`. Pick one of them.
2. Now you can run `gefyra up --host <IP>`
3. Run a local Docker image with Gefyra in order to  make it part of the cluster.
   1. Build your Docker image with a local tag, for example from the testing directory:
   `cd testing/images/ && docker build -f Dockerfile.local . -t pyserver`
   2. Execute Gefyra's run command:    
   `gefyra run -i pyserver -N mypyserver -n default`
   3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
   `docker exec -it mypyserver bash`  
   `wget -O- hello-nginx` will print out the website of the cluster service _hello-nginx_ from within the cluster.
4. Create a bridge in order to intercept the traffic to the cluster application with the one running locally:    
`gefyra bridge -N mypyserver -n default --port 80:8000 --target deploy/hello-nginxdemo/hello-nginx`    
5. List all running _bridges_:  
`gefyra list --bridges`
6. _Unbridge_ the local container and reset the cluster to its original state: 
`gefyra unbridge -N mypybridge`

## Cleaning up
Remove Gefyra's components from the cluster with `gefyra down`

<Feedback />


