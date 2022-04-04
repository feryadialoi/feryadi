import {useRouter} from 'next/router'

const BlogPage = () => {
    const router = useRouter()
    const {title} = router.query

    return (
        <div>
            {title}
        </div>
    )
}

export default BlogPage