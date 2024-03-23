import Header from '@/components/common/Header';
import Community from '@/components/community/Community';
import Nav from '@/components/common/Nav';
import { getCommunityItems } from '@/apis/getCommunityItems';
import CommunityQuestionButton from '@/components/communityQuestion/CommunityQuestionButton';

export default async function CommunityPage() {
  const res = await getCommunityItems();

  return (
    <>
      <Header title="Q&A" />
      <section className="min-h-screen xs:px-[12px] md:px-[24px]">
        <CommunityQuestionButton />
        {res && <Community communites={res} />}
      </section>
      <Nav />
    </>
  );
}
