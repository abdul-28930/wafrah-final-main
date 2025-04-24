import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Categories | Wafrah Gold',
  description: 'Browse all categories of our exquisite gold jewelry collection at Wafrah Gold.',
};

export default function AllCategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
