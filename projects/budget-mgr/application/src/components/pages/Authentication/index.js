import Axios from 'axios'
import router from '@/router'

const BudgetManagerAPI = `http://${window.location.hostname}:3001`

export default {
  user: { authenticated: false },

  authentication (context, credentials, redirect) {
    Axios.post(`${BudgetManagerAPI}/api/v1/auth`, credentials)
      .then(({ data: {token} }) => {
        context.$cookie.set('token', token, '1D')
        context.validLogin = true
        this.user.authenticated = true

        if (redirect) router.push(redirect)
      }).catch(({ response: {data} }) => {
        context.snackbar = true
        context.message = data.message
      })
  },

  signup (context)
}
