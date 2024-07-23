import CheckIcon from "./icons/CheckIcon";
import CloseIcon from "./icons/CloseIcon";
import InfoIconClear from "./icons/InfoIconClear";
import WarningIcon from "./icons/WarningIcon";

const NotificationMsg = ({ type, msg }) => {
  return (
  <div>
    {
      type === 'error' &&
        <div className={`relative w-[350px] bg-red-200 flex items-center gap-2 p-5 rounded-md`}>
          <div className="w-[40px] h-[40px] grid place-items-center bg-red-600 rounded-full flex-shrink-0">
            <CloseIcon width={30} height={30} className='fill-red-200' />
          </div>
          <div className="w-full">
            <p className="text-neutral-600 text-center">{msg}</p>
          </div>
          <div className="absolute bg-neutral-800/30 top-1 right-1 rounded-full p-[2px] cursor-pointer">
            <CloseIcon width={15} height={15} className='fill-neutral-600' />
          </div>
        </div>
    }
    {
      type === 'success' &&
        <div className={`relative w-[350px] bg-green-200 flex items-center gap-2 p-5 rounded-md`}>
          <div className="w-[40px] h-[40px] grid place-items-center bg-green-600 rounded-full flex-shrink-0">
            <CheckIcon width={30} height={30} className='fill-green-200' />
          </div>
          <div className="w-full">
            <p className="text-neutral-600 text-center">{msg}</p>
          </div>
          <div className="absolute bg-neutral-800/20 top-1 right-1 rounded-full p-[2px] cursor-pointer">
            <CloseIcon width={15} height={15} className='fill-neutral-600' />
          </div>
        </div>
    }
    {
      type === 'warning' &&
        <div className={`relative w-[350px] bg-orange-200 flex items-center gap-2 p-5 rounded-md`}>
          <div className="w-[40px] h-[40px] grid place-items-center bg-orange-600 rounded-full flex-shrink-0">
            <WarningIcon width={30} height={30} className='fill-orange-200' />
          </div>
          <div className="w-full">
            <p className="text-neutral-600 text-center">{msg}</p>
          </div>
          <div className="absolute bg-neutral-800/20 top-1 right-1 rounded-full p-[2px] cursor-pointer">
            <CloseIcon width={15} height={15} className='fill-neutral-600' />
          </div>
        </div>
    }
    {
      type === 'info' &&
        <div className={`relative w-[350px] bg-blue-200 flex items-center gap-2 p-5 rounded-md`}>
          <div className="w-[40px] h-[40px] grid place-items-center bg-blue-600 rounded-full flex-shrink-0">
            <InfoIconClear width={30} height={30} className='fill-blue-200' />
          </div>
          <div className="w-full">
            <p className="text-neutral-600 text-center">{msg}</p>
          </div>
          <div className="absolute bg-neutral-800/20 top-1 right-1 rounded-full p-[2px] cursor-pointer">
            <CloseIcon width={15} height={15} className='fill-neutral-600' />
          </div>
        </div>
    }
    </div>
  )
}

export default NotificationMsg;