import express, { Request, Response } from 'express';
import { body } from 'express-validator'

import { validateRequest } from '../middleware/validate-request';
import { Payment } from '../models/payment'

const router = express.Router();

router.post('/api/v1/payments', [
    body('cardNumber')
        .isLength({ min: 16, max: 16 })
        .withMessage('Card must contain 16 digits'),


    body('cvv')
        .isLength({ min: 3, max: 3 })
        .withMessage('CVV must contain 3 digits'),

],
    validateRequest,
    async (req: Request, res: Response) => {
        const { cardNumber, expDate, cvv, amount } = req.body;

        const payment = Payment.build({ cardNumber, expDate, cvv, amount });

        await payment.save();

        res.status(200).send(payment);
    })

export { router as paymentRouter }