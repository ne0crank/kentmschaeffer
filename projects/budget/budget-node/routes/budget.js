import { Router } from 'express';

const router = Router();

// get all users at /users
router.get('/', async (req, res) => {
  const budgets = await req.context.models.Budget.find();
  return res.send(budgets);
});

// get all users at /users
router.get('/:budgetId', async (req, res) => {
  const budget = await req.context.models.Budget.findById(
    req.params.budgetId,
  );
  return res.send(budget);
});

router.post('/', async (req, res) => {
  const budget = await req.context.models.Budget.create({
    name: req.body.name,
    type: req.body.type,
    desc: req.body.desc,
    amount: req.body.amount,
    active: req.body.active,
  });
  return res.send(budget);
});

router.delete('/:budgetId', async (req, res) => {
  const account = await req.context.models.Budget.findById(
    req.params.budgetId,
  );

  if (budget) {
    await budget.remove();
  }

  return res.send(budget);
});

module.exports = router;
