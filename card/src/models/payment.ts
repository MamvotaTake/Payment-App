import mongoose from "mongoose";

// An interface that describe the properties
// that are required to create a new payment

interface PaymentAttrs {
    cardNumber: number;
    expDate: Date;
    cvv: number;
    amount: number;
}

// An interface that describe the properties
// that a payment models

interface PaymentDoc extends mongoose.Document {
    cardNumber: number;
    expDate: Date;
    cvv: number;
    amount: number;
}

// An interface that describe the properties
// that the Payment Model has

interface PaymentModel extends mongoose.Model<PaymentDoc> {
    build(attrs: PaymentAttrs): PaymentDoc;
}


const paymentSchema = new mongoose.Schema({

    cardNumber: {
        type: Number,
        required: true,
    },

    expDate: {
        type: Number,
        required: true,
    },

    cvv: {
        type: Number,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret.cardNumber
            delete ret.cvv
            delete ret.expDate
            delete ret._id
            delete ret.__v
        }
    }
});

paymentSchema.statics.build = (attrs: PaymentAttrs) => {
    return new Payment(attrs)
};

const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', paymentSchema);

export { Payment }