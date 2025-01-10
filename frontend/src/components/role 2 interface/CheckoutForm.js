import {PaymentElement} from '@stripe/react-stripe-js';
import {withRouter} from 'react-router-dom'
imp
const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default withRouter(CheckoutForm);