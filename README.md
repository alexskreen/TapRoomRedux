# Alex's Tap House

#### React fundamentals, April 24, 2020

#### _**Alex Skreen**_

## Description

This application is a static taphouse website built using React with Redux

_Component structure:_

![component structure](/taphouse_diagram.png)

_User Stories:_
* A user can see a tap list of all available kegs. For each beer they can see the brewery, name of beer, type of beer, and the ABV
* A user can add a new keg to the taplist
* A user can click on a keg to see it's details
* A user can see how many pints are left in a keg
* A user can buy a pint of beer and the pints left in that keg will decrease. This cannot go below 1.

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

#### Install this application

_Clone this repository via Terminal using the following commands:_
* _$ cd desktop_
* _$ git clone https://github.com/alexskreen/TapRoomWeek2_
* _$ cd Tap-Room_
_Then, confirm that you have navigated to the tap-house project directory by entering "pwd" in Terminal._

_Next, install npm at the project's root directory via the following commands:_
* _$ npm install_
* _$npm install fsevents@1.2.11_
* _npm install redux@4.0.5 react-redux@7.1.3_
* _$ npm start_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

* Git
* JavaScript
* npm
* Webpack
* React

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Alex Skreen_**