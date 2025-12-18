# Лабораторна робота №4: Патерни проектування

Проект на тему **"Система конфігурації серверів"**. Тут реалізовано 5 патернів GoF, які працюють разом в одній системі.

## Мета
Створити єдиний проект, де взаємодіють Singleton, Factory Method, Abstract Factory, Builder та Prototype.

## Які патерни використано

### 1. Singleton (`patterns/singleton.js`)
**Клас:** `ConfigurationManager`
- Відповідає за глобальні налаштування.
- Гарантує, що конфіг існує в одному екземплярі.

### 2. Abstract Factory (`patterns/abstractFactory.js`)
**Клас:** `CloudInfrastructureFactory`
- Створює комплекти інфраструктури (Мережа + Сховище).
- Є реалізації для AWS та Azure.

### 3. Factory Method (`patterns/factory.js`)
**Клас:** `ServerFactory`
- Створює базові сервери (Web Server, Database Server).
- Приховує логіку створення конкретних класів.

### 4. Builder (`patterns/builder.js`)
**Клас:** `ServerBuilder`
- Покроково збирає складну конфігурацію сервера.
- Додає ОС, мережу, сторедж та правила безпеки.

### 5. Prototype (`patterns/prototype.js`)
**Клас:** `ServerPrototype`
- Клонує вже готовий налаштований сервер.
- Дозволяє швидко масштабувати систему (робити копії).

## Як запустити

### Через термінал (Node.js)
1. Відкрити папку в терміналі.
2. Запустити команду:
   ```bash
   node index.js
   ```
   або
   ```bash
   npm start
   ```

### Через браузер
1. Відкрити `index.html`.


## Структура проекту
```
Patterns2022/
├── index.html           # Для візуалізації в браузері
├── index.js             # Головний файл (запуск симуляції)
├── package.json         # Налаштування npm
├── README.md            # Опис
└── patterns/            # Папка з патернами
    ├── singleton.js
    ├── factory.js
    ├── abstractFactory.js
    ├── builder.js
    └── prototype.js
```

##  Як працює симуляція
1. **Singleton** завантажує конфіг.
2. **Abstract Factory** створює ресурси для AWS.
3. **Factory Method** створює пустий веб-сервер.
4. **Builder** налаштовує цей сервер (додає мережу, захист).
5. **Prototype** робить дві копії цього сервера.
