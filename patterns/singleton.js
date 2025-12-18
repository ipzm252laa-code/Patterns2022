class ConfigurationManager {
    constructor() {
        if (ConfigurationManager.instance) {
            return ConfigurationManager.instance;
        }
        this.config = {
            apiVersion: '1.0.0',
            adminEmail: 'admin@cybersec.com',
            logLevel: 'info',
            maxConnections: 1000
        };
        ConfigurationManager.instance = this;
    }

    getConfig(key) {
        return this.config[key];
    }

    setConfig(key, value) {
        this.config[key] = value;
    }

    getAllConfig() {
        return this.config;
    }
}

export default new ConfigurationManager();
