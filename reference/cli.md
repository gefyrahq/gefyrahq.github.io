---
layout: page
title: Command line interface (CLI)
permalink: /reference/cli/
nav_order: 1
parent: Reference
---
1. TOC
{:toc}

# Command line tool (CLI)

**This reference is for version 0.7.x**

## Syntax
Use the following syntax to run `gefyra` commands from your terminal:
```
gefyra [-h] [-d] [action] [arguments]
```
where `action` and `arguments` are:
- `action`: specifies the operation that you want to perform, for example `up` or `bridge`
- `arguments`:  specifies the required and optional arguments for a specific action, for example `-n` or `--namespace`

Global flags are:
- `-h, --help`: show help message and exit
- `-d, --debug`: add debug output for each action

# Actions
The CLI allows to run the following available actions.

## `up`
Brings up a local development infrastructure. Gefyra pulls the active `kubectl` connection and installs 
_Operator_ to the connected cluster. Gefyra waits for _Operator_ to become ready. In the last step, Gefyra rolls out
the local Docker network and traffic tunnel endpoint.

**Example:** `geyra up`

**Arguments:**  

| Argument            | Description                                                                                                                                                                |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-e`, `--endpoint`  | The Wireguard endpoint in the form _IP_:_Port_ for Gefyra to connect to<br/>**Important:** Be sure to allow your firewall for this IP and port to let traffic pass through |
| `-o`, `--operator`  | The full image path (including tag) for the Operator image (e.g. _quay.io/gefyra/operator:latest_)                                                                         |
| `-s`, `--stowaway`  | The full image path (including tag) for the Stowaway image (e.g. _quay.io/gefyra/stowaway:latest_)                                                                         |
| `-c`, `--carrier`   | The full image path (including tag) for the Carrier image (e.g. _quay.io/gefyra/carrier:latest_)                                                                           |
| `-a`, `--cargo`     | The full image path (including tag) for the Cargo image (e.g. _quay.io/gefyra/cargo:latest_)                                                                               |
|  `-r`, `--registry` | The base url for registry to pull images from (e.g. _quay.io/gefyra/_), the full image paths will be constructed using the name and the tag of the release                 |                                                                                                      |
                        

## `run`
Run a new app container image in Gefyra's development infrastructure. Any Docker image is supported. It is required to
assign a name to the container instance for further reference.

**Example:** `geyra run -i pyserver -N mypyserver -n default`

**Arguments:**  

| Argument            | Description                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------|
| `-i`, `--image`     | The Docker image to run in Gefyra (required)                                          |
| `-N`, `--name`      | The name of the container running in Gefyra (required)                                |
| `-n`, `--namespace` | The Kubernetes namespace for this container to run in (default: _default_)            |
| `-C`, `--command`   | The command for this container to run in Gefyra                                       |
| `--env`             | Set or override environment variables in the form _ENV=value_, allowed multiple times |
| `--env-from`        | Copy the environment from the container in the notation _Pod/Container_               |
| `-v`, `--volume`    | Bind mount a volume into the container in notation _src:dest_, allowed multiple times |



## `bridge`
Intercept the traffic to a container that's running in the Kubernetes cluster and send it to the development container.
You can watch active bridges with `kubectl -n gefyra get ireq` (_InterceptRequests_). The container is the cluster will
be replaced by Gefyra's proxy component _Carrier_. Carrier redirects all requests from the intercepted container (running
in a Pod) to the local development container. During the bridge operation Carrier can fake-serve `httpGet` probes. There 
is one bridge for each Pod/container combination if a Deployment or Statefulset is selected with more than one Pod.

**Example:** `geyra bridge -N mypyserver --container-name hello-nginx --deployment hello-nginxdemo --port 80:8000 -n default -I mypybridge`

**Arguments:**  

| Argument                    | Description                                                                                           |
|:----------------------------|:------------------------------------------------------------------------------------------------------|
| `-N`, `--name`              | The name of the container running in Gefyra (started with `run`) receiving the traffic (required)     |
| `-C`, `--container-name`    | The name for the intercepted container running in the cluster (required)                              |
| `--deployment`              | The name of the Deployment (all its Pods) to be intercepted                                           |
| `--statefulset`             | The name of the Statefulset (all its Pods) to be intercepted                                          |
| `--pod`                     | The name of a Pod to be intercepted                                                                   |
| `-p`, `--port`              | The port mapping from source to target in the form _source:target_, allowed multiple times (required) |
| `-n`, `--namespace`         | The Kubernetes namespace for this container to run in (default: _default_)                            |
| `-P`, `--no-probe-handling` | Make _Carrier_ to not handle probes during the bridge operation                                       |
| `-I`, `--bridge-name`       | The name of the bridge                                                                                |


## `unbridge`
Remove active traffic intercepts and reset the cluster to its original state.

**Example:** `geyra unbridge -N mypybridge`

**Arguments:**  

| Argument       | Description                          |
|:---------------|:-------------------------------------|
| `-N`, `--name` | The name of the bridge to be removed |
| `-A`, `--all`  | Remove all bridges at once           |


## `down`
Remove Gefyra's development infrastructure, including active bridges and all cluster components. The local Docker
network will be removed as well.

**Example:** `gefyra down`

**Arguments:**  
No arguments available.


## `list`
List running containers and active bridges. Please select either `--bridges` or `--containers` to display.

**Example:** `geyra list --bridges`

**Arguments:**  

| Argument       | Description                            |
|:---------------|:---------------------------------------|
| `--bridges`    | List only bridges                      |
| `--containers` | List only local development containers | 

## `check`
Check local system dependencies, such as Docker and Kubernetes.

**Example:** `gefyra check`

**Arguments:**  
No arguments available.


## `version`
Display the current version and exit.

**Example:** `gefyra version`

**Arguments:**  
No arguments available.
