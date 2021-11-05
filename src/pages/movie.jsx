import * as React from 'react';
import { useParams } from "react-router-dom";
import { useMovie } from 'domains/movie/hooks/use-movie';
import { useGetComments } from 'domains/movie/hooks/use-comment';
// import { Comment } from 'domains/movie/components/comment';
// import { CommentForm } from 'domains/movie/components/comment-form';
import { useAuth } from 'domains/auth/auth.state';
import { CommentCard } from 'domains/movie/components/comment-card';
import { CommentForm } from "domains/movie/components/comment-form"

export const Movie = () => 
{
  const { mid } = useParams();
  const { data: movieData, status: movieStatus } = useMovie(mid);
  const { data: commentsData, status: commentsStatus } = useGetComments(mid);
  const { status, uid } = useAuth();

  return(
    <>
      {movieStatus !== 'success' && (<div className='text-center'><h1>Loading...</h1></div>)}
      { movieData && (
        <div className="grid grid-cols-2 p-8">
          <div className="h-full p-4">
            <h1 className="text-center py-4 text-2xl">
              {movieData.title}
            </h1>
            <img className="py-4" src={movieData.posterUrl} alt={movieData.title} />
            <p className="py-4">
              {movieData.overview}
            </p>
          </div>
          <div className="p-4">
            <h1 className="text-center py-4 text-2xl">
              Comments
            </h1>
            {commentsStatus !== 'success' && (<div className='text-center'><h1>Loading comments...</h1></div>)}
            {//commentsData && commentsData.length === 0 ? <div className='text-center'>No Comments</div> : commentsData.map((comment) => 
            commentsData && commentsData.map(comment =>
              <CommentCard data={comment} key={comment._id} />
            )}



            <div className="py-2">
              <CommentForm mid={mid} />
            </div>
          </div>
          
        </div>
      )}
    </>)

  // return(
  // <>
  //   {movieStatus !== 'success' && (<div className='text-center'><h1>Loading...</h1></div>)}
  //   { movieData && (
  //     <div className="w-full flex justify-center">
  //       <div className="backdrop-filter backdrop-blur-sm h-screen lg:w-3/4 w-4/5 flex p-10 gap-10">
  //           <Card className="w-1/2 h-full">
  //             <img src={movieData.posterUrl} alt="movie poster" />
  //           </Card>
  //           <Card className="w-1/2 p-10 bg-white h-full overflow-y-scroll">
  //             <CardHeading className="relative">
  //               {movieData.adult
  //                 ? <Badge color="red" className="absolute right-4 bottom-7">Adult</Badge>
  //                 : <Badge color="green" className="absolute right-4 bottom-7">Child-Friendly</Badge>
  //               }
  //               <h1>{movieData.title}</h1>
  //               <h2>{extractYear(movieData.releaseDate)}</h2>
  //             </CardHeading>
  //             <CardBody>
  //               <p>{movieData.overview}</p>
  //               <br/>
  //               <p>Released: {movieData.releaseDate}</p>
  //             </CardBody>
  //             <CardBody>
  //               <h2 className="mb-1">Reviews</h2>
  //               {commentsStatus !== 'success' && (<div className='text-center'><h1>Loading comments...</h1></div>)}
  //               { commentsData &&  commentsData.map(comment =>
  //                 <Comment key={comment._id} comment={comment} editable={comment.userId === uid} />
  //               )}
  //               {(status === 'authenticated') && <CommentForm movieId={movieId} />}
  //             </CardBody>
  //           </Card>
  //       </div>
  //     </div>
  //   ) }
  // </>)



}