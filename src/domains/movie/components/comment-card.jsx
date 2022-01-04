import { Button } from "components/button"
import { useDeleteCommentMutation, useGetCurrentUser } from "domains/movie/hooks/use-comment"
import { useState } from "react"


export const CommentCard = (props) => 
{
  const { mutate } = useDeleteCommentMutation()
  const { data: uid, status: uidStatus, error: err } = useGetCurrentUser()
  const { status, setStatus } = useState("")

  // uid && console.log(`uid ${uid} ${uidStatus} | props ${props.data.userId}`)
  // uid && console.log(uid.userId)
  // uid && console.log(uid)

  function handleDeleteComment()
  {
    setStatus("loading")
    mutate({commentId: props._id}, 
    {onSuccess: () => 
    {
      setStatus("idle")
    },
    onError: () => setStatus("error")})
  }

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
      <div>
        {(uidStatus === "success") 
          ? (uid.userId === props.data.userId) && 
            <Button 
            variant="primary"
            onclick={() => handleDeleteComment()}
            >
              Delete
            </Button>
          :""
        }
      </div>
    </div>
  );
}
