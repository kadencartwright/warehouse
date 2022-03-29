import { FormEvent, FunctionComponent, useState } from "react";
import { useLoginMutation } from "../../generated/graphql";

export const Login: FunctionComponent = () => {
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const { mutate } = useLoginMutation({
    onSuccess: (t) => {
      console.log(t.login.token);
    },
  });
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate({
      loginInput: { email: currentEmail!, password: currentPassword! },
    });
    console.log(JSON.stringify({ currentEmail, currentPassword }));
  };
  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleFormSubmit}>
        <label>
          Email
          <input
            name="email"
            type="text"
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="passowrd"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Login;
