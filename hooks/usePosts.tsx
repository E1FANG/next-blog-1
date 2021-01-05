import {useEffect, useState} from 'react';
import axios from 'axios';

type Post = {
  id: string,
  date: string,
  title: string
}


export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/v1/posts').then(res => {
      setPosts(res.data);
      setIsLoading(false);
      if (res.data.length === 0) {
        setIsEmpty(true);
      }
    }, () => {
      setIsLoading(false);
    });
  }, []); //空数组是为了只在第一次渲染的时候触发
  return {posts,setPosts,isLoading,setIsLoading,isEmpty,setIsEmpty}
};
