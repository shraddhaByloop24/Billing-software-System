import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chart.css';

const Backbtn = () => {
  const [todayOrders, setTodayOrders] = useState(0);
  // const [weekOrders, setWeekOrders] = useState(0);
  // const [monthOrders, setMonthOrders] = useState(0);
  const [yearOrders, setYearOrders] = useState(0);

  useEffect(() => {
    const fetchOrderCounts = async () => {
      try {
        const todayResponse = await axios.get('https://36fe-2405-201-301d-f871-5429-715c-98d7-7ab7.ngrok-free.app/api/orders/count?date=2024-07-16');
        setTodayOrders(todayResponse.data.count);

        // const weekResponse = await axios.get('https://36fe-2405-201-301d-f871-5429-715c-98d7-7ab7.ngrok-free.app/api/orders/count?date=2024-07-10');
        // setWeekOrders(weekResponse.data.count);

        // const monthResponse = await axios.get('https://36fe-2405-201-301d-f871-5429-715c-98d7-7ab7.ngrok-free.app/api/orders/count?date=2024-07-01');
        // setMonthOrders(monthResponse.data.count);

        // const yearResponse = await axios.get('https://36fe-2405-201-301d-f871-5429-715c-98d7-7ab7.ngrok-free.app/api/orders/count?date=2024-01-01');
        // setYearOrders(yearResponse.data.count);
      } catch (error) {
        console.error('Error fetching order counts:', error);
      }
    };

    fetchOrderCounts();
  }, []);

  return (
    <>
      <div className="row stats">
        <div className="col-lg-3">
          <div className="statContainer blue shadow">
            <div className="d-flex">
              <div className="p-2 flex-fill text-center">
                TOTAL <br />
                <h5 className="font-weight-bold">{todayOrders}</h5>
              </div>
              <div className="p-2 flex-fill text-center status">
                COMPLETED <br />
                <h5 className="font-weight-bold">20</h5>
              </div>
            </div>
            <div className="title text-center">TODAY INCREMENT</div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="statContainer fountainBlue shadow">
            <div className="d-flex">
              <div className="p-2 flex-fill text-center">
                TOTAL <br />
                {/* <h5 className="font-weight-bold">{weekOrders}</h5> */}
              </div>
              <div className="p-2 flex-fill text-center status">
                COMPLETED <br />
                <h5 className="font-weight-bold">20</h5>
              </div>
            </div>
            <div className="title text-center">WEEK INCREMENT</div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="statContainer lightBlue shadow">
            <div className="d-flex">
              <div className="p-2 flex-fill text-center">
                TOTAL <br />
                {/* <h5 className="font-weight-bold">{monthOrders}</h5> */}
              </div>
              <div className="p-2 flex-fill text-center status">
                COMPLETED <br />
                <h5 className="font-weight-bold">20</h5>
              </div>
            </div>
            <div className="title text-center">MONTH INCREMENT</div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="statContainer pink shadow">
            <div className="d-flex">
              <div className="p-2 flex-fill text-center">
                TOTAL <br />
                {/* <h5 className="font-weight-bold">{yearOrders}</h5> */}
              </div>
              <div className="p-2 flex-fill text-center status">
                COMPLETED <br />
                <h5 className="font-weight-bold">20</h5>
              </div>
            </div>
            <div className="title text-center">YEAR INCREMENT</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backbtn;
