---
title: Connecting to Gefyra
sidebar_position: 3
---

# Connecting to Gefyra

:::note **TLDR;**
If you have a Gefyra *client file* and want to connect to a shared Kubernetes cluster,   
just run `gefyra connections connect -f <file>`.
::: 

Connecting to a Gefyra-enabled Kubernetes cluster is the process of any Gefyra client to establish a networking connection based on [Wireguard VPN](https://www.wireguard.com/) to a cluster. It is a multistep process that involves the dynamic creation of connection credentials and IP-range negotiation
between cluster and client. The network connection is persistent for the session, rock-solid and blazingly fast.

:::note Prerequisites
1. Gefyra is [available](https://gefyra.dev/installation) (at least in version 2.0.0)
2. A running Docker host on the machine that connects  
3. A Gefyra [*client file*](/docs/shared-environments/clients#a-default-client-file)
:::

## Managing Connections
Client connections to a Gefyra cluster are managed with the `gefyra connections` command group.  
The connection itself consists of a file, that is located in a local user directory, and *usually* a 
Docker container that acts as a VPN endpoint on a local machine.

### Connect
:::important Gefyra client file required
You can only connect to a Gefyra cluster with a [*client file*](/docs/shared-environments/clients#distributing-the-client-file). 
If you don't have such a client file, either [set up Gefyra in a Kubernetes cluster](/docs/shared-environments/installation) and create yourself
[a Gefyra *client*](/docs/shared-environments/clients#creating-a-gefyra-client), or find the responsible person and ask for access.
:::

Establishing a connection (**for the first time**) to Gefyra works like this:
```
> gefyra connections connect -f myfancyclient.json

Creating the cluster connection 'default' |   ▶▶▶▶▶▶▶          | / 0 in 28s

Connection established with connection name 'default'. Run 'gefyra connections list' to see all connections.
```
This example assumes, there is a client that provides the client file *myfancyclient.json*. A couple of things happened during this process:

1. Gefyra fetched the ad-hoc VPN credentials for this connection
2. A container for the Gefyra connection with name *default* has been started
3. A dedicated Docker network has been created
3. The connection was successfully checked

If you check your Docker host, you will find a container named `gefyra-cargo-default` running. That's the gateway into the cluster.

:::note Default connection
Since we didn't specify a *connection name* and there was no *default* connection available before, creating it was successful. However, there
is only one *default* connection on a client machine. Additional connections must [be assigned a name](#connection-names).
:::

Once you have a stopped connection, you don't need the client file anymore to connect. Just run the following with the *default* connection:
```
> gefyra connections connect
```
The Gefyra connection will be back up in no time. Of course, if you do have multiple connections, you have to specify the connection name with the
`--connection-name` option.

:::note Client file superseded
After you successfully connected a machine with a Gefyra cluster, the *client file* is typically superseded at that point. Gefyra stores the 
credentials from the file elsewhere, so a user doesn't have to handle the file. However, if you remove your connection and want to reconnect 
to the cluster (assuming the Gefyra client is still the same) you may connect to the cluster with that file again. Yet, you can also request a 
new one, which is safer than having a *client file* dangling.
:::

### Listing Connections
To see all Gefyra connections on a local machine, please run the following:
```
> gefyra connections list
NAME     VERSION    CREATED                         STATUS
default  2.0.0      2023-10-10T18:36:15.519969679Z  running
```

You will find the status of all of your connections here. It can be `running`, `stopped` or `error`.

### Disconnect
To actively disconnect from the cluster, you run this command:
```
gefyra connections stop
```
This assumes you have a *default* connection currently running. If not, you have to provide a valid connection name with the `[connection-name]` argument.

You will find this connection to be stopped from the client's side. However, if you want to reconnect to the cluster, you can now run `gefyra connections connect` again. The connection process will be superfast this time.

:::important Deleting a connection
If you want to delete a connection, and thus release the Gefyra client in the cluster, you can run `gefyra connections remove`. If you want to reconnect 
later, you will need a *client file* again.
:::

### Connection Names
You can assign (and have to) names to your connections if you have more than one. Almost all commands of the Gefyra CLI support
the `--connection-name` option to specify the connection a certain command is targeting. Most importantly, for
`gefyra run --connection-name` you specify to which cluster a local container is connected.

To create a new connection with a name (in this example `my-conn1`), please run the following to set up a connection with a given name:
```
gefyra connections connect --connection-name my-conn1 ... 
```

The connection will show up in the connection list:
```
> gefyra connections list
NAME     VERSION    CREATED                         STATUS
default  2.0.0      2023-10-10T18:36:15.519969679Z  running
my-conn1 2.0.1      2023-10-12T12:14:11.48715/726Z  running
```

You can manage connections based on the local names, i.e. halt the connection, reconnect, remove it, and run containers with it.


## Simultaneous Connections
As you can see above, it is possible to create a list of connections simultaneously. They can be individually managed, like started and stopped, even at the same time.  
It is possible to have multiple connections to one cluster, too.
