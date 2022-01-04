CommentCard Example: 

```jsx
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from "domains/auth/auth.state";
const queryClient = new QueryClient();

const comment = {userName: "Example User", rating: "5", content: "Awesome movie!"};

<QueryClientProvider client={queryClient} >
  <AuthProvider>
    <div className="py-2">
      <CommentCard data={comment} key={comment._id} />
    </div>
  </AuthProvider>
</QueryClientProvider>
```