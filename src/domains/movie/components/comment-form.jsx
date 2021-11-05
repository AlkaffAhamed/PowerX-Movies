import * as React from 'react';
import { Button } from "components/button";
import { TextareaField } from 'components/textarea-field';
import { SelectField } from 'components/select-field';
import { useCreateCommentMutation } from "domains/movie/hooks/use-comment"
import { number } from 'yup';

export const CommentForm = ({mid}) => 
{
  const [rating, setRating] = React.useState(1);
  const [content, setContent] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const { mutate } = useCreateCommentMutation()

  function handleAddComment()
  {
    setStatus("loading")
    mutate({rating: Number(rating), movieId: mid, content: content}, 
    {onSuccess: () => 
    {
      setStatus("idle")
      setRating(1)
      setContent("")
    },
    onError: () => setStatus("error")})
  }


  // const data = props.data

  return(
  <form 
    className="flex flex-col border-2 p-4 rounded"
    onSubmit={(e)=>
    {
      e.preventDefault()
      handleAddComment()
    }} >
    <div className="flex flex-row items-center">
      <h2 className="text-md font-medium flex-grow ">New Comment</h2>
      <SelectField 
        label="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        name="rating"
        id="rating"
        required
        disabled={status === "loading"} 
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </SelectField>
    </div>
    <TextareaField
      label="Comment"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      name="content"
      id="content"
      required
      disabled={status === "loading"}
    />
    <Button
      type="submit"
      variant="primary"
      className="w-full py-2 my-4"
      disabled={status === "loading"}
    >
      Add Comment
    </Button>
  </form>)
  // return (
  //   <div className="bg-white rounded-lg p-4 m-4">
  //     <div className="flex flex-row">
  //       <div className="flex-grow text-gray-900 p-2 text-sm font-medium">
  //         {data.userName}
  //       </div>
  //       <div className="text-gray-900 p-2 text-sm font-medium">
  //         {data.rating}
  //       </div>
  //     </div>
  //     <div className="text-gray-900 p-2 text-sm">
  //       {data.content}
  //     </div>
  //   </div>
  // );
}