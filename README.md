# SeeYou
This is a project from the faculty in the 2nd semester of the 2nd year at the course named ”Software development methods”.
It has 2 parts:
  1. Web video call application for registered users
  2. Global chat server, made in Java
  
Below you can find the demo for the video call website, the demo for the Java chat server and afterwards you can find out project requirements and details.

### Website and video call demo

[![Demo](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/webapp.png)](https://youtu.be/xUPy6Q7Zqeg)

### Global chat server demo

[![Demo](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/javachat.png)](https://www.youtube.com/watch?v=PyoA-qPEs8o&feature=youtu.be)

## Requirements

Software development process - grade between 1 and 10
It consists of the following parts:

1. user stories (minimum 10), backlog creation - 2 pts
2. design/architecture/UML - 2 pts
3. source control (branch creation, merge/rebase, minimum 10 commits) - 2 pts
4. automation testing (unit or integration) - minimum 5 - 3 pts
5. bug reporting - 1 pt
6. using a build tool - 1 pt
7. refactoring (minimum 1), code standards - 1 pt
8. design patterns - 1 pt

Note: It is not a mistake that the sum of the points is 13, not 10. In this way you can choose which sub-points you make to get a grade of 10.

## Project idea

1. For the web application: implement the feature of a video call in a website. Only allow this for registered users that will log in. Users can have and add friends. The landing page of the website must be a presentation of the entire product.
2. For the java application: implement the feature of global chatting between users that want to talk.

## Project team

For the web application:

1. Gabriel Arghire (me) - frontend and backend
2. Ștefan Chițu ([github profile](https://github.com/jaoc12)) - backend, SQL queries and database design
3. Daniel Simionov ([github profile](https://github.com/DanielM24)) - voice recognition with AI (implemented but not integrated)

For the Java global chat server:

1. Adrian Olaru ([github profile](https://github.com/adrianolaru99))
2. Florin Emanuel Laiu ([github profile](https://github.com/florinlaiu))

Each member contribution can be seen on his own branch, mentioning that at some point in the history of this repository commits I have made a bad push and some contributions of team members have been erased on the main branch.

1. [justicebringer](https://github.com/JusticeBringer/SeeYou/tree/justicebringer) -> Arghire Gabriel
2. [SQL](https://github.com/JusticeBringer/SeeYou/tree/SQL) -> Stefan Chitu
3. [daniel](https://github.com/JusticeBringer/SeeYou/tree/daniel) -> Simionov Daniel
4. [java](https://github.com/JusticeBringer/SeeYou/tree/java) -> Olaru Adrian and Laiu Florin

**Note:** The second part of the project (the java chat server) is implemented [in this repository](https://github.com/adrianolaru99/Proiect-MDS), but has also been committed here, so the entire project can be seen on this single repository.

### Solving the requirements

1. user stories (minimum 10 - we have 8), backlog creation
  - As a user, I want to be able to start a video with another user
  - As a user, I want to be able to chat with another user
  - As a user, I want to be able to see the screen during a video session
  - As a user, I want to be able to record a video session
  - As a user, I want to have a list of contacts and start a conversation
  - As a user, I want to see if I have an upcoming meeting
  - As a user, I want to video call another user using my mobile device
  - As a user, I want to chat with another user using my mobile device
  - Backlog creation in KanbanFlow:
  ![Backlog creation](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/kanbanflow.JPG)

2. design/architecture/UML - 2 pts
  - Architecture of the web application: ![Web arch](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/schemeweb.jpg)
  - Architecture of the java application: ![Java arch](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/schemejava.jpg)
  - UML of the web app: ![Web UML](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/umlweb.png)
  - UML of the java app: ![Java UML](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/JavaIUml.png)

3. source control (branch creation, merge/rebase, minimum 10 commits) - 2 pts
  - Each member has his own branch (as I said before, java part can also be seen [here](https://github.com/adrianolaru99/Proiect-MDS))
  - Multiple [pull requests](https://github.com/JusticeBringer/SeeYou/pulls?q=is%3Apr+is%3Aclosed) and [commits](https://github.com/JusticeBringer/SeeYou/commits/master) have been done

4. automation testing (unit or integration) - minimum 5 - 3 pts
  - Two javascript unit testing with [Jest](https://jestjs.io) were done [here](https://github.com/JusticeBringer/SeeYou/blob/master/server/javascript/account.test.js)
  - Only one test has been done [here](https://github.com/JusticeBringer/SeeYou/blob/java/MDS/lib/src/dto/MesajTest.java)

5. bug reporting - 1 pt
  - There were 3 bugs reported at [issues page](https://github.com/JusticeBringer/SeeYou/issues)

6. using a build tool - 1 pt
  - For the java global chat server has been used Maven build automation tool

7. refactoring (minimum 1), code standards - 1 pt
  - No refactoring
  - For the Web application we followed these code standards: ![Code standard for web](https://github.com/JusticeBringer/SeeYou/blob/master/zimages/codeweb.jpeg)

8. design patterns - 1 pt
  - The Java team have used [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) and [Model–view–controller](https://en.wikipedia.org/wiki/Model–view–controller) design patterns

Bonus: for task management we have used [KanbanFlow](https://kanbanflow.com) for the project management and a [WhatsApp](https://www.whatsapp.com) group for collaborating between messages.

### Technologies used

- For the web app: HTML, CSS, Javascript and the frameworks Vue.js, Node.js and [Jest](https://jestjs.io) for testing
- For the java app: Java and the Maven build automation tool and [JUnit](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjF4-G56qnqAhWSM-wKHUiDDasQFjACegQIBBAB&url=http%3A%2F%2Fjunit.sourceforge.net%2Fjavadoc%2Forg%2Fjunit%2FAssert.html&usg=AOvVaw3XSRh_oR6oZJyXAWh1LNem) for testing
