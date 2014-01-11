#!/bin/bash
# Initial setup from: http://ryanbigg.com/2010/12/ubuntu-ruby-rvm-rails-and-you/

echo '================================================'
echo 'updating... and upgrading...'
echo '================================================'
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install python-software-properties -y


# INSTALL RVM / RUBY / RAILS
echo '================================================'
echo 'install rvm...'
echo '================================================'
sudo apt-get install curl
curl -L get.rvm.io | bash -s stable --auto
. ~/.bash_profile
rvm requirements
rvm install 2.1.0
rvm --default use 2.1.0
rvm gemset create Rails3.2
rvm use 2.1.0@Rails3.2 --default

# ADDITIONAL PACKAGES
echo '================================================'
echo 'adding additional packages'
echo '================================================'
sudo apt-get install build-essential openssl libreadline6 libreadline6-dev \
curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 \
libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison \
subversion pkg-config -y

# INSTALL DB DRIVERS
echo '================================================'
echo 'adding db drivers'
echo '================================================'
sudo apt-get install libmysqlclient-dev -y
sudo apt-get install libpq-dev -y

echo '================================================'
echo 'add nodejs'
echo '================================================'
# INSTALL NODEJS
sudo add-apt-repository ppa:chris-lea/node.js -y
sudo apt-get update -y
sudo apt-get install nodejs -y
sudo npm install grunt-cli -g

echo '================================================'
echo 'install rails'
echo '================================================'
# INSTALL RAILS
gem install rails -v 3.2.16 --no-ri --no-rdoc

echo '================================================'
echo 'symlinking application directory...'
ln -s /vagrant ~/vine-time

echo '================================================'
echo 'Install complete. Remember to set up git!'
