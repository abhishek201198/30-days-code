import './App.css';
import { useCreatePostMutation,useDeletePostMutation,useUpdatePostMutation, useGetApiByNameQuery } from './services/api'


const App = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useGetApiByNameQuery();


  return (
   <div>
     <h1>React RTK Query</h1>
      {isLoading && <h2>Loading....</h2>}
      {isFetching && <h2>Fetching....</h2>}
      {error && <h2>Error....</h2>}
      {isSuccess && (
        <div>
          {data?.map(comments => {
            return (
              <div key={comments.id}>
                <span>{comments.text}</span>
              </div>
            )
          })}
        </div>
      )} 
      <div>
        <AddPost/>
      </div>
   </div>
  )
}

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation()
  const [updatePost] = useUpdatePostMutation()

  const posts = {
    "id": 2,
    "title": "Posted",
    "author": "Me"
  }
  const postsUpdate = {
    "id": 2,
    "title": "updated",
    "author": "Me updated"
  }

  const Handler = async () => {
    await addPost(posts);
  }

  const HandlerDelete = async() => {
    await deletePost(posts.id);
  }
  const HandlerUpdate = async() => {
    await updatePost(posts);
  }

 return (
     <>
        <button onClick={Handler}>Add Posts</button>
        <button onClick={HandlerDelete}>Delete Posts</button>
        <button onClick={HandlerUpdate}>Update Posts</button>
     </>
    )
 
}
export default App;
