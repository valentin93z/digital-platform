import BarrierIcon from "./icons/BarrierIcon";

const DevelopPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-69px)] md:min-h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[320px] gap-5 bg-white dark:bg-neutral-700 rounded-md p-10 -mt-32">
        <div>
          <BarrierIcon className='fill-neutral-700 dark:fill-white' width='100px' height='100px' />
        </div>
        <p className="text-xl text-center">Раздел в разработке</p>
      </div>
    </div>
  )
}

export default DevelopPage;