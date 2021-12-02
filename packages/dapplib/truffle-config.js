require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purse install person brisk turtle'; 
let testAccounts = [
"0x282b563c6c3b648e994743f16af6c8d7ddef0c143eb38a57d509321539097d2f",
"0xb65a890e1cce121596d777ae12a3052b7c8bc35457dd8c733f6ab7356dc21b54",
"0x286d173dda1a86bdadf28e262aa69d55d3a867db00b8240f84b40bacc59a48a2",
"0xaa3dfabc27bd442473ddf039111136b168ea6d8d71495b144c00d8f426e8fc2f",
"0x687fb8708b6ce1e1785ca3618e801fe9a081ca7bacef7c69fd7df9ee9b70e1dc",
"0x5d18c45342fe5124c1d8ae8e4df522c66616dc82ee3bc0783152ab59e029371e",
"0x8fbdfc67905078aec27f0ecd762d2b9280677a4d5e86fad601586ba2689824b5",
"0xc1c720ffa81ec6d690573fc4b86762153c58d9a9a651c1aeda34e3449cd6a54e",
"0xce71c61596cf7ace44bedbbd46d8d8a4512af04d8f1bd34a33b9063dce363a0e",
"0x7b3d13a98b2938679ee30cbc4d590830f37e59130edf79918d3a0823f6895a06"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

