"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [error, setError] = useState("");
  const [createdBy, setCeatedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setGeneratedUrl("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          longUrl: url,
          shUrl: shortUrl,
          createdBy : session.user.name
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setGeneratedUrl(data.shortUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm bg-gray-50 mx-auto p-10 m-5 rounded-2xl"
      >
        <h1 className="mb-7 text-2xl text-center font-bold text-shadow-2xs text-blue-700">
          Generate Short URL
        </h1>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-500">
            Enter Your URL:
          </label>
          <input
            type="text"
            className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-500">
            Enter Your Preferred Short URL Text:
          </label>
          <input
            type="text"
            className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5"
        >
          Generate
        </button>

        {generatedUrl && (
          <p className="mt-4 text-green-600">
            Short URL:{" "}
            <a href={generatedUrl} target="_blank" rel="noopener noreferrer">
              {generatedUrl}
            </a>
          </p>
        )}
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </form>
    </div>
  );
};

export default Page;
