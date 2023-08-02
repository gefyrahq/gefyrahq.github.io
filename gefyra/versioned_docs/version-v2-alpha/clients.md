# Gefyra Clients

:::tip

Gefyra Clients provide a way to grant limited access to a Kubernetes cluster to use Gefyra's capabilities.

::: 

Gefyra v2 introduced the concept of **Gefyra Clients**. These are to better manage access to the cluster.
Creating a new client via `gefyra client create` generates a dedicated Service Account for the client. The corresponding
client file, which contains the connection parameters for the Service Account can retrieved through `gefyra client config`.
This file can be then distributed to anyone which needs to `run` or `bridge` workloads in the given cluster.
Permissions of the service account are limited, so that not everyone needs admin access to the cluster.

## Workflow for teams

```mermaid
flowchart TD;
    install["DevOps installs Gefyra (<a href='/docs/cli#install'>gefyra install</a>)"]
    generate["DevOps generates Gefyra client (<a href='/docs/cli#clients'>gefyra clients create</a>)"]
    distribute["DevOps distributes client file"]
    connect["Developer connects via client file (<a href='/docs/cli#connections'>gefyra connections</a>)"]
    run["Developer runs workload (<a href='/docs/cli#run'>gefyra run</a>)"]
    install-->generate
    generate-->distribute
    distribute-->connect
    connect-->run
```


## Workflow for single users
