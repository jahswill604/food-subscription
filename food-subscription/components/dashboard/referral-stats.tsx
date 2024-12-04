import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Gift } from 'lucide-react'

export function ReferralStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Referral Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Total Referrals</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Earnings</p>
              <p className="text-2xl font-bold">$120</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Rewards Claimed</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

