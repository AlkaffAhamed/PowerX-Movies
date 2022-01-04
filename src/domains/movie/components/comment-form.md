CommentForm Example: 

```jsx
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from "domains/auth/auth.state";
const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <AuthProvider>
    <div className="py-2">
      <CommentForm mid="61d484570d9709002073f7d6" />
    </div>
  </AuthProvider>
</QueryClientProvider>
```