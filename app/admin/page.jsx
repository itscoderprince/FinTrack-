import WelcomeBanner from '@/components/admin/WelcomeBanner';
import { AccountBalance, StatCard } from '@/components/admin/OverviewCards';
import WalletWidget from '@/components/admin/WalletWidget';
import EarningsChart from '@/components/admin/EarningsChart';
import SavingsPlan from '@/components/admin/SavingsPlan';
import RecentTransactions from '@/components/admin/RecentTransactions';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="text-white">
            <WelcomeBanner />

            {/*
              Layout (3 columns):
              ┌──────────────┬────────────────────────────────────────────┐
              │ Account Bal  │  Total Expenses   │  Total Savings         │
              │              ├────────────────────────────────────────────┤
              │              │  Overview (Chart)                          │
              │──────────────┤                                            │
              │ My Wallet    ├────────────────────────────────────────────┤
              │──────────────│  Recent Transactions                       │
              │ My Savings   │                                            │
              └──────────────┴────────────────────────────────────────────┘
            */}
            <div className="grid grid-cols-12 gap-4">
                {/* Left Column */}
                <div className="col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col gap-4">
                    {/* Account Balance */}
                    <AccountBalance />

                    {/* My Wallet */}
                    <WalletWidget />

                    {/* My Savings Plan */}
                    <SavingsPlan />
                </div>

                {/* Right Column */}
                <div className="col-span-12 lg:col-span-8 xl:col-span-8 flex flex-col gap-4">
                    {/* Top Stat Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <StatCard
                            title="Total Expenses"
                            amount="$9,845.20"
                            percentage="-2.1"
                            isPositive={false}
                            icon={TrendingDown}
                        />
                        <StatCard
                            title="Total Savings"
                            amount="$18,420.75"
                            percentage="+4.5"
                            isPositive={true}
                            icon={TrendingUp}
                        />
                    </div>

                    {/* Earnings Overview Chart */}
                    <div className="flex-1 min-h-[280px]">
                        <EarningsChart />
                    </div>

                    {/* Recent Transactions */}
                    <RecentTransactions />
                </div>
            </div>
        </div>
    );
}
