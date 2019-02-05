const { alpaca } = require('.');

module.exports = async _ => {
    const account = await alpaca.getAccount();
    console.log('Current Account:', account);

    // await alpaca.cancelOrder('c042dec8-3d52-4f86-b8fc-6061a8458e2f');
    log(
      await alpaca.getOrders()
    )

    log(
      await alpaca.getBars(
        'day',
        'BPMX',
        {
          limit: 5,
          // start: Date,
          // end: Date,
          // after: Date,
          // until: Date.now()
        }
      )
    )

    // const order = await alpaca.createOrder({
    //     symbol: 'BPMX', // any valid ticker symbol
    //     qty: 1,
    //     side: 'buy',
    //     type: 'market',
    //     time_in_force: 'day',
    //     client_order_id: 'myorder' // optional
    // });

    // log(order)
};