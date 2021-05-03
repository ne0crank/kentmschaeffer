import { Router } from 'express';

const router = Router();

// get all users at /users
router.get('/', async (req, res) => {
  const transactions = await req.context.models.Transaction.find();
  return res.send(transactions);
});

// get all users at /users
router.get('/:transId', async (req, res) => {
  const transaction = await req.context.models.Transaction.findById(
    req.params.transId,
  );
  return res.send(transaction);
});

router.post('/', async (req, res) => {
  const transaction = await req.context.models.Transaction.create({
    name: req.body.name,
    bank: req.context.bank.id,
    budget: req.context.budget.id,
    user: req.context.user.id,
    desc: req.body.desc,
    active: req.body.active,
    amount: req.body.amount,
    posted: req.body.posted,
  });
  return res.send(transaction);
});

router.delete('/:transId', async (req, res) => {
  const transaction = await req.context.models.Transaction.findById(
    req.params.transId,
  );

  if (transaction) {
    await transaction.remove();
  }

  return res.send(transaction);
});

module.exports = router;
