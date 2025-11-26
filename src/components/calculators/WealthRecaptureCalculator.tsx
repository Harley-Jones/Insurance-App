import { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function WealthRecaptureCalculator() {
  const [carPrice, setCarPrice] = useState(35000);
  const [homePrice, setHomePrice] = useState(300000);
  const [businessLoan, setBusinessLoan] = useState(50000);
  const [creditCards, setCreditCards] = useState(15000);
  const [avgRate, setAvgRate] = useState(6.5);

  const calculateLifetimeInterest = () => {
    // Average person finances multiple cars over lifetime
    const carsLifetime = 8;
    const carInterest = (carPrice * (avgRate / 100) * 5) * carsLifetime; // 5 year loans
    
    // Home mortgage - 30 years
    const homeInterest = homePrice * (avgRate / 100) * 30 * 0.8; // Simplified
    
    // Business/personal loans
    const businessInterest = businessLoan * (avgRate / 100) * 7;
    
    // Credit card interest over lifetime
    const ccInterest = creditCards * (0.18) * 20; // 18% avg CC rate
    
    const totalInterest = carInterest + homeInterest + businessInterest + ccInterest;
    
    // With IBC - recapture 70% of this interest
    const recaptured = totalInterest * 0.7;
    
    return {
      cars: Math.round(carInterest),
      home: Math.round(homeInterest),
      business: Math.round(businessInterest),
      creditCards: Math.round(ccInterest),
      total: Math.round(totalInterest),
      recaptured: Math.round(recaptured),
      netCost: Math.round(totalInterest - recaptured)
    };
  };

  const results = calculateLifetimeInterest();
  
  const chartData = [
    { name: 'Cars', value: results.cars, color: '#3b82f6' },
    { name: 'Home', value: results.home, color: '#10b981' },
    { name: 'Business', value: results.business, color: '#f59e0b' },
    { name: 'Credit Cards', value: results.creditCards, color: '#ef4444' }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">Lifetime Wealth Recapture Calculator</h3>
      
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        <div>
          <Label>Car Price</Label>
          <Input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Home Price</Label>
          <Input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Business Loan</Label>
          <Input
            type="number"
            value={businessLoan}
            onChange={(e) => setBusinessLoan(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Credit Card Debt</Label>
          <Input
            type="number"
            value={creditCards}
            onChange={(e) => setCreditCards(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Avg Interest Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={avgRate}
            onChange={(e) => setAvgRate(Number(e.target.value))}
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
          <p className="text-sm text-gray-600">Lifetime Interest Paid to Banks</p>
          <p className="text-3xl font-bold text-red-600">${results.total.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
          <p className="text-sm text-gray-600">Recaptured with IBC</p>
          <p className="text-3xl font-bold text-green-600">${results.recaptured.toLocaleString()}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
          <p className="text-sm text-gray-600">Net Interest Cost</p>
          <p className="text-3xl font-bold text-blue-600">${results.netCost.toLocaleString()}</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Bar dataKey="value" name="Interest Paid">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 p-4 bg-amber-50 rounded-lg">
        <p className="font-semibold text-amber-900">
          By becoming your own banker, you can recapture up to 70% of the interest you pay over your lifetime!
        </p>
      </div>
    </Card>
  );
}
