---
layout: page
title: Colima Kubernetes
permalink: /getting-started/colima-kubernetes/
nav_order: 8
parent: Getting Started
hide_up: true
---
# Getting started with Gefyra and Colima Kubernetes
This guide will show you how to use Gefyra for the local development of a Kubernetes application running in [Colima Kubernetes](https://github.com/abiosoft/colima).
{: .fs-6 .fw-300 }

## Prerequisites
1. Follow the [installation](https://gefyra.dev/installation) for your preferred platform.

2. Create a local Kubernetes cluster with `colima`:    

```shell
colima start --kubernetes --network-address
```

Find out the network address of your VM:
```shell
colima list
PROFILE    STATUS     ARCH      CPUS    MEMORY    DISK     RUNTIME       ADDRESS
default    Running    x86_64    2       2GiB      60GiB    docker+k3s    192.168.106.2
```

Install Gefyra components in the cluster:
```shell
gefyra up --endpoint=192.168.106.2:31820
```


3. Apply some workload, for example from the testing directory of this repo:  
`kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml`
Check out this workload running under: http://hello.127.0.0.1.nip.io:8080/

{% include_relative _includes/getting_started_common.md %}
10. Remove the locally running Kubernetes cluster with `colima delete`