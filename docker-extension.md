---
layout: page
title: Docker Desktop Extension
permalink: /docker-desktop-extension/
nav_order: 6
---

# Gefyra Docker Desktop Extension

[Gefyra's Docker Desktop Extension](https://hub.docker.com/r/gefyra/docker-desktop-extension) allows you to run containers on your local machine and connect them to Kubernetes-based resources. It is a great way to test a new service in the cluster or write code that depends on Kubernetes resources.

## Installation
Currently the Gefyra Docker Desktop Extension is not available on the marketplace. 
However, you can install it by running the following command:
```shell
docker extension install gefyra/docker-desktop-extension:0.1.0
```

## Usage

After installing the extension it becomes available in the Docker Desktop Extension sidebar. Gefyra Docker Desktop currently only
support the `run` mode. After clicking on the `run` tile you're guided through the process of running a container on your local machine.

![Docker Desktop Extension Start](/assets/images/extension/mode.png)

Firstly Gefyra needs to know about you're cluster to allow you to set all settings accordingly.

![Docker Desktop Extension Cluster Settings](/assets/images/extension/cluster.png)

After choosing your kubeconfig and context you can then proceed to adding the settings for your container. In case you have a remote cluster
you need to provide Gefyra with its connection parameters under `Remote Cluster Settings`.

![Docker Desktop Extension Container Settings](/assets/images/extension/container.png)

There are several settings for the container - most importantly the `image`, `namespace` and `command` settings.
The `image` setting is the image that will be used to run the container - Gefyra will you show any image that is available in the local Docker Desktop context as 
well as images that are available in the chosen Kubernetes namespace. The `namespace` setting is the namespace in which the container will be available.
Gefyra allows you to copy the environment variables of a certain workload through the `Copy Environment From` dropdown.
You can add volumes and more variables through the `Add Volume` and `Add Environment Variable` buttons.
As soon as you're done hit run!

![Docker Desktop Extension Load](/assets/images/extension/load.png)
Gefyra ensures that its cluster components are in the correct state and starts the container.

![Docker Desktop Extension Logs](/assets/images/extension/logs.png)
Once the container is running Gefyra will show you the logs of the container.
