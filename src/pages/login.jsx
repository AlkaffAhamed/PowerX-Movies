import { LoginForm } from "domains/auth";
import { useAuth } from 'domains/auth/auth.state';
import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "components/button";

export const LoginPage = ({ endPath, ...props }) => {
  const { status } = useAuth()

  if (status === "authenticated")
  {
    return <Redirect to="/" />
  }
  else
  {
    return (
      <div className="flex flex-col items-center">
        <div className="w-1/3">
          <LoginForm />
          <div className="w-full">
            <Link to="/register" >
              <Button
                variant="outline"
                className="w-full"
                disabled={status === "loading"}
              >
                New User
              </Button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
};
