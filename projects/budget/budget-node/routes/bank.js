import { Router } from 'express';

const router = Router();

// get all users at /users
router.get('/', async (req, res) => {
  const banks = await req.context.models.Bank.find();
  return res.send(banks);
});

// get all users at /users
router.get('/:bankId', async (req, res) => {
  const bank = await req.context.models.Bank.findById(
    req.params.bankId,
  );
  return res.send(bank);
});

router.post('/', async (req, res) => {
  const bank = await req.context.models.Bank.create({
    name: req.body.name,
    type: req.body.type,
    desc: req.body.desc,
    active: req.body.active,
  });
  return res.send(bank);
});

router.delete('/:bankId', async (req, res) => {
  const bank = await req.context.models.Bank.findById(
    req.params.bankId,
  );

  if (bank) {
    await bank.remove();
  }

  return res.send(bank);
});

module.exports = router;
