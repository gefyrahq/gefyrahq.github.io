---
title: Colima Kubernetes
---

import GettingStarted, {toc as GettingStartedTOC} from '../_includes/getting_started.md';
import Feedback from '../_includes/feedback.md';

# Getting started with Gefyra and Colima Kubernetes
This guide will show you how to use Gefyra for the local development of a Kubernetes application running in [Colima Kubernetes](https://github.com/abiosoft/colima).


## Prerequisites
1. Colima is [available](https://github.com/abiosoft/colima) (at least in version v0.5.5)
2. Gefyra is [available](https://gefyra.dev/installation) (at least in version 2.0.0)

## Creating a local Kubernetes cluster   

### 1. Creating a local Kubernetes cluster with `colima`    
```shell
colima start --kubernetes --network-address
```

### 2. Find out the network address of your VM:
```shell
colima list
PROFILE    STATUS     ARCH      CPUS    MEMORY    DISK     RUNTIME       ADDRESS
default    Running    x86_64    2       2GiB      60GiB    docker+k3s    192.168.106.2
```


### 3. Apply some workload, for example from the testing directory of this repo:  
```sh
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml
``` 
Check out this workload running under: http://hello.127.0.0.1.nip.io:8080/

## Running Gefyra

### 1. Set up Gefyra with your Colima cluster:
```shell
gefyra up
```
**Important**: 

<GettingStarted />

10. Remove the locally running Kubernetes cluster with 
```sh
colima delete
```

<Feedback />
