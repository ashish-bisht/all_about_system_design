# 🆕 Project Template

Use this template when starting a new system design project.

## Structure
```
projects/XX-difficulty-name/
├── app/
│   ├── main.py          # FastAPI entry point
│   ├── models/          # Pydantic schemas, DB models
│   ├── routes/          # API route handlers
│   ├── services/        # Business logic
│   └── utils/           # Config, helpers
├── tests/
│   └── test_main.py
├── docs/                # Design docs, diagrams
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
├── .env.example
└── README.md
```

## Checklist
- [ ] Define requirements (functional + non-functional)
- [ ] Capacity estimation
- [ ] API design
- [ ] Data model
- [ ] High-level architecture
- [ ] Implementation
- [ ] Tests
- [ ] Documentation
- [ ] Key learnings writeup
