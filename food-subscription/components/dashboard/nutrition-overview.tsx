import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface NutritionOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

const nutritionData = [
  { name: "Calories", value: 2000, max: 2500, unit: "kcal" },
  { name: "Protein", value: 75, max: 100, unit: "g" },
  { name: "Carbs", value: 250, max: 300, unit: "g" },
  { name: "Fat", value: 65, max: 80, unit: "g" },
]

export function NutritionOverview({ className, ...props }: NutritionOverviewProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Nutrition Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {nutritionData.map((item) => (
            <div key={item.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.value} / {item.max} {item.unit}
                </p>
              </div>
              <Progress value={(item.value / item.max) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

