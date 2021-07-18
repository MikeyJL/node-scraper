[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

A simple node.js backend to scrape the internet. It's still a work in progress...

## Roadmap

Here I will outline a few key features I am planning to add.

- A front-end on another repo
- Specify which elements to grab based on classes, ids, attributes, etc.
- Grabbed html preview.
- More ...

## Installation

### Docker

Get the image here: https://hub.docker.com/repository/docker/mikeylau/node-scraper-backend

### Local

```
node .
```

or

```
docker-compose up
```

## Usage

**GET** ```/v1/scrape```

| Body parameters | Description |
| --- | --- |
| url **(required)** | The URL of the website that you wish to scrape. |
| target **(required)** | The HTML element where you want to start scraping from. |
| returnType **(required)** | Either ```html```, ```text```, ```list-html```, or ```list-text```. |
| select **(required list-html and list-text)** | The element tag to select for the list. |

## Author

Mikey Lau

[Portfolio](https://mikeylau.uk)
