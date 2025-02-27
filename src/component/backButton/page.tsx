'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const BackButton = () => {

    const router = useRouter();

    const HanldeBackButton = () => {
        router.back();
    }
  return (
    <button
      onClick={HanldeBackButton}
      className="btn btn-primary "
    >
      Volver
    </button>
  );
}

export default BackButton