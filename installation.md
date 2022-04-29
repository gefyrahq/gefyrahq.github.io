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

## Install Gefyra on MacOS
### Darwin AMD64
#### Homebrew
```zsh
brew tap gefyrahq/gefyra
brew install gefyra
````

#### Manual Installation
```zsh
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```


### Darwin ARM64
Gefyra is currently not tested on ARM64 and does potentially not work at the moment.

Todo
{: .label .label-yellow }

## Install Gefyra on Linux
```bash
curl -sSL https://raw.githubusercontent.com/gefyrahq/gefyra/main/install.sh | sh -
```

## Install Gefyra on Windows
There is currently no binary file for Windows available. Please use the Python package index below.  

Todo
{: .label .label-yellow }


# Using Python Package Index
You can install Gefyra with `pip`:  
```bash
pip install gefyra --upgrade
```  

[https://pypi.org/project/gefyra/](https://pypi.org/project/gefyra/)
