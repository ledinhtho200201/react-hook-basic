import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blog.scss';

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogsDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const handleBackData = () => {
        history.push("/blog");
    }
    console.log('>>>check data detail: ', dataBlogsDetail)
    return (
        <>
            <div><span onClick={handleBackData}>&lt;-- Back</span></div>
            <div className="blog-detail">
                {dataBlogsDetail &&
                    <>
                        <div className="title">
                            Blog Id: {id} --- {isLoading === true ? 'Loading data ...' : dataBlogsDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogsDetail.body}
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailBlog;