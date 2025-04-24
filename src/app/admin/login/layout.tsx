import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login | Wafrah Gold',
  description: 'Secure login page for Wafrah Gold store administrators',
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
