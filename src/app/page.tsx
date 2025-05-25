import TopicCreateForm from "@/components/topics/TopicCreateForm"

const page = async () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold m-2">HOME PAGE</h1>
      </div>
      <div>
        <TopicCreateForm/>
      </div>
    </div>
  )
}
export default page
