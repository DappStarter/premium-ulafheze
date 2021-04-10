require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note stick method grid drip future sleep'; 
let testAccounts = [
"0x02e005500c3643f36519f3ed71dd57538009b17155585db35d15ad691afab14b",
"0x05b2375aa4a8f7e977557482c33e7b031ad50af58d680c085ee44fe5c4101551",
"0x42ca387642eb1da74a37bb34349ca25c33eef16a5c81ea3968a586f6ed5009ca",
"0x41e743d89596663d23069d896e7278e2b5daecd6285b5e7e023acb8f05664b5d",
"0x5f78cccbbe1d1c93067f726c581a287b0373bfa1be3b9284fdb2df4c0f5a4385",
"0xfd8326f0ac2714a580d23913b9beaff995de992e4adee84061e2d8a2243a5a9f",
"0x48ae6aafaa0a8fb656b691c9b6d66735483da71bc2a7a7238d80a13206fa2dd7",
"0x33352f74d104591a4ab82ec317e7bb4d4a4e2ab4621a41f37794c0d88ac47f79",
"0x753352e1fc583330d82cf194458819aa0b1d04b86b7b44063d6019d3bf6c15b0",
"0x9288c86e1b1898617a44b8f89c605b34421eb1f0b7835591871bd99ff098c7a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
