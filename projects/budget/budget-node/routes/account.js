import { Router } from 'express';

const router = Router();

// get all accounts at /accounts
router.get('/', async (req, res) => {
  const accounts = await req.context.models.Account.find();
  return res.send(accounts);
});

// get single acco0unt at /accounts with acctId
router.get('/:acctId', async (req, res) => {
  const account = await req.context.models.Account.findById(
    req.params.acctId,
  );
  return res.send(account);
});

router.post('/', async (req, res) => {
  const account = await req.context.models.Account.create({
    name: req.body.name,
    type: req.body.type,
    desc: req.body.desc,
    active: req.body.active,
    balance: req.body.balance,
  });
  return res.send(account);
});

router.delete('/:acctId', async (req, res) => {
  const account = await req.context.models.Account.findById(
    req.params.accountId,
  );

  if (account) {
    await account.remove();
  }

  return res.send(account);
});

module.exports = router;
