---
title: SysEleven MetaKube Kubernetes
sidebar_position: 4
---

import Feedback from '../../_includes/feedback.md';

# Getting started with Gefyra and SysEleven MetaKube
This guide will show you how to use Gefyra for the remote development of a Kubernetes
application running on MetaKube.


## Prerequisites
1. You have a [MetaKube](https://metakube.syseleven.de/) account and privileges to create a new cluster
2. Follow the [installation](https://gefyra.dev/installation) of Gefyra for your preferred platform  

## Setup a cluster
You may follow [this guide to create a cluster using the MetaKube management console](https://docs.syseleven.de/metakube/en/tutorials/create-a-cluster).

This guide assumes you are running an **OpenStack**-based Kubernetes cluster on SysEleven.
<div align="center">
 <img src="/img/sys11_image2.png" alt="syseleven cluster settings"/>
</div>

**Important:** Before Gefyra can connect from outside the cluster, you must set the security group of the nodes to allow UDP traffic on port 31820.

<div align="center">
 <img src="/img/sys11_image1.png" alt="syseleven security group settings"/>
</div>
Please set the direction to _Ingress_ and the protocol to _UDP_. The port range should be set to _31820_ and the source 
CIDR to _0.0.0.0/0_. That way, Gefyra can connect to any data plane node of the cluster using a [Floating-IP](https://docs.syseleven.de/syseleven-stack/en/reference/network).

After all of the MetaKube components are ready, you can download the *kubeconfig* to access the cluster using `kubectl`. Just click on the "Download Config" button in the MetaKube management console and save the file to your local machine.

## Running Gefyra
1. You may apply some workload, for example from Gefyra's testing directory:  
```shell
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml
```
2. At first, we need a host IP of one of our nodes. You can get it by running: 
```shell
kubectl get nodes -o wide |  awk {'print $1" " $2 " " $7'} | column -t
```
Pick one of them from the `EXTERNAL-IP` column.

3. Now you can run `gefyra up --host <IP>` using the IP you just picked. This will create the Gefyra components in your cluster and local host.
4. Run a local Docker image with Gefyra to make it part of the cluster.
   1. Build your Docker image with a local tag, for example from Gefyra's testing directory (in the repo):
   `cd testing/images/ && docker build -f Dockerfile.local . -t pyserver`
   2. Execute Gefyra's run command:    
   `gefyra run -i pyserver -N mypyserver -n default`
   3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
   `docker exec -it mypyserver bash`
   `wget -O- hello-nginx` will print out the website of the cluster service _hello-nginx_ from within the cluster.
5. Create a bridge to intercept the traffic to the cluster application with the one running locally:  
`gefyra bridge -N mypyserver -n default --port 80:8000 --target deploy/hello-nginxdemo/hello-nginx`    
6. List all running _bridges_:  
`gefyra list --bridges`
7. _Unbridge_ the local container and reset the cluster to its original state: 
`gefyra unbridge -N mypybridge`

## Cleaning up
Remove Gefyra's components from the cluster with `gefyra down`

<Feedback />
