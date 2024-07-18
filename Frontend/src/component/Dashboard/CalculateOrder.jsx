import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CalculateOrder = async () => {
  const [orderCounts, setOrderCounts] = useState({
    todayOrdersCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const counts = await CalculateOrder();
      setOrderCounts(counts);
    };

    fetchData();
  }, []);

  try {
    // Replace with your actual endpoint to fetch today's orders count
    const todayResponse = await axios.get('https://36fe-2405-201-301d-f871-5429-715c-98d7-7ab7.ngrok-free.app/api/orders/count?date=2024-07-06');
    const todayOrdersCount = todayResponse.data.count;

    return {
      todayOrdersCount,
    };
  } catch (error) {
    console.error('Error fetching today\'s orders:', error);
    return {
      todayOrdersCount: 0,
    };
  }
};

export default CalculateOrder;
