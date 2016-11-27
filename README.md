# OctoShark-Extension

Our extension is built using the Kango Cross-Browser Extension Platform that connects GitHub with the DigitalOcean Platform. 

It provides the user the ability to deploy projects having Dockerfile to a new Digital Ocean droplet in a single click and also 
see the status and manage the droplets using the extension.

This was built during **DigitalOcean Cloud Hack 2016 at 91springboard, Okhla New Delhi**

##Idea Description

These days, every cloud developer is using Docker. Docker has become the de-facto way for developers and system administrators to create lightweight images and deploy to cloud. A quick search on github returned more than 300,000 public projects with Dockerfiles. The idea behind OctoShark is to simplify the workflow of cloud projects. OctoShark aims to provide a one click solution to deploy any Docker, Vagrant or Laravel Project directly to a new DigitalOcean Droplet. The OctoShark button would be visible on such github projects and it would allow users to spin up a server for that project in a jiffy. No developer now needs to think twice to test a project! Since OctoShark is a chrome extension, it also provides real-time information about your existing droplets and enable you to perform actions on them. The most popular extension available online is deprecated because it was built to work with API V1 and not API V2. We believe with OctoShark, developers will be able to click and run the projects and not worry about anything else!

##Requirements
1. `python 2.7`
2. `http://kangoextensions.com/kango/kango-framework-latest.zip`

##Development
1. Extract the Kango Framework and enter the directory
2. `git clone` this repo inside the Kango Framework directory
3. `chmod +x` the build executable.
3. Edit the files in the commons folder and run `./build`

