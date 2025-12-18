import configManager from './patterns/singleton.js';
import serverFactory from './patterns/factory.js';
import { AWSFactory, AzureFactory } from './patterns/abstractFactory.js';
import ServerBuilder from './patterns/builder.js';
import ServerPrototype from './patterns/prototype.js';

function runSimulation() {
    log('--- Starting Server Configuration System Simulation ---\n');

    // 1. Singleton: Load Global Configuration
    log('1. [Singleton] Loading Global Configuration...');
    const globalConfig = configManager.getAllConfig();
    log(`   Loaded Config: API Version ${globalConfig.apiVersion}, Admin: ${globalConfig.adminEmail}\n`);

    // 2. Abstract Factory: Choose Infrastructure Provider
    log('2. [Abstract Factory] Selecting Cloud Provider...');
    // Let's simulate choosing AWS
    const awsFactory = new AWSFactory();
    const network = awsFactory.createNetwork();
    const storage = awsFactory.createStorage();
    log(`   Created Infrastructure: ${network.info()}, ${storage.info()}\n`);

    // 3. Factory Method: Create a Base Server
    log('3. [Factory Method] Creating Base Server Instance...');
    const baseWebServer = serverFactory.createServer('web', 'MainWebServer');
    baseWebServer.start();
    log(`   Created: ${baseWebServer.type} named "${baseWebServer.name}"\n`);

    // 4. Builder: Construct Complex Server Configuration
    log('4. [Builder] Building Full Server Configuration...');
    const builder = new ServerBuilder();
    const serverConfig = builder
        .setBaseServer(baseWebServer)
        .setOS('Ubuntu 22.04 LTS')
        .setNetwork(network)
        .setStorage(storage)
        .addSecurityRule('Allow SSH (22)')
        .addSecurityRule('Allow HTTP (80)')
        .enableMonitoring()
        .build();
    
    log(serverConfig.describe());

    // 5. Prototype: Clone the Configuration for Scaling
    log('5. [Prototype] Cloning Server for Scaling...');
    const prototype = new ServerPrototype(serverConfig);
    
    const clone1 = prototype.clone();
    if (clone1.baseServer) {
        log('   Clone 1 created successfully.');
    }

    const clone2 = prototype.clone();
    log('   Clone 2 created successfully.');

    log('\n--- Simulation Complete ---');
    log(`Total Servers Configured: 3 (Original + 2 Clones)`);
}

// Helper to log to both console and HTML if available
function log(message) {
    console.log(message);
    if (typeof document !== 'undefined') {
        const output = document.getElementById('output');
        if (output) {
            output.innerHTML += message.replace(/\n/g, '<br>') + '<br>';
        }
    }
}

// Run
runSimulation();

export default runSimulation;
