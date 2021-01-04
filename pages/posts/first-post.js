import React, {useCallback} from 'react';
import Link from  'next/link'
import Head from 'next/head';

export default function x() {
  const clickMe = useCallback(()=>{
    console.log('you click me');
  },[])
  return (
    <>
      <div>First Post
        {/*<Head>*/}
        {/*  <title>我的第一篇文章</title>*/}
        {/*</Head>*/}
        <button onClick={clickMe}>click me</button>
        <Link href="/">
          <a>点击这里</a>
        </Link>
      </div>
    </>
  );
}
