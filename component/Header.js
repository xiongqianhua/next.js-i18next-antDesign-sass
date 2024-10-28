import React, { useState } from 'react';
import Head from 'next/head'
export const Header = ({ heading, title }) => {
  console.log(heading, title,'heading, title')
  return (
    <>
      <Head>
        <title>{heading}</title>
      </Head>
      <h2>
        next-language-detector example
        <hr />
      </h2>
      <h1>{title}</h1>
    </>
  )
}