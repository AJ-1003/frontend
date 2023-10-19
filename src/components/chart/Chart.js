import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useAppContext } from '../../context/appContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {

  const { incomes, expenses } = useAppContext();

  const transactions = incomes.concat(expenses);

  var ts = [], output = [], l = transactions.length, i;
  for (i = 0; i < l; i++) {
    if (ts[transactions[i].date]) continue;
    ts[transactions[i].date] = true;
    output.push(transactions[i].date);
  }

  const data = {
    labels:
      output.map((date) => {
        console.log(date)
        return dateFormat(date);
      }),
    datasets: [
      {
        label: 'Income',
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          })
        ],
        backgroundColor: 'green',
        tension: .2
      },
      {
        label: 'Expenses',
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          })
        ],
        backgroundColor: 'red',
        tension: .2
      }
    ]
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #fff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
