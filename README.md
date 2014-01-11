![Screenshot](http://i.imgur.com/gu7Zwcp.png "Screenshot")

# VINE-TIME  

This is a app that pulls posts from The Best of Vine and displays all the videos.

## Getting Started  

1. `config/application.yml` needs to be configured, see the example file included

### REQUIREMENTS
1. [Install Virtualbox](https://www.virtualbox.org/)
2. [Install Vagrant](http://www.vagrantup.com/)
3. [Install vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest)

#### INSTALL GUIDE
1. Set up RVM
    `rvm gemset create vine-time`

2. Start Vagrant
    `vagrant up`

3. Log into Vagrant
    `vagrant ssh`

4. Set up Rails & Nodejs

#### MISC

1. Shut down vagrant
    `vagrant halt`

2. Suspend vagrant (resume later)
    `vagrant suspend`
