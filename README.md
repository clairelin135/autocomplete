# Autocomplete

Autocomplete is a small React application that performs autocomplete searching based on user input. Users enter a phrase and prefix-matched results from `cities.js` are displayed.

## React
This application is currently running
- React 16.2.0

This application also requires the latest versions of:
- Node
- `npm` (or `yarn`)

## Getting started
### Running your application
```
git clone git@github.com:clairelin135/autocomplete.git
cd autocomplete
npm install
```
Then, run via `npm start`.

## Challenge Reflection

To complete this challenge, I used prefix matching to yield search results directly from `cities.js`. This approach required iterating through the entire `cities` array, leading to a runtime of O(n). Because the array was very small, I kept the cities saved in this format. However, given a larger array with thousands of results, I would have accessed results through a clustering approach or via the back-end. Another feature to be improved is the searching algorithm; a better searching algorithm would include fuzzy search that accounted for user typos and errors.

In terms of styling, I styled search results inside a scrollable window with a maximum height in a tabular format. If the responses were more extensive, I would have modified the styling of the page to leave more room for search results or have expanded the search window.

Finally, in terms of displaying search results, I stored the search results in the state and then rendered the search results. This approach was possible due to the small size of the `cities` array. Given a larger search window, lazy searching would have served as a better option, perhaps with results ordered based on popularity. This approach would greatly reduce the loading time.
