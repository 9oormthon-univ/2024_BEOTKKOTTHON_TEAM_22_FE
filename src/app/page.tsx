import Header from '@/components/common/Header';
import Main from '@/components/Main/Main';
import Nav from '@/components/common/Nav';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Main />
      <Nav />
    </main>
  );
}
