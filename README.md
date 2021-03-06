# RepoFinder
### [RepoFinder](https://github.com/scripka/repo-finder/pull/5)

---

<img width="860" alt="Screen Shot 2021-06-11 at 12 34 26 AM" src="https://user-images.githubusercontent.com/66269306/121641794-e0a27300-ca4c-11eb-8160-dbf867643147.png">

---

## Table of Contents

* [Project Overview](#project-overview)
* [Goals](#goals)
* [Technologies And Tools](#technologies-and-tools)
* [Setup](#setup)
* [Functionality](#functionality)
* [Roadmap](#roadmap)
* [Credits](#credits)

## Project Overview

Create a simple search tool that helps to find repositories using GitHub Search API. Users can search by keywords, filter by laguage, or sort by best match/stars

## Goals

My personal goal was to push my abilities to create something simple yet elegant and functional in a short time using website best practices.

## Technologies And Tools

* React
* Redux
* CSS
* Material UI
* Cypress

## Setup

Clone down this repo.

To install the library dependencies run:

```bash
npm install
```

In the project directory run:

```bash
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### Functionality

Upon landing on the website users can use a search bar to start looking for repositories. When the results are found, the website offers extra filters that can help to narrow down the list. The API offers a limited amount of results - 1000. The result of the search contains a list of repositories that contain general information. Each card can be clicked, this action would take users to a more detailed page where they can find a description of the project, link to a GitHub.

## Roadmap

* Improve search of languages. Right now it only displays languages based on a given array of 30 items.
* Add a dark theme
* Add more data to a single repo page

## Credits

**Olga Morgan**
[GitHub Profile](https://github.com/scripka)

<img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Olga Morgan"
 width="150" height="auto" />\
