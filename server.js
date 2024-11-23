// Получение списка пользователей 
app.get("/admin/users", (req, res) => {
    const query = "SELECT id, username, balance FROM users";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Ошибка при получении пользователей:", err.message);
            res.status(500).send("Ошибка сервера.");
            return;
        }
        res.send(results);
    });
});

// Удаление пользователя 
app.delete("/admin/users/:id", (req, res) => {
    const userId = req.params.id;

    const query = "DELETE FROM users WHERE id = ?";
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error("Ошибка при удалении пользователя:", err.message);
            res.status(500).send("Ошибка сервера.");
            return;
        }
        res.send("Пользователь удалён.");
    });
});

// Изменение баланса пользователя
app.post("/admin/users/:id/balance", (req, res) => {
    const userId = req.params.id;
    const { balance } = req.body;

    const query = "UPDATE users SET balance = ? WHERE id = ?";
    db.query(query, [balance, userId], (err, result) => {
        if (err) {
            console.error("Ошибка при обновлении баланса:", err.message);
            res.status(500).send("Ошибка сервера.");
            return;
        }
        res.send("Баланс обновлён.");
    });
});

// Получение логов конкретного пользователя
app.get("/admin/logs/:userId", (req, res) => {
    const userId = req.params.userId;

    const query = "SELECT * FROM logs WHERE user_id = ?";
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error("Ошибка при получении логов пользователя:", err.message);
            res.status(500).send("Ошибка сервера.");
            return;
        }
        res.send(results);
    });
});