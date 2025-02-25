# Overview

This app is a demo app rapidly put together for an interview to demonstrate three key capabilities of mine:

1. I understand and can work with React (not my primary forté as I've been focused primarily on backend development for
   the last year).
2. I have an expert level understanding of application design: understanding how to separate system concerns in a
   scalable and maintainable way that lends itself to a monolithic application being capable of being cut into multiple
   interacting applications... and...
3. I have an advanced to expert degree of understanding of Domain Modelling coupled with a demonstrable acuity for
   large, enterprise-scale Domain Driven Design.

Within this app, I've saved a Lucid App export of the Domain Driven Design model that I put together to act as the
inspiration for this application. The DDD model illustrates a fictional world where Queen Bees use an ERP of sorts to
monitor and facilitate the oversight of their Queendoms.

<img src="./ddd/ddd-board.svg" width="256px" />

The Domain Model provides insight into the types of concerns that a Queen Bee may have. For example, they need to keep
track of the number of Workers alive in the hive and, in the course of a day, if some Workers don't return home, they
need (unfortunately) to be logged as MIA and, the Queen needs to give birth to a replacement worker. The following are a
few more of the concerns:

* Defense: Controlling the number of Workers present in the hive for protection.
* Bounty (aka Food) Location: Keep track of Routes that lead to food sources, dispatching Scouts to locate food caches
  and Harvesters to go and collect food.
* Warehousing: Keep track of the available storage of food and ensure more food isn't brought in than the hive has
  capacity to store... We're not a wasteful Queendom after all!
* Population to Sustenance Ratio: Make sure that there's enough food for all workers to thrive.
* This can go on for quite a while so... let the above suffice for now!

# Dev

* Run `yarn` to install dependencies.
* Run `yarn dev` to start the server; as this is a Vite bundled project, the app will be available on
  `http://localhost:5173/`

# Deploy

This is not currently a deployable app.