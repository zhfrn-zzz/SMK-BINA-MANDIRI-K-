import { Header } from '@/components/ui/header-2';
import MinimalChatBox from '@/components/ui/minimal-chat-box';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <MinimalChatBox />
      <footer className="border-t py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SMK Bina Mandiri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
