import { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function PolicyLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [years, setYears] = useState(5);
  const [bankRate, setBankRate] = useState(7.5);
  const [policyRate, setPolicyRate] = useState(5);

  const calculateComparison = () => {
    // Bank loan calculation
    const monthlyBankRate = bankRate / 100 / 12;
    const numPayments = years * 12;
    const bankPayment = loanAmount * (monthlyBankRate * Math.pow(1 + monthlyBankRate, numPayments)) / 
                        (Math.pow(1 + monthlyBankRate, numPayments) - 1);
    const totalBankPaid = bankPayment * numPayments;
    const bankInterest = totalBankPaid - loanAmount;

    // Policy loan - simple interest, cash value continues growing
    const policyInterest = loanAmount * (policyRate / 100) * years;
    const totalPolicyPaid = loanAmount + policyInterest;
    
    // Cash value continues to grow at dividend rate (5.5%)
    const dividendEarned = loanAmount * (5.5 / 100) * years;
    const netPolicyCost = policyInterest - dividendEarned;

    return {
      bank: {
        totalPaid: Math.round(totalBankPaid),
        interest: Math.round(bankInterest),
        monthlyPayment: Math.round(bankPayment)
      },
      policy: {
        totalPaid: Math.round(totalPolicyPaid),
        interest: Math.round(policyInterest),
        dividendEarned: Math.round(dividendEarned),
        netCost: Math.round(netPolicyCost)
      },
      savings: Math.round(bankInterest - netPolicyCost)
    };
  };

  const results = calculateComparison();
  const chartData = [
    {
      name: 'Bank Loan',
      Principal: loanAmount,
      Interest: results.bank.interest,
      total: results.bank.totalPaid
    },
    {
      name: 'Policy Loan',
      Principal: loanAmount,
      'Net Interest': results.policy.netCost,
      total: loanAmount + results.policy.netCost
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">Policy Loan vs Bank Loan</h3>
      
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div>
          <Label>Loan Amount</Label>
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Loan Term (Years)</Label>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Bank Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={bankRate}
            onChange={(e) => setBankRate(Number(e.target.value))}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Policy Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={policyRate}
            onChange={(e) => setPolicyRate(Number(e.target.value))}
            className="mt-1"
          />
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold text-green-800">
          You Save ${results.savings.toLocaleString()} with a Policy Loan!
        </p>
        <p className="text-sm text-green-700 mt-1">
          Plus your cash value continues growing while you have the loan
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="Principal" stackId="a" fill="#3b82f6" />
          <Bar dataKey="Interest" stackId="a" fill="#ef4444" />
          <Bar dataKey="Net Interest" stackId="a" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
