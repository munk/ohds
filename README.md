[![Build Status](https://travis-ci.org/munk/ohds.svg?branch=master)](https://travis-ci.org/munk/ohds)

## Open Health and Demographics System

The Open Health and Demographic System (OpenHDS) is a census system designed to track demographic events for a population in a fixed geographic area. Data entry can be performed either from a central location or on a mobile device in the field.

A demo version of this application is available [here](http://munk.space), using a [Heroku hosted backend](https://arcane-lake-8447.herokuapp.com/).

## Installing

This installation guide assumes you have Java 8, a working installation of the [OpenHDS REST server](https://github.com/benjamin-heasly/openhds-rest), and have a user account already in the database for the frontend to use.

Create a file names application.edn in the directory you wish to run the application from.

The contents are as follows:
```
{:apihost "http://localhost:8080"
 :apiuser "user"
 :apipass "password"}
```

`apihost` is the hostname and port for your OpenHDS REST instance.
`apiuser` is the username for this service to use.
`apipass` is the password for this service to use.

From the same directory, run `curl -L https://git.io/vzlHg | sh`. The application will be visible at <http://localhost:8081>.

## Quick Start Guide

## Detailed Usage

## Developers

## License
Copyright © 2016 John Downs

Distributed under the Eclipse Public License either version 1.0 or
(at your option) any later version.
