import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/image";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function DocsPage(): JSX.Element {
  const navigate = useNavigate();

  async function deleteUser(endpoint: string): Promise<void> {
    try {
      await fetch(endpoint, {
        method: "DELETE",
      });
    } catch (error) {
      // Logout failed. Assuming offline
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("userName");
    }
  }

  async function logoutUser(): Promise<void> {
    await deleteUser(`/api/auth/logout`);
    navigate("/"); // Redirect to the homepage after logging out
    console.log("User logout successful!");
  }

  return (
    <DefaultLayout>
      <section className="flex flex-row items-left justify-left gap-4 py-8 md:py-10">
        <div className="grow-0 inline-block max-w-lg text-center justify-center">
          <Image alt="Family Photo" src="/path/to/pianoPhoto.jpg" width={800} />
        </div>
        <div className="flex flex-col grow-0 max-w-lg text-center justify-start">
          <h1 className={title()}>
            This is the home page for Jane&apos;s Piano School Website.
          </h1>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </section>
    </DefaultLayout>
  );
}
