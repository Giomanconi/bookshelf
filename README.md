# UI Technical Interview

The goal of this challenge is to check test automation skills in UI testing. The idea is that the candidate can create automated tests for Bookshelf app using any test automation framework (Robot Framework, SpecFlow, Cucumber, Cypress). 


## Table of Contents

- [Project](#project)
- [Getting Started](#installation)
  * [Prerequisites](#prerequisites)
  * [Project Setup](#install-project)
  * [Start Bookshelf App](#run-server)
- [UI Exercises](#ui-exercises)
  * User Story Information
  * Exercises


## <a name="project">Project</a>

Bookshelf app allows to handle book information in memory using the local server. It has some books by default and you can also add, delete, update and list new books
using the app. All changes are persisted in memory until the server is restarted.


## <a name="installation">Getting Started</a>
### <a name="prerequisites">Prerequisites</a>

Required

* NodeJS 12 or higher
* Yarn

### <a name="install-project">Project Setup</a>
Use the package manager [yarn](https://phttps://yarnpkg.com/) to install the app.

```bash
yarn install
```

### <a name="#run-server">Start Bookshelf App</a>

```bash
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## <a name="ui-exercises">UI Exercises</a>

### User Stories

```
Story 1: Adding new book
As an user, I want to add a new book to my online bookshelf. It should have the following fields title, author, format,
language, publication year, description and a personal rating.
It should have some validations to avoid introducing incorrect information. Title and Author fields should be required.
It should not allow to insert more than 100 characters in Title and Author boxes and Publication Year box should not allow
to insert more than 4 characters. It should notify that the book was successfully added.

Story 2: Updating a book
As an user, I want to be able to update the information of a book. It should allow to update all fields of the book.
It should have the same validation mentionated in Story 1. 
It should notify that the book was successfully updated. 

Story 3: Deleting a book
As an user, I want to delete a book from the bookshelf. It should ask a confirmation before executing the action.
It should have some validation to avoid deleting a book that was deleted.
It should notify that the book was successfully deleted. 

Story 4: Searching books
Source text
As an user, I want to search books by Title or Author. Result should be displayed in a grid with the following values
of Title, Author, Format, Language, Publication Year and Rating.
It should open a panel with book information after clicking in a row of the grid.

```

#### Exercises
You can choose one or more user story to do the exercises.

1) Create a new text file and list all test cases that you would execute to test the story. 
2) Prioritize (High/Medium/Low) and choose some candidates to be automated.
Below is an example of how you could list yours test cases.

| Story  | Test Name    | Description           | Priority |
| ------ | ------------ | --------------------- | -------- |
| Story  | Test Name    | Description of story. | Priority |

3) Create automated test selected in previous step. You should automate at least the high priority test cases.
4) Create a PR with your changes.

**Remember that you can choose any tool to automate your test cases but don't forget to add all information needed to execute them.**

Tips
* Follow best practices recommended for choosen tool.
* Consider your code as production code. 
* Be sure that all automated tests are executed without errors.
* Don't forget that all changes are kept in memory until the server is restarted. Server will load a set of books by default in each restart. 
