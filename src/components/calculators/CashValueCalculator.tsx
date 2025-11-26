import { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CashValueCalculator() {
  const [premium, setPremium] = useState(10000);
  const [years, setYears] = useState(30);
  const [dividendRate, setDividendRate] = useState(5.5);

  const calculateGrowth = () => {
    const data = [];
    let cashValue = 0;
    let totalPaid = 0;
    
    for (let year = 0; year <= years; year++) {
      if (year > 0) {
        totalPaid += premium;
        // First year: ~40% cash value, increases over time
        const efficiency = Math.min(0.4 + (year * 0.02), 0.95);
        cashValue = (cashValue + premium * efficiency) * (1 + dividendRate / 100);
      }
      
      data.push({
        year,
        cashValue: Math.round(cashValue),
        totalPaid,
        growth: Math.round(cashValue - totalPaid)
      });
    }
    return data;
  };

  const data = calculateGrowth();
  const finalValue = data[data.length - 1];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">Cash Value Growth Calculator</h3>
      
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <Label>Annual Premium</Label>
          <Input
            type="number"
            value={premium}
            onChange={(e) => setPremium(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Years</Label>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Dividend Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={dividendRate}
            onChange={(e) => setDividendRate(Number(e.target.value))}
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Paid</p>
          <p className="text-2xl font-bold text-blue-600">${finalValue.totalPaid.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Cash Value</p>
          <p className="text-2xl font-bold text-green-600">${finalValue.cashValue.toLocaleString()}</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Net Growth</p>
          <p className="text-2xl font-bold text-amber-600">${finalValue.growth.toLocaleString()}</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Line type="monotone" dataKey="totalPaid" stroke="#3b82f6" name="Total Paid" strokeWidth={2} />
          <Line type="monotone" dataKey="cashValue" stroke="#10b981" name="Cash Value" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
