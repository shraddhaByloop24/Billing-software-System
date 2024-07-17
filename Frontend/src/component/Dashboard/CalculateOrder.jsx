import axios from 'axios';

const CalculateOrder = async () => {
  try {
    // Replace with your actual endpoint to fetch today's orders count
    const todayResponse = await axios.get('https://70e5-49-43-1-63.ngrok-free.app/api/orders/count?date=2024-07-16');
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
