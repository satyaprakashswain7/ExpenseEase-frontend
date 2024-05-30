import { SignedIn,SignedOut,SignInButton,SignUpButton, useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-records-context";
import { useMemo } from "react";
import "./financial-record.css"

export const Dashboard = () => {
    const { user } = useUser();
    const { records } = useFinancialRecords()

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount+=record.amount
        })
        return totalAmount
    },[records])
    return (
        <div>
        <SignedIn>
        <div className="dashboard-container">
            <h1>Welcome {user?.firstName}! Here are your Finances</h1> 
            <FinancialRecordForm/>
            <div style={{display: "flex",justifyContent: "center",fontWeight: "bold",fontSize: "20px",color: 'GrayText'}}>Total Monthly:₹{totalMonthly}</div>
            <FinancialRecordList/>
        </div>
        </SignedIn>

        <SignedOut >
            <div className="signed-out-page">
                <h1>Welcome to ExpenseEase - Finance Tracker!</h1>
                <div className="signed-out-button">
                    <SignUpButton mode="modal"/>
                    <SignInButton mode="modal"/>
                </div>
            </div>
        </SignedOut>
        </div>
    )
}