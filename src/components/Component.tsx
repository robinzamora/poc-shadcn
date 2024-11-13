'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from './ui/chart';

const chartData = [
  { month: 'January', allocations: 150, granted: 100, rewarded: 80 },
  { month: 'February', allocations: 200, granted: 150, rewarded: 120 },
  { month: 'March', allocations: 180, granted: 130, rewarded: 110 },
  { month: 'April', allocations: 220, granted: 170, rewarded: 140 },
  { month: 'May', allocations: 160, granted: 140, rewarded: 100 },
  { month: 'June', allocations: 190, granted: 160, rewarded: 130 },
];

const chartConfig = {
  allocations: {
    label: 'Allocations',
    color: '#34D399', // Vert
  },
  granted: {
    label: 'Granted',
    color: '#3B82F6', // Bleu
  },
  rewarded: {
    label: 'Rewarded',
    color: '#FBBF24', // Jaune
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart width={400} height={300} data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="allocations" fill="var(--color-allocations)" radius={4} />
        <Bar dataKey="granted" fill="var(--color-granted)" radius={4} />
        <Bar dataKey="rewarded" fill="var(--color-rewarded)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
