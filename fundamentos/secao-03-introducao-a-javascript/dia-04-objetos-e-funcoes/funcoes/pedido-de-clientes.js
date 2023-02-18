let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let address = 'address';
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let customerName = order['name'];
  let customerPhone = order['phoneNumber'];
  let street = order.address.street;
  let number = order.address.number;
  let apartment = order.address.apartment;
  console.log(`Olá, ${deliveryPerson}! Entrega para: ${customerName}. Telefone: ${customerPhone}. Endereço: ${street}, nº ${number}, apt ${apartment} `);
}

customerInfo(order);

function orderModifier(order) {
    let customerName = order['name'];
    customerName = 'Luiz Silva'; 
    let totalPayment = order.payment.total;
    totalPayment = 55;

    console.log(`Olá, ${customerName}! O valor total de seu pedido de marguerita, pepperoni e coca-cola é R$${totalPayment},00.`);
}

orderModifier(order);