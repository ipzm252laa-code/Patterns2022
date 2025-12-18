class ServerPrototype {
    constructor(proto) {
        this.proto = proto;
    }

    clone() {
        // Deep copy of the configuration
        // Note: In a real app, we might need a more robust deep clone for complex objects
        // For this demo, JSON serialization is sufficient for data objects
        // However, we have class instances (Network, Storage, Server), so we need to be careful.
        // Let's manually reconstruct or use a method that preserves methods if needed.
        
        // Since our objects are mostly data holders + simple methods, 
        // we can create a new object and copy properties.
        
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this.proto)), this.proto);
        
        // Deep copy arrays
        clone.security = [...this.proto.security];
        
        // For nested objects like baseServer, network, storage, we might want to keep references 
        // (if they are shared resources) or clone them too. 
        // In this context, 'cloning a server config' usually implies a new instance 
        // with the SAME specs. So sharing the 'Network' definition object is fine, 
        // but the 'baseServer' might need to be a new instance if it represents a running process.
        
        // Let's assume we want a new Base Server instance with the same name (or modified name)
        // But for the Prototype pattern demo, we usually just return a copy.
        
        return clone;
    }
}

export default ServerPrototype;
