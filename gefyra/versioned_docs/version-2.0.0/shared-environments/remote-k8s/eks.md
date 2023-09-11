---
title: Elastic Kubernetes Service (EKS)
sidebar_position: 3
---

import Feedback from '../../_includes/feedback.md';

# Getting started with Gefyra and Elastic Kubernetes Service (EKS)
This guide will show you how to use Gefyra for the remote development of a Kubernetes
application running on Elastic Kubernetes Service (EKS).

## Prerequisites
1. You have the [aws](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) command installed and configured
2. Follow the [installation](https://gefyra.dev/installation) of Gefyra for your preferred platform  

Additionally, you need an account for the Amazon Web Services including the
permission to create a new cluster. Make sure your `aws` is using the right
project configuration and/or profile.

## Setup a cluster
You may follow [this guide to create a cluster using the AWS Management Console](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html).

1. The easiest way to create a new cluster is using `aws`:
```bash
aws eks create-cluster --name gefyra --kubernetes-version 1.22 \
   --role-arn arn:aws:iam::111122223333:role/myAmazonEKSClusterRole \
   --resources-vpc-config subnetIds=subnet-ExampleID1,subnet-ExampleID2,securityGroupIds=sg-ExampleID1
```
This may take a long time. You can check the cluster status with:
```bash
aws eks describe-cluster --name gefyra --query "cluster.status"
> "ACTIVE"
```
2. Depending on your way of creating the cluster, you may have to add a `NodeGroup` to  the cluster, so you can actually run workloads.
3. Pull the `kubectl` configuration to connect to the cluster, with:
```bash
aws eks update-kubeconfig --name gefyra
```
Now you should be able to run any `kubectl` command in that cluster.

4. Apply some workload, for example from the testing directory of this repo:  
```shell
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml
```

6. **Important:** before Gefyra can connect from outside the cluster, you must set the security group of the nodes to allow UDP traffic on port 31820.

Find out the security group of the cluster. Then, create the required inbound traffic rule:
```bash
aws eks describe-cluster --name gefyra --query "cluster.resourcesVpcConfig.clusterSecurityGroupId"
> "<security-group-id>"

aws ec2 authorize-security-group-ingress --group-id "<security-group-id>" --protocol udp --port 31820  --cidr 0.0.0.0/0
```

## Running Gefyra
1. At first, we need a host IP of one of our nodes. You can get
them by running `kubectl get nodes -o wide |  awk {'print $1" " $2 " " $7'} | column -t`. Pick one of them from the `EXTERNAL-IP` column.
2. Now you can run `gefyra up --host <IP>`
3. Run a local Docker image with Gefyra to make it part of the cluster.
   1. Build your Docker image with a local tag, for example from the testing directory:
   `cd testing/images/ && docker build -f Dockerfile.local . -t pyserver`
   2. Execute Gefyra's run command:    
   `gefyra run -i pyserver -N mypyserver -n default`
   3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
   `docker exec -it mypyserver bash`  
   `wget -O- hello-nginx` will print out the website of the cluster service _hello-nginx_ from within the cluster.
4. Create a bridge to intercept the traffic to the cluster application with the one running locally:  
`gefyra bridge -N mypyserver -n default --port 80:8000 --target deploy/hello-nginxdemo/hello-nginx`    
1. List all running _bridges_:  
`gefyra list --bridges`
1. _Unbridge_ the local container and reset the cluster to its original state:  
`gefyra unbridge -N mypybridge`

## Cleaning up
Remove Gefyra's components from the cluster with `gefyra down`

<Feedback />


