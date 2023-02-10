function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-3346d2e4c934df8ec16c7a60f075a98e-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: 50000,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "rose@unsinkableship.com",
        phone_number: "08102909304",
        name: "Rose DeWitt Bukater",
      },
      customizations: {
        title: "D.gadgets",
        description: "Payment for an awesome cruise",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });
  }