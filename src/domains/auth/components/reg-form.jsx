import { Button } from "components/button";
import { TextField } from "components/text-field";
import * as React from "react";
import { useRegister } from "../auth.state";

export const RegisterForm = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const register = useRegister();

  return (
    <div className="max-w-md mx-auto m-6 shadow">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setStatus("loading");
          register({ name, email, password, avatar }).catch(() => setStatus("error"));
        }}
        className="p-6"
      >
        {status === "error" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Fail to register.
          </div>
        )}
        <div className="text-3xl mt-4 mb-8 font-extrabold text-center">
          Register
        </div>
        <div className="space-y-6">
          <TextField
            label="Name"
            value={name}
            onChangeValue={setName}
            name="username"
            id="username"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Email"
            value={email}
            onChangeValue={setEmail}
            name="email"
            id="email"
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Password"
            value={password}
            onChangeValue={setPassword}
            name="password"
            id="password"
            type="password"
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Avatar Link"
            value={avatar}
            onChangeValue={setAvatar}
            name="password"
            id="password"
            required
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={status === "loading"}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
