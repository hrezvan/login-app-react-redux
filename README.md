## Login App using Redux

This project is developed using React and Redux.

## Components

In this app we have two components:

1. LoginForm: this component is including a heading title and a form for logging in. we have three states for name, email and password; when the user fills the form, states will change to the user's value. for handling the states, we used redux.
---
![14](https://user-images.githubusercontent.com/60284829/120526103-1496ec00-c3ee-11eb-873f-84ccf7f18eed.JPG)

---
2. Logout: in this component, we have two elements: first is the header text which is welcoming the user. the name is dynamically set based on name input of login form. the second element is the button for logging out. when we logout, all the states will set to null(userSlice.js).

---
![15](https://user-images.githubusercontent.com/60284829/120526184-2d070680-c3ee-11eb-80cc-e75cba0a79b7.JPG)

---
