'use server'

export const createPost = async (formData:FormData) => {
    const title = formData.get('title')
    const content = formData.get('content')

    console.log(title,content);

}