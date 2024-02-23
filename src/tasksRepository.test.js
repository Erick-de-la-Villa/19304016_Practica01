const taskRepository = require('./taskRepository');


describe("pruebas", () => {
    test("Get all tasks", () => {
    // Arrange
    let tasks = [];

    // Act
    tasks = taskRepository.getAll();

    // Assert
    expect(tasks.length).toBe(2);
    expect(tasks.length == 2).toBe(true);
    expect(typeof tasks == 'array');
    
    });

    test("Get task by id", () => {
        // Arrange
        let task = {};

        // Act
        task = taskRepository.getById(1);

        // Assert
        expect(task.id).toBe(1);
        expect(task.title).toBe('Task 1');
        expect(task.description).toBe('Do something');
    });

    test("Create task", () => {
        // Arrange
        let newTask = { title: 'Task 3', description: 'Do something else' };

        // Act
        taskRepository.createTask(newTask);

        // Assert
        expect(taskRepository.getAll().length).toBe(3);
    });

    test("Update task", () => {
        // Arrange
        let updatedTask = { title: 'Task 1 Updated', description: 'Do something Updated' };

        // Act
        let task = taskRepository.updateTask(1, updatedTask);

        // Assert
        expect(task.title).toBe('Task 1 Updated');
        expect(task.description).toBe('Do something Updated');
    });

    test("Delete task", () => {
        // Arrange
        let taskId = 1;

        // Act
        taskRepository.deleteTask(taskId);

        // Assert
        expect(taskRepository.getAll().length).toBe(2);
    });
});