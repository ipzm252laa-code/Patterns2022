class ServerConfiguration {
    constructor() {
        this.baseServer = null;
        this.os = null;
        this.network = null;
        this.storage = null;
        this.security = [];
        this.monitoring = false;
    }

    describe() {
        const serverInfo = this.baseServer ? `${this.baseServer.type} (${this.baseServer.name})` : 'Unknown Server';
        const netInfo = this.network ? this.network.info() : 'No Network';
        const storageInfo = this.storage ? this.storage.info() : 'No Storage';
        return `
Configuration Details:
- Server: ${serverInfo}
- OS: ${this.os}
- Infrastructure: ${netInfo}, ${storageInfo}
- Security: ${this.security.join(', ') || 'None'}
- Monitoring: ${this.monitoring ? 'Enabled' : 'Disabled'}
        `;
    }
}

class ServerBuilder {
    constructor() {
        this.config = new ServerConfiguration();
    }

    setBaseServer(server) {
        this.config.baseServer = server;
        return this;
    }

    setOS(os) {
        this.config.os = os;
        return this;
    }

    setNetwork(network) {
        this.config.network = network;
        return this;
    }

    setStorage(storage) {
        this.config.storage = storage;
        return this;
    }

    addSecurityRule(rule) {
        this.config.security.push(rule);
        return this;
    }

    enableMonitoring() {
        this.config.monitoring = true;
        return this;
    }

    build() {
        const result = this.config;
        this.config = new ServerConfiguration(); // Reset for next build
        return result;
    }
}

export default ServerBuilder;
