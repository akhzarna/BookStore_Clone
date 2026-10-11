import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // Stop the page from reloading.

    const dictObj = {
      email: event.currentTarget.elements.namedItem("email").value,
      password: event.currentTarget.elements.namedItem("password").value
    };
    console.log("Login email == ", dictObj["email"]);

    navigate('/BookCard');
  }

  return (
    <section className="ml-6 max-w-md rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="mb-1 block">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded bg-indigo-600 p-2 font-semibold text-white hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </section>
  );
}
