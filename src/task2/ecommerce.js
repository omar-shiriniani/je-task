////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////

// I changed the import from '../api' to '../api/index.js', because first version of import filed and makes error
import { allIds, fetchOrderById } from '../api/index.js';

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

import moment from 'moment';

const fetchAllOrders = () => {
  const ids = allIds;

  for (let index = 0; index < ids.length; index++) {
    fetchOrderById(ids[index])
      .then((order) => {
        // console.log(order);
        return order;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
};

const bucketOrdersByUsers = () => {
  let ordersByUsers = {};
  const ids = allIds;

  for (let index = 0; index < ids.length; index++) {
    fetchOrderById(ids[index])
      .then((group) => {
        if (typeof ordersByUsers[group.userId] === 'undefined') {
          ordersByUsers[group.userId] = [];
        }
        ordersByUsers[group.userId].push({
          id: group.id,
          timestamp: group.timestamp,
          title: group.title,
        });
        console.log(ordersByUsers);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //   2. TODO: using the function from section 1 you should now bucket the orders by user.
  // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
  return ordersByUsers;
};

const getLast2WeeksOrders = () => {
  const ids = allIds;
  let startDate = moment().subtract(14, 'days').format('YYYY-MM-DD');
  let endDate = moment().format('YYYY-MM-DD');
  for (let index = 0; index < ids.length; index++) {
    fetchOrderById(ids[index])
      .then((order) => {
        let date = moment(order.timestamp).format('YYYY-MM-DD');
        if (date >= startDate && date <= endDate) {
          console.log(order);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
};

const bucketOrdersByDate = () => {
  let ordersByDate = {};
  const ids = allIds;

  for (let index = 0; index < ids.length; index++) {
    fetchOrderById(ids[index])
      .then((group) => {
        let date = moment(group.timestamp).format('YYYY-MM-DD');
        if (typeof ordersByDate[date] === 'undefined') {
          ordersByDate[date] = [];
        }
        ordersByDate[date].push({
          id: group.id,
          timestamp: date,
          title: group.title,
        });
        console.log(ordersByDate);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //   4. TODO: using the function from section 3 bucket the orders by date.
  // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
  return ordersByDate;
};

fetchAllOrders();
// .then(console.log);

bucketOrdersByUsers();
// .then(console.log);

getLast2WeeksOrders();
// .then(console.log);

bucketOrdersByDate();
// .then(console.log);

////////////////////////////////////////
