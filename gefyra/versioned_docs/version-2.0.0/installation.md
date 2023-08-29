---
title: Installation
sidebar_position: 2
---
<img src="/img/minfootprint.png" alt="minimal footprint" width="150" style={{ float: 'right' }}/>

# Installation
Gefyra is tested under Windows, MacOS and Linux. The command line tool can be 
installed with a binary executable.
Please find your preferred operating system below.  



## Prerequisites
To use Gefyra you need:

 - Docker client API compatible container runtime (Docker/Docker Desktop/Colima/Rancher Desktop with moby engine)
   - Overlay networking support (not available on rootless Docker)
 - Kubernetes cluster with a reachable node port **31820/UDP**

## Install Gefyra on MacOS
### Homebrew
```zsh
brew tap gefyrahq/gefyra
brew install gefyra
````

### Manual Installation

```zsh
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

## Install Gefyra on Linux
```bash
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

## Install Gefyra on Windows
You can download the latest release from 
[https://github.com/gefyrahq/gefyra/releases/](https://github.com/gefyrahq/gefyra/releases/)
on your local machine.  

Chocolatey will be available soon. If you can support this project with packaging and distributing for Windows
please get in touch!

Todo


## Docker Desktop Extension

The Gefyra Docker Desktop Extension is available on the Docker Desktop extension [marketplace](https://hub.docker.com/extensions/gefyra/docker-desktop-extension)
However, you can also install it by running the following command:

```shell
docker extension install gefyra/docker-desktop-extension:latest
```

For more details see [Docker Desktop Extension](/docs/docker-extension/).


# Using Python Package Index
You can install Gefyra with `pip`:  
```bash
pip install gefyra --upgrade
```  

[https://pypi.org/project/gefyra/](https://pypi.org/project/gefyra/)
