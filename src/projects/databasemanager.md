---
layout: project_layout.html
title: Database Manager
video: https://www.youtube.com/embed/JNUGj6M7fhg?si=BsYsJuoAcBYc6L-N
thumbnail: /images/databasemanager/thumbnail/databasemanager.png
techStack: C
tags: projects
caption: Database manager for employees of a temporary agency
---
The Database Manager program is designed to maintain a database of employees that a temp agency can use to hire temporary employees. The program is capable of reading multiple files containing employee information and when displayed the user is able to see the employee’s name, ID, skills, and availability. This program also allows the use of assigning available employees to a new company, unassigning employees from their company, and displaying employees based off of certain skills or companies. 

# Design

### Tech Stack
The codebase is in {{techStack}}.

### Commands:

**List:** This command will simply list out all the employees that have been imported to the program. To use this command, just type `list`

**Assign:** This command will let you assign an employee to a new company. To use this command, just type `assign <employee ID> <company name>`

**Unassign:** This command will let you unassign an employee that is assigned to a company. To use this command, type `unassign <employee ID>`

**Quit:** This command lets you exit the program. To use this command, just type `quit`

# Design

### Components

The project has three components total, along with their dependencies as displayed in the figure below. Information with regards to each component will be listed below the figure.

![image](https://user-images.githubusercontent.com/47933368/179660451-244e8ffe-7035-4642-b221-54b3765594ed.png)

* The ***input*** component is responsible for reading in the input from the user when selecting commands and is also used to help the database component read in employees from a file.
* The ***database*** component is responsible for creating and maintaining the database that contains all the employees and their information. When using the database manager, this component will read in all the input files and then create a database using the information from the files if formatted correctly and can then display this information to the user.
* The ***agency*** component is responsible for interacting with the user so they can use certain commands like assigning or unassigning employees. This component works with the input and database components to gather input from the user for the commands and allow for modifications to the database.

# Implementation

The implementation of this project utilized the following techniques and decisions:

* To facilitate the quick sort algorithm, the sorting algorithm needs a basis at which to sort the employees. Since the employees can be sorted by either assignment or skill, then the behavior for that sorting algorithm needs to be defined. As such, pointer functions are used to compare skills and assignments to determine how the list should be sorted. The pointer functions are favorable here as they will provide the sorting instructions to the quick sort algorithm based on whether the user chooses to filter by skills or assignment.
* To imitate a database full of employees and their information, memory allocation was used to create a mock database. In addition, memory allocation was also used to create the employees.
* Both the employees and the database properties are defined in structs to simulate object oriented programming.
The pointer to pointer technique is utilized to ensure that when the memory allocated needs to be freed, a pointer will be used to traverse through the list of employees in the database while the other pointer will point to an employee that will be freed. This is to ensure that no memory access is lost and no memory has been left allocated upon successful execution of the program.
* Memory allocated strings are favored as opposed to a character array. This is to ensure that non allocated memory does not get accessed by the program. In addition, this allows the user to input commands that would otherwise cause the program to crash due to possibly long stringed commands.