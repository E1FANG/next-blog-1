import path from 'path';
import {promises as fsPromise} from 'fs';
import * as fs from 'fs';
import matter from 'gray-matter';

export const getPosts = async () => {
  //process.cwd() // current working dir 当前的工作目录
  const markdownDir = path.join(process.cwd(), 'markdown'); //拿到markdown的目录路径
  const fileNames = await fsPromise.readdir(markdownDir); //拿到所有的文件名
  let posts: { date: any; id: string; title: any; content: string }[];
  posts = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');  //同步读取文件，在循环里面异步读取文件可能会有问题
    // const {data,content} = matter(text)
    // const {title,date} = data
    const {data: {title, date}, content} = matter(text);
    return {
      id, title, date, content
    };
  });
  console.log(posts);
  return posts;
};
