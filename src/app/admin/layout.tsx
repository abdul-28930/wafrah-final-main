import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Wafrah Gold',
  description: 'Admin dashboard for managing products and store content',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
