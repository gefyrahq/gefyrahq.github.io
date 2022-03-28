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

## Install Gefyra on MacOS
### Darwin AMD64
#### Homebrew
```zsh
brew tap gefyrahq/gefyra
brew install gefyra
````

#### Manual Installation
1. Download and extract the binary executable
```zsh
GEFYRA=$(curl -L -s https://api.github.com/repos/gefyrahq/gefyra/releases/latest | grep '"browser_download_url": ".*darwin-amd64.*"' | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*") && curl -LO $GEFYRA && unzip -o $(echo $GEFYRA | grep -oE '[^/]+$') gefyra
```
2. Make the Gefyra binary executable
```zsh
chmod +x ./gefyra
```
3. Move the Gefyra binary to a location on your system `PATH`
```zsh
sudo mv ./gefyra /usr/local/bin/gefyra
sudo chown root: /usr/local/bin/gefyra
```


### Darwin ARM64
Gefyra is currently not tested on ARM64 and does potentially not work at the moment.

Todo
{: .label .label-yellow }

## Install Gefyra on Linux
```bash
GEFYRA=$(curl -L -s https://api.github.com/repos/gefyrahq/gefyra/releases/latest | grep '"browser_download_url": ".*linux.*"' | grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*") && curl -LO $GEFYRA && unzip -o $(echo $GEFYRA | grep -oE '[^/]+$') gefyra && sudo install -o root -g root -m 0755 gefyra /usr/local/bin/gefyra
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
