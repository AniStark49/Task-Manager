
# Todo List App

This is a simple Todo List application built with React. It allows users to add, edit, delete, and mark tasks as completed.

## Project Structure

```plaintext
/src
|-- components
|   |-- TaskList.js
|   |-- AddTask.js
|   |-- EditTask.js
|-- context
|   |-- TaskContext.js
|-- tests
|   |-- TaskList.test.js
|   |-- AddTask.test.js
|   |-- EditTask.test.js
```

- **components:** Contains React components for the Todo List application.
- **context:** Holds the React context used for managing state across components.
- **tests:** Includes unit tests for critical components using Jest and React Testing Library.

## Design Choices

- **TaskList:** Displays a list of tasks with options to toggle, edit, and delete tasks.
- **AddTask:** Provides a form to add new tasks, including task name, description, and priority.
- **EditTask:** Modal for editing existing tasks with options to modify task name, description, and priority.

### Styling

The application uses CSS for styling. The design focuses on a clean and simple user interface.

### Priority Colors

- Low priority: Green
- Medium priority: Yellow
- High priority: Red

## Additional Features

- **Local Storage:** Tasks are saved to local storage, allowing persistence across page refreshes.

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Testing

Run `npm test` to execute unit tests.

## Future Enhancements

- [ ] Sorting tasks by priority or completion status.
- [ ] Due dates for tasks.
- [ ] User authentication for personalized task lists.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

Customize the content based on your actual project details, design choices, and features. If there are additional sections or information you'd like to include, feel free to modify the template accordingly.