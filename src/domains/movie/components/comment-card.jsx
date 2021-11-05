export const CommentCard = (props) => 
{
  const data = props.data
  return (
    <div className="bg-white rounded-lg p-2 m-4 border-2">
      <div className="flex flex-row">
        <div className="flex-grow text-gray-900 p-2 text-sm font-medium">
          {data.userName}
        </div>
        <div className="text-gray-900 p-2 text-sm font-medium">
          {"Rating: " + data.rating}
        </div>
      </div>
      <div className="text-gray-900 p-2 text-sm">
        {data.content}
      </div>
    </div>
  );
}