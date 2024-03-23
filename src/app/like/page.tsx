import Header from '@/components/common/Header';
import Like from '@/components/like/Like';
import Nav from '@/components/common/Nav';

const page = () => {
  return (
    <>
      <Header title="북마크" />
      <section className="min-h-screen xs:px-[12px]  md:px-[24px]">
        <Like />
      </section>
      <Nav />
    </>
  );
};

export default page;
