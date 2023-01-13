---
layout: page
title: Command line interface (CLI)
permalink: /reference/cli/
nav_order: 1
parent: Reference
---
# Command line tool (CLI)
1. TOC
{:toc}

**This reference is for version 1.0.x**

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
**Import** In some scenarios firewalls may be blocking port `31280`. Make sure it is reachable from your machine.

**Example:** `gefyra up`

**Arguments:**  

| Argument           | Description                                                                                                                                                                |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-H`, `--host` | Host address for Gefyra to connect to<br/>**Important:** Be sure to allow your firewall for this IP and port to let traffic pass through |
| `-P`, `--port` | Port on the for Gefyra to connect to<br/>**Important:** Default is 31280. |
| `-M`, `--minikube` | Let Gefyra automatically find out the connection parameters for a local Minikube cluster<br/>**Important:** This cannot be used together with the `--host` option      |
| `-o`, `--operator` | The full image path (including tag) for the Operator image (e.g. _quay.io/gefyra/operator:latest_)                                                                         |
| `-s`, `--stowaway` | The full image path (including tag) for the Stowaway image (e.g. _quay.io/gefyra/stowaway:latest_)                                                                         |
| `-c`, `--carrier`  | The full image path (including tag) for the Carrier image (e.g. _quay.io/gefyra/carrier:latest_)                                                                           |
| `-a`, `--cargo`    | The full image path (including tag) for the Cargo image (e.g. _quay.io/gefyra/cargo:latest_)                                                                               |
| `-r`, `--registry` | The base url for registry to pull images from (e.g. _quay.io/gefyra/_), the full image paths will be constructed using the name and the tag of the release                 |                                                                                                      |
| `--kubeconfig`     | The path to kubeconfig file to the Kubernetes cluster (default is global `kubeconfig`)                                                                                     |                                                                                                      |
| `--context`        | The context name from kubeconfig (default is active global context)                                                                                                        |                                                                                                      |
| `--wireguard-mtu`  | The MTU value for the local Wireguard endpoint (default: 1340)                                                                                                             |                                                                                                      |
                        

## `run`
Run a new app container image in Gefyra's development infrastructure. Any Docker image is supported. It is required to
assign a name to the container instance for further reference.

**Example:** `gefyra run -i pyserver -N mypyserver -n default`

**Arguments:**  

| Argument            | Description                                                                                                                                                                                                                                           |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-i`, `--image`     | The Docker image to run in Gefyra (required)                                                                                                                                                                                                          |
| `-N`, `--name`      | The name of the container running in Gefyra |
| `-n`, `--namespace` | The Kubernetes namespace for this container to run in (default: _default_)                                                                                                                                                                            |
| `-c`, `--command`   | The command for this container to run in Gefyra                                                                                                                                                                                                       |
| `--expose`    | Add port mapping in form of `<ip>:<host_port>:<container_port>` <br/>**Important:** This works just as `docker run --expose` (see: [Docker reference](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose))  |
| `--rm`              | Automatically remove the container when it exits or when it is killed                                                                                                                                                                                 |
| `--env`             | Set or override environment variables in the form _ENV=value_, allowed multiple times                                                                                                                                                                 |
| `--env-from`        | Copy the environment from the container in the notation `<workload_type>/<workload_name>/<container>`. `container` is optional. <br/> Example: `deploy/some-deployment` or `pod/pod-name-1dd1/my-container`. |
| `-v`, `--volume`    | Bind mount a volume into the container in notation _src:dest_, allowed multiple times                                                                                                                                                                 |



## `bridge`
Intercept the traffic to a container that's running in the Kubernetes cluster and send it to the development container.
You can watch active bridges with `kubectl -n gefyra get ireq` (_InterceptRequests_). The container is the cluster will
be replaced by Gefyra's proxy component _Carrier_. Carrier redirects all requests from the intercepted container (running
in a Pod) to the local development container. During the bridge operation Carrier can fake-serve `httpGet` probes. There 
is one bridge for each Pod/container combination if a Deployment or Statefulset is selected with more than one Pod.

**Example:** `gefyra bridge -N mypyserver --target deploy/hello-nginxdemo/hello-nginx --port 80:8000 -n default`

**Arguments:**  

| Argument                    | Description                                                                                           |
|:----------------------------|:------------------------------------------------------------------------------------------------------|
| `-N`, `--name`              | The name of the container running in Gefyra (started with `run`) receiving the traffic (required)     |
| `-p`, `--port`              | The port mapping from source to target in the form `<source>:<target>`, allowed multiple times (required) |
| `-n`, `--namespace`         | The Kubernetes namespace for this container to run in (default: _default_)                            |
| `-P`, `--no-probe-handling` | Make _Carrier_ to not handle probes during the bridge operation                                       |                   
| `--target`                  | Target to bridge in the notation of `<type>/<workload_name>/<container>` <br/>**Important:** `<type>`  can be one of {pod, po, pods, deploy, deployment, deployments, statefulset, sts, statefulsets}, `<workload_name>` is the name of the resource to bridge and `<container>` is the name of the container within the resource. |


## `unbridge`
Remove active traffic intercepts and reset the cluster to its original state.

**Example:** `gefyra unbridge -N mypybridge`

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
List running containers and active bridges. You can select either `--bridges` or `--containers` to display.

**Example:** `gefyra list --bridges`

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

## `status`
Display the status of Gefyra on the local machine and the cluster.

**Example:** `gefyra status`

**Arguments:**  
No arguments available.

## `telemetry`
Gefyra anonymously tracks its usage by collecting telemetry data. Telemetry is enabled by default.

**Example:** `gefyra telemetry --on`

**Arguments:**  

| Argument      | Description        |
|:--------------|:-------------------|
| `--off`       | Turn off telemetry |
| `--on` | Turn on telemetry  |
