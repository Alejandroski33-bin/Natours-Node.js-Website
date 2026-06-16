/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alerts';
export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51Tik3WCLUyoMBqOldK3aIyGkBPv1gjoXdrOkpFbAKmMF8BqtakxycgF8crFusiOA0g4QhEX2BFuIiyx6AJZQ3BZP009JXPEULn',
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create checkou form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
