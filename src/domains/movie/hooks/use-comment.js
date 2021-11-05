import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComments, createComment } from 'domains/movie/movieservice';
import { useAuth } from 'domains/auth/auth.state';

export const useGetComments = (movieId) => 
{
  const query = useQuery("comments", () => getComments(movieId), { staleTime: 1000, keepPreviousData: true });
  
  return {
    ...query
  }
}

export const useCreateComment = () => 
{
  const { accessToken } = useAuth();
  
  return function invokeCreate({rating, movieId, content}) {
    console.log("rating", rating)
    console.log("movieId", movieId)
    console.log("content", content)
    console.log("accessToken", accessToken)
    return createComment({rating, movieId, content}, {token: accessToken});
  }
}

export const useCreateCommentMutation = () => 
{
  const queryClient = useQueryClient()
  const create = useCreateComment()

  return useMutation(create, { onSuccess: () => queryClient.invalidateQueries('comments') })
}

// const useDeleteComment = () => {
//   const { accessToken } = useAuth();
  
//   return function invokeDelete(commentId) {
//     return deleteComment(commentId, {token: accessToken});
//   }
// }

// export const useCommentMutation = (type) => {
//   const queryClient = useQueryClient();
//   const createFn = useCreateComment();
//   const deleteFn = useDeleteComment();
//   let mutatingFunction;
  
//   switch(type) {
//     case 'create':
//       mutatingFunction = createFn;
//       break;
//     case 'delete':
//       mutatingFunction = deleteFn;
//       break;
//     default:
//       console.log('Unable to mutate comment, please supply valid type');
//   }
  
//   return useMutation(mutatingFunction, { onSuccess: () => queryClient.invalidateQueries('comments') });
// };