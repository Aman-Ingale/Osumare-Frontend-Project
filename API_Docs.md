# Task Management API

A simple RESTful API built with Express.js to perform CRUD operations on tasks stored in a JSON file.


## Base URL `https://localhost:8000`

## Endpoints

### GET `/tasks`
- **Description:** Get all tasks.

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "task_name": "Buy groceries",
    "due_date": "2025-06-10",
    "priority": "High",
    "completed": false
  },
  {
    "id": 2,
    "task_name": "Finish project report",
    "due_date": "2025-06-12",
    "priority": "Medium",
    "completed": false
  },
  {
    "id": 3,
    "task_name": "Book doctor appointment",
    "due_date": "2025-06-08",
    "priority": "Low",
    "completed": true
  }
]

```
### POST `/tasks`
- **Description:** Create new task.

**Request:**
```json
  {
    "task_name": "Book doctor appointment",
    "due_date": "2025-06-08",
    "priority": "Low",
    "completed": true
  }
```
**Response:** `200 OK`
```json
{
    "message": "Task Created",
    {
        "id": 3,
        "task_name": "Book doctor appointment",
        "due_date": "2025-06-08",
        "priority": "Low",
        "completed": true
    }
}

```

### GET `/tasks/:id`
- **Description:** Get a task by ID.

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "task_name": "Buy groceries",
    "due_date": "2025-06-10",
    "priority": "High",
    "completed": false
  }
]
```
### PUT `/tasks/:id`
- **Description:** Updates a task by ID.

**Request:**
```json
{
    "completed" : true
}
```
**Response:** `200 OK`
```json
[
  {
    "task_name": "Buy groceries",
    "due_date": "2025-06-10",
    "priority": "High",
    "completed": true
  }
]
```

### DELETE `/tasks/:id`
- **Description:** Deletes a task by ID.

**Response:** `200 OK`
```json
{
    "message": "Task Deleted",
    "data": {
        "id": 3,
        "task_name": "Book doctor appointment",
        "due_date": "2025-06-08",
        "priority": "Low",
        "completed": true
    }
}
```


