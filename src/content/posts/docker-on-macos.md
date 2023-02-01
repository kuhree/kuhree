---
isDraft: false
isFeatured: true
author: Khari Johnson
publishedAt: 2023-01-27:12:30.000Z

banner: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
banner_alt: "Docker's Logo"
aliases:
  - Running Docker on MacOS
description:
  Running `docker` on MacOS is NOT the same as running it natively on linux.
  This is because MacOS requires a Linux VM (or some other virtualizaation solution)
  for the docker CLI to talk to.
tags:
  - docker
  - macos
---

## Table of contents

## The "Problem"

Running `docker` on MacOS is NOT the same as running it natively on linux.
This is because MacOS requires a Linux VM (or some other virtualizaation solution)
for the docker CLI to talk to.

This isn't my favorite thing, but as far as I can tell there's just no
way to get around that. The VM is required and causes some slowdown in
comparison with a "bare-metal" runtime on Linux.

I'm not the first and definitely not the last to come to this conclusion.

- https://dev.to/ericnograles/why-is-docker-on-macos-so-much-worse-than-linux-flh
- https://news.ycombinator.com/item?id=34098367
- https://www.reddit.com/r/docker/comments/vwq724/wtf_is_up_with_docker_desktop_on_macos/
- https://medium.com/homullus/beating-some-performance-into-docker-for-mac-f5d1e732032c

> **My Solution**
>
> - [Remote Docker Host](#remote-docker-host) on my local network
> - [colima](#colima) on my local machine

## Solutions

I've used all of the following in some capacity over the years and
here are my thoughts.

### [Docker Desktop](docker-desktop)

Docker Desktop is the standard way to install Docker on MacOS.
It's probably the most familiar and just works OOTB.
It also gives you access to docker extensions as well as a nice
GUI for reading and managing your containers.

#### Pros

- Access to [extensions](docker-extensions)
- First-class support

#### Cons

- Hate having to start a GUI to load the VM
- Licensing and subscriptions? HA!
- Hate the menubar icon

#### Setup

- Install docker - `brew install docker`
- Install docker-desktop - `brew install --cask docker`

### [Rancher Desktop](rancher-desktop)

Rancher desktop is a similar to Docker desktop in the way that they both
have a nice GUI for you to manage.

Rancher definitely doesn't have the same feature-set (lack of extensions)
but makes up for it in their K8s support.

#### Pros

- Simpler UI
- Can run K8s

#### Cons

- Still hate the menubar icon
- No `docker-compose` support OOTB
- No `docker-buildx` support OOTB

#### Setup

- Install Rancher - `brew install --cask rancher`

### [Colima](colima)

Colima is a CLI only docker runtime. It still has a VM but gives you
control over it's specs. You can make multiple VMs with different specs
and only run the ones you need when you need them.

Have a small web-server? Run it with 2 CPUs and 2gb of RAM and 10gb of storage.
Training a LLM? Run it with 8 CPUs, 8gb of RAM, and 100GB of storage.

Those scenarios are 100% made-up, but do you get the idea.

I can scale the docker runtime for the project I'm currently working on.

#### Pros

- No GUI or menubar icon
- Can run K8s

#### Cons

- Non-default `docker.sock` location meaning some apps
  ([lazydocker](lazydocker), [ctop](ctop)) may not be able to find the daemon

#### Setup

- Install Colima - `brew install colima`
- Start Colima - `colima start`

### [Remote Docker Host](remote-host)

Why run a Linux VM if you can run it on Linux natively?

A while back I converted my old Linux desktop
(year of the Linux desktop anyone?) to a "server"
(by unplugging peripherals and put it by the router) that runs a number
of docker services. A self-hosted "homelab" if you will.

#### Pros

- No docker image/container/networks/volumes etc on my local machine
- Can customize the runtime to your needs

#### Cons

- Manual setup required. 2 options.
  - Run `docker context use remote` or set `DOCKER_CONTEXT=remote` in your shell.
  - Set `DOCKER_HOST=ssh://username@remote-machine`
- Network connection could be a bottleneck
- Requires another machine and a VPN (or other remote access solution) when not on the same network

#### Setup

- Setup docker on another machine
- Install docker - `brew install docker`
- SSH into the machine to establish keys
- Create a context - `docker context create remote --description "Remote Machine" --docker "host=ssh://username@remote-machine"`
  - Choose one of the following depending on you situation
    - Set `DOCKER_HOST=ssh://username@remote-machine`
    - Set `DOCKER_CONTEXT=remote`
    - Run `docker context use remote`

I use the following zsh snippet to toggle between remote and local setups.

> Warning! It's definitely still a WIP and only works for the current shell session.

```bash
dockerRemoteConnect () {
  desired_context=${1:-remote}

  # Use these when lazydocker isn't working
  export DOCKER_HOST=ssh://username@remote-machine

  # Use one of the following when you've created a "remote" context and you aren't worried about lazydocker
  # export DOCKER_CONTEXT=$desired_context
  # docker context use $desired_context

  echo "Success!
  Now using docker context ($DOCKER_CONTEXT) on remote host ($DOCKER_HOST).
  Try 'docker ps' to see all running containers"
}

dockerRemoteDisconnect () {
  unset DOCKER_HOST
  unset DOCKER_CONTEXT

  desired_context=${1:-colima}
  docker context use $desired_context

  echo "Success!
  Now using docker context ($desired_context) on local host.
  Try 'docker ps' to see all running containers"
}
```

### Other

I have not tried the solutions below, maybe one day.

- [podman] seems promising but I see lots of reports of docker-compose not working
- [minikube] primarily for k8s, but comes with a docker runtime as well

## Conclusion

I'm sure there are a number of other alternatives and different way I
could've used the other solutions to solve my needs, but I like that...

- [remote-host] option doesn't require me to have docker running things on my local machine
- [colima] let's me easily start/stop/edit docker runtimes for my current needs

Sure, I could disable menubars icons, determine runtime specs in Docker Desktop,
and go from there, but I really enjoy the terminal only workflow.

[rancher-desktop]: https://rancherdesktop.io/
[docker-desktop]: https://www.docker.com/products/docker-desktop/
[docker-extensions]: https://docs.docker.com/desktop/extensions/
[podman]: https://podman.io/
[colima]: https://github.com/abiosoft/colima
[remote-host]: https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/
[minikube]: https://minikube.sigs.k8s.io/docs/
[lazydocker]: https://github.com/jesseduffield/lazydocker
[ctop]: https://ctop.sh/
