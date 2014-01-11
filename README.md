![Screenshot](http://i.imgur.com/gu7Zwcp.png "Screenshot")

# VINE-TIME  

This is a app that pulls posts from The Best of Vine and displays all the videos.

## Getting Started  

1. `config/application.yml` needs to be configured, see the example file included

### REQUIREMENTS
1. [Install Virtualbox](https://www.virtualbox.org/)
2. [Install Vagrant](http://www.vagrantup.com/)
3. [Install vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest)

---

#### INSTALL GUIDE
1. Start Vagrant

    `vagrant up`

2. Log into Vagrant

    `vagrant ssh`

3. Set up Rails & Nodejs
     `sh /vagrant/vagrant_data/scripts/setup.sh`
---

#### RAILS
##### INSTALLATION STEPS
1. `cd ~/vine-time`
2. `bundle install`
3. `rake db:create`

##### USAGE
1. Start the server

   `rails s`

2. Stop the server

    `control + c`

---

#### MISC
1. Shut down vagrant

    `vagrant halt`

2. Suspend vagrant (resume later)

    `vagrant suspend`

---

#### NOTES
The following ports are used:

- Rails server: `localhost:31337` --> `vagrant:3000`
- Misc server: `localhost:31338` --> `vagrant:8000`
- Misc server: `localhost:8080` --> `vagrant:80`

---

#### GIT WORKFLOW
##### Cloning the project

    `git clone https://github.com/mikechau/vine-time.git`
    `cd vine-time`
    `git checkout develop`

##### Workflow
1. When implementing a new feature, branch off from develop

   `git checkout -b feature/new-feature`

2. Pull any updates and rebase them into your branch

   `git pull --rebase origin develop`

3. Add your changes

    `git add .` - adds everything in the directory, does not include deleted files

    `git add -A` - adds everything, including deleted files

    `git add [filename]` - add a specific file

    `git rm [filename]` - remove a specific file

4. Push your branch

   `git push origin -u feature/new-feature` - you only need to do this once, afterwards you can just do `git push`

5. Request to merge your `feature` branch into `develop`.

6. Once approved, go back and rebase your branch.

   `git rebase -i HEAD~#`, where # is the number of commits you are ahead of the develop branch

   The first commit should always be `pick`, and then edit the commits following to `squash`. Save and then you will be
   asked to edit the commit messages. At the top, add a comment that summarizes everything you did. Comment out any
   old comments or remove them if it makes sense to do so.

7. After the rebase, you can replace your entire pull request with the following:

   `git push -f`

   Now we have one nice commit we can merge into the `develop` branch.
