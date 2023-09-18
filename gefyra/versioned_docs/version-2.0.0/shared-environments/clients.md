---
title: Gefyra Clients
sidebar_position: 1
---

# Gefyra Clients

:::note **TLDR;**

Gefyra Clients provide a way to grant multiple clients limited access to a Kubernetes cluster in order to use Gefyra's capabilities.

::: 

Gefyra introduced the concept of **Gefyra Clients**. These are to better manage access to the cluster.
Creating a new client via `gefyra client create` generates a dedicated Service Account for the client. The corresponding
client file, which contains the connection parameters for the Service Account can retrieved through `gefyra client config`.
This file can be then distributed to anyone which needs to `connections connect`, `run` or `bridge` workloads in the given cluster.
Permissions of the service account are limited, so that not everyone gets admin-access to the cluster.

## Workflow for teams

```mermaid
flowchart TD;
    install["DevOps installs Gefyra (<a href='/docs/cli#install'>gefyra install</a>)"]
    generate["DevOps generates Gefyra client (<a href='/docs/cli#clients'>gefyra clients create</a>)"]
    save["DevOps saves Gefyra connection files (<a href='/docs/cli#clients-config'>gefyra clients config</a>)"]
    distribute["DevOps distributes client file"]
    connect["Developer connects via client file (<a href='/docs/cli#connections'>gefyra connections</a>)"]
    run["Developer runs workload (<a href='/docs/cli#run'>gefyra run</a>)"]
    install-->generate
    generate-->save
    save-->distribute
    distribute-->connect
    connect-->run
```