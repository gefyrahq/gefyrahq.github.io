---
layout: page
title: Installation
permalink: /installation/
nav_order: 2
---
<img src="/assets/images/minfootprint.png" alt="minimal footprint" width="150" style="float:right"/>
# Installation
Gefyra is tested under Windows, MacOS and Linux. The command line tool can be 
installed with a binary executable.
Please find your preferred operating system below.  
{: .fs-6 .fw-300 }

{:toc}

## Prerequisites
To use Gefyra you need:

 - Docker client API compatible container runtime (Docker/Docker Desktop/Colima/Rancher Desktop with moby engine)
   - Overlay networking support (not available on rootless Docker)
 - Kubernetes cluster with a reachable node port **31820/UDP**

## Install Gefyra on MacOS
### Darwin AMD64 / ARM64 (universal build)
#### Homebrew
```zsh
brew tap gefyrahq/gefyra
brew install gefyra
````

#### Manual Installation
```zsh
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

## Install Gefyra on Linux
```bash
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

## Install Gefyra on Windows
You can download the latest release from 
[https://github.com/gefyrahq/gefyra/releases/](https://github.com/gefyrahq/gefyra/releases/){:target="_blank"} and extract the binary
on your local machine.  

Chocolatey will be available soon. If you can support this project with packaging and distributing for Windows
please get in touch!

Todo
{: .label .label-yellow }

## Docker Desktop Extension

The Gefyra Docker Desktop Extension is available on the Docker Desktop extension [marketplace](https://hub.docker.com/extensions/gefyra/docker-desktop-extension){:target="_blank"}. 
However, you can also install it by running the following command:

```shell
docker extension install gefyra/docker-desktop-extension:latest
```

For more details see [Docker Desktop Extension](/docker-desktop-extension/).


# Using Python Package Index
You can install Gefyra with `pip`:  
```bash
pip install gefyra --upgrade
```  

[https://pypi.org/project/gefyra/](https://pypi.org/project/gefyra/){:target="_blank"}
