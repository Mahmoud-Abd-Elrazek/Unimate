import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Resetpass() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  // interface ResetPassProps {
  // email:string,
  // token:string,
  // password:string,
  // }
  const handleReset = async () => {
    // e.preventDefault();
    if (password !== confirm) return setMessage("Passwords do not match");

    const res = await fetch("https://yourapi.com/api/account/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token, newPassword: password }),
    });

    if (res.ok) {
      setMessage("Password reset successfully");
    } else {
      setMessage("Error resetting password");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="border p-2 w-full mt-2"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded">
          Reset Password
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
