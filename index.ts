import * as crypto from 'crypto';

class Transaction {
    constructor(
        public amount: number,
        public payer: number, // public key
        public payee: string // public key
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}
