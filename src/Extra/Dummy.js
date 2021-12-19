export const fetchFunc = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')

    const responseObj = await response.json();

    console.log(responseObj.data.children)

    return responseObj.data.children
}


export const endPoint = 'https://www.reddit.com/r/popular.json';


export const DUMMY_OBJArry = [
    {
        id: 1,
        title: 'Title',
        imgUrl: 'https://images.unsplash.com/photo-1639657742894-f77323974ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        votes: 500,
        subreddit: '/r/popular',
        name: 'Author',
        time: 'Time',
        comments: 'Comment Count'
    },
    {
        id: 2,
        title: 'Title',
        imgUrl: 'https://images.unsplash.com/photo-1639657742894-f77323974ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        votes: 500,
        subreddit: '/r/popular',
        name: 'Author',
        time: 'Time',
        comments: 'Comment Count'
    },
    {
        id: 3,
        title: 'Title',
        imgUrl: 'https://images.unsplash.com/photo-1639657742894-f77323974ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        votes: 500,
        subreddit: '/r/popular',
        name: 'Author',
        time: 'Time',
        comments: 'Comment Count'
    },
]


export const objArr = ['Name', 'Title', 'Votes', 'Time']


