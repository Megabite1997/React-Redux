# React-Redux [![My Skills](https://skillicons.dev/icons?i=redux)](https://skillicons.dev)

A dummy website using React and React-Redux libraries.

### Core Redux Concepts

<img width="1872" alt="Core Redux Concepts" src="https://user-images.githubusercontent.com/51529613/235337635-445d03ee-9411-43f9-9dab-6bed30309055.png">

### <ins>There is a slightly easier way of using 'Redux' as well.<ins>

A couple problems we could be facing here, if our application would continue to grow.

1. First potential issue can be our "action types"
   you have typos on "action types", it won't be handled by the reducer, or won't be handled correctly.

2. Second potential issue is "the amount of data"
   The more different pieces of state we have, the bigger our state objects get.
   That means we need to copy a lot of state.
   when we update the counter we still need to copy and keep all the other state properties,
   and it also means that this reducer function gets longer and longer and all of a sudden
   we might have an unmaintainable big Redux file.

3. Third potential issue is "state immutability"

### <ins>Solution</ins>

Use "Redux Toolkit" library, which makes working with Redux more convenient and easier. Uninstall "Redux" because that is already included in "Redux toolkit"
