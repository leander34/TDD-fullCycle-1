"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(email, amount, paymentMethod) {
        this.email = email;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
        this.status = "open";
    }
    getStatus() {
        return this.status;
    }
}
exports.default = Transaction;
