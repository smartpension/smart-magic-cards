# Smart Magic Cards
Join Smart by performing a simple magic trick.

### Requirements
- Make sure all 4 suits of cards are rendered. There are 13 cards in each suit (♥,   ♣, ♦, ♠).
- Make sure the value for each card is visible on the initial render, basically move each card a bit so the card is readable.
- Add 3 buttons to the flow that will do 3 actions:
  - **Shuffle:** Randomly shuffles all cards.
  - **Show/Hide:** Hide all the cards by adding a class (CSS is already included).
  - **Magic:** Order the cards again by suit.
- When performing the trick, use the existing cards rather then create new ones.

#### Bonus points
  - Find a way to remove duplications in the `cards.scss` file and generate all the classes automatically for the cards: `.hearts-1`, `.hearts-2`, ... , `.spades-13`.
  - Add animation.
  - Do not use images for the cards, style them with CSS/SCSS only.
  - Uncomment the tests in the `cypress/integration/magic-trick.js` file and **make sure the tests pass**.
  - Add additional tests (we like test coverage).
  - Add some extra functionality, this is your chance to be creative. 😉

#### Example
<img src="assets/working-example.gif" alt="working-example">

## Getting Started
Follow these steps to get the project setup on your machine.

### Clone the repository
```
git clone git@github.com:smartpension/smart-magic-cards.git
```
_Note:_ You won't have access to commit to this repository. We suggest you download it or fork it.

<img src="assets/fork-example.png" alt="working-example" width="800">

### Install
```
yarn install
```

### Develop
In order to use the SASS compiler, run the following command.
```
yarn develop
```

### Test
In order to run the tests, run the folowing command.
```
yarn test
```
_Note:_ [Cypress.io](https://www.cypress.io/) is included in the project and all tests will run on Travis CI.
