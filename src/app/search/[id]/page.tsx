import SearchResultsView from '@/components/searchPage/SearchResultsView';



export default function SearchResult({ params }: { params: { id: string } }) {
  const decodedText = decodeURIComponent(params.id);
  return (
    <main className="relative min-h-screen">
      <SearchResultsView searchKeyword={decodedText}/>
    </main>

  );
}