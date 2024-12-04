import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, Share2, Copy, Facebook, Twitter, Mail } from 'lucide-react'
import { ReferralStats } from "@/components/dashboard/referral-stats"

export const metadata: Metadata = {
  title: "Referrals | Dashboard",
  description: "Invite friends and earn rewards with FoodSub",
}

export default function ReferralsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Referrals"
        text="Invite friends and earn rewards through our referral program."
      >
        <Button>
          <Gift className="mr-2 h-4 w-4" /> Claim Rewards
        </Button>
      </DashboardHeader>
      <div className="grid gap-6 md:grid-cols-2">
        <ReferralStats className="md:col-span-2" />
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Share Your Referral Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Input
                value="https://foodsub.com/ref/yourcode"
                readOnly
                className="flex-grow"
              />
              <Button variant="secondary">
                <Copy className="h-4 w-4 mr-2" /> Copy
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline">
                <Facebook className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button variant="outline">
                <Twitter className="mr-2 h-4 w-4" /> Tweet
              </Button>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

