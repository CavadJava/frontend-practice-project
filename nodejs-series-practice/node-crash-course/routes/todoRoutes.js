const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get a list of all tasks
 *     description: Returns a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 */
router.get('/api/tasks');

/**
 * @swagger
 * /api/tasks/{taskId}:
 *   get:
 *     summary: Get a task by ID
 *     description: Returns a task by its ID.
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the task to retrieve.
 *     responses:
 *       200:
 *         description: The requested task.
 *       404:
 *         description: Task not found.
 */
router.get('/api/tasks/:taskId');

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The text of the task.
 *             required:
 *               - text
 *     responses:
 *       201:
 *         description: The created task.
 */
router.post('/api/tasks', (req, res) => {
  // Logic to create a new task using the data in req.body
  const { text } = req.body;
  const newTask = { id: 3, text }; // Assuming an ID of 3 for the new task
  res.status(201).json(newTask);
});

/**
 * @swagger
 * /api/tasks/{taskId}:
 *   put:
 *     summary: Update a task by ID
 *     description: Updates an existing task by its ID.
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the task to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The updated text of the task.
 *             required:
 *               - text
 *     responses:
 *       200:
 *         description: The updated task.
 *       404:
 *         description: Task not found.
 */
router.put('/api/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  // Logic to update a task by taskId using the data in req.body
  const updatedTask = { id: taskId, text: req.body.text }; // Assuming only text can be updated
  // Check if the task was found and updated successfully
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

/**
 * @swagger
 * /api/tasks/{taskId}:
 *   delete:
 *     summary: Delete a task by ID
 *     description: Deletes a task by its ID.
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the task to delete.
 *     responses:
 *       204:
 *         description: Task successfully deleted.
 *       404:
 *         description: Task not found.
 */
router.delete('/api/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  // Logic to delete a task by taskId
  // Check if the task was found and deleted successfully
  if (/* Task deletion successful */) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

module.exports = router;