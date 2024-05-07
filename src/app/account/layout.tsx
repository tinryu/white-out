import TopNav from "../components/TopNav";

const menu = [
  {title: 'Overview', link: '/account'},
  {title: 'Settings', link: '/account/settings'},
  {title: 'Security', link: '/account/security'},
  {title: 'Billing', link: '/account/billing'},
  {title: 'Statements', link: '/account/statements'},
  {title: 'Referrals', link: '/account/referrals'},
  {title: 'Api Keys', link: '/account/apikeys'},
  {title: 'Logs', link: '/account/logs'}
];

export default function DashboardLayout({children}: {children: React.ReactNode;}) {
  return (
    <>
      <TopNav menu={menu}/>
      <main className="w-full min-h-screen p-6">{children}</main>
    </>
    );
}
