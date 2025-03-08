# Virtual Pet Simulator

A web-based application that allows users to select, care for, and interact with virtual pets of various types.

## Overview

The Virtual Pet Simulator is an interactive web application where users can select up to three different pets from various animal types and care for them by feeding them, playing with them, and managing their sleep cycles. Each pet has attributes such as hunger, happiness, and energy that change over time and in response to user actions.

## Features

- **User Authentication**: Simple login system that stores the current user in local storage
- **Pet Selection**: Choose up to 3 pets from 8 different animal types
- **Pet Management**:
  - Feed pets to reduce hunger and slightly increase happiness and energy
  - Play with pets to increase happiness but consume energy and increase hunger
  - Toggle sleep mode to restore energy
- **Pet Attributes**:
  - Hunger: Increases over time, decreased by feeding
  - Happiness: Decreases over time, increased by playing
  - Energy: Decreases over time when awake, increased while sleeping
- **Mass Actions**: Ability to feed, play with, or toggle sleep for all pets simultaneously
- **Visual Feedback**: Pets display different states (happy, sad, sleeping) based on their attributes

## Pet Types

The simulator includes the following pet types:
- DOG
- CAT
- HORSE
- GOAT
- COW
- PARROT
- SPARROW
- RABBIT

## How It Works

1. **Login**: Users must be logged in to access the simulator
2. **Pet Selection**: Users select 1-3 pets from the available options
3. **Simulation**: After selection, the simulation begins where users can interact with their pets
4. **Life Cycle**: Pets' attributes change automatically every 5 seconds
5. **Interaction**: Users can interact with individual pets or perform mass actions for all pets

## Technical Implementation

- **VirtualPet Class**: Handles pet creation, attribute management, and lifecycle
- **DOM Manipulation**: Dynamically creates pet elements and updates the UI
- **Event Handling**: Manages user interactions with pets
- **Interval Timers**: Controls the automatic lifecycle changes of pets

## Getting Started

1. Open `index.html` in your browser to begin
2. Log in with your username
3. Select up to 3 pets
4. Start the simulation and interact with your pets
5. Monitor your pets' hunger, happiness, and energy levels

## Future Enhancements

Potential improvements for the Virtual Pet Simulator:
- Custom pet images instead of placeholders
- Saving pet states between sessions
- More interaction options based on pet types
- Achievements and rewards system
- Customizable pet names and appearances

## Dependencies

This application uses:
- HTML5
- CSS3
- JavaScript (ES6+)
- Local storage for basic user authentication

No external libraries or frameworks are required.
