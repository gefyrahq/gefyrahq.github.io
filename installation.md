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

## Prerequisites
To use Gefyra you need:

 - Docker client API compatible container runtime (Docker/Docker Desktop/Colima)
 - Kubernetes cluster with a reachable port 31820 UDP

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
[https://github.com/gefyrahq/gefyra/releases/](https://github.com/gefyrahq/gefyra/releases/) and extract the binary
on your local machine.  

Chocolatey will be available soon. If you can support this project with packaging and distributing for Windows
please get in touch!

Todo
{: .label .label-yellow }

## Docker Desktop Extension

Currently the Gefyra Docker Desktop Extension is not available on the marketplace. 
However, you can install it by running the following command:
```shell
docker extension install gefyra/docker-desktop-extension:1.0.0
```

For more details see [Docker Desktop Extension](/docker-desktop-extension/).


# Using Python Package Index
You can install Gefyra with `pip`:  
```bash
pip install gefyra --upgrade
```  

[https://pypi.org/project/gefyra/](https://pypi.org/project/gefyra/)
