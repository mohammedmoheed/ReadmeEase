import Head from "next/head";
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      {
        !description || description.trim().length < 10 ? (
          <meta name="description" content="Create beautiful and professional readme.md files effortlessly with ReadmeEase. Our platform features a drag and drop interface and provides customizable templates using next.js and tailwindcss." />
        )
         : (
          <meta name="description" content={description} />
         )
      }
      <meta
        name="keywords"
        content="Readme-Ease, readme-ease, readme-editor, nextjs, tailwindcss"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default PageHeader;
