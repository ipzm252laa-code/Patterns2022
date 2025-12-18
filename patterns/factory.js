class Server {
    constructor(name, type, port) {
        this.name = name;
        this.type = type;
        this.port = port;
        this.status = 'stopped';
    }

    start() {
        this.status = 'running';
        console.log(`[${this.type}] ${this.name} started on port ${this.port}`);
    }

    stop() {
        this.status = 'stopped';
        console.log(`[${this.type}] ${this.name} stopped`);
    }
}

class WebServer extends Server {
    constructor(name) {
        super(name, 'WebServer', 80);
    }
}

class DatabaseServer extends Server {
    constructor(name) {
        super(name, 'DatabaseServer', 5432);
    }
}

class ProxyServer extends Server {
    constructor(name) {
        super(name, 'ProxyServer', 8080);
    }
}

class ServerFactory {
    createServer(type, name) {
        switch (type.toLowerCase()) {
            case 'web':
                return new WebServer(name);
            case 'db':
            case 'database':
                return new DatabaseServer(name);
            case 'proxy':
                return new ProxyServer(name);
            default:
                throw new Error('Unknown server type');
        }
    }
}

export default new ServerFactory();
