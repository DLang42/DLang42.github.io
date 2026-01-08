---
layout: project_layout.html
title: Wordle
video: https://www.youtube.com/embed/wQKLmQ_c_5Q?si=NbTjucp8uQ2UZ1Rw
learnMore: https://www.wikihow.com/Play-Wordle
techStack: C
tags: projects
caption: Recreation of the popular word guessing game via command line
---
Wordle is a word game where each day, a five letter word is randomly chosen from a word bank and the player must guess the word within six guesses. [Learn more about how the game works]({{ learnMore }}). My project is a rendition of the popular word game with a slight variation to the functionality. {.center-text}

# Design

### Tech stack
The codebase is in {{techStack}}

### Components

The project guidelines require four components total, along with their dependencies as displayed in the figure below. Information with regards to each component will be listed below the figure, along with an indication of code provided.

![image](https://user-images.githubusercontent.com/47933368/179664327-98298f87-ae6d-45aa-82d4-0e50be1164c8.png) 

* The ***lexicon*** component is responsible for integrating the dictionary of valid words the player can guess and it chooses the word the player will have to guess. This component also checks to see if the provided dictionary has no duplicates, no uppercase words, and only words consisting of only 5 letters.
* The ***io*** component is responsible for handling the input and output for the game. This component will read in a player’s input and help output the letters in the correct color.
* The ***history*** component is responsible for reporting the score after a game is successfully played. This component will create the scores.txt file containing the scores of each game played and will update it each time another game is successfully completed.
* The ***wordle*** component is responsible for starting the game and interacting with the player. This component works with lexicon, io, and history to fully recreate the wordle experience.

### Additional Information
The project does not use memory allocation nor strings.

# Implementation
The implementation of this project utilized the following techniques and decisions:

* Due to the need to store a large number of words in the word list while also not using memory allocation, a large array is favored here, as the word lists can only have a maximum capacity of 100,000 words.
* The time library is used as a seed if no seed value is given to randomize the word that must be guessed each time the user plays the game.
* In order to determine the coloring of the letters, a color algorithm is designed with the idea of using a color array to determine the actual character color in addition to a yellow character array that stores all of the yellow characters determined from a word. The color algorithm fills the character color array by first searching for matching characters at matching indices to determine if any should be colored green. Then, the algorithm will compare the guess with the actual word letters to determine if any of the characters should be colored yellow. Finally, the rest of the letters are colored black.
* Hex codes are used to give the guess word appropriate colors akin to Wordle.
* As an addition to the game, there is a history tracker that keeps track of the number of guesses it took for the player to guess the word correctly. Instead of limiting the number of guesses to six, the user is allowed an unlimited number of guesses.

# Result
While there may not be a GUI to resemble the actual game, it is a faithful recreation of the actual game in command line. Moreover, the game can be played as many times as the user wishes without needing to wait for the next day to guess a new word. 

Overall, I've learned how to read and write files in C and how to work with individual characters instead of strings in C. I've found this to be fun to implement as a homemade version of Wordle.