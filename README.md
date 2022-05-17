# Juno Journey's Engineering Coding Task
## Instructions
This coding task is used to evaluate new hires for Juno Journey's Engineering Team.
The whole task should take around 1.5 hours.

You should [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this repository to your personal [Github](www.github.com) account.
Please invite [markjuno](https://github.com/markjuno) and [Noapel](https://github.com/Noapel) to your fork.
All the code you write should work, should be clean, and use best practices you are familiar with.
<b>Testing is mandatory.</b>

Use ``` npm install ``` in the project root to set up.

## Structure
Your code should go under src/task1 & src/task2.
The api folder provides basic infrastructure to both tasks, and <b>should be kept untouched.</b>

## First Task:
Create an image carousel that looks similar to this (and not necessarily exact):
<img src="https://firebasestorage.googleapis.com/v0/b/juno-multi-test.appspot.com/o/public%2Fimage.png?alt=media&token=50efb126-617f-4abc-962d-e4770c2f9b8c"><br>

Use ``` npm run start ``` in the project root to run the carousel app.

### Requirements
* The carousel is circular - clicking "next" on the last image will show the first image, and clicking "previous" on the first image will show the last image.
* Implement a loading state. Carousel image should show loading state until fully fetched (partial images should not be shown). You can use both fetchImage(index) & fetchImages().
* Implement an empty state
* Basic tests for your components.
* <b>Bonus:</b> using material-UI components.
* <b>Bonus:</b> prefetch images (about to be shown) to lower loading state times.

Please implement the carousel yourself, using third party libraries for this purpose is not allowed.

## Second Task:
Implement the TODOs in /task2/ecommerce.js.

Consider an e-commerce website (Amazon for example) with DB which stores users' orders.
You should write in total four JavaScript functions, it is recommended to do it in appearing order.
The instructions are specified in TODO comments.
<b> Do not forget to provide sufficient (automatic) tests for your code! </b>

Use you preferred way (node , ecommerce.test.js) to run and debug the methods.
