"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = (id: { id: { params: number } }) => {
  const params = useParams();
  return (
    <div>
      <h1>{params.id} Todo</h1>
    </div>
  );
};

export default page;
