import {NextPage} from 'next';
import {usePost} from '../../hooks/usePosts';


const PostsIndex: NextPage = () => {
  const {isLoading , isEmpty, posts} = usePost()
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading ? <div>加载中</div> :
        isEmpty ? <div>文章列表为空</div> :
          posts.map(p => <div key={p.id}>
            {p.id}
          </div>)
      }
    </div>
    // 客户端渲染： 数据一开始不在页面上，是在AJAX请求之后，才在页面上的。
  );
};
;


export default PostsIndex;
