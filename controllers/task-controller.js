const db = require('../config/database');

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)',
            [title, description, false]
        );
        res.status(201).json({ id: result.insertId, title, description, completed: false });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const [tasks] = await db.execute('SELECT * FROM tasks');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const [tasks] = await db.execute('SELECT * FROM tasks WHERE id = ?', [id]);
        if (tasks.length > 0) res.json(tasks[0]);
        else res.status(404).json({ message: "Task not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        await db.execute(
            'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?',
            [title, description, completed, id]
        );
        res.json({ message: "Task updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
