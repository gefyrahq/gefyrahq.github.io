---
title: Troubleshooting
sidebar_position: 11
---
# Troubleshooting

## DNS Issues
Sometimes you might have the following situation:
1. An arbitrary cluster with gefyra installed
2. Some application (for example a database) running in a namespace
3. Another application (running in a different namespace) consuming the first application via e.g. an API

You then most likely use a cluster service url for communication.  
Something like `my-application-service.my-namespace.svc.cluster.local`.

Now, sometimes when you execute `gefyra run` for your second application resolving the DNS entry for the first application fails.
Most of the time this is due to the service being headless. 

We recommend checking your services and cluster communication again.