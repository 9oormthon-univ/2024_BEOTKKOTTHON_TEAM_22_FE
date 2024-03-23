import SearchResultsView from '@/components/searchPage/SearchResultsView';
// import { getSearch } from '@/apis/getSearch';

export default async function SearchResult({ params }: { params: { id: string } }) {
  const decodedText = decodeURIComponent(params.id);
  console.log(decodedText)
  // const res = await getSearch(params.id)

    return (
      <main className="relative min-h-screen">
        <SearchResultsView searchKeyword={decodedText}  />
      </main>

    );

}