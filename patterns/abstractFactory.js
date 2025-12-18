// Abstract Products
class Network {
    constructor(type) {
        this.type = type;
    }
    info() {
        return `Network: ${this.type}`;
    }
}

class Storage {
    constructor(type) {
        this.type = type;
    }
    info() {
        return `Storage: ${this.type}`;
    }
}

// Concrete Products for AWS
class AWSNetwork extends Network {
    constructor() {
        super('AWS VPC');
    }
}

class AWSStorage extends Storage {
    constructor() {
        super('AWS S3 Bucket');
    }
}

// Concrete Products for Azure
class AzureNetwork extends Network {
    constructor() {
        super('Azure VNet');
    }
}

class AzureStorage extends Storage {
    constructor() {
        super('Azure Blob Storage');
    }
}

// Abstract Factory
class CloudInfrastructureFactory {
    createNetwork() {
        throw new Error('Method createNetwork() must be implemented');
    }
    createStorage() {
        throw new Error('Method createStorage() must be implemented');
    }
}

// Concrete Factories
class AWSFactory extends CloudInfrastructureFactory {
    createNetwork() {
        return new AWSNetwork();
    }
    createStorage() {
        return new AWSStorage();
    }
}

class AzureFactory extends CloudInfrastructureFactory {
    createNetwork() {
        return new AzureNetwork();
    }
    createStorage() {
        return new AzureStorage();
    }
}

export { AWSFactory, AzureFactory };
