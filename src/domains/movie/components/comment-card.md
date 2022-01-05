CommentCard Example (Example User 2 Logged in): 

```jsx
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from "domains/auth/auth.state";
const queryClient = new QueryClient();

const comments = [
  {
    userName: "Example User 1", 
    rating: "5", 
    content: "Awesome movie!",
    isDelete: false
  }, 
  {
    userName: "Example User 2", 
    rating: "4", 
    content: "Ok, good enough",
    isDelete: true
  }, 
  {
    userName: "Example User 3", 
    rating: "1", 
    content: "Bad Movie",
    isDelete: false
  }
];

<QueryClientProvider client={queryClient} >
  <AuthProvider>
    <div className="py-2">
      {comments.map(comment => <CommentCard data={comment} key={comment._id} isDelete={comment.isDelete} />)}
    </div>
  </AuthProvider>
</QueryClientProvider>
```