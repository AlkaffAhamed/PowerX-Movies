import { RegisterForm } from "domains/auth";
import * as React from "react";
import { useAuth } from 'domains/auth/auth.state';
import { Link, Redirect } from "react-router-dom";
import { Button } from "components/button";

export const RegisterPage = ({ endPath, ...props }) => {
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
          <RegisterForm />
          <div className="w-full">
            <Link to="/login" >
              <Button
                variant="outline"
                className="w-full"
                disabled={status === "loading"}
              >
                Existing User
              </Button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
};
