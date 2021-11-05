export const MovieCard = (props) => 
{
  const data = props.data
  return (
    <div className="h-full flex flex-col rounded-lg text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <img src={data.posterUrl} alt={data.title}/>
      <h3 className="mt-6 text-gray-900 p-2 text-sm font-medium">{data.title}</h3>
    </div>
  );
}