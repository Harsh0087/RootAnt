import React, { useState } from 'react';

export default function BudgetManager() {
    const [approvedAmt, setApprovedAmount] = useState(null);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(null);
    const [pendingAmount, setPendingAmount] = useState(null);
    const [totalExpenses, setTotalExpenses] = useState(null);
    const [showExp, setShowExp] = useState([]);

    const addExpenses = () => {
        const newExpenses = {
            title,
            amount
        };
        const newTotalexp = totalExpenses + amount;
        setTotalExpenses(newTotalexp);
        setPendingAmount(approvedAmt - newTotalexp);
        setShowExp([...showExp, newExpenses]);
        setAmount(0)
        setTitle("")
    }
    return (
        <div className='container'>
            <h1 align="center">Budget Manager</h1>
            <label for="appAmt">Approved Amount</label>
            <input
                type='number'
                value={approvedAmt}
                placeholder='Amount Approved'
                onChange={(e) => setApprovedAmount(Number(e.target.value))}
            >
            </input><br />
            <div className='addExpensive'>
                <h1 align="center">Add Expenses</h1>
                <label for="title">Title</label>
                <input
                    type='text'
                    value={title}
                    placeholder='Title'
                    onChange={(e) => setTitle((e.target.value))}
                ></input><br />
                <label for="amount">Amount</label>
                <input
                    type='number'
                    value={amount}
                    placeholder='Amount'
                    onChange={(e) => setAmount(Number(e.target.value))}
                ></input>
                <button onClick={addExpenses}>+</button>
            </div>
            <div className='ShowExpense'>
                <ShowExp data={showExp} />
            </div>
            <div className='pendingAmount'>
                <label for="pAmount">Pending Amount</label>
                <input
                    type='number'
                    value={pendingAmount}
                    placeholder='Pending Amount'
                    readOnly
                ></input>
            </div>
            <div className='TotalExpensive'>
                <label for="totalExpenses">Total Expenses</label>
                <input
                    type='number'
                    value={totalExpenses}
                    placeholder='Total Expenses'
                    readOnly
                ></input>
            </div>
        </div>
    );
};
const ShowExp = ({ data }) => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>S/No</th>
                    <th>Title</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {data.map((expense, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{expense.title}</td>
                        <td>{expense.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};