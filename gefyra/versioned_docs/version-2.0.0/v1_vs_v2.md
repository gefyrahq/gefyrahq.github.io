---
title: What Changed in Gefyra 2?
sidebar_position: 9
---

# What changed between Gefyra v1 and Gefyra v2?

**Operator** - Gefyra's operator was completely refactored. It now acts as a state machine and shows much more stable and consistent 
behaviour. It manages 2 custom resources - `GefyraClients` and `GefyraBridges`.

**Access Management** - While Gefyra `v1` just installed its operator into the cluster via the `up` command, Gefyra 2 allows for a more
fine grained control. `gefyra up` was split into `gefyra install`, `gefyra client` and the `gefyra connection` commands. Every connection to the 
cluster is now controlled by a `GefyraClient` object which represents an indiviual client connection to the cluster.
For every `GefyraClient` a separate service account is created.

**Load Balancer Presets** - Not every cluster is just reachable through a public IP. To expose it for Gefyra's connection purposes we allow you to use
*Load Balancer Presets* which expose the necessary parts of Gefyra to make things work.

**CLI** - Gefyra's command line interface has been refactored - it's now written in [Click](https://click.palletsprojects.com/).
The TUI is much more readable, it includes some progress bars - generally a much nicer experience.

**API** - Gefyra's core functionality is now moved into a separate Python package. It provides an API to control Gefyra's processes -
like `install`, `run`, `bridge`.
